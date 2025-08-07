// void
// void = 공허라는 의미 (= 아무것도 없다)
// = 아무것도 없음을 의미하는 타입

function func1(): string {
    return "hello";
}

function func2(): null {
    console.log("hello");
    return null;
}

// never 타입
// 존재하지 않는(불가능한) 타입

function fucn3(): never {
    while (true) {}
}