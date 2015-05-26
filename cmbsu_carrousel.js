var swiper = new Swiper('.anno-container', {
    paginationClickable: true,
    autoplay: true,
    autoplayDisableOnInteraction: false,
    speed: 2000,
    slideClass: 'anno-slide', 
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