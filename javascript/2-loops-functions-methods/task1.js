const newArr = ["a", "b", "c", ["another", "array"]];

// Yuxarıda yaradılmış array üçün aşağıdakı əməliyyatları yerinə yetirin:
// 1. Array-in uzunluğunu konsola loq edin.
// 2. Array-in sonuna "d" elementini əlavə edin.
// newArr.push("d")
// 3. Array-in əvvəlindən "z" elementini əlavə edin.
// 4. Array-in 2-ci indeksindəki elementi "x" ilə əvəz edin.
// 5. Array-dən sonuncu elementi silin.
// 6. Array-dən ilk elementi silin.
// 7. Array-i konsola loq edin.
// 8. Array-in içindəki "array" elementinə müraciət edin və konsola loq edin.
// console.log(newArr[3][1])

// While dövrü istifadə edərək 100-ə qədər natural ədədləri 5-ə bölünənlər istisna olmaqla konsola loq edən proqram yazın.

let i = 1;
while(i < 100){
    if (i % 5 != 0){
        // console.log(i)
    }
    i++;
}

// Eyni əməliyyatı for dövrü ilə də icra edin.

// Verilmiş b ədəninin a ədədinə bölünüb bölünmədiyini yoxlayan funksiyanı bildiyiniz bütün funksiya formalarında yazın.

const isDiv = (a,b) => {
    return a % b == 0
}

console.log(isDiv(5, 2))
const result = isDiv(5, 2)
console.log(result)


// ---------------------



const myArr = [2, 10, 33, 40, 23, 96, 37, 78, 19, 50];

const oddArr = [1,2,3] // 2 // 1
const evenArr = [1,2,3,4] // 2.5 // 1 və 2

const findMed = (arr) => {
    arr.sort()
    
    const len = arr.length;
    let mIdx = len / 2;
    
    if (len % 2 == 0) {
        let m2Idx = mIdx - 1;
        return (arr[mIdx] + arr[m2Idx]) /2
    } else {
        return arr[Math.floor(mIdx)]
    }
 
}

console.log(findMed(oddArr));
console.log(findMed(evenArr));


// myArr siyahısındakı ədədlərin kvadratlarından ibarət olan yeni bir siyahı yaradın və onu konsola loq edin
const sqArr = myArr.map(a => a ** 2)

const sq2Arr = [];
sqArr.forEach((a, i) => {
    sq2Arr.push(a ** 2)    
})


// console.log(myArr)

const filteredArr = myArr.filter((a, i) => {
    if(a % 2 == 0){
        return true
    } 
})

// console.log(filteredArr)

const unsort = [2,1,3,7,5,6,]
unsort.sort((a,b) => b-a)

// Siyahıdakı hər elementin kubunu konsola loq edin

// myArr siyahısındakı tək ədədlərdən ibarət yeni bir array yaradın və onu konsola loq edin

// Verilmiş siyahının medianını tapan funksiya yazın

// Siyahıdakı 33 rəqəmini find funksiyası ilə tapın

const res = myArr.find((a) => a === 33)
console.log(res)

// Siyahıdan təsadüfi rəqəm seçib çap edən funksiya yazın
