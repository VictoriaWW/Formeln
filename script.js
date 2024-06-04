//1 - периметр квадрата

const firstbutton = document.querySelector("#btneins");
firstbutton.addEventListener("click", berechneUmfangQuadrat);

function berechneUmfangQuadrat() {
    const seiteQuadrat = document.querySelector("#seite").value;
    if (seiteQuadrat === "") {
        Swal.fire({
            icon: 'error',
            title: 'Ошибка!',
            text: 'Пожалуйста, заполните поле ввода!'
        })
    }
    else if (isNaN(seiteQuadrat)) {
        Swal.fire({
            icon: 'error',
            title: 'Ошибка!',
            text: 'Пожалуйста, используйте только цифры!'
        })
    }
    
    let berechneteUmfang = seiteQuadrat * 4;
    document.querySelector("#eins").textContent = berechneteUmfang;
    
    seite.value = "";
    console.log(seite);
}

//2 - площадь квадрата

const secondbutton = document.querySelector("#btnzwei");
secondbutton.addEventListener("click", berechneFlaecheQuadrat);

function berechneFlaecheQuadrat() {
    const seiteQ = document.querySelector("#seiteQa").value;
    if (seiteQ === "") {
        Swal.fire({
            icon: 'error',
            title: 'Ошибка!',
            text: 'Пожалуйста, заполните поле ввода!'
        })
    }
    else if (isNaN(seiteQ)) {
        Swal.fire({
            icon: 'error',
            title: 'Ошибка!',
            text: 'Пожалуйста, используйте только цифры!'
        })
    }
    
    let berechneteFlaecheQ = seiteQ * seiteQ;
    document.querySelector("#zwei").textContent = berechneteFlaecheQ;

    seiteQa.value = "";
    console.log(seiteQa);
}

//3 - периметр прямоугольника

const thirdbutton = document.querySelector("#btndrei");
thirdbutton.addEventListener("click", berechneUmfangRechteck);

function berechneUmfangRechteck() {
    const seiteRechteckEins = document.querySelector("#seiteREa").value;
    const seiteRechteckZwei = document.querySelector("#seiteREb").value;

    if (seiteRechteckEins === "" || seiteRechteckZwei === "") {
        Swal.fire({
            icon: 'error',
            title: 'Ошибка!',
            text: 'Пожалуйста, заполните поле ввода!'
        })
    }
    else if (isNaN(seiteRechteckEins || seiteRechteckZwei)) {
        Swal.fire({
            icon: 'error',
            title: 'Ошибка!',
            text: 'Пожалуйста, используйте только цифры!'
        })
    }
    let berechneteUmfangRechteck = 2 * (Number(seiteRechteckEins) + Number(seiteRechteckZwei)); //oder let berechneteUmfangRechteck = 2 * (+seiteRechteckEins + +seiteRechteckZwei)
    document.querySelector("#drei").textContent = berechneteUmfangRechteck;

    seiteREa.value = "";
    seiteREb.value = "";
    console.log(seiteREa);
    console.log(seiteREb);
}

// //4 - площадь прямоугольника

const fourthbutton = document.querySelector("#btnvier");
fourthbutton.addEventListener("click", berechneFlaecheRechteck);

function berechneFlaecheRechteck() {
    const seiteRechteckEins2 = document.querySelector("#seiteREaZwei").value;
    const seiteRechteckZwei2 = document.querySelector("#seiteREbZwei").value;

    if (seiteRechteckEins2 === "" || seiteRechteckZwei2 === "") {
        Swal.fire({
            icon: 'error',
            title: 'Ошибка!',
            text: 'Пожалуйста, заполните поле ввода!'
        })
    }
    else if (isNaN(seiteRechteckEins2 || seiteRechteckZwei2)) {
        Swal.fire({
            icon: 'error',
            title: 'Ошибка!',
            text: 'Пожалуйста, используйте только цифры!'
        })
    }
    let berechneteFlaecheRechteck = seiteRechteckEins2 * seiteRechteckZwei2;
    document.querySelector("#vier").textContent = berechneteFlaecheRechteck;

    seiteREaZwei.value = "";
    seiteREbZwei.value = "";

    console.log(seiteREaZwei);
    console.log(seiteREbZwei);
}

//5 - площадь треугольника

const fifthbutton = document.querySelector("#btnfuenf");
fifthbutton.addEventListener("click", berechneFlaecheDreieck);

function berechneFlaecheDreieck() {
    const seiteD = document.querySelector("#seiteDreieck").value;
    const hoeheD = document.querySelector("#hoeheDreieck").value;

    if (seiteD === "" || hoeheD === "") {
        Swal.fire({
            icon: 'error',
            title: 'Ошибка!',
            text: 'Пожалуйста, заполните поле ввода!'
        })
    }
    else if (isNaN(seiteD || hoeheD)) {
        Swal.fire({
            icon: 'error',
            title: 'Ошибка!',
            text: 'Пожалуйста, используйте только цифры!'
        })
    }
    let berechneteFlaecheDreieck = 1/2 * (seiteD * hoeheD);
    document.querySelector("#fuenf").textContent = berechneteFlaecheDreieck;

    seiteDreieck.value = "";
    hoeheDreieck.value = "";
}

//6 - объем шара

const sixthbutton = document.querySelector("#btnsechs");
sixthbutton.addEventListener("click", berechneVolumeKugel);

function berechneVolumeKugel() {
    const radiusK = document.querySelector("#radius").value;

    if (radiusK === "") {
        Swal.fire({
            icon: 'error',
            title: 'Ошибка!',
            text: 'Пожалуйста, заполните поле ввода!'
        })
    }
    else if (isNaN(radiusK)) {
        Swal.fire({
            icon: 'error',
            title: 'Ошибка!',
            text: 'Пожалуйста, используйте только цифры!'
        })
    }
    let berechneteVolumeKugel = (4 / 3 * Math.PI * (radiusK * radiusK * radiusK)) ; 
    document.querySelector("#sechs").textContent = berechneteVolumeKugel.toFixed(2);

    radius.value = "";
    console.log(radius);
}

gsap.from(".one", {duration: 3, x:-800, ease: "back", opacity:0});
gsap.from(".two", {delay:1, duration: 3, x:800, ease: "back", opacity:0});
gsap.from(".three", {delay:2, duration: 3, x:-800, ease: "back", opacity:0})
gsap.from(".four", {delay:3, duration: 3, x:800, ease: "back", opacity:0});
gsap.from(".five", {delay:4, duration: 3, x:-800, ease: "back", opacity:0})