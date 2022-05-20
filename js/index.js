import { getApiCall, deleteApiCall, putApiCall } from "./apiHelper";

const base_api_url = "http://restapi.adequateshop.com/api/Tourist";
const headers = { "content-type": "application/json" };
const getUrl = "http://restapi.adequateshop.com/api/Tourist";
const getData = (data) => {
  show(data);
};
getApiCall(getUrl, headers, getData);

function show(data) {
  var Container = document.getElementById("tourists");
  const overlay = document.getElementById("overlay");
  const modal = document.getElementById("modal");
  const modalBody = document.getElementById("modal-body");
  const closeModalButtons = document.getElementById("close-button");

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
    submit.id = "submit";
    // submit.disabled = true;
    const nameLabel = document.createElement("label");
    nameLabel.className = "label";
    nameLabel.innerHTML = "Name : ";
    const emailLabel = document.createElement("label");
    emailLabel.className = "label";
    emailLabel.innerHTML = "Email : ";
    const locationLabel = document.createElement("label");
    locationLabel.className = "label";
    locationLabel.innerHTML = "Location : ";
    const inputboxName = document.createElement("input");
    inputboxName.id = "inputname";
    const inputboxEmail = document.createElement("input");
    inputboxEmail.id = "inputmail";
    const inputboxLocation = document.createElement("input");
    inputboxLocation.id = "inputlocation";
    const fetchId = document.createElement("inputbox");
    const fetchName = document.createElement("inputbox");

    const fetchEmail = document.createElement("inputbox");
    const fetchLocation = document.createElement("inputbox");

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

    fetchId.innerHTML = data[i].id;
    fetchEmail.innerHTML = data[i].tourist_email;
    fetchName.innerHTML = data[i].tourist_name;
    fetchLocation.innerHTML = data[i].tourist_location;

    edit.addEventListener("click", (e) => {
      e.stopImmediatePropagation();

      console.log("editbutton clicked");
      modal.classList.add("active");
      overlay.classList.add("active");
      deleteButton.classList.remove("active");

      // fetchId
      var id = fetchId.innerHTML;
      console.log(id);

      //fetchName
      inputboxName.value = fetchName.innerHTML;
      modalBody.appendChild(nameLabel);
      modalBody.appendChild(inputboxName);

      //fetchEmail
      inputboxEmail.value = fetchEmail.innerHTML;
      modalBody.appendChild(emailLabel);
      modalBody.appendChild(inputboxEmail);

      //fetchEmail
      inputboxLocation.value = fetchLocation.innerHTML;
      modalBody.appendChild(locationLabel);
      modalBody.appendChild(inputboxLocation);

      modalBody.appendChild(submit);

      inputboxName.addEventListener("change", () => {
        if (inputboxName.value == "") {
          alert("Fill the name");
          submit.disabled=true
          return false;
        }
        const enetredName = document.getElementById("inputname").value;
        console.log(enetredName);
        if(fetchName.value=document.getElementById('inputname')){
          alert('change the input for update')
          submit.disabled=true
          return false
        }else{
          submit.disabled=false
        }
       
      });
     
      inputboxEmail.addEventListener("change", () => {
        if (inputboxEmail.value == "") {
          alert("Fill out the Email");
          submit.disabled=true
          return false;
        }

        var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
        let enteredEmail = document.getElementById("inputmail").value;
        if (!enteredEmail.match(mailformat)) {
          alert("Invalid email address!");
          submit.disabled=true
          return false;
        }

        console.log(enteredEmail);
      });
     
      inputboxLocation.addEventListener("change", () => {
        if (inputboxLocation.value == "") {
          alert("Fill the Location Field");
          submit.disabled=true
          return false;
        }
        var enteredLocation = document.getElementById("inputlocation").value;
        console.log(enteredLocation);
      });
      
      submit.addEventListener(
        "click",
        (
          { value = id }
          
        ) => {
         

          const updateUrl = `http://restapi.adequateshop.com/api/Tourist/${id}`;
          const updateData = (data) => document.location.reload();
          const body = JSON.stringify({
            id: value,
            tourist_name: document.getElementById('inputname'),
            tourist_email: document.getElementById('inputemail'),
            tourist_location: document.getElementById('inputlocation'),
          });

          putApiCall(updateUrl, headers, body, updateData);
          inputboxName.innerHTML = data.updatedAt;
          inputboxEmail.innerHTML = data.updatedAt;
          inputboxLocation.innerHTML = data.updatedAt;

          modalBody.removeChild(inputboxName);
          modalBody.removeChild(inputboxEmail);
          modalBody.removeChild(inputboxLocation);

          modal.classList.remove("active");
          overlay.classList.remove("active");
        }
      );
    });

    deleteButton.addEventListener("click", (e) => {
      e.stopImmediatePropagation();
      modal.classList.add("active");
      overlay.classList.add("active");
      modalBody.innerHTML = info.innerHTML;
      submit.innerHTML = "Delete";
      modalBody.appendChild(submit);
      var id = fetchId.innerHTML;
      submit.addEventListener("click", () => {
        const deleteUrl = `http://restapi.adequateshop.com/api/Tourist/${id}`;
        const deleteData = (data) => document.location.reload();
        deleteApiCall(deleteUrl, deleteData);
        Container.removeChild(card);
        modal.classList.remove("active");
        overlay.classList.remove("active");
        alert(`Card ${id} is Deleted`);
      });
    });
    card.addEventListener("click", (e) => {
      e.stopImmediatePropagation();
      modal.classList.add("active");
      overlay.classList.add("active");
      modalBody.innerHTML = info.innerHTML;
      closeModalButtons.addEventListener("click", () => {
        modal.classList.remove("active");
        overlay.classList.remove("active");
      });
    });
    Container.appendChild(card);
  }
}
