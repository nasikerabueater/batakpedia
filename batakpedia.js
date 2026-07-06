//light mode and dark mode toggle
const themeToggleBtn = document.getElementById('theme-toggle');
const lightIcon = document.getElementById('theme-toggle-light-icon');
const darkIcon = document.getElementById('theme-toggle-dark-icon');
const htmlElement = document.documentElement;

const enableDarkMode = () => {
    htmlElement.classList.add('dark');
    darkIcon.classList.add('hidden');
    lightIcon.classList.remove('hidden');
};

const enableLightMode = () => {
    htmlElement.classList.remove('dark');
    lightIcon.classList.add('hidden');
    darkIcon.classList.remove('hidden');
};

themeToggleBtn.addEventListener('click', () => {
    if (htmlElement.classList.contains('dark')) {
        enableLightMode();
    } else {
        enableDarkMode();
    }
});

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

