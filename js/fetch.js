const getName = document.getElementsByClassName("name");
const getEmail = document.getElementsByClassName("email");
const getLocation = document.getElementsByClassName("location");
const getId = document.getElementsByClassName("card");
const getBtn = document.getElementById("get-btn");

const getData = () => {
  fetch("http://restapi.adequateshop.com/api/Tourist?page=2")
    .then((response) => {
      return response.json();
    })
    .then((responseData) => {
      console.log(responseData);
    });
};
getBtn.addEventListener("click", getData);
// getName.addEventListener("click", getData);
