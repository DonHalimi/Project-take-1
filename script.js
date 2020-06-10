$('.owl-carousel').owlCarousel({
    loop:true,
    margin:10,
    touchDrag:true,
    autoplay:true,
    URLhashListener:true,
    startPosition: 'URLHash',
    center:true,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:2
        },
        1000:{
            items:5
        }
    }
})

let loadLogo = document.getElementsByClassName(`loadingWrapper`)[0];
let logoElements = loadLogo.children

loadLogo.addEventListener(`mouseenter`, function() {
    logoElements[0].classList.toggle(`animateLogoLeft`);
    logoElements[1].classList.toggle(`animateLogoRight`);
    logoElements[2].classList.toggle(`animateLogoBottom`);
})

loadLogo.addEventListener(`mouseleave`, function() {
    logoElements[0].classList.toggle(`animateLogoLeft`);
    logoElements[1].classList.toggle(`animateLogoRight`);
    logoElements[2].classList.toggle(`animateLogoBottom`);
})