var jFruit     = document.getElementById('txtFruit');
var jShowFruit = document.getElementById('btnShowFruit');
var jImgFruit  = document.getElementById('imgFruit');
alert('Co chay den day') 
//bat su kien
jShowFruit.addEventListener('click',showResult);
//khai bao chi tiet ham xu li du lieu
function showResult(){
    var getFruit = jFruit.value;
    jImgFruit.setAttribute('src','images/'+getFruit+'.jpg');
}