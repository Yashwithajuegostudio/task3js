import { getApiCall } from "./apiHelper";
import { updateCard, viewCard, deleteCard } from "./update";

const headers = { "content-type": "application/json" };
const getUrl = "http://restapi.adequateshop.com/api/Tourist";
const getData = (data) => {
  show(data);
};
getApiCall(getUrl, headers, getData);

function show(data) {
  var container = document.getElementById("tourists");
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
    card.appendChild(info);
    card.appendChild(edit);
    card.appendChild(deleteButton);
    const userId = data[i].id;
    const userEmail = data[i].tourist_email;
    const userName = data[i].tourist_name;
    const userLocation = data[i].tourist_location;

    edit.addEventListener("click", (e) => {
      e.stopImmediatePropagation();
      updateCard(userId, userName, userEmail, userLocation);
    });

    deleteButton.addEventListener("click", (e) => {
      e.stopImmediatePropagation();
      deleteCard(info.innerHTML, userId);
    });

    card.addEventListener("click", (e) => {
      e.stopImmediatePropagation();
      viewCard(info.innerHTML);
    });
    container.appendChild(card);
  }
}
