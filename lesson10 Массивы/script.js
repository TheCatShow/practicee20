/* let fruits = ['Яблоко', 'Апельсин', 'Слива'];
// Длина масива = 3
// Последний индекс = 2(Длина массива-1)
// Массив['Яблоко', 'Апельсин', 'Слива']
// Индексы:   0          1         2

console.log(fruits);

fruits[1] = 'Мандарин';

console.log(fruits);

fruits[3] = 'Груша';

//Длина массива
console.log(fruits.length);

let arr = ['Яблоко', {name: 'Jon'}, true, function() { console.log('Hello!'); }];

console.log(arr[1].name);
arr[3]();

//function sum() = {
//    2+3;
// }
// sum()
console.log(fruits);
console.log(fruits[fruits.length - 1]);
console.log(fruits.at(0));

// Метод at() - возвращает элемент массива с заданным индексом
// array.at(-1) - возвращает последний элемент в массиве

// Очередь
// shift <= * * * <= push

// Стек
// |||||| <= push pop=>

console.log (fruits);

// pop - удаляет последний элемент из массива и возвращает его

let temp = fruits.pop();
console.log(fruits);
console.log(temp);

// push - добавляет элемент в конец массива

fruits.push('Манго');
console.log(fruits);

// shift - удаляет из массива первый элемент и возвращает его
temp = fruits.shift();
console.log(fruits);

// unshift - Добавляет элемент в начало массива
fruits.unshift('Персик', 'Клубника');
console.log(fruits);

let fruits2 = fruits;
fruits.pop();
console.log(fruits);
console.log(fruits2);


// Массив: [ 1 2 3 4 ]
// Индексы:  0 1 2 3

// let fruits = ['Яблоко', 'Апельсин', 'Слива'];
// 
for (let i = 0; i < fruits.length; i++) {
    console.log(fruits[i]);
}

for (let key of fruits) {
    console.log(key);
}
*/

// Задание 1

let numbers = [1, 2, 3];

console.log(numbers);

// Задание 2

let names = ['Jon', 'Sergey', 'Alexander'];

console.log(names)

// Задание 3

let arr = [1, 2, 3];
function count(arr) {
    let sum = 0;
    arr.forEach(function(item){
        sum += item
    })
    return sum;
}
count(arr);

console.log(count(arr));

//Задание 4

let arr2 = ['a', 'b', 'c', 'd', '+'];
console.log (arr2[0],arr2[4],arr2[1],arr2[4],arr2[2],arr2[4],arr2[3]);

//Задание 5

let arr3 = ['Lemon', 'Orange', 'Grapefruit'];
console.log (arr3.length);

//Задание 6

let arr4 = ['Watermelon', 'Дыня', 'Кокос'];
console.log = (arr4[2]);