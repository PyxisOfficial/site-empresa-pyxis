<?php
    $nomeUser = $_POST["nomeUser"];
    $emailUser = $_POST["emailUser"];
    $assuntoUser = $_POST["assuntoUser"];
    $msgUser = $_POST["msgUser"];

    if (!empty($nomeUser) && !empty($emailUser) && !empty($assuntoUser) && !empty($msgUser)) {
        $to = "pyxisempresa@gmail.com";
        $subject = $assuntoUser;
        $body = "Nome: " . $nomeUser . "\r\n"
        . "E-mail: " . $emailUser . "\r\n"
        . "Mensagem: " . $msgUser;
        $header = "From:emaildecontato@gmail.com" . "\r\n"
                    . "Reply-to:" . $emailUser . "\r\n"
                    . "X-Mailer: PHP/" . phpversion();

        if (mail($to,$subject,$body,$header)) {
            echo "<script>
                    window.location.href = 'index.html';
                    alert('Mensagem enviada com sucesso!');
                 </script>";
        } else {
            echo "<script>
                    window.location.href = 'index.html';
                    alert('Erro ao enviar a mensagem!');
                 </script>";
        }
    }
?>