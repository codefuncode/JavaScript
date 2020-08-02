<?php
include_once 'connect.php';
// $_POST['busqueda'] = "p";
if (isset($_POST['busqueda'])) {

    if (isset($conn)) {

        $sth = $conn->prepare(
            'SELECT *
            FROM tarea
            WHERE titulo
            LIKE :busqueda'
        );

        $sth->execute(array(
            ':busqueda' => "%" . $_POST['busqueda'] . "%")
        );

        // $sth->execute();

        $result = $sth->fetchAll();

        // print_r($result);
        echo json_encode($result);

    } else {

        // echo 'error';
    }
}
