import * as THREE from 'three'
// import { OrbitControls } from 'three/addons/controls/OrbitControls.js'

// Currently I am using width, height values from body element
// Since it won't cause overflowing
const dimensions = document.body.getBoundingClientRect()
const device = {
	pixelRatio: window.devicePixelRatio,
	width: dimensions.width,
	height: dimensions.height
}

export default class Scene {
	// This doesn't respect canvas own size and sets according to device width, height
	constructor(canvas) {
		this.scene = new THREE.Scene()

		this.container = canvas

		// Set up webgl renderer
		this.renderer = new THREE.WebGLRenderer({
			canvas: this.container,
			alpha: true,
			antialias: true,
		})
		this.renderer.outputColorSpace = THREE.SRGBColorSpace

		// Set up camera
		this.camera = new THREE.PerspectiveCamera(
			70, /* Field Of View */
			device.width / device.height, /* Aspect Ratio */
			0.001, 1000 /* Clipping */
		)
		this.camera.position.set(0, 0, 2)

		// Setup clock
		this.clock = new THREE.Clock()

		this.addObjects()
		// this.addControls()
		this.resize()
		this.setupResize()
	}

	addControls() {
		// Orbitcontrols
		this.controls = new OrbitControls(this.camera, document.body)
		this.controls.enableDamping = true
		this.controls.dampingFactor = 0.25
		this.controls.rotateSpeed = 0.5;
		this.controls.update()
	}

	setupResize() {
		window.addEventListener("resize", this.resize.bind(this))
	}

	resize() {
		const dimensions = document.body.getBoundingClientRect()

		this.camera.aspect = dimensions.width / dimensions.height
		this.camera.updateProjectionMatrix()

		if (this.controls) this.controls.update()

		this.renderer.setSize(dimensions.width, dimensions.height)
		this.renderer.setPixelRatio(Math.min(device.pixelRatio, 2))
	}

	addObjects() {
		// Create a star field
		this.starsGeometry = new THREE.BufferGeometry();
		this.starsMaterial = new THREE.PointsMaterial({ color: 0xFFFFFF, size: 0.1 });

		const starsVertices = [];
		for (let i = 0; i < 5000; i++) {
			const x = (Math.random() - 0.5) * 2000;
			const y = (Math.random() - 0.5) * 2000;
			const z = (Math.random() - 0.5) * 2000;
			starsVertices.push(x, y, z);
		}

		this.starsGeometry.setAttribute('position', new THREE.Float32BufferAttribute(starsVertices, 3));

		this.stars = new THREE.Points(this.starsGeometry, this.starsMaterial);

		this.scene.add(this.stars)
	}

	stop() {
		this.isPlaying = false
	}

	play() {
		if(!this.isPlaying) {
			this.isPlaying = true
			this.render()
		}
	}

	render() {
		if (!this.isPlaying) return

		// Calculate deltaTime
		const deltaTime = this.clock.getDelta()

		this.stars.rotation.x += 0.01 * deltaTime;
		this.stars.rotation.y += 0.01 * deltaTime;

		requestAnimationFrame(this.render.bind(this))

		this.renderer.render(this.scene, this.camera)
	}
}
