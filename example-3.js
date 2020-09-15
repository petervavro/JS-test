import {cleanConsole, createAll} from './data';

import f1 from './example-1';

const companies = createAll();

const isCapitalized = (s) => (s.charAt(0) === s.charAt(0).toUpperCase());

const f3 = (companies, hasCar) => {
  return (
    companies.find(
        (company) => {
          // Check company name
          if (!isCapitalized(company.name)) return true;

          return (
            company.users.find(
                (user) => {
                  // Check first name
                  if (
                    (
                      typeof user.firstName === 'string'
                      || user.firstName instanceof String
                    )
                    && !isCapitalized(user.firstName)
                  ) return true;

                  // Check last name
                  if (
                    (
                      typeof user.lastName === 'string'
                      || user.lastName instanceof String
                    )
                    && !isCapitalized(user.lastName)
                  ) return true;

                  return false;
                },
            ) !== undefined
          );
        },
    ) === undefined
  );
};

cleanConsole(3, companies);
console.log('---- EXAMPLE 3 --- ', f3(companies), f3(f1(companies)));

// -----------------------------------------------------------------------------
// INSTRUCTIONS IN ENGLISH

// Create a function taking the "companies" variable as a parameter and returning
// a boolean validating that all the names of the companies and the attributes "firstName"
// and "lastName" of "users" are capitalized. You must test the operation
// of this function by importing the function created for "example-1.js".

// -----------------------------------------------------------------------------
// INSTRUCCIONES EN ESPAÑOL

// Cree una función tomando la variable "companies" como parámetro y devolviendo
// un booleano que valida que todos los nombres de las empresas y los atributos
// "firstName" y "lastName" de "users" están en mayúsculas.
// Debes probar la operación de esta función importando la función creada
// en el "example-1.js".

// -----------------------------------------------------------------------------
// INSTRUCTIONS EN FRANÇAIS

// Créer une fonction prenant en paramètre la variable "companies" et renvoyant
// un booléen validant que tous les noms des "company" et les attributs "firstName"
// et "lastName" des "users" sont en majuscules. Vous devez tester le fonctionnement
// de cette fonction en important la fonction créée pour "example-1.js".
