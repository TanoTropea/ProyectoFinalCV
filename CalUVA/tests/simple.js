fetch("https://api.estadisticasbcra.com/uva", {
  method: "GET",
  headers: {
    "Authorization": "Bearer eyJhbGciOiJIUzUxMiIsInR5cCI6IkpXVCJ9.eyJleHAiOjE3MDcxMTI1NDQsInR5cGUiOiJleHRlcm5hbCIsInVzZXIiOiJ0YW5vLnRyb3BlYS5yZ0BnbWFpbC5jb20ifQ.OUZSUdx_po0U0EWfqeASoY1OBIBan8gEk7CdyF59IaP3y1nJ_1yb2k8DhpBATIgV_pqJQ86T-nkeZgf3yFcp2A"
  }
})
.then(response => response.json())
.then(data => {
  document.querySelector('#result').innerHTML = JSON.stringify(data);
})
.catch(error => {
  console.error(error);
});