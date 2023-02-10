<?php
  // Código funcionalidades Calculadora UVA
  $currentDate = date('Y-m-d');
  
  // Datos de la API
  $url = 'https://api.estadisticasbcra.com/uva';
  $headers = array(
    'Authorization: Bearer eyJhbGciOiJIUzUxMiIsInR5cCI6IkpXVCJ9.eyJleHAiOjE3MDcxMTI1NDQsInR5cGUiOiJleHRlcm5hbCIsInVzZXIiOiJ0YW5vLnRyb3BlYS5yZ0BnbWFpbC5jb20ifQ.OUZSUdx_po0U0EWfqeASoY1OBIBan8gEk7CdyF59IaP3y1nJ_1yb2k8DhpBATIgV_pqJQ86T-nkeZgf3yFcp2A'
  );
  $userDate = $_GET['d'];
  
  // Hacer la petición a la API
  $ch = curl_init();
  curl_setopt($ch, CURLOPT_URL, $url . '?d=' . $userDate);
  curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
  curl_setopt($ch, CURLOPT_HTTPHEADER, $headers);
  curl_setopt($ch, CURLOPT_TIMEOUT, 5);
  $data = json_decode(curl_exec($ch));
  
  if (curl_errno($ch)) {
    echo "El tiempo de respuesta de la API ha expirado";
  } else {
    // Recorrer los datos y encontrar el que coincide con la fecha del usuario
    foreach ($data as $info) {
      if ($info->d === $userDate) {
        $UVAvalue = $info->v;
        break;
      }
    }
  }
  
  curl_close($ch);
?>
