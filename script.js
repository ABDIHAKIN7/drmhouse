// array to store users (optional)
let users = [];

document.querySelector(".form-btn").addEventListener("click", function(e) {
  e.preventDefault(); // prevent default <a> click behavior

  let name = document.querySelector('input[placeholder="John Doe"]').value.trim();
  let email = document.querySelector('input[placeholder="Email"]').value.trim();
  let password = document.querySelector('input[placeholder="Password"]').value.trim();

  // create or get message elements
  let errorMsg = document.getElementById("errorMsg");
  if(!errorMsg){
    errorMsg = document.createElement("p");
    errorMsg.id = "errorMsg";
    errorMsg.style.color = "red";
    document.querySelector("form").appendChild(errorMsg);
  }

  let successMsg = document.getElementById("successMsg");
  if(!successMsg){
    successMsg = document.createElement("p");
    successMsg.id = "successMsg";
    successMsg.style.color = "green";
    document.querySelector("form").appendChild(successMsg);
  }

  // reset messages
  errorMsg.textContent = "";
  successMsg.textContent = "";

  // ===================== NAME VALIDATION =====================
  if(name === ""){
    errorMsg.textContent = "Fadlan geli magacaaga!";
    return;
  }

  // letters only
  if(!/^[A-Za-z ]+$/.test(name)){
    errorMsg.textContent = "Magaca waa inuu ka koobnaadaa xarfo kaliya, number lama ogolo!";
    return;
  }

  // minimum 3 words
  const words = name.split(" ").filter(word => word.length > 0);
  if(words.length < 2){
    errorMsg.textContent = "Magaca waa inuu ka koobnaadaa ugu yaraan 2  magac!";
    return;
  }

  // ===================== EMAIL VALIDATION =====================
  if(email === ""){
    errorMsg.textContent = "Fadlan geli email-kaaga!";
    return;
  }
  if(!/^\S+@\S+\.\S+$/.test(email)){
    errorMsg.textContent = "Fadlan geli email sax ah!";
    return;
  }

  // ===================== PASSWORD VALIDATION =====================
  if(password === ""){
    errorMsg.textContent = "Fadlan geli password-kaaga!";
    return;
  }
  if(password.length < 6){
    errorMsg.textContent = "Password waa inuu ka koobnaadaa ugu yaraan 6 xaraf!";
    return;
  }

  // ===================== SUCCESS =====================
  successMsg.textContent = `Waad ku mahadsan tahay, ${name}!`;

  // save user to array (optional, buuxin marks)
  users.push({name, email, password});
  console.log(users);

  // clear form
  document.querySelector("form").reset();
});
