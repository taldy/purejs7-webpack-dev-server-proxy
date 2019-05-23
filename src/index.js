import axios from 'axios';


function run() {
  const url = document.querySelector("#container1 .url").value;
  const method = document.querySelector("#container1 .method").value;
  const requestBody = document.querySelector("#container1 .request").value;
  const requestData = JSON.parse(requestBody);
  console.log('requestData', requestData);

  const responseStatusEl = document.querySelector(
    "#container1 .response-status"
  );
  const responseBodyEl = document.querySelector("#container1 .response");

  axios({
    url,
    method,
    data: method === "get" || method === "delete" ? null : requestData
  })
    .then(response => {
      const status = `${response.status} ${response.statusText}`;
      
      responseStatusEl.textContent = status;
      responseBodyEl.textContent = JSON.stringify(response.data, null, 2);
    })
    .catch(error => {
      const status = `${error.response.status} ${error.response.statusText}`;

      responseStatusEl.textContent = status;
      responseBodyEl.textContent = "";
    });
}

function checkRequestBodyStatus() {
  const method = document.querySelector("#container1 .method").value;

  document.querySelector("#container1 .request").disabled =
    method === "get" || method === "delete";
}

function attachEventLesteners() {
  document.querySelector("#container1 button").addEventListener("click", run);
  document
    .querySelector("#container1 .method")
    .addEventListener("change", checkRequestBodyStatus);
  checkRequestBodyStatus;
}


attachEventLesteners();
checkRequestBodyStatus();
