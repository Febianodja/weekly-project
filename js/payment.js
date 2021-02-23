let dataProduct = localStorage.getItem("productId")
console.log(dataProduct);
let dataUser = localStorage.getItem("user")
let resDataUser = JSON.parse(dataUser)
console.log(resDataUser);

// console.log(`Nama: ${resDataUser.name}`);
for (item in resDataUser){
  let display = document.querySelector("#paymentDetailtampil");
  
  console.log(resDataUser[item]);

  let paymentRes = document.createElement("ul")
  paymentRes.classList.add("list-group", "text-center");
  paymentRes.innerHTML=`<li style="list-style-type: none;">${item} : ${resDataUser[item]}</li>`
  // console.log(paymentRes);
  display.appendChild(paymentRes)
  
}

let dataPrice = localStorage.getItem("totalPrice")
// console.log(dataPrice);
let display = document.querySelector("#paymentDetailtampil");
let paymentRes = document.createElement("ul")
paymentRes.classList.add("list-group", "text-center");
paymentRes.innerHTML=`<li style="list-style-type: none;">total price : ${dataPrice}</li>`
// console.log(paymentRes);
display.appendChild(paymentRes)

// console.log(`Harga: ${dataPrice}`);
var myModal = new bootstrap.Modal(document.getElementById('notLoginModal'));

let buttonClose = document.getElementById("close")
buttonClose.addEventListener("click", () => {
  window.location.href = "./payment.html"
})


let buttonOK = document.getElementById("ok")
buttonOK.addEventListener("click", () => {
  window.location.href = "./payment.html"
})

let displaybtn = document.querySelector('#tampil');

displaybtn.innerHTML=`
                    <button type="button" class="btn btn-secondary" onclick="isClicked()" id="btn-modal">CHECKOUT</button>`


 
const isClicked = () => {
    myModal.show();
    // let del = localStorage.clear()
  
    // if(del) {
    //   ubahNavUser.innerHTML = "Register"
    //   ubahDomLogout.href = "index.html"
    // } else {
    //   ubahNavUser.innerHTML = user.name
    // }  
  // checkUser = localStorage.getItem("user");
  // if(!checkUser){
  //   myModal.show();
  // } else {
  //   // localStorage.setItem("productId")
  //   // window.location.href="./cart.html"
  // }
}

const getAddOns = async () => {
  const api = `https://6023a8ba6bf3e6001766b52c.mockapi.io/add-ons`;
  let response = await fetch(api);
  let result = await response.json();
  console.log(result);
}
getAddOns();