const base_api_url = "http://restapi.adequateshop.com/api/Tourist";

async function getapi(url) {
  const response = await fetch(url);
  var data = await response.json();
  console.log(data.data);
  if (response) {
    console.log("wait...");
  }
  show(data.data);
}
getapi(base_api_url);

function show(data) {
  var Container = document.getElementById("tourists");
  const overlay = document.getElementById("overlay");
  const modal = document.getElementById("modal");
  const modalBody = document.getElementById("modal-body");
  const closeModalButtons = document.getElementById("close-button");
  const submit = document.getElementsByClassName("submitButton");
  const deleteButton = document.getElementById("delete");

  for (var i = 0; i < data.length; i++) {
    const card = document.createElement("div");
    card.className = "card";
    const info = document.createElement("div");
    info.className = "info";
    const edit = document.createElement("button");
    edit.className = "editButton";
    edit.innerHTML = "Edit";
    const deleteButton = document.createElement("button");
    deleteButton.className = "deleteButton";
    deleteButton.innerHTML = "Delete";
    const submit = document.createElement("button");
    submit.className = "submitButton";
    submit.innerHTML = "Submit";
    const inputboxName = document.createElement("input")
    const inputboxEmail = document.createElement("input");
    const inputboxLocation = document.createElement("input");
    
    const fetchId =document.createElement('inputbox');
    const fetchName =document.createElement('inputbox');
    const fetchEmail =document.createElement('inputbox');
    const fetchLocation =document.createElement('inputbox');
   
    
   

    info.innerHTML =
      "Name: " +
      data[i].tourist_name +
      "\n " +
      "<br>" +
      "Email: " +
      data[i].tourist_email +
      "\n" +
      "<br> " +
      "Loaction: " +
      data[i].tourist_location;
    var userId = data[i].id;
   
    card.appendChild(info);
    card.appendChild(edit);
    card.appendChild(deleteButton);
    console.log(userId);
    fetchId.innerHTML=data[i].id;
    fetchEmail.innerHTML=data[i].tourist_email;
    fetchName.innerHTML=data[i].tourist_name;
    fetchLocation.innerHTML=data[i].tourist_location;
   
    

    edit.addEventListener("click", () => {
      if (modal == null) return;
      console.log("editbutton clicked");
      modal.classList.add("active");
      overlay.classList.add("active");
      deleteButton.classList.remove("active");
      // fetchId
      
      var id=fetchId.innerHTML;
      console.log(id)
      
      //fetchName
      inputboxName.addEventListener('change',()=>{
       var name=inputboxName.innerHTML;
       console.log(name)
      })
     inputboxName.innerHTML=fetchName.innerHTML
      var name=fetchName.innerHTML;
      console.log(name)
        //fetchEmail
     inputboxEmail.innerHTML=fetchEmail.innerHTML
     var email=fetchEmail.innerHTML;
     console.log(email)
      //fetchEmail
      inputboxLocation.innerHTML=fetchLocation.innerHTML
      var location=fetchLocation.innerHTML;
      console.log(location)

      
      
      
      
      modalBody.appendChild(inputboxName);
      
      // modalBody.appendChild(inputboxEmail);
      // modalBody.appendChild(inputboxLocation);
      
      modalBody.appendChild(submit);

      submit.addEventListener("click", ({value=id}) => {
      //  inputboxName.addEventListener('click',()=>{
      //   var name=inputboxName.innerHTML;
      //   console.log(inputboxName.innerHTML)
      //  });
        (async () => {
          const requestOptions = {
            method: "PUT",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
              id: value,
            
              tourist_name: name,
              tourist_email: email,
              tourist_location: location,
             
            }),
          };
          console.log(value)
          console.log(typeof(name))
          console.log(email)
          console.log(location)
          const response = await fetch(
            "http://restapi.adequateshop.com/api/Tourist/"+value,
            requestOptions
          );
          const data = await response.json();
         
          inputboxName.innerHTML = data.updatedAt;
          inputboxEmail.innerHTML = data.updatedAt;
          inputboxLocation.innerHTML = data.updatedAt;
        })();
        // modalBody.removeChild(inputboxName);
      
        // modalBody.removeChild(inputboxEmail);
        // modalBody.removeChild(inputboxLocation);
        
        if (modal == null) return;
        modal.classList.remove("active");
        overlay.classList.remove("active");
      });
    });

    deleteButton.addEventListener("click", () => {
      if (modal != null) return;
      console.log("deletebutton clicked");

      modal.classList.add("active");
      overlay.classList.add("active");
      modalBody.innerHTML = info.innerHTML;
      submit.innerHTML = "Delete";
      modalBody.appendChild(submit);

      submit.addEventListener("click", () => {
        Container.removeChild(card);

        if (modal == null) return;
        modal.classList.remove("active");
        overlay.classList.remove("active");
        alert("card is deleted");
      });
    });
    card.addEventListener("click", () => {
      if (modal != null) return;
      modal.classList.add("active");
      overlay.classList.add("active");

      modalBody.innerText = img.src;
      console.log(modalBody.innerHTML);

      modalBody.innerHTML = info.innerHTML;

      closeModalButtons.addEventListener("click", () => {
        if (modal == null) return;
        modal.classList.remove("active");
        overlay.classList.remove("active");
      });
    });
    Container.appendChild(card);
  }
}
