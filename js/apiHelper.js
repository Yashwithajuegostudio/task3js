function getApiCall(getUrl, headers, getData) {
  fetch(getUrl, {
    method: "GET",
    headers: headers,
  })
    .then((res) => res.json())
    .then((data) => getData(data.data))
    .catch((error) => console.error(error));
}

//put Call
function putApiCall(putUrl, headers, body, putData) {
  fetch(putUrl, {
    method: "PUT",
    headers: headers,
    body: body,
  })
    .then((response) => response.json())
    .then((data) => putData(data))
    .catch((err) => console.error(err));
}

//Delete Call
function deleteApiCall(deleteUrl, deleteData) {
  fetch(deleteUrl, {
    method: "DELETE",
  })
    .then((res) => res.json())
    .then((data) => deleteData(data));
}
export { getApiCall, deleteApiCall, putApiCall };
