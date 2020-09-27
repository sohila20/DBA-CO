//Chart
$(function(){
  $('.chart').easyPieChart({
    barColor: function (percent) {
      return (percent < 78 ? '#44bae9' : percent < 89 ? '#86e944' : '#e95744');
   },
   size:80,
    scaleLength: 7,
    trackWidth: 5,
    lineWidth: 5,

    onStep: function (from, to, percent) {
       $(this.el).find('.percent').text(Math.round(percent));
    }
  });
})


//Captcha
function Cap(){
  var alpha = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
  var letter=alpha[Math.floor(Math.random()*alpha.length)];
  for(var i=0 ; i < 6 ; i++){
    letter=letter+alpha[Math.floor(Math.random()*alpha.length)];
  }
  document.getElementById("captchaRead").value=letter;
  //contactForm.captchaRead.value = letter;
}
function validCap(){
  var str1=document.getElementById("captchaRead").value;
  var str2=document.getElementById("captchaWrite").value;
  if(str1 != str2 && str2.length >0){
    Cap();
    alert("Please enter a valid captcha");
  
    return false;
  }
}
function initialize() 
{ 
  $('#refresh').click(); 
} 
 