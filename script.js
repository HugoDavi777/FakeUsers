async function generateFakerUsers() {
    var qt = document.querySelector("#quantUsers").value;
    var nat = document.querySelector("#natUsers").value;
    var inputsGender = document.getElementsByTagName("input");
    var gender = "";
  
    for (let input of inputsGender) {
      if (input.checked == true) {
        gender = input.value;
      }
    }
  
    var reply = await fetch(
      `https://randomuser.me/api/?results=${qt}&gender=${gender}&nat=${nat}`
    );
  
    var data = await reply.json();
  
    document.querySelector(".allUsers").innerHTML = "";
  
    for (let user of data.results) {
      let userDiv = document.createElement("div");
      userDiv.classList.add("user");
  
      userDiv.innerHTML = `
        <img
          width="100"
          src=${user.picture.medium}>
        <div class="info">
          <span><b>Nome:</b> ${user.name.first + " " + user.name.last}</span>
          <span><b>Email:</b> ${user.email}</span>
          <span><b>Nacimento:</b> ${new Date(user.dob.date).toLocaleString()}</span>
           <span><b>Telefone:</b> ${user.phone}</span>
           <span><b>Pais:</b> ${user.location.country}</span>
           <span><b>Estado:</b> ${user.location.state}</span>
          <span><b>Cidade:</b> ${user.location.city}</span>
          
        </div>`;
  
      document.querySelector(".allUsers").appendChild(userDiv);
    }
  }