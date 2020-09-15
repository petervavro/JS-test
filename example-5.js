import {cleanConsole, createAll} from './data';
const companies = createAll();

// -----------------------------------------------------------------------------
// INSTRUCTIONS IN ENGLISH

// Use the function created in example 4 to create a
// new function taking as parameter the "companies" variable and returning
// a new object with the following attributes:
//     'size' => number of "users"
//     'average' => average age of "users"
//     'hasCar' => number of "users" owning a car
//     'averageWithCar' => average age of users with a car

// -----------------------------------------------------------------------------
// INSTRUCCIONES EN ESPAÑOL

// Use la función creada en el ejemplo 4 para crear una nueva función tomando
// como parámetro la variable "companies" y devuelve un nuevo objeto con los
// siguientes atributos:
//     'size' => total de "users"
//     'average' => edad promedio de "users"
//     'hasCar' => total de "users" propietarios de un carro
//     'averageWithCar' => edad promedio de los "users" con un carro

// -----------------------------------------------------------------------------
// INSTRUCTIONS EN FRANÇAIS

// Utiliser la fonction créée dans l'exemple 4 pour créer une
// nouvelle fonction prenant en paramètre la variable "companies" et renvoyant
// un nouvel objet avec les attributs suivants :
//     'size' => nombre de "users"
//     'average' => moyenne d'âge des "users"
//     'hasCar' => nombre de "users" possédant une voiture
//     'averageWithCar' => moyenne d'âge des "users" possédant une voiture

import f4 from './example-4';

const getAvg = (ages) => (ages.reduce((a, b) => a + b, 0) / ages.length);

export default function f5(us) {
  // Gets 'average' => average age of "users"
  const ages = us.map((u) => u.age);

  // Gets 'hasCar' => number of "users" owning a car
  const usersWithCar = us.filter(
      (u) => (u.car === true),
  );

  return {
    'size': us.length,
    'average': getAvg(ages),
    'hasCar': usersWithCar.length,
    'averageWithCar': getAvg(usersWithCar.map(
        (u) => u.age),
    ),
  };
}

cleanConsole(5, companies);
console.log('---- EXAMPLE 5 --- ', f5(f4(companies)));
