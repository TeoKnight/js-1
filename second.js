const surname = prompt("Фамилия: ");
const name = prompt("Имя: ", "Тимур");
const patronymic = prompt("Отчество: ");

const isTrue = confirm(`Ваши данные: ${surname} ${name} ${patronymic}. Всё верно?`);
alert(isTrue);

const bool = confirm("Вывести ФИО?");

if (bool)
    alert(`${surname} ${name} ${patronymic}`);
else
    alert("Отмена");