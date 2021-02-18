const register = async () => {
  console.log('tes');
  event.preventDefault();
  let emailInput = document.getElementById("email").value;
  let passwordInput = document.getElementById("exampleFormControlInput1").value;
  let nameInput = document.getElementById("exampleFormControlInput2").value;
  console.log("dari inputan Register:", emailInput, passwordInput, nameInput);

  let userReg = {
    email: emailInput,
    password: passwordInput,
    name: nameInput,
  }

  let dataUserRegJSON = JSON.stringify(userReg);
  console.log(`Data user jadi JSON: ${dataUserRegJSON}`);

  let response = await fetch(
    "https://6023a8ba6bf3e6001766b52c.mockapi.io/Dracophoto", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: dataUserRegJSON,
    }
  );
  console.log(response);

  //ubah(unpacked data JSON) jadi data object
  let dataResultObj = await response.json();
  console.log(dataResultObj);
  window.location.href = "./signin.html"
}