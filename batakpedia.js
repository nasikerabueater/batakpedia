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

//map tooltip
const tooltip = document.getElementById('svg-tooltip');
const tooltipTitle = document.getElementById('tooltip-title');

document.querySelectorAll('#peta-batak path').forEach(path => {
    if (!path.hasAttribute('data-title')) return;

    path.addEventListener('mouseenter', (e) => {
        const title = path.getAttribute('data-title');
        tooltipTitle.textContent = title;

        tooltip.classList.remove('opacity-0', 'scale-95');
        tooltip.classList.add('opacity-100', 'scale-100');
    });

    path.addEventListener('mousemove', (e) => {
        const offset = 15;

        tooltip.style.left = `${e.pageX + offset}px`;
        tooltip.style.top = `${e.pageY + offset}px`;
    });

    path.addEventListener('mouseleave', () => {
        tooltip.classList.remove('opacity-100', 'scale-100');
        tooltip.classList.add('opacity-0', 'scale-95');
    });
});

//ganti suku sesuai map