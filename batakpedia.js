//light mode and dark mode toggle
const themeToggleBtn = document.querySelectorAll('.theme-toggle');
const htmlElement = document.documentElement;

const enableDarkMode = () => {
    htmlElement.classList.add('dark');

    themeToggleBtn.forEach(btn => {
        const lightIcon = btn.querySelector('.theme-toggle-light-icon');
        const darkIcon = btn.querySelector('.theme-toggle-dark-icon');
        darkIcon.classList.add('hidden');
        lightIcon.classList.remove('hidden');
    });
};

const enableLightMode = () => {
    htmlElement.classList.remove('dark');

    themeToggleBtn.forEach(btn => {
        const lightIcon = btn.querySelector('.theme-toggle-light-icon');
        const darkIcon = btn.querySelector('.theme-toggle-dark-icon');
        darkIcon.classList.remove('hidden');
        lightIcon.classList.add('hidden');
    });
};

themeToggleBtn.forEach(btn => {
    btn.addEventListener('click', () => {
        if (htmlElement.classList.contains('dark')) {
        enableLightMode();
    } else {
        enableDarkMode();
    }

    if (typeof updateNavbarStyles === 'function') {
        updateNavbarStyles();
    }
    });
});

//if user switched to dark mode, will stay dark mode until user manually switched back to light mode
if (localStorage.getItem('theme') == 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
    document.documentElement.classList.add('dark');
} else {
    document.documentElement.classList.remove('dark');
}

//navbar
const navbar = document.getElementById('navbar');
const navMenu = document.getElementById('nav-menu');
const logoLight = document.getElementById('logo-light');
const logoDark = document.getElementById('logo-dark');
const mobileNav = document.getElementById('mobile-nav');

let lastScrollY = window.scrollY;

function updateNavbarStyles(){
    const currentScrollY = window.scrollY;
    const isDark = htmlElement.classList.contains('dark');
    const isMobileMenuOpen = !mobileNav.classList.contains('hidden');

    if (currentScrollY > 50 || isMobileMenuOpen) {
        navbar.classList.remove('bg-transparent', 'text-white');
        navbar.classList.add('shadow-md', 'backdrop-blur-md', 'py-3');
        navbar.classList.remove('py-4');

        if (isDark) {
            navbar.classList.add('bg-[#1b242d]', 'text-white');
            navbar.classList.remove('bg-white', 'text-[#1b242d]');
            logoLight.classList.remove('hidden');
            logoDark.classList.add('hidden');

        } else {
            navbar.classList.remove('bg-[#1b242d]', 'text-white');
            navbar.classList.add('bg-white', 'text-[#1b242d]');
            logoLight.classList.add('hidden');
            logoDark.classList.remove('hidden');
        }
    }
}

window.addEventListener('scroll', () => {
    const currentScrollY = window.scrollY;

    updateNavbarStyles();

    if (currentScrollY < 0) return;

    if (currentScrollY > lastScrollY && currentScrollY > 100) {
        navbar.style.transform = 'translateY(-100%)';
    } else {
        navbar.style.transform = 'translateY(0)';
    }

    lastScrollY = currentScrollY;
});

//navbar menu mobile mode
const mobileBtn = document.getElementById('mobile-nav-btn');

mobileBtn.addEventListener('click', () => {
    const isHidden = mobileNav.classList.contains('hidden');
    if (isHidden) {
        mobileNav.classList.remove('hidden');
        mobileNav.classList.add('flex');
    } else {
        mobileNav.classList.add('hidden');
        mobileNav.classList.remove('flex');
    }
    updateNavbarStyles();
})

//menghubungkan map dan suku
const wilayahBatak = document.querySelectorAll('.wilayah-batak');
const cabangBatak = document.querySelectorAll('.cabang-batak');

function activateSimultaneous(regionId) {
    if (!regionId) return;

    const matchingMap = document.querySelector(`.wilayah-batak[suku-batak="${regionId}"]`);
    if (matchingMap) matchingMap.classList.add('is-active');

    const matchingCard = document.querySelector(`.cabang-batak[suku-batak="${regionId}"]`);
    if (matchingCard) matchingCard.classList.add('is-active');
}

function deactivateAll() {
    wilayahBatak.forEach(wilayah => wilayah.classList.remove('is-active'));
    cabangBatak.forEach(cabang => cabang.classList.remove('is-active'));
}

wilayahBatak.forEach(wilayah => {
    wilayah.addEventListener('mouseenter', () => {
        const regionId = wilayah.getAttribute('suku-batak');
        activateSimultaneous(regionId);
    });
    wilayah.addEventListener('mouseleave', deactivateAll);
});

cabangBatak.forEach(cabang => {
    cabang.addEventListener('mouseenter', () => {
        const regionId = cabang.getAttribute('suku-batak');
        activateSimultaneous(regionId);
    });
    cabang.addEventListener('mouseleave', deactivateAll);
});

// hero background image slider
const bgImages = [
    'img/hero1.png',
    'img/hero2.png',
    'img/hero3.png',
];

function shuffleArray(array){
    for (let i = array.length -1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]]
    }
}

shuffleArray(bgImages);

let currentIndex = 0;
let isLayerActive = true;

const layerA = document.getElementById('bg-layer-a');
const layerB = document.getElementById('bg-layer-b');

layerA.style.backgroundImage = `url('${bgImages[0]}')`;

function changeBg() {
    currentIndex = (currentIndex + 1) % bgImages.length;
    const nextImageUrl = bgImages[currentIndex];

    if (isLayerActive) {
        layerB.style.backgroundImage = `url('${nextImageUrl}')`;

        layerB.classList.remove('opacity-0');
        layerB.classList.add('opacity-100');

        layerA.classList.remove('opacity-100');
        layerA.classList.add('opacity-0');
    } else {
        layerA.style.backgroundImage = `url('${nextImageUrl}')`;

        layerA.classList.remove('opacity-0');
        layerA.classList.add('opacity-100');

        layerB.classList.remove('opacity-100');
        layerB.classList.add('opacity-0');
    }
}

setInterval(changeBg, 6000);

updateNavbarStyles();

//ganti suku sesuai map
const database = {
    karo: {
        title: "Karo | ᯂᯒᯨ",
        description: "lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.", 
    },
    alas: {
        title: "Alas-Kluet",
        description: "lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.", 
    },
    toba: {
        title: "Toba | ᯖᯬᯅ",
        description: "lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.", 
    },
    simalungun: {
        title: "Simalungun | ᯙᯫᯕᯟᯮᯝᯯᯉ᯳",
        description: "lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.", 
    },
    pakpak: {
        title: "Pakpak | ᯇᯂ᯲ᯇᯂ᯲",
        description: "lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.", 
    },
    angkola: {
        title: "Angkola | ᯀᯰᯄ᯦ᯬᯞ",
        description: "lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.", 
    },
    mandailing: {
        title: "Mandailing | ᯔᯉ᯲ᯑᯤᯞᯪᯰ",
        description: "lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    },
};

