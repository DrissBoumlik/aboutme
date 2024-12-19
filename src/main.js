import { initParticlesJS, initDarkMode, getMyAge } from "@/scripts/functions";

initDarkMode('.toggle-dark-mode')
initParticlesJS()
document.getElementById('myage').innerHTML = getMyAge();