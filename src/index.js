import "./styles.css";

document.getElementById("app").innerHTML = `
<h1>Hello Vanilla!</h1>
<div>
  We use the same configuration as Parcel to bundle this sandbox, you can find more
  info about Parcel 
  <a href="https://parceljs.org" target="_blank" rel="noopener noreferrer">here</a>.
</div>
`;

// const nameArr = ["田中", "山田", "じゃけえ"];
// for (let index = 0; index < nameArr.length; index++) {
//   console.log(nameArr[index]);
// }

// const nameArr2 = nameArr.map((name) => name);
// console.log(nameArr2);

// nameArr.map((name) => console.log(name));

// const nameArr3 = nameArr.filter((name) => {
//   return name==='山田'
// })
// console.log(nameArr3)
// nameArr.map((name, index) => {
//   if (index % 2 === 0) {
//     console.log(name +2);
//   }
// })

// const val1 = 1 > 0 ? "trueです" : "falseです";
// console.log(val1);

// const num = 1300;
// // console.log(num.toLocaleString());

// const formattedNum =
//   typeof num === "number" ? num.toLocaleString() : "アウトやて";
// console.log(formattedNum);

// const checkSum = (num1, num2) => {
//   return num1 + num2 > 100 ? "アウト" : "範囲内";
// };
// console.log(checkSum(50, 60));

/**
 * 論理演算子の本当の意味を知ろう　&& ||
 */

// const flag1 = true;
// const flag2 = false;

// if (flag1 || flag2) {
//   console.log("1か2はtrueになります");
// }

// if (flag1 && flag2) {
//   console.log("1か2もtrueになります");
// }

// ||は、左側がfalseなら右側の値を返す
// const num = null; // nullはfalse
// const fee = num || "金額未設定です";
// console.log(fee);

// &&は、左側がtrueなら右側を返す
const num2 = 100;
const fee2 = num2 && "何か設定された";
console.log(fee2);
