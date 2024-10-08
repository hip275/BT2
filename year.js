let date = new Date();
const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
let layngay = date.getMonth()
let month = months[layngay]
const days = ["sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]
let day = days[date.getDay()]
document.querySelector(".ngay").innerHTML = day + ", " +  month + date.getDate();
const tong = () => {
let inmon = document.querySelector('.ngayy');
let indays = document.querySelector(".days");
const naydau = date.getDay()
const laydate = new Date(date.getFullYear(), date.getMonth(), 0).getDate();
const nextday = new Date(date.getFullYear(), date.getMonth()+1, 0).getDay();
// tháng
let inmoth = "";
    for (let i = 0; i < months.length; i++) {
        if (i === new Date().getMonth() && date.getFullYear() === new Date().getFullYear()) {
            inmoth += '<div class="month" id="on">' + months[i] + "</div>"
        }
        else {
            inmoth += '<div class="month">' + months[i] + "</div>"
        }
    }
    for (let j = 0; j < months.length - 8; j++) {
        inmoth += '<div class="month kia" >' + months[j] + '</div>'
    }
    inmon.innerHTML = inmoth;
let layngay = date.getMonth()
let month = months[layngay]
let layyes = date.getFullYear()
document.querySelector(".hienthang").innerHTML = month + " " + layyes;
document.querySelector(".hiennam").innerHTML = layyes;
// thứ
const thu = ["Su", "Mo", "Tu", "We", "Th", "Fr", "sa"]
let text = "";
    for (let i = 0; i < thu.length; i++) {
        text += '<div class="date">' + thu[i] + "</div>"
    }
document.querySelector(".dates").innerHTML = text;
let inyes = "";
    for (let i = (layyes - 5); i <= (layyes + 10); i++) {
        if (i == new Date().getFullYear()) {
            inyes += '<div class="month" id="on" >' + i + "</div>"
        }
        else if (i >= (layyes + 7) || i < (layyes - 3)) {
            inyes += '<div class="month kia" >' + i + "</div>"
        }
        else {
            inyes += '<div class="month" >' + i + "</div>"
        }
        
    }
    
let innam = (layyes - 3) + "-" + (layyes + 6);
document.querySelector(".yers-yers").innerHTML = innam;
document.querySelector(".thang").innerHTML = inyes;
let lastdays = new Date(date.getFullYear(), date.getMonth() + 1, 0).getDate();
let inday = "";
    for (let x = naydau + 3; x > 0; x--) {
        inday += `<div class="qwe"><div class="day kia an" > ${laydate-x + 1} </div></div>`
    }
    for (let i = 1; i <= lastdays; i++) {
        if (i === new Date().getDate() && date.getMonth() === new Date().getMonth()
            && date.getFullYear() === new Date().getFullYear()) {
            inday += '<div class="qwe"><div class="day an" id="on" >' + i + "</div></div>"
        }
        else {
            inday += '<div class="qwe"><div class="day an" >' + i + "</div></div>"
        }
    }
    for (let j = 1; j <= (7-nextday-1); j++) {
        inday += `<div class="qwe"><div class="day kia an" > ${j} </div></div>`
    }
    indays.innerHTML = inday;
let doimonths=document.querySelectorAll(".ngayy .month");
    for(let i = 0 ;i<doimonths.length;i++){
        doimonths[i].setAttribute("onclick","anmonth('none'),anday('block'),anhiennam('flex'),trenconten('none'),anhienyers('none'),trenduoi('none')");  
        doimonths[i].addEventListener("click",() =>{
        date.setMonth(i);
      tong();
   })}
let doiyes=document.querySelectorAll(".thang .month");
  for(let i = 0 ;i<doiyes.length;i++){
    doiyes[i].setAttribute("onclick","anhienyers('none'),anmonth('flex'),anday('none'),anhiennam('none'),trenconten('flex'),trenduoi('none')");
    doiyes[i].addEventListener("click",() =>{
        
      date.setFullYear(2018 + i);
      tong();
   })}
   console.log(doiyes)
let hientron=document.querySelectorAll(".day");
    hientron.forEach(button =>{
    button.addEventListener('click', () => {
        let hienty = document.querySelectorAll(".day")
        hienty.forEach(antron => {
            antron.classList.add("an")
        })
        let panren = button.closest(".qwe")

        let antron = panren.querySelector(".day")
        antron.classList.remove("an")

    })
   })
}
tong();
let tanggiam = document.getElementById("time");
let inphut = tanggiam.innerHTML;
let jin = inphut => {
    tanggiam.innerHTML = inphut
}
let tangtime = () => {
    if (inphut < 45) {
        inphut++
        return jin(inphut += 4)
    }
    else if (inphut < 240) {
        inphut++;
        return jin(inphut += 14)
    }
    else { inphut }
}
let giamtime = () => {
    if (inphut > 45) {
        inphut--;
        return jin(inphut -= 14)
    }
    else
        if (inphut > 1) {
            inphut--;
            return jin(inphut)
        }
        else { inphut }
}
function anlich(an) {
    document.getElementById("anlich").style.display = an;
}
function nutan(anhien) {
    document.getElementById("datet").style.display = anhien;
}
function nuthien(newDisplayy) {
    document.getElementById("hienlich").style.display = newDisplayy;
}
function anmonth(chep) {
    document.querySelector(".ngayy").style.display = chep;
}
function anday(chept) {
    document.querySelector(".naman").style.display = chept;
}
function anhiennam(anhien) {
    document.querySelector(".trenruoi").style.display = anhien;
}
function trenconten(cheptro) {
    document.querySelector(".trenconten").style.display = cheptro;
}
function anhienyers(quamet) {
    document.querySelector(".thang").style.display = quamet;
}
function trenduoi(quametp) {
    document.querySelector(".trenduoi").style.display = quametp;
}
function anhen(an){
    document.querySelector(".co").style.display = an;
}
function hienhen(hien){
    document.querySelector(".cy").style.display = hien;
}
function anhiengio(haha){
    document.querySelector(".gio").style.display = haha;
}
let saota = document.querySelector(".hienthang");
saota.setAttribute("onclick", "anmonth('flex'),anday('none'),anhiennam('none'),trenconten('flex'),anhienyers('none')")
let saotao = document.querySelector(".hiennam");
saotao.setAttribute("onclick", "anhienyers('flex'),trenduoi('flex'),trenconten('none'),anmonth('none'),anday('none')")
document.querySelector(".tangday")
    .addEventListener("click", () => {
        date.setMonth(date.getMonth() + 1);
        tong();
    });
document.querySelector(".giamday")
    .addEventListener("click", () => {
        date.setMonth(date.getMonth() - 1);
        tong();
    });
    document.querySelector(".tangyers")
    .addEventListener("click",()=>{
        date.setFullYear(date.getFullYear()-10);
        tong();
    });
    document.querySelector(".giamyers")
    .addEventListener("click",()=>{
        date.setFullYear(date.getFullYear()+10);
        tong();
    });
    document.querySelector(".tangmonhts")
    .addEventListener("click",()=>{
        date.setFullYear(date.getFullYear()-1);
        tong();
    });
    document.querySelector(".giammonhts")
    .addEventListener("click",()=>{
        date.setFullYear(date.getFullYear()+1);
        tong();
    });
var coundow = document.querySelector(".hengio");
document.querySelector("#hentime").addEventListener("click",thoigian)
var thoiluong ;
var dung ;
function thoigian(){
    clearTimeout(dung);
    thoiluong =  inphut * 60;
    demnguoc();
  }
function demnguoc(){
    thoiluong--;
    let giay = (thoiluong % 60);
    let phut = Math.floor(thoiluong / 60);
    coundow.innerHTML= `${phut} : ${giay}`;
    if(thoiluong>0){
   dung = setTimeout(demnguoc,1000)
  }
    else{
        document.getElementById("audio").innerHTML=
        `<audio  controls autoplay loop><source src="hengio.mp3" type="audio/mpeg"  ></audio>`
    }
}
function tamdung(){
    clearTimeout(dung)
}