<?php

if (
    isset($_POST['name']) &&
    isset($_POST['email']) &&
    isset($_POST['message'])
) {
    mail('abdelmadjid89@gmail.com', 'Portfolio - ' . $_POST['name'] . ' - ' . $_POST['email'], $_POST['message']);
    // Redirection de l'utilisateur vers la page index ou list-patient en cas de succès
    header('Location: ../index.php?success=Le patient a bien été enregistré !');
    echo 'Votre message est bien parti';
}

?>