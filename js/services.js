let ubahNavUser = document.querySelector("#ubahDomUser")
let ubahDomLogout = document.querySelector("#ubahDomLogout")

let user = JSON.parse(localStorage.getItem("user"))
let isLoggedin = JSON.parse(localStorage.getItem("isLoggedin"))
if(user) {
  ubahNavUser.innerHTML = user.name
  let kehalCart = document.querySelector("#ubahDomUser")
  kehalCart.href = "cart.html"

  //hapus data strage ketika logout
  ubahDomLogout.addEventListener("click", () =>{
    console.log('tes');
    let del = localStorage.clear()
  
    if(del) {
      ubahNavUser.innerHTML = "Register"
      ubahDomLogout.href = "index.html"
    } else {
      ubahNavUser.innerHTML = user.name
    }  
  })
  
} else {
  ubahNavUser.innerHTML = "Register"
}

if(isLoggedin) {
  ubahDomLogout.innerHTML = isLoggedin
  let kehalHome = document.querySelector("#ubahDomLogout")
  kehalHome.href = "index.html"
  
} else {
  ubahDomLogout.innerHTML = "login"
}

//Fetch API product contents

const getProducts = async () => {
  const api = "https://6023a8ba6bf3e6001766b52c.mockapi.io/product";
  let response = await fetch(api);
  let result = await response.json();
  result.map(item => {
      let display = document.querySelector('#tampil');
      let showCards = document.createElement('div');

      showCards.innerHTML = `<img src="${item.images}" class="card-img-top" alt="Card image cap"></img>
                            <br><br>
                            <h3>${item.produk}</h3>
                            <p class="card-text">${item.detail}</p>
                            <h3 >${item.price}</h3>
                            <br>
                            <button type="button" onclick="isClicked(${item.id})" class="btn btn-secondary"><a href="cart.html">CHOOSE ${item.produk}</a></button>`
      showCards.classList.add("col-md-4");
      display.appendChild(showCards)
  })
}
getProducts();
 
const isClicked = (id) => {
  localStorage.setItem("productId", JSON.stringify(id));
}


