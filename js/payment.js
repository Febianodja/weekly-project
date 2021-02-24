let dataProduct = localStorage.getItem("productId")
console.log(dataProduct);
let dataUser = localStorage.getItem("user")
let resDataUser = JSON.parse(dataUser)
console.log(resDataUser);

console.log(`Nama: ${resDataUser.name}`);
let display = document.querySelector("#paymentDetailtampil");
  
  // console.log(resDataUser[item]);

  let paymentRes = document.createElement("ul")
  paymentRes.classList.add("list-group", "text-center");
  paymentRes.innerHTML=`<li style="list-style-type: none;">Nama: ${resDataUser.name}</li>`
  // console.log(paymentRes);
  display.appendChild(paymentRes)
// for (item in resDataUser){
//   let display = document.querySelector("#paymentDetailtampil");
  
//   console.log(resDataUser[item]);

//   let paymentRes = document.createElement("ul")
//   paymentRes.classList.add("list-group", "text-center");
//   paymentRes.innerHTML=`<li style="list-style-type: none;">${item} : ${resDataUser.item}</li>`
//   // console.log(paymentRes);
//   display.appendChild(paymentRes)

let dataPrice = localStorage.getItem("packagePrice")
// console.log(typeof(dataPrice));
// let dataPriceNumber = Number(dataPrice);
// console.log(dataPriceNumber);
let packageName = localStorage.getItem("packageName")
let displayAddOns = document.querySelector("#paymentDetailtampil");
let paymentAddOns = document.createElement("ul")
paymentAddOns.classList.add("list-group", "text-center");
paymentAddOns.innerHTML=`<li style="list-style-type: none;">${packageName} package price : ${dataPrice}</li>`
// console.log(paymentAddOns);
displayAddOns.appendChild(paymentAddOns)

// let totalTampil = document.querySelector("#totalTampil");
// totalTampil.innerHTML= `<b>Total Price: Rp.${totalTotal()}</b>`;

// console.log(`Harga: ${dataPrice}`);
let totalTampil = document.querySelector("#totalTampil");

const getAddOns = async () => {
  const api = `https://6023a8ba6bf3e6001766b52c.mockapi.io/add-ons`;
  let response = await fetch(api);
  let result = await response.json();
  // console.log(result);
  let totalPrice = 0
  result.filter(item => {
    let idAddOns = localStorage.getItem("idAddOns").split(",")
    // idAddOns.push(localStorage.getItem("idAddOns"));
    console.log(idAddOns);
    for(let i = 0 ; i < idAddOns.length ; i++){
      if(idAddOns[i] == item.id){
        // console.log("mantap");
        let display = document.querySelector("#paymentDetailtampil");
      let paymentRes = document.createElement("ul")
      paymentRes.classList.add("list-group", "text-center");
      paymentRes.innerHTML=`<li style="list-style-type: none;">${item.extra} : ${item.extraPrice}</li>`
// console.log(paymentRes);
      display.appendChild(paymentRes)
      totalPrice += item.extraPrice;
      }
    }
    let displayTotal = document.querySelector("#paymentDetailtampil");
    let totalRes = document.createElement("ul")
    // totalRes.innerHTML= `TOTAL = ${totalPrice()}`
    displayTotal.appendChild(totalRes);

  })
  localStorage.setItem("totalAddOns", totalPrice)
  totalTampil.innerHTML= `<b>Total Price: Rp.${totalTotal()}</b>`;
}
getAddOns();

function totalTotal(){
  let totalAddOns = Number(localStorage.getItem("totalAddOns"))
  let totalPackagePrice = Number(localStorage.getItem("packagePrice"))
  return totalPackagePrice + totalAddOns;
  // console.log(totalPackagePrice);
  // console.log(totalAddOns);
  // console.log(totalSemua);

}
// totalTotal()



var myModal = new bootstrap.Modal(document.getElementById('notLoginModal'));

let buttonClose = document.getElementById("close")
buttonClose.addEventListener("click", () => {
  window.location.href = "./index.html"
})


let buttonOK = document.getElementById("ok")
buttonOK.addEventListener("click", () => {
  window.location.href = "./index.html"
})

let displaybtn = document.querySelector('#tampil');

// displaybtn.innerHTML=`
//                     <button type="button" class="btn btn-secondary" onclick="isClicked()" id="btn-modal">SUBMIT</button>
//                     `

 
const isClicked = () => {
    myModal.show();
  //   let del = localStorage.removeItem("productID", "packagePrice", "totalAddOns", "idAddOns", "packageName", "addOnsPrice")
  
  //   if(del) {
  //     ubahNavUser.innerHTML = "Register"
  //     ubahDomLogout.href = "index.html"
  //   } else {
  //     ubahNavUser.innerHTML = user.name
  //   }  
  // checkUser = localStorage.getItem("user");
  // if(!checkUser){
  //   myModal.show();
  // } else {
  //   // localStorage.setItem("productId")
  //   // window.location.href="./cart.html"
  // }
}

// const getAddOns = async () => {
//   const api = `https://6023a8ba6bf3e6001766b52c.mockapi.io/add-ons`;
//   let response = await fetch(api);
//   let result = await response.json();
//   // console.log(result);
//   let totalPrice = 0
//   result.filter(item => {
//     let idAddOns = localStorage.getItem("idAddOns").split(",")
//     // idAddOns.push(localStorage.getItem("idAddOns"));
//     console.log(idAddOns);
//     for(let i = 0 ; i < idAddOns.length ; i++){
//       if(idAddOns[i] == item.id){
//         // console.log("mantap");
//         let display = document.querySelector("#paymentDetailtampil");
//       let paymentRes = document.createElement("ul")
//       paymentRes.classList.add("list-group", "text-center");
//       paymentRes.innerHTML=`<li style="list-style-type: none;">${item.extra} : ${item.extraPrice}</li>`
// // console.log(paymentRes);
//       display.appendChild(paymentRes)
//       totalPrice += item.extraPrice;
//       }
//     }
//     let displayTotal = document.querySelector("#paymentDetailtampil");
//     let totalRes = document.createElement("ul")
//     // totalRes.innerHTML= `TOTAL = ${totalPrice()}`
//     displayTotal.appendChild(totalRes);

//   })
//   localStorage.setItem("totalAddOns", totalPrice)
// }
// getAddOns();

