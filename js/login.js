const login = () => {
  console.log("button login work");
  event.preventDefault();
  let emailInput = document.getElementById("email").value;
  let passwordInput = document.getElementById("exampleFormControlInput1").value;

  console.log("INPUTAN USER:", "email:",emailInput, "password:",passwordInput);

  fetch("https://6023a8ba6bf3e6001766b52c.mockapi.io/Dracophoto")
  //response.json() utk package data json jadi data object
  .then(response => response.json())
  // console.log(response);
  .then(result => {
    console.log(result);

    //buat let user; yg isinya undefined
    let user;
    for(let i = 0; i < result.length; i++){
      //cek inputan email user sama dgn email dari API
      if(result[i].email===emailInput){
        console.log(result[i].email===emailInput);//cek true false
        alert("email ditemukan");
        console.log("email ditemukan");
        //pengecekan password di dlm if lg krn setelah selesai semua maka akan keluar dari perulangan
        if(result[i].password==passwordInput){
          console.log(result[i].password==passwordInput);//cek true false
          console.log("password ditemukan");
          console.log("cek hasil sblm keluar loop:");
          //isi variable user jika email & password sesuai
          user = result[i];
          let {password, ...restuser} = user
          console.log(user);
          localStorage.setItem("user", JSON.stringify(restuser));
          localStorage.setItem("isLoggedin", JSON.stringify("Logout"));
          localStorage.setItem("udahLogin", true)
          alert("password ditemukan");
          window.location.href = "index.html";
        }else {
          alert("password anda salah");
          console.log("password anda salah");
        } 
        break;
        } 
      }
      
    //Validasi jika variable user tdk ada isinya, user tdk ditemukan
    if (!user){
      console.log("cek var user akan true jika tdk ditemukan(tdk ada isinya):",!user);
      alert("user tdk ditemukan");
      console.log("hasil alert: user tdk ditemukan");
    } else {
      alert("Anda berhasil login!");
    }
      console.log("Hasil akhir user yg didapat:");
      console.log(user);




    //PAKAI MAP
    // const user = result.filter((user) => {
    //   return user.email === emailInput});
    // console.log(user);

    // console.log(user[0]);
    // if (user.length > 0) {
    //   alert("user ditemukan");
    //   if (user[0].password === passwordInput) {
    //     localStorage.setItem("user", JSON.stringify(user[0]));
    //     localStorage.setItem("isLoggedin", true);
    //     alert("login berhasil");
    //     window.location.href = "./cart.html";
    //   } else {
    //     alert("password anda salah");
    //   }
    // } else {
    //   alert("user tidak ditemukan");
    // }
  })
  .catch((error) => console.log(error));

};