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



