// any 타입
// 특정 변수의 타입을 확실히 모를 때 사용 가능

let anyVar: any = 10;

let num: number = 10;

// unknown
let unknownVar: unknown;
unknownVar = "";
unknownVar = 1;
unknownVar = () => {};

num = unknownVar;
