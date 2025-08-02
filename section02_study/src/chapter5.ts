// enum 타입
// 여러가지 값들에 각각 이름을 부여해 열거해두고 사용하는 타입

enum Role { // 숫자형
  // 굳이 숫자를 지정해 주지 않아도, 위에서부터 0으로 시작
  ADMIN = 10,
  USER,
  GUEST = 15,
}

enum Language { // 문자열형
  korean = "ko",
  english = "en",
}

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
