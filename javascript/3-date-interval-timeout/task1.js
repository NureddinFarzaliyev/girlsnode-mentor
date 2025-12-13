// 1-dən başlayaraq saniyələri sayan və hər növbəti 5-ə bölünən saniyədə "5!!!" çap edən proqram yazın.

// Yuxarıda yazdığınız proqramın 11-ə çatdıqda dayanmasını təmin edin.

let s = 1;
const count = () => {
    if (s % 5 == 0) {
        console.log(`${s}!!!`)
    }else {
        console.log(s)
    }
    if(s === 11) {
        clearInterval(sInterval)
    } else {
        s++ 
    }
}

const intervalSeconds = 1000
const sInterval = setInterval(count, intervalSeconds)


// İşə salındıqda aşağıdakıları uyğun vaxtlarda çap edən proqram yazın. Öncəki addımlar üçün setInterval, son addım üçün setTimeout funksiyasından istifadə edin.
// Proqram başladı. 3 saniyə gözləyin...
// 3
// 2
// 1
// Proqram sonlandı.

console.log("3 saniyə gözləyin...")
let i = 3

const bc = setInterval(() => {
    console.log(i)
    i--
    if (i == 0){
        clearInterval(bc)
    }
}, 1000)

setTimeout(() => {
    console.log("Proqram sonlandı.")
}, 3100)