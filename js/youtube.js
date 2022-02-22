// script 요소를 생성하여 tag 변수에 할당
var tag = document.createElement('script');

// tag의 src 속성에 youtube iframe api 할당
tag.src = "https://www.youtube.com/iframe_api";

// 첫 번째 script 요소를 찾아 firstScriptTag 변수에 할당
var firstScriptTag = document.getElementsByTagName('script')[0];

// firstScriptTag의 부모 요소를 찾아 firstScriptTag 이전에 tag 삽입
firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

// youtube iframe api에서 자체적으로 제작한 함수 이름이라 함수 이름 변경 불가
function onYouTubeIframeAPIReady() {
    // 'player' 라는 id 값을 가진 요소를 찾아 다음의 옵션 적용
    new YT.Player('player', {
        videoId: 'An6LvWQuj_8', // 최초 영상 ID
        playerVars: {
            autoplay: true, // 자동 재생 유무
            loop: true, // 반복 재생 유무
            playlist: 'An6LvWQuj_8' // 반복 재생할 영상 ID (loop 속성이 true일 시, 필수)
        },
        events: {
            // onReady 메소드가 실행되면(영상이 준비가 되면) 다음의 익명 함수 실행
            onReady: function(event) {
                // event.target : 재생되고 있는 영상 의미
                event.target.mute() // 음소거
            }
        }
    });
}