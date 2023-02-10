 // Ventana de Error para dispositivos móviles
 if( /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) ) {
  var errorMessage = document.createElement("div");
  errorMessage.setAttribute("id", "errorMessage");
  document.body.appendChild(errorMessage);
  document.body.style.overflow = "hidden";
  document.body.style.height = "100vh";

  var errorMessageText = document.createElement("div");
  errorMessageText.innerHTML = "<div><p><h2>Lo sentimos</h2><br>Debido a limitaciónes en la API del BCRA este sitio <strong id=NF><i>no funciona</i></strong> en dispositivos móviles.</p></div>";
  errorMessageText.setAttribute("class", "errorMessageText");
  errorMessage.appendChild(errorMessageText);

  var warning = document.createElement("img");
  warning.src = "/CalUVA/warning.png";
  warning.setAttribute("id", "warningImg");
  errorMessage.appendChild(warning);
  }

  // Consulta UVA por fecha específica

  const TOKEN = "eyJhbGciOiJIUzUxMiIsInR5cCI6IkpXVCJ9.eyJleHAiOjE3MDc1MTQyNzksInR5cGUiOiJleHRlcm5hbCIsInVzZXIiOiJ0YW5vdHJvcGVhQHZrLmNvbSJ9.QGI6wsJnaN0MSLCg18O6N2SbdtvY8SU8bkV9M0KURgBDqWayhGqiKm-_fYAbHPP7pctSW-xwv7sWNWeu8ImTCw";
  const button = document.getElementById("btnConsultar");
  const input = document.getElementById("dateInput");
  const UVAvalue = document.getElementById("UVAvalue");

  button.addEventListener("click", onRequestHandler);

  function onRequestHandler() {
    const selectedDate = input.value;
    const xhr = new XMLHttpRequest();

    xhr.open(
      "GET",
      `https://api.estadisticasbcra.com/uva?d=${selectedDate}`
    );

    xhr.timeout = 5000; // timeout en 5 segundos

    xhr.setRequestHeader("Authorization", `Bearer ${TOKEN}`);

    xhr.send();

    xhr.ontimeout = function() {
      console.error("La petición ha excedido el tiempo de espera.");
    };

    xhr.onload = function () {
      if (this.readyState == 4 && this.status == 200) {
      const data = JSON.parse(xhr.response);
        data.forEach((info) => {
      if (info.d === selectedDate) {
        UVAvalue.value = `💰 ${info.v}`;
        }
      });
        } else {
          console.error("Error en la consulta");
        }
      };
    }