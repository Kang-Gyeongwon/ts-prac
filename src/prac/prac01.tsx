import React from "react";

export const Prac01 = () => {
  // 방법 1
  let a = "hello";
  a = "bye";
  console.log(a); // 같은 문자열이기 때문에 가능
  // a = 1  //Type 'number' is not assignable to type 'string'. 에러 발생
  // 보통은 변수를 생성하고 타입을 변경하지 않게 됨
  // typescript가 사용자를 위해서 타입을 추론해주고 있음

  // 방법2
  // tpyescript에게 구체적으로 type 지정해주기
  // let b : boolean = "x";
  // Type 'string' is not assignable to type 'boolean'. type 에러가 발생함
  let b: boolean = false; // 이 방식이 type checker와 소통하는 방법
  // typescript의 type checker에게 타입을 추론하는 것을 허용하고 싶으면 방법2를 사용해야함

  let c = [1, 2, 3];
  // c.push("1")
  // Argument of type 'string' is not assignable to parameter of type 'number'.
  // 배열안에 숫자형이 들어가 있으로 반드시 숫자형을 넣어줘야함

  // 배열안에 아무것도 들어있지 않을때
  // number의 배열인것을 알려줘야함
  let d: number[] = [];
  // 명시적인 표현도 유용함 -> typescript가 타입을 추론하고 있지 못할때
  // but! 명시적 표현은 최소한으로 사용하는게 좋음. 

  const player = {
    name: "nico"
  }
  // player.hello()
  // Property 'hello' does not exist on type '{ name: string; }'.
  // typescript의 추론이 동작해서 이러한 에러가

  return <div>prac01</div>;
};
