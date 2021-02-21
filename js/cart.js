let displayCart = document.querySelector("#cart");

const showCartUser = async () => {
  let dataUserJSON = localStorage.getItem("user");
  let dataUserObj = JSON.parse(dataUserJSON);

  let displayNama = document.querySelector("#namaUser");
  displayNama.innerHTML = `<p>${dataUserObj.name}</p>`;

  let response = await fetch(
    `https://5fd866537e05f000170d272e.mockapi.io/user/${dataUserObj.id}/cart`
  );
  console.log(response);
  let dataResponse = await response.json();
  console.log(dataResponse);

  dataResponse.map((item) => {
    let displayItem = document.createElement("div");
    displayItem.innerHTML = `<p>${item.name}</p><p>${item.price}</p>`;

    displayCart.appendChild(displayItem);
  });
};

showCartUser();

