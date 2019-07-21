var express = require('express'); // module을 require 명령어를 통해 호출
var path = require('path');
var app = express(); // 함수를 app 변수에 담음, express()는 생성자 개념

// app.use(express.static(__dirname + '/public')); // 미들함수

// __dirname은 node에서 제공하는 node 파일의 경로를 담고 있는 변수

app.use(express.static(path.join(__dirname, 'public')));

app.get('/',function (req,res){
  res.send('Hellow World!');
}); // 서버의 root에 get 요청이 왔을 때 'hello world!' 라는 신호를 클라이언트
// 이벤트 리스너 함수 실행, 첫번째는 조건, 두번째는 반응 함수

app.listen(3000, function(){
  console.log('Server On!');
}); // 두개의 argument를 받는데, 첫번째는 port num / 두번째는 fun 3000번으로 들어오는
// 신호를 감지하 반응, 두번째는 바로 실행, console 창을 띄우기 위해서 사용
