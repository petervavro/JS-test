import {createAll, cleanConsole} from './data';
const companies = createAll();

// https://flaviocopes.com/how-to-uppercase-first-letter-javascript/
const capitalize = (s) => {
  if (typeof s !== 'string') return '';
  return s.charAt(0).toUpperCase() + s.slice(1);
};

const replaceUndefinedValues = (entity) => {
  return entity.map((company) => {
    const users = company.users.map((user) => {
      const newUser = {...user};

      Object.keys(user).map(function(key) {
        if (newUser[key] === undefined) newUser[key] = '';

        if (['firstName', 'lastName'].includes(key)) newUser[key] = capitalize(newUser[key]);
      });

      return newUser;
    }).sort((a, b) => a.lastName.localeCompare(b.lastName));
    return {
      ...company,
      name: capitalize(company.name),
      users,
    };
  }).sort(function(a, b) {
    return b.users.length - a.users.length;
  });
};

cleanConsole(1, companies);
console.log('---- EXAMPLE 1 --- ', replaceUndefinedValues(companies));

// -----------------------------------------------------------------------------
// INSTRUCCIONES EN ESPAÑOL

// Crear una función tomando la variable "companies" como parámetro y reemplazando
// todos los valores "undefined" en "usuarios" por un string vacío.
// El nombre de cada "company" debe tener una letra mayúscula al principio, así como
// el apellido y el nombre de cada "user".
// Las "companies" deben ordenarse por su total de "user" (orden decreciente)
// y los "users" de cada "company" deben aparecer en orden alfabético.

// -----------------------------------------------------------------------------
// INSTRUCTIONS IN ENGLISH

// Create a function taking the variable "companies" as a parameter and replacing
// all values "undefined" in "users" by an empty string.
// The name of each "company" must have a capital letter at the beginning as well as
// the last name and first name of each "user".
// The "companies" must be sorted by their number of "user" (decreasing order)
// and the "users" of each "company" must be listed in alphabetical order.

// -----------------------------------------------------------------------------
// INSTRUCTIONS EN FRANÇAIS

// Créer une fonction prenant en paramètre la variable "companies" et remplaçant
// toutes les valeurs "undefined" dans les "users" par un string vide.
// Le nom de chaque "company" doit avoir une majuscule au début ainsi que
// le nom et le prénom de chaque "user".
// Les "companies" doivent être triées par leur nombre de "user" (ordre décroissant)
// et les "users" de chaque "company" doivent être classés par ordre alphabétique.
