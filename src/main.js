import { initParticlesJS, initDarkMode, getMyAge, animatedWelcome } from "./scripts/functions";
import 'lazysizes';

initDarkMode('.toggle-dark-mode')
initParticlesJS()
animatedWelcome()
document.getElementById('myage').innerHTML = getMyAge();