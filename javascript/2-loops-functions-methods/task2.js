// Verilmiş ədədin faktorialını hesablayan funksiya yazın


// Yeni bir array yaradın. Bu arrayin daxilində 1-dən 20-ə qədər hər bir ədədin bölündüyü ədədləri özündə saxlayan digər array-lər olsun.
// Yuxarıdakı əməliyyatı hər hansı a və b üçün icra edən funksiya yazın.

const findDivs = (start, end) => {
  const result = [];

  while (start <= end) {
    const div = [1];
    let i = 2;
    while (i <= start / 2) {
      if (start % i === 0) {
        div.push(i)
      }
      i++
    }
    if (start != 1) {
      div.push(start)
    }
    result.push(div)
    start++
  }

  return result
}

// console.log(findDivs(1,5))

const matrix = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
];

// Matrixin bütün elementlərinin cəmini tapan funksiya yazın

let sum = 0
for(a of matrix) {
  for (b of a) {
    sum += b
  }
}
console.log(`Matrixin elementləri cəmi: ${sum}`)

// Kvadrat matrixin diaqonalındakı elementlərinin cəmini tapan funksiya yazın

let dSum = 0
for (i in matrix) {
  dSum += matrix[i][i]
}
console.log(`Matrixin diaqonal elementləri cəmi: ${dSum}`)
