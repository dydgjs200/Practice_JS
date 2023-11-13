let idx = 1;
let array = [];

function setClick() {
  array.push(`/img/space${idx}.jpg`);
  localStorage.setItem("Array", JSON.stringify(array));
  console.log(array);
  idx += 1;
}

// function getClick() {
//   const storedArray = JSON.parse(localStorage.getItem("Array"));
//   if (storedArray) {
//     let pic = document.getElementById("pic");
//     if (pic) {
//       let img = document.createElement("img");
//       img.setAttribute("src", storedArray[idx - 1]);
//       pic.appendChild(img);
//       idx += 1;
//     }
//   }
// }
