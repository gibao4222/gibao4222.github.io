var index=1;
changeImage=function (){
    var imgs=["assets/img/slider7.png","assets/img/slider6.jpeg"];
    document.getElementById('slider-img').src=imgs[index];
    index++;
    if(index==2){
        index=0;
    }
}
var KichThuoc=292;
var chuyenSlide=document.getElementsByClassName("slider-sanpham")[0];
var chuyen=0;
var img=chuyenSlide.getElementsByClassName("sanpham");
var max=KichThuoc*img.length-4*KichThuoc;
function Next(){
    if(chuyen<max) chuyen+=KichThuoc;
    else chuyen=0
    chuyenSlide.style.marginLeft='-'+chuyen+'px';
}
function Back() {
    if(chuyen==0) chuyen=max;
    else chuyen-=KichThuoc;
    chuyenSlide.style.marginLeft='-'+chuyen+'px';
}

setInterval(function () {
    Next(); 
 },3000);

var KichThuoc1=390;
var chuyenSlide1=document.getElementsByClassName("slider-sanpham")[1];
var img1=chuyenSlide1.getElementsByClassName("sanphamfix");
var chuyen1=0;
var max1=KichThuoc1*img1.length-390*3;
function Next1(){
    if(chuyen1<max1) chuyen1+=KichThuoc1;
    else chuyen1=0
    chuyenSlide1.style.marginLeft='-'+chuyen1+'px';
}
function Back1() {
    if(chuyen1==0) chuyen1=max1;
    else chuyen1-=KichThuoc1;
    chuyenSlide1.style.marginLeft='-'+chuyen1+'px';
}

setInterval(function () {
    Back1(); 
 },3000);


 var KichThuoc2=450;
 var chuyenSlide2=document.getElementsByClassName("row__album")[0];
 var img2=chuyenSlide2.getElementsByClassName("THECOLLECTION__sp");
 var chuyen2=0;
 var max2=KichThuoc2*img2.length-450*3;
 function Next2(){
    if(chuyen2<max2) chuyen2+=KichThuoc2;
    else chuyen2=0
    chuyenSlide2.style.marginLeft='-'+chuyen2+'px';
}
function Back2() {
    if(chuyen2==0) chuyen2=max2;
    else chuyen2-=KichThuoc2;
    chuyenSlide2.style.marginLeft='-'+chuyen2+'px';
}