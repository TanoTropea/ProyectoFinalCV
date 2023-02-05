
        const currentDate = new Date();
        const formattedDate = currentDate.toISOString().substr(0, 10);

        document.querySelector("#datetoday").value = formattedDate;

      let DataBank = document.querySelector("#DataBank");
      let fetchDataButton = document.querySelector("#fetchData");
      let userDateInput = document.querySelector("#userDate");

      // Consulta UVA por fecha específica
      fetchDataButton.addEventListener("click", function() {
        $.ajax({
          url: 'https://api.estadisticasbcra.com/uva',
          type: 'GET',
          data: { d: userDateInput.value },
          headers: {
            Authorization:
            "Bearer eyJhbGciOiJIUzUxMiIsInR5cCI6IkpXVCJ9.eyJleHAiOjE3MDcxMTI1NDQsInR5cGUiOiJleHRlcm5hbCIsInVzZXIiOiJ0YW5vLnRyb3BlYS5yZ0BnbWFpbC5jb20ifQ.OUZSUdx_po0U0EWfqeASoY1OBIBan8gEk7CdyF59IaP3y1nJ_1yb2k8DhpBATIgV_pqJQ86T-nkeZgf3yFcp2A",
          },
          success: function(data) {
            console.log(data);
            data.forEach((info) => {
              if (info.d === userDateInput.value) {
                const ConsultAmount = document.querySelector("#ConsultAmount");
                ConsultAmount.innerHTML = `<input type="text" id="UVAvalue" value=${info.v} disabled>`;
                DataBank.append(content);
              }
            });
          }
        });
      });

      // Consulta UVA por fecha actual
      let fetchDataTodayButton = document.querySelector("#fetchDataToday");
      let datetodayInput = document.querySelector("#datetoday");

      fetchDataTodayButton.addEventListener("click", function() {
        $.ajax({
          url: 'https://api.estadisticasbcra.com/uva',
          type: 'GET',
          data: { d: datetodayInput.value },
          headers: {
            Authorization:
            "Bearer eyJhbGciOiJIUzUxMiIsInR5cCI6IkpXVCJ9.eyJleHAiOjE3MDcxMTI1NDQsInR5cGUiOiJleHRlcm5hbCIsInVzZXIiOiJ0YW5vLnRyb3BlYS5yZ0BnbWFpbC5jb20ifQ.OUZSUdx_po0U0EWfqeASoY1OBIBan8gEk7CdyF59IaP3y1nJ_1yb2k8DhpBATIgV_pqJQ86T-nkeZgf3yFcp2A",
          },
          success: function(data) {
            console.log(data);
            data.forEach((info) => {
              if (info.d === datetodayInput.value) {
                const UVAhoy = document.querySelector("#UVAhoy");
                UVAhoy.innerHTML = `<input type="text" id="UVAhoyValue" value=${info.v} disabled>`;
              }
            });
          }
        });
      });

      // Cálculo de préstamo en UVA
      let calculateUVA = document.querySelector("#calculateUVA");

      calculateUVA.addEventListener("click", function() {
        let userAmount = document.querySelector("#userAmount").value;
        let UVAvalue = document.querySelector("#UVAvalue").value;
        let resultDiv = document.querySelector("#result");

        let result = (userAmount / UVAvalue).toFixed(2);

        resultDiv.innerHTML = `<input type="text" value=${result} disabled>`;
      });

      // Cálculo de la deuda total a la fecha
      let CalcTotal = document.querySelector("#CalcTotal");
      CalcTotal.addEventListener("click", function() {
      let result = document.querySelector("#result input").value;
      let UVAhoyValue = document.querySelector("#UVAhoyValue").value;
      let Total = document.querySelector("#Total");

      let total = (result * UVAhoyValue).toFixed(2);

      Total.innerHTML = `<input type="text" value=${total} disabled>`;
      });