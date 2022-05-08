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
// getapi(api_url);
function show(data) {
  var Container = document.getElementById("tourists");
  const overlay = document.getElementById("overlay");
  const modal = document.getElementById("modal");
  const modalBody = document.getElementById("modal-body");
  const closeModalButtons = document.getElementById("close-button");

  for (var i = 0; i < data.length; i++) {
    const card = document.createElement("div");
    const img = document.createElement("img");
    card.style.background = "pink";
    card.style.padding = "20px";
    card.style.margin = "15px";
    card.style.flexWrap = "wrap";
    card.style.borderRadius = "20px";
    card.style.display = "flex";

    img.src = data[i].tourist_profilepicture;
    card.appendChild(img);
    const info = document.createElement("div");

    info.style.paddingLeft = "50px";
    info.style.marginTop = "30px";
    info.style.lineHeight = "30px";
    info.style.fontSize = "17px";

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

    card.addEventListener("click", () => {
      if (modal == null) return;
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
