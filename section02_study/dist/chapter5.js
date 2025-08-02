// enum 타입
// 여러가지 값들에 각각 이름을 부여해 열거해두고 사용하는 타입
var Role;
(function (Role) {
    // 굳이 숫자를 지정해 주지 않아도, 위에서부터 0으로 시작
    Role[Role["ADMIN"] = 10] = "ADMIN";
    Role[Role["USER"] = 11] = "USER";
    Role[Role["GUEST"] = 15] = "GUEST";
})(Role || (Role = {}));
var Language;
(function (Language) {
    Language["korean"] = "ko";
    Language["english"] = "en";
})(Language || (Language = {}));
const user1 = {
    name: "이한빈",
    role: Role.ADMIN, // 0 : 관리자
    language: Language.korean,
};
const user2 = {
    name: "홍길동",
    role: Role.USER, // 1 : 일반 유저
};
const user3 = {
    name: "아무개",
    role: Role.GUEST, // 2 : 게스트
};
console.log(user1, user2, user3);
export {};
