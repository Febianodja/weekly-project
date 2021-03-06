let imgAbout =[
  {
      client: "A",
      gbrAbout: "images/halabout1.jpg"
  },
  {
      client: "B",
      gbrAbout: "images/halabout3.jpg"
  },
]

//Hubungkan dom dgn html
let buahDom = document.querySelector("#padingsetfotokiri");

let display = () => {
  // console.log("tes");
  imgAbout.map((item) => {

    //buat element div baru
    let card = document.createElement('div');

    //isi datanya dgn template literal
    card.innerHTML = `
        <img class="card-img-top" src="${item.gbrAbout}" alt="Card image cap">

    `;
    //tambahkan class di tiap div baru
    card.classList.add("card");

    //tampilkan data
    buahDom.appendChild(card);
  })
}

display();

// cek localstorage apakah ada user login
// tampilkan nama user di nav dan tombol login jd logout

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
