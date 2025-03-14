// void
// void = 공허 -> 아무 것도 없다
// void : 아무 것도 없음을 의미하는 타입

function func1(): string {
  return "hello";
}

function func2(): void {
  console.log("hello");
}

// never
// 불가능한 타입

function func3(): void {
  while (true) {}
}

function func4(): never {
  throw new Error();
}
