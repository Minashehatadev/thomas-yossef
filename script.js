


let divcolor = document.getElementById('chosecolor');

let dark = document.getElementById('darksvg');

let darkdiv  = document.getElementById('divdark');

dark.addEventListener('click',function(){
  
  navigator.vibrate(20)
darkdiv.style.display="block"


  
});




function show() {
  // Tab to edit
  

  divcolor.style.display="block"
  
}

function cloce() {
  // Tab to edit
divcolor.style.display="none"

navigator.vibrate(20)
}



function dark1(color8) {
    // Tab to edit
    document.body.style.background = color8;

    localStorage.setItem('color1', color8);
}




if (localStorage.length > 0) {
    document.body.style.background = localStorage.getItem('color1');
}






function setcolor(color7) {
    // Tab to edit
    document.body.style.background = color7;
    localStorage.setItem('color2', color7)

}


if (localStorage.length > 0) {
    document.body.style.background = localStorage.getItem('color2')
}















let btn2 = document.getElementById('colortwo');

let btn1 = document.getElementById('colorone');

btn1.addEventListener('click',function(){
document.body.style.color="#373A40"
document.getElementById('header1').style.background="#F4F4F4";
navigator.vibrate(50);
})



btn2.addEventListener('click',function(){
  document.body.style.color="#F79C25"

 
 
  document.getElementById('header1').style.background="#FEF8E0";
  navigator.vibrate(50);
  
})


let btn3 = document.getElementById('colorthree');


btn3.addEventListener('click',function(){
  document.body.style.color="#279F92"
  document.getElementById('header1').style.background="#E0F2F2";
  navigator.vibrate(50);
})

let btn4 = document.getElementById('colorfor');


btn4.addEventListener('click',function(){
  
 document.body.style.color="#E35A4F"
  document.getElementById('header1').style.background="#FFEBED";
  navigator.vibrate(50);
})

let btn5 = document.getElementById('colorfive');

 
btn5.addEventListener('click',function(){
  document.body.style.color="#4856AA";
  document.getElementById('header1').style.background="#E8EAF6";

navigator.vibrate(50); // Vibrate 'SOS' in Morse.

})

function cloce2() {
  // Tab to edit
   navigator.vibrate(20)
  darkdiv.style.display="none"
}

window.addEventListener("offline", function() {
  let internet = document.getElementById('showninternet');
  internet.style.display="block"
});

let re = document.getElementById('reload');
re.addEventListener('click',function(){
  
  window.location.reload()
  
})

let btnmenu = document.getElementById('homemenuu');

btnmenu.addEventListener('click',function(){

navigator.vibrate(20)



let elemint = document.getElementById("menu").style.display="block"

let backmenu = document.getElementById('menubackground').style.display="block"

  
})

let menu = document.getElementById('menu');


function clocediv1() {
  // Tab to edit
  
navigator.vibrate(20)
menu.style.display="none"
let backmenu = document.getElementById('menubackground').style.display="none"
  
}



if(navigator.onLine == "false") {
  
  
  menu.style.height="90vh"
  
}



let divs = document.getElementById('searchdiv');


let iconse = document.getElementById('searchshow');

iconse.addEventListener('click',function(){
  
  
  divs.style.display="block"
  navigator.vibrate(20)
darkdiv.style.display="none"
  document.getElementById('backgroundsearch').style.display="block"
  
  
})


let cloceser = document.getElementById('clocesearch');

cloceser.addEventListener('click',function(){
  
  divs.style.display="none"
  document.getElementById('backgroundsearch').style.display="none"
  navigator.vibrate(20)
})






function myFunction() {
    var input, filter, ul, li, a, i, txtValue;
    input = document.getElementById("myInput");
    filter = input.value.toUpperCase();
    ul = document.getElementById("myUL");
    li = ul.getElementsByTagName("li");
    for (i = 0; i < li.length; i++) {
        a = li[i].getElementsByTagName("a")[0];
        txtValue = a.textContent || a.innerText;
        if (txtValue.toUpperCase().indexOf(filter) > -1) {
            li[i].style.display = "";
        } else {
          
          
            li[i].style.display = "none";
          
        }
    }
}




// إضافة CSS للودر
var loaderStyle = document.createElement("style");
loaderStyle.innerHTML = `
  .loader {
    border: 16px solid #f3f3f3;
    border-radius: 50%;
    border-top: 16px solid #3498db;
    width: 120px;
    height: 120px;
    -webkit-animation: spin 2s linear infinite;
    animation: spin 2s linear infinite;
    position: fixed;
    top: 50%;
    left: 50%;
    margin-top: -60px;
    margin-left: -60px;
    z-index: 9999;
  }
  
  @-webkit-keyframes spin {
    0% { -webkit-transform: rotate(0deg); }
    100% { -webkit-transform: rotate(360deg); }
  }
  
  @keyframes spin {
    0% { transform: rotate(0deg); }
    100% { transform: rotate(360deg); }
  }
`;

document.head.appendChild(loaderStyle);

// إنشاء الودر
var loader = document.createElement("div");
loader.className = "loader";
document.body.appendChild(loader);

// تحميل المحتوى
window.addEventListener("load", function() {
    // يمكنك استبدال هذا المثال برمز لتحميل المحتوى الخاص بك
    setTimeout(function() {
        // إزالة الودر بعد انتهاء التحميل
        document.body.removeChild(loader);
    }, 0); // هنا يتم تمثيل انتهاء التحميل بعد 3 ثواني، قم بتغيير الرقم حسب الحاجة
});















const cookieBox = document.querySelector(".wrapper"),
  buttons = document.querySelectorAll(".button");

const executeCodes = () => {
  //if cookie contains codinglab it will be returned and below of this code will not run
  if (document.cookie.includes("codinglab")) return;
  cookieBox.classList.add("show");

  buttons.forEach((button) => {
    button.addEventListener("click", () => {
      cookieBox.classList.remove("show");

      //if button has acceptBtn id
      if (button.id == "acceptBtn") {
        //set cookies for 1 month. 60 = 1 min, 60 = 1 hours, 24 = 1 day, 30 = 30 days
        document.cookie = "cookieBy= codinglab; max-age=" + 60 * 60 * 24 * 30;
      }
    });
  });
};

//executeCodes function will be called on webpage load
window.addEventListener("load", executeCodes);




  
  
  
function shareio() {
  // Tab to edit
  
  navigator.share({
      title: 'عنوان المشاركة',
      text: 'نص المشاركة',
      url: 'https://example.com', 
    
    
    

    
  })

  
}







