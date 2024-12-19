import particlesJson from '@/plugins/particles/particles.min.json';

function initParticlesJS() {
    if (document.querySelector('#particles-js')) {
        particlesJS('particles-js', particlesJson);
    }
}

function initDarkMode(selector) {
    document.querySelector(selector)
        .addEventListener('click', function (event) {
            const _this = event.target;
            _this.classList.add('pushed');
            setTimeout(() => _this.classList.remove('pushed'), 300);

            toggleDarkMode(
                document.body,
                { darkmode: 'dark-mode', lightmode: 'light-mode' },
                { name: 'mode', darkmodeValue: 'dark', lightmodeValue: 'light' }
            );
    });
}

function toggleDarkMode(element, classes, cookieData) {
    if (element.classList.contains(classes.lightmode)) {
        element.classList.add(...classes.darkmode.split(' '));
        element.classList.remove(...classes.lightmode.split(' '));
        // setCookie(cookieData.name, cookieData.darkmodeValue);
    } else {
        element.classList.remove(...classes.darkmode.split(' '));
        element.classList.add(...classes.lightmode.split(' '));
        // setCookie(cookieData.name, cookieData.lightmodeValue);
    }
}

function getMyAge() {
    return ((new Date()).getFullYear() - 1989); 
}

export { initParticlesJS, initDarkMode, getMyAge };
