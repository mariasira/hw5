// Создать массив, длину и элементы которого задаёт пользователь (строковые значения). Затем отсортировать массив по возрастанию. Затем, удалить элементы из массива с 2 по 4 (если длина меньше 4 вывести сообщение). По мере изменений, выводить содержимое массива на страницу.

let i = "";
const values = [i];
let userLength = prompt("Please, enter the number of values");
for (i = 0; i < userLength; i++)
  values[i] = prompt("Please enter the value");
  console.log(values);
values.sort();
console.log(values);
if (i >= 4){
values.splice(1, 3);
console.log(values);
}
else {
console.log("Not enough values");
}