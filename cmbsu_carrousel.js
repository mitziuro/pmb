


var swiper_alert = new Swiper('.main_alert-container', {
    paginationClickable: true,
    autoplay: 8000,
    autoplayDisableOnInteraction: false,
    speed: 1000,
    slideClass: 'main_alert-slide', 
    pagination: '.main_alert-pagination',
    slideActiveClass: 'main_alert-slide-active',
    slideVisibleClass: 'main_alert-slide-visible',
    slideDuplicateClass: 'main_alert-slide-duplicate',
    slideNextClass: 'main_alert-slide-next',
    slidePrevClass: 'main_alert-slide-prev',
    wrapperClass: 'main_alert-wrapper',
    bulletClass: 'main_alert-pagination-bullet',
    bulletActiveClass: 'main_alert-pagination-bullet-active',
    paginationHiddenClass: 'main_alert-pagination-hidden',
    buttonDisabledClass: 'main_alert-button-disabled'
});

var swiper_anno = new Swiper('.anno-container', {
    paginationClickable: true,
    autoplayDisableOnInteraction: false,
    effect: 'coverflow',
    coverflow: {
    	  rotate: 50,
    	  stretch: 0,
    	  depth: 100,
    	  modifier: 1,
    	  slideShadows : true
    },
    speed: 1000,
    slideClass: 'anno-slide', 
    pagination: '.anno-pagination',
    slideActiveClass: 'anno-slide-active',
    slideVisibleClass: 'anno-slide-visible',
    slideDuplicateClass: 'anno-slide-duplicate',
    slideNextClass: 'anno-slide-next',
    slidePrevClass: 'anno-slide-prev',
    wrapperClass: 'anno-wrapper',
    bulletClass: 'anno-pagination-bullet',
    bulletActiveClass: 'anno-pagination-bullet-active',
    paginationHiddenClass: 'anno-pagination-hidden',
    buttonDisabledClass: 'anno-button-disabled'
});

