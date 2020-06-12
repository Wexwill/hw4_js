    // Task 1

console.log('Task 1');

let arr1 = [1, 2, 3, 4, 5];

for (let a = 0; a < arr1.length; a++) console.log(arr1[a]);

console.log('');

    // Task 2

console.log('Task 2');

let arr2 = [-2, -1, -3, 15, 0, -4, 2, -5, 9, -15, 0, 4, 5, -6, 10, 7];

for (let b = 0; b < arr2.length; b++) {
    if (arr2[b] < -3 && arr2[b] > -10) {
        console.log(arr2[b]);
        continue;
    }
}
console.log('');

    // Task 3

console.log ('Task 3');

let arr3 = [],
    arr4 = [],
    result = 0,
    d = 23;

for (let c = 23; c <= 57; c++) {
    arr3.push(c);
    result += c;
}


console.log(arr3);
console.log('result = ' + result);

while (d <= 57) {
    arr4.push(d);
    d++;
}
console.log(arr4);
console.log('');

    // Task 4

console.log ('Task 4');
document.write('<br/>Task 4<br/>');

let arr5 = ['10', '20', '30', '50', '235', '3000'],
    strarr5 = arr5.join(' '),
    f = '';

console.log(strarr5);

for (e = 0; e < arr5.length; e++) {

    if (arr5[e][0] == 1 || arr5[e][0] == 2 || arr5[e][0] == 5) {
        document.write(arr5[e] + '<br/>');
    } continue;
}
// Не получилось сделать задание через консоль.
// for (e = 0; e < strarr5.length; e++) {
//     if (strarr5[e] == 1 || strarr5[e] == 2 || strarr5[e] == 5 || strarr5[e] == 0) {
//         f += strarr5[e]; 
//         if (strarr5[e] == ' ') {
//             console.log(f);
//             f = '';
//         }
//     }
// }

console.log('');

    // Task 5

let arr6 = ['ПН', 'ВТ', 'СР', 'ЧТ', 'ПТ', 'СБ', 'ВС'];

document.write('<br/>Task 5<br/>');

for (f = 0; f < arr6.length; f++) {
    if (arr6[f] == 'СБ' || arr6[f] == 'ВС') {
        document.write('<strong>' + arr6[f] + '</strong><br/>');
    } else document.write(arr6[f] + '<br/>');
}

    // Task 6

console.log ('Task 6');

let arr7 = [7, true, '123', 1234, false];
arr7.push('Новый элемент');

console.log(arr7);
console.log(arr7[arr7.length - 1]);
console.log('');

    // Task 7

console.log ('Task 7');

let arr8 = [];

for (g = 0;;g++) { 
    let h = +prompt('Введите число для задания 7');
    arr8.push(h);
    if (h <= 0) break;
    arr8.sort(function(a, b) {
        return a - b;
    });
    console.log(arr8);
}
// arr8.sort(function(a, b) {
//     return a - b;
// });
// console.log(arr8);
// При данном способе вывода добавляется значение "0"
console.log('');

    // Task 8

console.log('Task 8');

let arr9 = [12, false, 'Текст', 4, 2, -5, 0];
    i = arr9.length - 1;
    arr91 = [];

while (i >= 0) {
    arr91.push(arr9[i]);
    i--;
}
console.log(arr91);

arr92 = arr9.reverse();
console.log(arr92);
console.log('');

    // Task 9

console.log('Task 9');

let arr10 = [5, 9, 21, , , 9, 78, , , , 6];

console.log(arr10);

let jj = 0;

for (let j = 0; j <= arr10.length - 1; j++) {
        if (arr10[j] == undefined) {
        jj++;
    } continue;
}
console.log('Количество пустых элементов: ' + jj);
console.log('');

    // Task 10

console.log('Task 10');

let arr11 = [1,8,0,13,76,8,7,0,22,0,2,3,2],
    arr111 = arr11.slice(arr11.indexOf(0) + 1,arr11.lastIndexOf(0)),
    summa = 0;

console.log(arr11);
console.log(arr111);

for (k = 0; k < arr111.length; k++) {
    summa += arr111[k];
}
console.log('Сумма элементов = ' + summa);
console.log('');

    // Task 11

document.write('<br/>Task 11<br/>');

let arr121 = ['&#8194;&#8194;&#8194;&#8194;&#8194;^'],
    arr122 = ['&#8194;&#8194;&#8194;&#8194;^^^'];
    arr123 = ['&#8194;&#8194;&#8194;^^^^^'];
    arr124 = ['&#8194;&#8194;^^^^^^^'];
    arr125 = ['&#8194;^^^^^^^^^'];
document.write(arr121 + '<br/>');
document.write(arr122 + '<br/>');
document.write(arr123 + '<br/>');
document.write(arr124 + '<br/>');
document.write(arr125 + '<br/>');
