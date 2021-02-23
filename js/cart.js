// let displayCart = document.querySelector("#cart");

// const showCartUser = async () => {
//   let dataUserJSON = localStorage.getItem("user");
//   let dataUserObj = JSON.parse(dataUserJSON);

//   let displayNama = document.querySelector("#namaUser");
//   displayNama.innerHTML = `<p>${dataUserObj.name}</p>`;

//   let response = await fetch(
//     `https://5fd866537e05f000170d272e.mockapi.io/user/${dataUserObj.id}/cart`
//   );
//   console.log(response);
//   let dataResponse = await response.json();
//   console.log(dataResponse);

//   dataResponse.map((item) => {
//     let displayItem = document.createElement("div");
//     displayItem.innerHTML = `<p>${item.name}</p><p>${item.price}</p>`;

//     displayCart.appendChild(displayItem);
//   });
// };

// showCartUser();
const getAddOns = async () => {
  const api = `https://6023a8ba6bf3e6001766b52c.mockapi.io/add-ons`;
  let response = await fetch(api);
  let result = await response.json();

  console.log(result);
}
getAddOns();

const getProducts = async () => {
  let dataProduct = localStorage.getItem("productId")
  const api = `https://6023a8ba6bf3e6001766b52c.mockapi.io/product/${dataProduct}`;
  let response = await fetch(api);
  let result = await response.json();
  console.log(result);
  let display = document.querySelector("#tampil");
  let showDisplay = document.createElement("div");
  
  showDisplay.innerHTML=`<h3>${result.produk}</h3>
  <p>${result.detail}</p>
  <h3>${result.price}</h3>
  

  <button type="button" onclick="isClicked(${result.price})" class="btn btn-secondary"><a href="./payment.html">CHECKOUT</a></button>`

  
  
  display.appendChild(showDisplay)
}
getProducts();

const isClicked = (price) => {
  localStorage.setItem("totalPrice", JSON.stringify(price));
}

