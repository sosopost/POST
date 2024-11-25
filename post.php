<?php
    $conn = new mysqli("localhost:3306", "root", "PUC@1234", "expostdb");

    $query = "
        SELECT 
            usuario.nome AS nome, 
            post.titulo AS titulo, 
            COUNT(curtida.idcurtida) AS total_curtidas 
        FROM post
        INNER JOIN usuario ON post.idusuario = usuario.idusuario
        LEFT JOIN curtida ON post.idpost = curtida.idpost
        GROUP BY post.idpost
    ";

    $result = $conn->query($query);

    $posts = [];
    if ($result->num_rows > 0) {
        while ($row = $result->fetch_assoc()) { // $row é um array associativo
            $posts[] = $row; // Adiciona cada linha ao array de posts
        }
    }

    header('Content-Type: application/json');
    echo json_encode($posts);

    $conn->close();
?>
