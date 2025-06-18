const text = document.querySelector('#signature');
const length = text.getTotalLength();

gsap.set(text, {
  strokeDasharray: length,
  strokeDashoffset: length
});

gsap.to(text, {
  strokeDashoffset: 0,
  duration: 3,
  ease: "power2.out",
  onComplete: showProfile
});

function showProfile() {
  gsap.to("#loader", {
    opacity: 0,
    duration: 1,
    onComplete: () => {
      document.getElementById("loader").style.display = "none";
      gsap.to("#profile", {
        opacity: 1,
        y: -20,
        duration: 1.5,
        ease: "power2.out"
      });
      document.getElementById("profile").classList.remove("hidden");
    }
  });
}
