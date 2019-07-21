var express = require('express'); // module을 require 명령어를 통해 호출

var app = express(); // 함수를 app 변수에 담음, express()는 생성자 개념

app.get('/',function (req,res){
  res.send('Hellow World!');
}); // 서버의 root에 get 요청이 왔을 때 'hello world!' 라는 신호를 클라이언트
// 이벤트 리스너 함수 실행, 첫번째는 조건, 두번째는 반응 함수

app.listen(3000, function(){
  console.log('Server On!');
});
