particlesJS('particles-js', {
    particles: {
        number: { value: 80, density: { enable: true, value_area: 800 } },
        color: { value: ['#4ADE80', '#60A5FA', '#F472B6', '#FB923C'] },
        shape: { type: 'circle' },
        opacity: { value: 0.8, random: false },
        size: { value: 3, random: true },
        line_linked: {
            enable: true,
            distance: 150,
            color: '#ffffff',
            opacity: 0.2,
            width: 1
        },
        move: {
            enable: true,
            speed: 2,
            direction: 'none',
            random: false,
            straight: false,
            out_mode: 'bounce'
        }
    },
    interactivity: {
        detect_on: 'canvas',
        events: {
            onhover: { enable: true, mode: 'grab' },
            onclick: { enable: true, mode: 'push' },
            resize: true
        },
        modes: {
            grab: { distance: 140, line_linked: { opacity: 0.4 } },
            push: { particles_nb: 4 }
        }
    },
    retina_detect: true
});

const progressFill = document.querySelector(".progress-fill");
const steps = document.querySelectorAll(".step");
const rocket = document.getElementById("rocket");

let currentStep = 0;
const stepWidths = ["0%", "50%", "100%"];
const rocketPositions = ["0%", "50%", "100%"];

function updateProgress() {
    progressFill.style.width = stepWidths[currentStep];
    rocket.style.left = rocketPositions[currentStep];
    steps.forEach((step, index) => {
        step.classList.toggle("active", index <= currentStep);
    });

    currentStep++;
    if (currentStep >= stepWidths.length) currentStep = 0;
}

setInterval(updateProgress, 2000);