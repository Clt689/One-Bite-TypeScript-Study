// 배열
let numArr: number[] = [1, 2, 3];

let strArr: string[] = ["hello", "im", "hanbin"];

// 제네릭 문법
let boolArr: Array<boolean> = [true, false, true];

// 배열 요소들의 타입이 다양할 경우
let multiArr: (string | number)[] = [1, "hello"];

// 다차원 배열의 타입을 정의하는 방법
let doubleArr: number[][] = [
  [1, 2, 3],
  [4, 5],
];

// 튜플
// 길이와 타입이 고정된 배열
let tup1: [number, number, string] = [1, 2, "b"];

let tup2: [number, string, boolean] = [1, "6", true];

const users: [string, number][] = [
  ["이한빈", 1],
  ["이아무개", 2],
  ["김아무개", 3],
  ["박아무개", 4],
  ["최아무개", 5],
];
