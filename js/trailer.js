const trailer = document.getElementById("trailer")

window.onmousemove = e => {
    const x = e.clientX - trailer.offsetWidth / 2
    const y = e.clientY - trailer.offsetHeight / 2

    gsap.to(trailer, {
        x: x,
        y: y,
        duration: 0.8,
        ease: "power2.out"
    })
}
