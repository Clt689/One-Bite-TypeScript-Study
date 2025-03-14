// any
// 특정 변수의 타입을 우리가 정확히는 모를 때

let anyVar: any = 10;

let num: number = 10;

// unknown
let unknownVar: unknown;
unknownVar = "";
unknownVar = 1;
unknownVar = () => {};

if (typeof unknownVar === "number") {
  num = unknownVar;
}
