new Swiper('.swiper-placement', {
    direction:	'horizontal',
    loop: true,
    
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
navigation: true,
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },

    slidesPerView: 3,
    slidesPerGroup: 1,
    spaceBetween: 15,
    effect: 'coverflow',

    keyboard: true,
    autoheight: true,
    freemode: true,  
    autoplay: {
       disableOninteraction: false,
        delay: 2000,
        stoponlastslide: true,
        speed: 800,
        

        
    }
});
