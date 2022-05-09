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
  const submit= document.getElementsByClassName('submitButton');
  const deleteButton=document.getElementById('delete')

  for (var i = 0; i < data.length; i++) {
    const card = document.createElement("div");
    card.className="card";
    const img = document.createElement("img");
    img.src = data[i].tourist_profilepicture;
    const info = document.createElement("div");
    info.className="info";
    const edit =document.createElement('button');
    edit.className='editButton';
    edit.innerHTML='Edit';
    // const deleteButton=document.createElement('button');
    // deleteButton.className='deleteButton';
    // deleteButton.innerHTML='Delete';
    const textarea=document.createElement('textarea');
    textarea.className='textbox';
    textarea.rows='4';
   
    console.log(data[i].id)
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
    card.appendChild(img);
    card.appendChild(info);
    card.appendChild(edit);
    card.appendChild(deleteButton);
    edit.addEventListener('click',()=>{
      if (modal==null) return;
      console.log('editbutton clicked')
      modal.classList.add("active");
      overlay.classList.add("active");
      deleteButton.classList.remove('active');

     textarea.innerHTML=info.innerText;
     modalBody.appendChild(textarea);
     modalBody.appendChild(submit)

     closeModalButtons.addEventListener("click", () => {
      if (modal == null) return;
      modal.classList.remove("active");
      overlay.classList.remove("active");
     
    });
      

    })
    deleteButton.addEventListener('click',()=>{
      console.log('deletebutton clicked')
     
    
      modal.classList.add("active");
      overlay.classList.add("active");
      deleteButton.classList.add('active');
    
      modalBody.innerHTML = info.innerHTML;
     

     closeModalButtons.addEventListener("click", () => {
      if (modal == null) return;
      modal.classList.remove("active");
      overlay.classList.remove("active");
     
    });
      

    })
    card.addEventListener("click", () => {
      if (modal!=null) return;
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
