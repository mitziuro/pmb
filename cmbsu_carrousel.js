var swiper = new Swiper('.swiper-container', {
    pagination: '.swiper-pagination',
    paginationClickable: true,
    autoplay: true,
    effect: 'cube',
    speed: 1000,
    cube: {
    	  slideShadows: true,
    	  shadow: true,
    	  shadowOffset: 20,
    	  shadowScale: 0.94
    	}
});