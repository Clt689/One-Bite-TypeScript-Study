// 1. 타입 단언

// 타입 별칭
type Person = {
  name: string;
  age: number;
};

let person = {} as Person;

person.name = "이한빈";
person.age = 26;

type Dog = {
  name: string;
  color: string;
};

let dog = {
  name: "돌돌이",
  color: "brown",
  breed: "진도",
} as Dog;

// 2. 타입 단언의 규칙
// 값 as 단언 <- 단언식
// A as B
// A가 B의 슈퍼 타입이거나, A가 B의 서브 타입이어야 함.

let num1 = 10 as never;
let num2 = 10 as unknown;

// let num3 = 10 as string;

let num4 = 10 as const;

let cat = {
  name: "야옹이",
  color: "yellow",
} as const;

// cat.name = 'dd';

type Post = {
  title: string;
  author?: string; // 익명으로 글을 쓸 수도 있으니 선택적 적용
};

let post: Post = {
  title: "게시글 1",
  author: "이한빈",
};

const len: number = post.author!.length;
