function ChangeImageAndBack(){
imgback();
ThreeSecChange2();
}

function ThreeSecChange2(){
setTimeout("imgchange2()",3000);
}

function imgchange2(){
document.getElementById('img13').src= './image/poor.jpg';
}

function imgback(){
document.getElementById('img13').src= './image/poor3.jpg';
}