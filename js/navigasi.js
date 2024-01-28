document.addEventListener('DOMContentLoaded', () => {
    const htmlElement = document.querySelector('html');
    const navHome = document.getElementById('navigasi-home');
    const navTiktok = document.getElementById('navigasi-tiktok');
    const navYoutube = document.getElementById('navigasi-youtube');
    const navTentang = document.getElementById('navigasi-tentang');

    const navHomeClass = document.querySelector('.navigasi-home');
    const navTiktokClass = document.querySelector('.navigasi-tiktok');
    const navYoutubeClass = document.querySelector('.navigasi-youtube');
    const navTentangClass = document.querySelector('.navigasi-tentang');

    navHome.addEventListener('click', () => {
        navHomeClass.style.display = 'block';
        navTiktokClass.style.display = 'none';
        navYoutubeClass.style.display = 'none';
        navTentangClass.style.display = 'none';
        window.scrollTo(window.top);
    });

    navTiktok.addEventListener('click', () => {
        navHomeClass.style.display = 'none';
        navTiktokClass.style.display = 'block';
        navYoutubeClass.style.display = 'none';
        navTentangClass.style.display = 'none';
        window.scrollTo(window.top);
    });

    navYoutube.addEventListener('click', () => {
        navHomeClass.style.display = 'none';
        navTiktokClass.style.display = 'none';
        navYoutubeClass.style.display = 'block';
        navTentangClass.style.display = 'none';
        window.scrollTo(window.top);
    });

    navTentang.addEventListener('click', () => {
        navHomeClass.style.display = 'none';
        navTiktokClass.style.display = 'none';
        navYoutubeClass.style.display = 'none';
        navTentangClass.style.display = 'block';
        window.scrollTo(window.top);
    });
});
