// GSAP hover animation (assuming you want it to move on hover)
const trailer = document.getElementById("trailer");

window.addEventListener("mousemove", (e) => {
    const x = e.clientX - trailer.offsetWidth / 2
    const y = e.clientY - trailer.offsetHeight / 2

    // GSAP animation for the trailer
    gsap.to("#trailer", {
        x: x,
        y: y,
        duration: 0.5,
        ease: "power2.out",
    });
})
