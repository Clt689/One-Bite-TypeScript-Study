// 기본 타입간의 호환성

let num1: number = 10;
let num2: 10 = 10;

num1 = num2;

// 객체 타입간의 호환성
// = 어떤 객체 타입을 다른 객체 타입으로 취급해도 괜찮은가?

type Animal = {
  name: string;
  color: string;
};

type Dog = {
  name: string;
  color: string;
  breed: string;
};

let animal: Animal = {
  name: "기린",
  color: "yellow",
};

let dog: Dog = {
  name: "돌돌이",
  color: "brown",
  breed: "진도",
};

animal = dog;

// dog = animal;

type ProgrammingBook = {
  name: string;
  price: number;
  skill: string;
};

let book: Book;
let programmingBook: ProgrammingBook = {
  name: "한 입 리액트",
  price: 33000,
  skill: "React",
};

book = programmingBook;
// programmingBook = book;

type Book = {
  name: string;
  price: number;
};

let book2: Book = {
  name: "한 입 리액트",
  price: 33000,
  // skill: "React",
};

// let book3: Book = programmingBook;

function func(book: Book) {
  func({
    name: "한 입 리액트",
    price: 33000,
  });
}

func(programmingBook);
