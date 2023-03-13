<?php

$nom= 'oclock';
$prenom = 'Cédric';
$age=42;

// On a affiche Bienvenue cedric de chez oclock, tu as 42 ans
// on va utiliser la concaténation : en php, c'est avec l'opérateur .
echo 'Bienvenue ' . $prenom . ' de chez ' . $nom . ',tu as ' . $age . ' ans';   

//Condition

if ($age > 70) {
  //instrustion 
  echo 'Ca va papy ?';
} elseif ((30 < $age) && ($age< 50))
  {echo 'Bonjour, Madame, Monsieur';}
else {
  echo 'Salut';
}

// condition switch

// opérateur 
// && : ET 
// || : OU 
// == : teste l'égalité (valeur) '1' égale à 1
// === : teste la valeur ET le type
// teste la différence : !=

//TODO : reste à faire l'affichage

//Boucle 
// For - While - forEach 

$arrayAdresses = [          // tableau associatif (paire clé-valeur)
  'rue' => 'rue du cocotier',
  'codePostal' => 13012,
  'ville' => 'Marseille'
];

//on boucle sur le tableau $arrayAdresses pour afficher chaque ligne
foreach($arrayAdresses as $cle => $adresse) {
  echo '<br/>';
  echo $cle . ' : ' .$adresse;
}