<!DOCTYPE html>
<html lang="fr">
<head>
    <meta charset="UTF-8">
    <title>Informations PHP</title>
    <style>
        body {
            font-family: Arial;
            background: #fafafa;
            padding: 20px;
        }
        .carte {
            background: white;
            padding: 20px;
            border-radius: 10px;
            width: 400px;
            margin: auto;
            box-shadow: 0 3px 10px rgba(0,0,0,0.2);
        }
    </style>
</head>
<body>

<div class="carte">
    <h2>Informations Générales (PHP)</h2>

    <?php
        $etablissement = "Université Cadi Ayyad - FSSM";
        $module = "Développement Web";
        $annee = 2025;

        $a = 12;
        $b = 8;

        $somme = $a + $b;
        $produit = $a * $b;

        echo "<p><strong>Établissement :</strong> $etablissement</p>";
        echo "<p><strong>Module :</strong> $module</p>";
        echo "<p><strong>Année :</strong> $annee</p>";

        echo "<hr>";

        echo "<p>Nombre A : $a</p>";
        echo "<p>Nombre B : $b</p>";

        echo "<p><strong>Addition :</strong> $a + $b = $somme</p>";
        echo "<p><strong>Multiplication :</strong> $a × $b = $produit</p>";
    ?>
</div>

</body>
</html>
