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

    showCards.innerHTML=`<img src="${item.images}" class="card-img-top" alt="Card image cap"></img>
                        <br><br>
                        <h3>${item.produk}</h3>
                        <p class="card-text">${item.detail}</p>
                        <h3 >${item.price}</h3>
                        <br>
                        <button type="button" class="btn btn-secondary" onclick="isClicked(${item.id})" id="btn-modal">CHOOSE ${item.produk}</button>`
    showCards.classList.add("col-md-4");
    display.appendChild(showCards)
  })
}
getProducts();


var myModal = new bootstrap.Modal(document.getElementById('notLoginModal'));

let buttonOK = document.getElementById("ok")
buttonOK.addEventListener("click", () => {
  window.location.href = "./login.html"
})
 
const isClicked = (id) => {
  checkUser = localStorage.getItem("user");
  if(!checkUser){
    myModal.show();
  } else {
    localStorage.setItem("productId", id)
    window.location.href="./cart.html"
  }
}


