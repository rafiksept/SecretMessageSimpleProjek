let lirik = ["click to continue", "maybe this is love","I already see only you in my eyes"
,"Even if I'm afraid it won't happen yet", "Oh I think it came to me too",
"The letters in the book become reality"
]

const main = document.querySelector(".main h1")
const p1 = document.querySelector(".main .satu")
const p2 = document.querySelector(".main .dua")
let stateLirik = 1
main.innerHTML = lirik[0]
document.querySelector('.main').addEventListener("click", function (e) {
    
    main.innerHTML = lirik[stateLirik]
    stateLirik += 1
    if (stateLirik == lirik.length ){
        p1.innerHTML = "Scroll"
        p2.innerHTML="v"
        stateLirik = 0
        document.querySelector(".container").style.height = "100%"
        document.querySelector(".container").style.overflow = "visible"

        
    } 
})

const mainDua = document.querySelector(".main-dua")
const mainH = document.querySelector(".main-dua h1")
let lirik2 = ["I feel like my heart will burst soon", "Oh no, no words can explain it",
"yes you are the only one for me","Wherever I am, even in my dreams","Oh I only have you","from me for you"]
let stateLirik2 = 0
mainH.innerHTML = lirik2[0]
mainDua.addEventListener("click", function (e) {
    
    mainH.innerHTML = lirik2[stateLirik2]
    stateLirik2 += 1
    if (stateLirik2 == lirik2.length ){
        // p1.innerHTML = "Scroll"
        // p2.innerHTML="v"
        stateLirik2 = 0
        // this.body.style.height = "100%"
        // this.body.style.overflow = "visible"

        
    } 
})

const buttonGenerate = document.querySelector(".secret-message button")
const alpha = Array.from(Array(26)).map((e, i) => i + 65);
const alphabet = alpha.map((x) => String.fromCharCode(x));
const alphabetlower = alphabet.map((x) => x.toLowerCase());
let angka = [];
for (let i = 0; i < 10; i++) {
    angka.push(i.toString())
    
}
const allChiper = alphabetlower.concat(angka);
const allChiper2 = alphabetlower.concat(angka);
const allChiperReverse = allChiper.reverse();
const container = document.querySelector('.container')
var isianPesan = ""

buttonGenerate.addEventListener("click", (e) => {
    e.preventDefault();
    document.querySelector('body').style.overflow = 'hidden';
    const  valueForm = document.querySelector(".secret-message input").value.trim().toLowerCase();
    const valueSplit = valueForm.split("")
    const valueSplitSpace = valueForm.split(" ").length
    if (valueSplitSpace >=  6){
        const hasil = valueSplit.map(x => {
            if(allChiper2.includes(x)) {
                let indexVal = allChiper2.indexOf(x)
                let chiperVal = allChiperReverse[indexVal]
                return chiperVal
            } else {
                return x
            }
        })
        isianPesan = hasil.join("")
       
    
    } else {
        isianPesan = "Error masukkan minimal 6 kata "
    }

    var tag = document.createElement("div");
    var isian = `
    <div class="isi-kertas">\
    
    <div class="utama-kertas">
    
        <div class="tulisan-kertas">
            <h2>Your Secret Message</h2>
            <p >Copy Message and Send to Your Friend!</p>
            <p class="isi"> ${isianPesan}
            </p>
        </div>
        <div class="tutup">tutup</div>
       
    </div>
</div>
    `

    tag.innerHTML = isian;

    document.querySelector('body').insertBefore(tag, container);

    const isiKertas = document.querySelector(".isi-kertas")
    const tutup = document.querySelector(".tutup")
    tutup.addEventListener("click", function () {

        isiKertas.remove();
        document.querySelector('body').style.overflow = 'visible'
    })

   
})


const inputMessage = document.querySelector(".input-secret")
const inputMessageButton = document.querySelector(".input-secret button")

inputMessageButton.addEventListener("click", e => {
e.preventDefault();
const  valueForm2 = document.querySelector(".input-secret input").value.trim().toLowerCase();
const valueSplit2 = valueForm2.split("")

const hasil2 = valueSplit2.map(x => {
    if(allChiper2.includes(x)) {
        let indexVal2 = allChiperReverse.indexOf(x)
        let chiperVal2 = allChiper2[indexVal2]
        
        return chiperVal2
    } else {
        return x
    }
})

const hasilFinal =hasil2.join("")
const panjang = hasilFinal.split(" ");


if (Math.floor(panjang.length/2) >= 6){
   const hasillirik = panjang.slice(0, Math.floor(panjang.length/2) + 1 )
   
   const continueclick = ['click to continue']
   for (let index = 0; index < hasillirik.length; index+=6) {
    let sub6 = hasillirik.slice(index, index + 6)
    let sub62 = sub6.join(" ")
    continueclick.push(sub62)
    
   }
    lirik = continueclick

   const hasillirik2 = panjang.slice(Math.floor(panjang.length/2) + 1, panjang.length )
   
   const continueclick2 = []
   for (let index = 0; index < hasillirik2.length; index+=6) {
    let sub6_lirik2 = hasillirik2.slice(index, index + 6)
    let sub6_lirik22 = sub6_lirik2.join(" ")
    continueclick2.push(sub6_lirik22)
    
   }
    continueclick2.push("from me to you")
    mainH.innerHTML = continueclick2[0]
    lirik2 = continueclick2

    window.scrollBy(0,700)

} else if(Math.floor(panjang.length/2) < 6 & Math.floor(panjang.length/2) >= 3){
    let clickcon = ['click to continue']
    const panjang2 = hasilFinal.split(" ");
    for (let index = 0; index < panjang2.length; index+=6) {
        let sub6_lirik2_6 = panjang2.slice(index, index + 6)
        let sub6_lirik22_6 = sub6_lirik2_6.join(" ")
        clickcon.push(sub6_lirik22_6)
    }
    lirik = clickcon
    lirik2 = ["from me to you"]
    mainH.innerHTML = "from me to you"
    window.scrollBy(0,700)
    console.loh(lirik2)

}

}) 

document.addEventListener("scroll" , e => {
    const yscroll = window.scrollY;
    if(yscroll >= main.offsetTop - 300){
        main.style.animation = "animasiMuncul 1s forwards"
    } 

    if(yscroll >= mainH.offsetTop - 500){
        mainH.style.animation = "animasiMuncul 1s forwards"
    }
})