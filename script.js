/* Задание 1: ""Управление библиотекой книг""

Реализуйте объект Book, представляющий книгу, со следующими свойствами и методами:

Свойство title (название) - строка, название книги.
Свойство author (автор) - строка, имя автора книги.
Свойство pages (количество страниц) - число, количество страниц в книге.
Метод displayInfo() - выводит информацию о книге (название, автор и количество страниц). */

console.log(`Задача №1`);

const Book = {
  title: "",
  author: "",
  pages: null,
  displayInfo() {
    console.log(
      `Название: "${this.title}", автор: ${this.author}, количество страниц: ${this.pages}`
    );
  },
};

Book.title = "Война и мир";
Book.author = "Лев Николаевич Толстой";
Book.pages = 500;
Book.displayInfo();

/* Задание 2: ""Управление списком студентов""
Реализуйте класс Student, представляющий студента, со следующими свойствами и методами:

Свойство name (имя) - строка, имя студента.
Свойство age (возраст) - число, возраст студента.
Свойство grade (класс) - строка, класс, в котором учится студент.
Метод displayInfo() - выводит информацию о студенте (имя, возраст и класс).
javascript */

console.log(`Задача №2`);

class Student {
  constructor(name, age, grade) {
    this.name = name;
    this.age = age;
    this.grade = grade;
  }
  displayInfo() {
    console.log(`
        Name: ${this.name}
        Age: ${this.age}
        Grade: ${this.grade}`);
  }
}

const student1 = new Student("John Smith", 16, "10th grade");
student1.displayInfo();

const student2 = new Student("Jane Doe", 17, "11th grade");
student2.displayInfo();
