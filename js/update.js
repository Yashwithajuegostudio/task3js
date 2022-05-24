import { putApiCall, deleteApiCall } from "./apiHelper";

const overlay = document.getElementById("overlay");
const modal = document.getElementById("modal");
const modalBody = document.getElementById("modal-body");
const closeModalButtons = document.getElementById("close-button");
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
const submit = document.createElement("button");
submit.className = "submitButton";
submit.innerHTML = "Submit";
submit.id = "submit";
const deleteButton = document.createElement("button");
deleteButton.className = "deleteButton";
deleteButton.innerHTML = "Delete";

function viewCard(userDetails) {
  modal.classList.add("active");
  overlay.classList.add("active");
  modalBody.innerHTML = userDetails;
  closeModalButtons.addEventListener("click", () => {
    modal.classList.remove("active");
    overlay.classList.remove("active");
  });
}

function updateCard(id, name, email, location) {
  modal.classList.add("active");
  overlay.classList.add("active");
  deleteButton.classList.remove("active");
  inputboxName.value = name;
  modalBody.appendChild(nameLabel);
  modalBody.appendChild(inputboxName);
  //fetchEmail
  inputboxEmail.value = email;
  modalBody.appendChild(emailLabel);
  modalBody.appendChild(inputboxEmail);
  //fetchEmail
  inputboxLocation.value = location;
  modalBody.appendChild(locationLabel);
  modalBody.appendChild(inputboxLocation);
  modalBody.appendChild(submit);
  inputboxName.addEventListener("change", () => {
    if (inputboxName.value == "") {
      alert("Fill the name");
      submit.disabled = true;
      return false;
    }
    const enetredName = document.getElementById("inputname").value;
    console.log(enetredName);
  });
  inputboxEmail.addEventListener("change", () => {
    if (inputboxEmail.value == "") {
      alert("Fill out the Email");
      return false;
    }
    var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    let enteredEmail = document.getElementById("inputmail").value;
    if (!enteredEmail.match(mailformat)) {
      alert("Invalid email address!");
      return false;
    }
  });
  inputboxLocation.addEventListener("change", () => {
    if (inputboxLocation.value == "") {
      alert("Fill the Location Field");
      return false;
    }
    var enteredLocation = document.getElementById("inputlocation").value;
    console.log(enteredLocation);
  });
  submit.addEventListener("click", () => {
    if (
      name == document.getElementById("inputname").value ||
      email == document.getElementById("inputmail").value ||
      location == document.getElementById("inputlocation").value
    ) {
      alert("update the fields");
      return false;
    }
    const updateUrl = `http://restapi.adequateshop.com/api/Tourist/${id}`;
    const headers = { "content-type": "application/json" };
    const updateData = (data) => document.location.reload();
    const body = JSON.stringify({
      id: id,
      tourist_name: document.getElementById("inputname").value,
      tourist_email: document.getElementById("inputmail").value,
      tourist_location: document.getElementById("inputlocation").value,
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
  });
  closeModalButtons.addEventListener("click", () => {
    modal.classList.remove("active");
    overlay.classList.remove("active");
  });
}
function deleteCard(userDetails, id) {
  modal.classList.add("active");
  overlay.classList.add("active");
  modalBody.innerHTML = userDetails;
  submit.innerHTML = "Delete";
  modalBody.appendChild(submit);
  submit.addEventListener("click", () => {
    const deleteUrl = `http://restapi.adequateshop.com/api/Tourist/${id}`;
    const deleteData = (data) => document.location.reload();
    deleteApiCall(deleteUrl, deleteData);
    modal.classList.remove("active");
    overlay.classList.remove("active");
    alert(`Card ${id} is Deleted`);
  });
  closeModalButtons.addEventListener("click", () => {
    modal.classList.remove("active");
    overlay.classList.remove("active");
  });
}
export { updateCard, viewCard, deleteCard };
