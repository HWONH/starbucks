/* ---------- Search Input Controll ---------- */
const searchEl = document.querySelector('.search');
/* searchEl 요소 내부에서 querySelector 사용 */
const searchInputEl = searchEl.querySelector('input');

/* .search 요소를 클릭 시, .search input 요소에 focus */
searchEl.addEventListener('click', function() {
    searchInputEl.focus();
});

/* .search input 요소에 focus 될 시, .search 요소에 클래스 .focused 추가 */
searchInputEl.addEventListener('focus', function() {
    searchEl.classList.add('focused');
    searchInputEl.setAttribute('placeholder', '통합검색'); /* 미리보기 텍스트 추가 */
});

/* .search input 요소에 focus 해제 될 시, .search 요소에 클래스 .focused 제거 */
searchInputEl.addEventListener('blur', function() {
    searchEl.classList.remove('focused');
    searchInputEl.setAttribute('placeholder', ''); /* 미리보기 텍스트 제거 */
});

/* ---------- Gsap & ScrollToPlugin ---------- */
const badgeEl = document.querySelector('header .badges');
const toTopEl = document.querySelector('#to_top');

window.addEventListener('scroll', _.throttle(function() {
    if(window.scrollY > 500) {
        // 배지 숨기기
        gsap.to(badgeEl, .6, {
            opacity: 0,
            display: 'none'
        });
        // 버튼 보이기
        gsap.to(toTopEl, .2, {
            x: 0
        });
    } else {
        // 배지 보이기
        gsap.to(badgeEl, .6, {
            opacity: 1,
            display: 'block'
        });
        // 버튼 숨기기
        gsap.to(toTopEl, .2, {
            x: 100
        });
    }
}, 300));

toTopEl.addEventListener('click', function() {
    gsap.to(window, .7, {
        scrollTo: 0 // 뷰포트 가장 상단으로 스크롤 업
    });
});

/* ---------- Gsap Animation ---------- */
const fadeEls = document.querySelectorAll('.visual .fade_in');
fadeEls.forEach(function(fadeEl, index) {
    gsap.to(fadeEl, 1, {
        delay: (index + 1) * .7,
        opacity: 1,
    });
});

/* ---------- Notice Swiper ---------- */
new Swiper('.notice_line .swiper', {
    direction: 'vertical', // 슬라이드 방향(horizontal/vertical)
    autoplay: true, // 자동재생 여부
    loop: true // 반복재생 여부
});

/* ---------- Promotion Swiper ---------- */
new Swiper('.promotion .swiper', {
    slidesPerView: 3, // 한 번에 보여 줄 슬라이드 개수
    spaceBetween: 10, // 슬라이드 사이 여백
    centeredSlides: true, // 1번 슬라이드가 가운데 보이기
    loop: true,
    /* autoplay: {
        delay: 5000
    }, */
    pagination: {
        el: '.promotion .swiper-pagination', // 페이지 번호 요소 선택자
        clickable: true // 사용자의 페이지 번호 요소 제어 가능 여부
    },
    navigation: {
        prevEl: '.promotion .swiper-prev',
        nextEl: '.promotion .swiper-next'
    }
});

/* ---------- Promotion Toggle ---------- */
const promotionEl = document.querySelector('.promotion');
const promotionToggleBtn = document.querySelector('.toggle_promotion');
let isHidePromotion = false;
promotionToggleBtn.addEventListener('click', function() {
    isHidePromotion = !isHidePromotion // 반댓값 저장
    if (isHidePromotion) {
        // 숨김 처리!
        promotionEl.classList.add('hide');
    } else {
        // 보임 처리!
        promotionEl.classList.remove('hide');
    }
});

/* ---------- Awards Swiper ---------- */
new Swiper('.awards .swiper', {
    autoplay: true,
    loop: true,
    spaceBetween: 30,
    slidesPerView: 5,
    navigation: {
        prevEl: '.awards .swiper-prev',
        nextEl: '.awards .swiper-next'
    }
});

/* ---------- Gsap Animation ---------- */
// 범위 랜덤 함수(소수점 2자리까지)
function random(min, max) {
    // '.toFixed()'를 통해 반환된 문자 데이터를,
    // 'parseFloat()'을 통해 소수점을 가지는 숫자 데이터로 변환
    return parseFloat((Math.random() * (max - min) + min).toFixed(2))
}

function floatingObj(selector, delay, size) {
    // gsap.to(요소, 시간, 옵션);
    gsap.to(selector, random(1.5, 2.5), {
        y: size, // y축 방향
        repeat: -1, // 무한 반복
        yoyo: true, // 되돌아 오는 모션 포함 유무
        ease: Power1.easeInOut, // easing 함수로 부드러운 모션 구현
        delay: random(0, delay) // 지연 시간
    });
}
floatingObj('.floating1', 1, 15);
floatingObj('.floating2', .5, 15);
floatingObj('.floating3', 1.5, 20);

/* ---------- ScrollMagic ---------- */
const spyEls = document.querySelectorAll('section.scroll_spy');
spyEls.forEach(function(spyEl) {
    /* 
        Scene() : 어떠한 객체(감시 대상)에서 동작해야 할 상세 스크롤(e.g. animation)을 위한 옵션 설정
        setClassToggle('대상', '클래스') : 어떠한 대상에 클래스를 추가/제거(토글)
        addTo() : controller 실행

    */
    new ScrollMagic
        .Scene({
            triggerElement: spyEl, // 스크롤이 닿으면 애니메이션이 발생할 객체(감시 대상) 지정
            triggerHook: .8 // 스크롤 시, 객체(감시 대상)가 뷰포트의 상대적 위치를 지나면 애니메이션 발생
            /* 
                뷰포트의 가장 상단 : 0 or 'onLeave'
                뷰포트의 중간(기본값) : 0.5 or 'onCenter'
                뷰포트의 가장 하단 : 1 or 'onEnter'
            */
        })
        .setClassToggle(spyEl, 'show')
        .addTo(new ScrollMagic.Controller()); // 외부 controller 실행
});

/* ---------- Date ---------- */
const thisYear = document.querySelector('.this_year');
thisYear.textContent = new Date().getFullYear();