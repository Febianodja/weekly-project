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

const getProducts = async () => {
  let dataProduct = localStorage.getItem("productId")
  const api = `https://6023a8ba6bf3e6001766b52c.mockapi.io/product/${dataProduct}`;
  let response = await fetch(api);
  let result = await response.json();
  console.log(result);
  let itemDetail =""
  for(let i = 0 ; i < result.detail.length ; i++){
    itemDetail += "<li>"+result.detail[i]+"</li>";
    
  }
  let display = document.querySelector("#cartTampil");
  let showDisplay = document.createElement("div");
  let clickedBtn = document.querySelector("#checkoutBtn")
  clickedBtn.addEventListener("click", () => {
    localStorage.setItem("packageName", JSON.stringify(`${result.produk}`))
    localStorage.setItem("packagePrice", `${result.price}`)
  })
  
  showDisplay.innerHTML=`<h3 id="cartProduct">${result.produk}</h3>
  <ul>${itemDetail}</ul> 
  <br>
  <h3>Rp.${result.price}</h3>`
  
  
  
  display.appendChild(showDisplay)
}
getProducts();

const getAddOns = async () => {
  const api = `https://6023a8ba6bf3e6001766b52c.mockapi.io/add-ons`;
  let response = await fetch(api);
  let result = await response.json();
  console.log(result);
  result.map(item => {

    let display = document.querySelector("#showAddOns");
    let showDisplay = document.createElement("div");
    // let clickedBtn = document.querySelector("#checkoutBtn")
    // clickedBtn.addEventListener("click", () => {
    //   let checkedBox = document.getElementsByClassName(".form-check-input:checked");
    //   console.log(checkedBox);
    // })
    
    showDisplay.innerHTML = `
    <div class="form-check">
    <input class="form-check-input" type="checkbox" value="${item.id}" id="flexCheckDefault">
    <label class="form-check-label" for="flexCheckDefault">
    ${item.extra} (Rp.${item.extraPrice})
    </label>
    </div>`
    
    display.appendChild(showDisplay)
  })
}
getAddOns();

// const isClicked = (price) => {
  //   localStorage.setItem("totalPrice", JSON.stringify(price));
  // }
  
  
  // let checkedValue = document.querySelector('.form-check-input').value;
  // checkedValue.addEventListener("")
  // console.log(checkedValue);
  
  // let checkboxValue = document.getElementsByClassName(".form-check-input").value
  // console.log(checkboxValue);

  function getValue(){
    let checked = document.getElementsByClassName("form-check-input");
    let checkedValue = [];
    for(let i = 0 ; i < 3; i++){
      if(checked[i].checked === true){
        checkedValue.push(checked[i].value);
        localStorage.setItem("idAddOns", checkedValue)
      }
    }
    
  }

  

