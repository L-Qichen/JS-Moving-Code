let html = document.getElementById('html');
let style = document.getElementById('style');

let str = `/* Hello，这里是我的JS小练习展示页面。
* 这个练习的目的是为了熟悉JS的运用, 
* 我将会制作一个太极图案在本页面，
* 并且动态的展示制作过程。
* 首先，我们需要一个 div 来存放图案：
**/
#container{
  border: 1px solid red; 
  width: 300px;
  height: 300px;
}
/* 接下来，把这个 div 变成圆形并添加样式：
**/
#container{
  border-radius: 50%;
  box-shadow: 0 0 0 2px rgba(0, 0, 0, 0.6);
  border: none;
}
/* 然后我们用颜色渐变来实现阴阳的黑白两色：
**/
#container{
  background: linear-gradient(90deg, rgba(255,255,255,1) 0%, rgba(255,255,255,1) 50%, rgba(0,0,0,1) 50%, rgba(0,0,0,1) 100%);
}
/* 通过添加一黑一白两个圆形来完善阴阳的弧形部分,
* 用颜色渐变做出圆形中间有一个相反颜色小圆的效果：
**/
#container::before {
  content: "";
  display: block;
  height: 150px;
  width: 150px;
  background: radial-gradient(circle, rgba(0,0,0,1) 0%, rgba(0,0,0,1) 25%, rgba(255,255,255,1) 25%, rgba(255,255,255,1) 100%);
}
#container::after {
  content: "";
  display: block;
  height: 150px;
  width: 150px;
  background: radial-gradient(circle, rgba(255,255,255,1) 0%, rgba(255,255,255,1) 25%, rgba(0,0,0,1) 25%, rgba(0,0,0,1) 100%);
}
/* 搞定，收工。本次练习到此结束，感谢收看！
**/
`;
let i = 0;
let strSub = "";

let printContent = ()=>{
  if(str[i] === "\n"){
    console.log('why');
    strSub += "<br>";
    console.log(strSub);
  }else if(str[i] === " "){
    strSub += "&nbsp";
  }else{
    strSub += str[i];
  }
  // html.innerHTML = strSub;
  console.log(str[i]);//debug
  i += 1;
  if(i <= str.length){
    setTimeout(()=>{
      html.innerHTML = strSub;
      style.innerHTML = str.substring(0, i);
      printContent();
      window.scrollTo({
        top: 99999,
        behavior: "smooth"
    });
    }, 100);
  }else{
    return;
  }
}

printContent();

