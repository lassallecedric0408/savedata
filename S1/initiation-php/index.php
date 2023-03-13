<?php // Balise ouvrante PHP

/*
première ligne de commentaire
seconde ligne de commentaire
*/

// variable en PHP
$nomDeLaVariable = 'oclock';     // chaine de caractère ou string

$age = 40;      // entier (nombre)

$array = [10, 12, 14];  // array numéroté ou indexé

$arrayAdresses = [          // tableau associatif (paire clé-valeur)
    'rue' => 'rue du cocotier',
    'codePostal' => 13012,
    'ville' => 'Marseille'
];

// Afficher à l'écran : echo (affichage propre), print_r (afficher un tableau) ou var_dump() en mode debug

echo 'Hello';
echo '</br>';
var_dump($age);

print_r($array);

echo $array[0];     // on affiche la première valeur du tableau array
echo '</br>';
print_r($arrayAdresses);
echo '</br>';
echo $arrayAdresses['ville'];
?>