// let v1 = 3;
// let v2 = [12, 25, 36, 98, 55, 2, 6, 3, 45, 77, 85, 96]

// //multiplo se o resto for 0
// for (let index = 0; index < v2.length; index++) {
//     if (v2[index] % v1 == 0) {
//         console.log(v2[index])
//     } else {
//         console.log(v2[index] + "não é multiplo")
//     }

// }


//divisor
let n1 = 98;
let n2 = 3;
let divisores = []

for (let index = 0; index < n1; index++) {
    if (n1 % [index] == 0) {
        divisores.push(index)
    }
}
console.log(divisores)
