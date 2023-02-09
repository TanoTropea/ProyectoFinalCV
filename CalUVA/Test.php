<!DOCTYPE html>
<html>
<head>
  <title>Consulta UVA por fecha específica</title>
</head>
<body>
  <form action="" method="get">
    <label for="userDateInput">Fecha:</label>
    <input type="text" id="userDateInput" name="d">
    <input type="submit" value="Consultar">
  </form>
  <?php
    if (isset($_GET['d'])) {
      $date = $_GET['d'];
      $curl = curl_init();

      curl_setopt_array($curl, array(
        CURLOPT_URL => "https://api.estadisticasbcra.com/uva",
        CURLOPT_RETURNTRANSFER => true,
        CURLOPT_ENCODING => "",
        CURLOPT_MAXREDIRS => 10,
        CURLOPT_TIMEOUT => 0,
        CURLOPT_FOLLOWLOCATION => true,
        CURLOPT_HTTP_VERSION => CURL_HTTP_VERSION_1_1,
        CURLOPT_CUSTOMREQUEST => "GET",
        CURLOPT_HTTPHEADER => array(
          "Authorization: Bearer eyJhbGciOiJIUzUxMiIsInR5cCI6IkpXVCJ9.eyJleHAiOjE3MDcxMTI1NDQsInR5cGUiOiJleHRlcm5hbCIsInVzZXIiOiJ0YW5vLnRyb3BlYS5yZ0BnbWFpbC5jb20ifQ.OUZSUdx_po0U0EWfqeASoY1OBIBan8gEk7CdyF59IaP3y1nJ_1yb2k8DhpBATIgV_pqJQ86T-nkeZgf3yFcp2A",
        ),
      ));

      $response = curl_exec($curl);
      curl_close($curl);
      $data = json_decode($response, true);

      foreach ($data as $info) {
        if ($info['d'] === $date) {
          $consult_amount = $info['v'];
          break;
        }
      }
    }
  ?>
  <?php if (isset($consult_amount)): ?>
    <div id="ConsultAmount">
      <input type="text" id="UVAvalue" value="<?php echo $consult_amount; ?>" disabled>
    </div>
  <?php endif; ?>
</body>
</html>
