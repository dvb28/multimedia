
const $$ = document.querySelector.bind(document);
const $$$$ = document.querySelectorAll.bind(document)

const navbar = $$('#header');

const customerInner = $$('.customer-inner')
const customerItem = $$('.customer-item')
const btnPrev = $$('.customer__btn--prev');
const btnNext = $$('.customer__btn--next');
var lsSlide = $$$$('.customer-item');
var listSlide = Array.from(lsSlide);

var apps = {
    addEventHandle: function() {
        //Animation Xuất Hiện
        window.addEventListener("scroll", function(e) {
            var thisScrollLocation = Number((this.scrollY).toFixed());
            if(thisScrollLocation > 1) {
                navbar.classList.add('nav-bg');
            } else if(thisScrollLocation < 1) {
                navbar.classList.remove('nav-bg');
                $$('.container__header').classList.add('fadeInDown');
            }
            if(thisScrollLocation > 205) {
                $$('.container__header').classList.remove('fadeInDown');
            } else {
                $$('.container__header').classList.add('fadeInDown');
            }
            if(thisScrollLocation > 388) {
                $$('.pet__item--img[value="1"]').classList.remove('fadeInRight');
            } else {
                $$('.pet__item--img[value="1"]').classList.add('fadeInRight');
            }
            if(thisScrollLocation > 650) {
                $$('.pet__item--intro[value="1"]').classList.remove('fadeInLeft');
            } else {
                $$('.pet__item--intro[value="1"]').classList.add('fadeInLeft');
            }
            if(thisScrollLocation > 1037) {
                $$('.pet__item--img[value="2"]').classList.remove('fadeInLeft');
            } else {
                $$('.pet__item--img[value="2"]').classList.add('fadeInLeft');
            }
            if(thisScrollLocation > 1577) {
                $$('.pet__item--intro[value="2"]').classList.remove('fadeInRight');
            } else {
                $$('.pet__item--intro[value="2"]').classList.add('fadeInRight');
            }
            if(thisScrollLocation > 1794) {
                $$('.pet__item--img[value="3"]').classList.remove('fadeInRight');
            } else {
                $$('.pet__item--img[value="3"]').classList.add('fadeInRight');
                $$('.pet__item--intro[value="3"]').classList.add('fadeInLeft');
            }
            if(thisScrollLocation > 2320) {
                $$('.pet__item--intro[value="3"]').classList.remove('fadeInLeft');
            } else {
                $$('.pet__item--intro[value="3"]').classList.add('fadeInLeft');
            }
            if(thisScrollLocation > 2680) {
                $$('.pet__item--img[value="4"]').classList.remove('fadeInLeft');
            } else {
                $$('.pet__item--img[value="4"]').classList.add('fadeInLeft');
            }
            if(thisScrollLocation > 2880) {
                $$('.pet__item--intro[value="4"]').classList.remove('fadeInRight');
            } else {
                $$('.pet__item--intro[value="4"]').classList.add('fadeInRight');
            }
            if(thisScrollLocation > 3571) {
                $$('.section-title').classList.remove('fadeInDown');
            } else {
                $$('.section-title').classList.add('fadeInDown');
            }
            if(thisScrollLocation > 3889) {
                var arr = $$$$('.price-card');
                (Array.from(arr)).forEach(function(item) {
                    item.classList.remove('fadeInDown');
                })
            } else {
                var arr = $$$$('.price-card');
                (Array.from(arr)).forEach(function(item) {
                    item.classList.add('fadeInDown');
                })
            }
            if(thisScrollLocation > 3571) {
                $$('.section-title').classList.remove('fadeInDown');
            } else {
                $$('.section-title').classList.add('fadeInDown');
            }
            if(thisScrollLocation > 4405) {
                $$('.customer-reviews__header').classList.remove('fadeInDown');
            } else {
                $$('.customer-reviews__header').classList.add('fadeInDown');
            }

            if(thisScrollLocation > 4526) {
                $$('.customer-inner').classList.remove('fadeInDown');
            } else {
                $$('.customer-inner').classList.add('fadeInDown');
            }


            console.log(thisScrollLocation);
        })
    },
    useSlick: function(element, btnPrev, btnNext) {
        $(document).ready(function(){
            $(`.${element}`).slick({
                centerPadding: '0px',
                slidesToShow: 3,
                speed: 600,
                prevArrow: btnPrev,
                nextArrow: btnNext,
                autoplay: true,
                autoplaySpeed: 2000,
                pauseOnHover: false,
                pauseOnDotsHover: false,
                responsive: [
                  {
                    breakpoint: 768,
                    settings: {
                      arrows: false,
                      centerMode: true,
                      centerPadding: '40px',
                      slidesToShow: 2
                    }
                  },
                  {
                    breakpoint: 480,
                    settings: {
                      arrows: false,
                      centerMode: true,
                      centerPadding: '40px',
                      slidesToShow: 1
                    }
                  }
                ]
              });
        });
    },
    onLoad: function() {
        $(document).ready(function(){
            $(window).scrollTop(0);
        });
    },
    start: function() {
        this.addEventHandle();
        this.onLoad();
        this.useSlick("customer-inner", btnPrev, btnNext);  
    }
};
apps.start();

          