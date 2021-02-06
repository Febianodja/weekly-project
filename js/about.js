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
  console.log("tes");
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