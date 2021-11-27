document.onload = function () {
    let success = document.getElementById("success");
    success.classList.toggle("none");
    document.getElementById('mail').className="";
    document.getElementById('number').className="";
}

menu.onclick = function(){
    event.preventDefault();
    let myMenu = document.getElementById('topnav');
    if( myMenu.className === "topnav responsive") {
        myMenu.className = "topnav";
    }else
    myMenu.className += " responsive";
}

document.getElementById("submitbut").onclick = function(){
    event.preventDefault();
    function ValidName() {
        let re = /^[a-zA-Zа-яА-Я'][a-zA-Zа-яА-Я-' ]+[a-zA-Zа-яА-Я']?$/u;
        let myName = document.getElementById('firstname').value;
        let valid = re.test(myName);
        if (valid){
            return true;
        }
        else{
            document.getElementById('firstname').classList.add("wrong");
            document.getElementById("errortext1").classList.remove("none");
            return false;
        }
    }
    function ValidPhone() {
        let re = /^\d[\d\(\)\ -]{4,14}\d$/;
        let myPhone = document.getElementById('number').value;
        let valid = re.test(myPhone);
        if (valid){
            return true;
        }
        else{
            document.getElementById('number').classList.add("wrong");
            document.getElementById("errortext2").classList.remove("none");
            return false;
        }
    }
    let x = ValidPhone();
    let y = ValidName();
    if(x==1 && y==1) {
        success.classList.remove("none");
    }
}


let circle = document.getElementsByClassName("circle");
for(let i = 0;i<circle.length;i++)
{
    circle[i].onclick = function(){
        let book1 = document.getElementsByClassName("book1");
        let book2 = document.getElementsByClassName("book2");
        let book3 = document.getElementsByClassName("book3");
        let arr = [book1, book2, book3];
        for(let j = 0;j<circle.length;j++) {
            circle[j].classList.remove("active");
        }
        this.classList.add("active");
    }

}

let slideIndex = 1;
showSlides(slideIndex);
function plusSlides(n) {
    showSlides(slideIndex += n);
}

function currentSlide(n) {
    showSlides(slideIndex = n);
}

function showSlides(n) {
    let i;
    let slides = document.getElementsByClassName("slides");
    let dots = document.getElementsByClassName("demo");
    let captionText = document.getElementsByClassName("rtext");
    if (n > slides.length) {slideIndex = 1}
    if (n < 1) {slideIndex = slides.length}
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
        captionText[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndex-1].style.display = "block";
    dots[slideIndex-1].className += " active";
    captionText[slideIndex-1].style.display = "block";
}