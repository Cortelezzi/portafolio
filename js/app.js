const headerNavegacion = document.querySelector('.header__navegacion');
headerNavegacion.addEventListener('click', e => {
    if (e.target.classList.contains('navegacion__link')) {
        const links = headerNavegacion.querySelectorAll('.navegacion__link');
        links.forEach(otherLink => {
            otherLink.classList.toggle('navegacion__link-active', otherLink === e.target);
        });

    }
});