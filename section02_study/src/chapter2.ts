// 배열
let numArr: number[] = [1, 2, 3];
let strArr: string[] = ["hello", "b", "c"];

// <> : 제네릭 문법
let boolArr: Array<boolean> = [true, false];

// 배열에 들어가는 요소들 타입이 다양한 경우
let multiArr: (number | string)[] = [1, "hi"];

// 다차원 배열의 타입 정의 방법
let doublearr: (number | string | boolean)[][] = [["hello"], [4, 5], [true, 1]];

// < 튜플 >
// JS에는 없고, TS에만 있는 특별한 배열
// 길이와 타입이 고정된 배열
let tup1: [number, number | string] = [NaN, "ddddd"];

console.log(tup1.length);
