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

/* ---------- Date ---------- */
const thisYear = document.querySelector('.this_year');
thisYear.textContent = new Date().getFullYear();