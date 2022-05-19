// async function getapi(url) {
//     const response = await fetch(url);
//     var data = await response.json();
//     var data =data.data
//     console.log(data);
//     if (response) {
//       console.log("wait...");
//     }
//   return data
//   }
function getApi(getUrl, headers, getData) {
    fetch(getUrl, {
        method: "GET",
        headers: headers
    })
        .then(res => res.json())
        .then(data => getData(data.data))
        .catch(error => console.error(error));
}
 

  //put Call
  function doPUTCall(postUrl, headers, body, putData) {
    fetch(postUrl, {
        method: 'PUT',
        headers: headers,
        body: body
    })
        .then(response => response.json())
        .then(data => putData(data))
        .catch(err => console.error(err))
}

//Delete Call

function deleteApi(deleteUrl, deleteData) {
    fetch(deleteUrl, {
        method: "DELETE"
    })
        .then(res => res.json())
        .then((data) => deleteData(data))

}
export {getApi,deleteApi}