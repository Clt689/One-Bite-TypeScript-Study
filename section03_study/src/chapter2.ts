// Unknown 타입
// = 모든 타입의 슈퍼 타입

function unknownExam () {
    let a: unknown = 1;
    let b: unknown = "he";
    let c: unknown = true;
    let d: unknown = null;

}

function voidExam() {
    function voidFunc(): void {;
        console.log("hi");
        return undefined;
  }

  let voidVar: void = undefined;
}