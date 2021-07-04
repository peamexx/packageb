const nav = document.querySelector('nav');
const footer = document.querySelector('footer');
const asideAll = document.querySelectorAll('aside');

nav.addEventListener('click', menuOpenClose);
footer.addEventListener('click', popupOpen);
asideAll.forEach((item) => item.addEventListener('click', popupClose));

function menuOpenClose(e) {
    if(e.target.className.includes('menu-open')) {
        document.querySelector('.menu-v').classList.add('on');
        document.querySelector('nav .black').classList.add('opacity-on');
        document.querySelector('body').classList.add('scroll-hidden');
    } else if(e.target.className.includes('menu-close')) {
        document.querySelector('.menu-v').classList.remove('on');
        document.querySelector('nav .black').classList.remove('opacity-on');
        document.querySelector('body').classList.remove('scroll-hidden');
    }
};

function popupOpen(e) {
    if(e.target.className.includes('popup-tos')) {
        document.querySelector('.popup-tos').classList.add('on');
        document.querySelector('.popup-tos .black').classList.add('opacity-on');
        document.querySelector('body').classList.add('scroll-hidden');
    } else if(e.target.className.includes('popup-pp')) {
        document.querySelector('.popup-pp').classList.add('on');
        document.querySelector('.popup-pp .black').classList.add('opacity-on');
        document.querySelector('body').classList.add('scroll-hidden');
    }
}

function popupClose(e) {
    if(e.target.className.includes('popup-close')) {
        let aside = e.target.parentElement.parentElement.parentElement;
        if(aside.className.includes('popup')) { // aside가 맞는지 체크
            aside.classList.remove('on');
            aside.querySelector('.black').classList.remove('opacity-on');
            document.querySelector('body').classList.remove('scroll-hidden');
        }
    }
}