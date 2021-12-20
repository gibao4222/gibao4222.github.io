
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



 /*login */
function toSend(){
    var arr=document.getElementsByTagName('input');
    var email=arr[0].value;
    var password=arr[1].value;
    var reg=/^\w+@\w+\.com$/i;
    if(email==""||password==""){
        alert('Please fill all fields')
        return;
    }
    if(!reg.test(email)){
        alert('Email wrong! Please re-enter.')
        return;
    }
    if(password.length<6){
        alert('Password must be 6 characters')
        return;
    }
}


/*registration */
// function addDate(){
//     var arr=document.getElementsByTagName('input');
//     var email=arr[0].value;
//     var password=arr[1].value;
//     var password_test=arr[2].value;
//     var reg=/^\w+@\w+\.com$/i;
//     if(email==""||password==""||password_test==""){
//         alert('Please fill all fields')
//         return;
//     }
//     if(!reg.test(email)){
//         alert('Email wrong! Please re-enter.')
//         return;
//     }
//     if(password.length<6){
//         alert('Password must be 6 characters')
//         return;
//     }
//     if(password_test!=password){
//         alert('Password re-enter wrong! Please re-enter.')
//         return;
//     }
    
// }

/*add_SP */