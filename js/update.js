
const overlay = document.getElementById("overlay");
  const modal = document.getElementById("modal");
  const modalBody = document.getElementById("modal-body");
  const closeModalButtons = document.getElementById("close-button");
function popUp(cardId,data,id){
    cardId.addEventListener("click", (e) => {
        e.stopImmediatePropagation();
        modal.classList.add("active");
        overlay.classList.add("active");
        console.log(data)
        let details=``
        for(r of data){
            console.log(r.id)
            if(r.id!=id){
                continue;
            }
          details += `
          <div class="info">
            <label>Name: </label><span  id="userName">${r.tourist_name}</span><br>
            <label>Email: </label><span  id="userEmail">${r.tourist_email}</span><br>
            <label>Location: </label><span  id="userLocation">${r.tourist_location}</span>
          </div>
            
       `
            
         }  
        document.getElementById('modal-body').innerHTML=details
        closeModalButtons.addEventListener("click", () => {
          modal.classList.remove("active");
          overlay.classList.remove("active");
        });
      });
      
}
export {popUp}