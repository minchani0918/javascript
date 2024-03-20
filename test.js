document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault(); // 기본 동작 방지

    // 사용자가 입력한 값을 가져옴
    var username = document.getElementById('username').value;
    var password = document.getElementById('password').value;

    // 여기에 실제로 로그인을 처리하는 코드를 추가할 수 있습니다.
    // 이 예제에서는 단순히 입력한 값을 콘솔에 출력합니다.
    console.log('사용자 이름:', username);
    console.log('비밀번호:', password);
    

    // 로그인 처리 후에는 원하는 동작을 수행할 수 있습니다.
    // 예를 들어, 다른 페이지로 리디렉션하거나 사용자에게 인사 메시지를 보여줄 수 있습니다.
});