//BildSlider
let sliders = document.querySelectorAll('._swiper');
if (sliders) {
    for (let index = 0; index < sliders.length; index++) {
        let slider = sliders[index];
        if (!slider.classList.contains('swiper-bild')) {
            let slider_items = slider.children;
            if (slider_items) {
                for (let index = 0; index < slider_items.length; index++) {
                    let el = slider_items[index];
                    el.classList.add('swiper-slide');
                }
            }
            let slider_content = slider.innerHTML;
            let slider_wrapper = document.createElement('div');
            slider_wrapper.classList.add('swiper-wrapper');
            slider_wrapper.innerHTML = slider_content;
            slider.innerHTML = '';
            slider.appendChild(slider_wrapper);
            slider.classList.add('swiper-bild');

            if (slider.classList.contains('_swiper_scroll')) {
                let sliderScroll = document.createElement('div');
                sliderScroll.classList.add('swiper-scrollbar');
                slider.appendChild(sliderScroll);
            }
        }
        if (slider.classList.contains('_gallery')) {
            //slider.data('lightGallery').destroy(true);
        }
    }
    sliders_bild_callback();
}

function sliders_bild_callback(params) {}

let sliderScrollItems = document.querySelectorAll('._swiper_scroll');
if (sliderScrollItems.length > 0) {
    for (let index = 0; index < sliderScrollItems.length; index++) {
        const sliderScrollItem = sliderScrollItems[index];
        const sliderScrollBar = sliderScrollItem.querySelector('.swiper-scrollbar');
        const sliderScroll = new Swiper(sliderScrollItem, {
            direction: 'vertical',
            slidesPerView: 'auto',
            freeMode: true,
            scrollbar: {
                el: sliderScrollBar,
                draggable: true,
                snapOnRelease: false
            },
            mousewheel: {
                releaseOnEdges: true,
            },
        });
        sliderScroll.scrollbar.updateSize();
    }
}


function sliders_bild_callback(params) {}

var swiper = new Swiper(".mySwiper", {
    spaceBetween: 10,
    freeMode: true,
    watchSlidesVisibility: true,
    watchSlidesProgress: true,

    breakpoints: {
        // when window width is >= 320px
        320: {
            slidesPerView: 3,
            spaceBetween: 20
        },
        // when window width is >= 480px
        767: {
            slidesPerView: 4,
            spaceBetween: 30
        },
        // when window width is >= 640px
        1024: {
            slidesPerView: 5,
            spaceBetween: 40
        }
    }
});

var swiper1 = new Swiper(".mySwiper1", {
    slidesPerView: 'auto',
    spaceBetween: 10,
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
});

var swiper2 = new Swiper(".mySwiper2", {
    slidesPerView: 'auto',
    spaceBetween: 10,
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
});

var swiper3 = new Swiper(".mySwiper3", {
    slidesPerView: 'auto',
    spaceBetween: 10,
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
    // thumbs: {
    //     swiper: swiper,
    // },
});

var swiper4 = new Swiper(".mySwiper4", {
    slidesPerView: 'auto',
    spaceBetween: 10,
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
    // thumbs: {
    //     swiper: swiper,
    // },
});

var swiper = new Swiper(".mySwiper5", {
    slidesPerView: 'auto',
    spaceBetween: 10,
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
    // thumbs: {
    //     swiper: swiper,
    // },
});


let thumbs = document.querySelectorAll('.swiper-slide--thumb');
let bigSliders = document.querySelectorAll('.bigSwiper');

thumbs.forEach((element, i) => {
    element.addEventListener('click', function() {
        bigSliders[i].classList.add('active');
        bigSliders.forEach((item, j) => {
            if (j !== i) {
                bigSliders[j].classList.remove('active')
            }
        });
    })
});