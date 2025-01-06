document.addEventListener('DOMContentLoaded', () => {
    const toggleMenuButton = document.getElementById('toggleMenu');
    const navigationMenu = document.querySelector('nav ul');
    const buttonGroup = document.querySelector('.btn-group');

    toggleMenuButton.addEventListener('click', () => {
        navigationMenu.classList.toggle('show');
        buttonGroup.classList.toggle('show');
        toggleMenuButton.classList.toggle('active');
    });

    // Header top margin calculation
    const header = document.getElementById('header');
    const hero = document.querySelector('.hero');

    const setHeroMargin = () => {
        const headerHeight = header.offsetHeight;
        hero.style.marginTop = `${headerHeight}px`;
    };

    // Initial call to set margin
    setHeroMargin();

    // Adjust margin on window resize
    window.addEventListener('resize', setHeroMargin);
});