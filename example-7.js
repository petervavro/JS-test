import {cleanConsole, createAll} from './data';

const companies = createAll();

const getIndexById = (id, items = companies) => items.findIndex(
    (i) => (i.id === id),
);

// Part 1: Create a function taking as parameter an "id" of "company" and
// returning the name of this "company".
// -----------------------------------------------------------------------------
// Parte 1: Crear una función tomando como parámetro un "id" de "company" y
// devolviendo el nombre de esta "company".
// -----------------------------------------------------------------------------
// Partie 1 : Créer une fonction prenant en paramètre un "id" de "company" et
// retournant le nom de cette "company".
const f1 = (id) => {
  const index = getIndexById(id);
  if (index > -1) return companies[index].name;
};

// Part 2: Create a function taking as parameter an "id" of "company" and
// removing the "company" from the list.
// -----------------------------------------------------------------------------
// Parte 2: Crear una función tomando como parámetro un "id" de "company" y
// quitando la "company" de la lista.
// -----------------------------------------------------------------------------
// Partie 2 : Créer une fonction prenant en paramètre un "id" de "company" et
// supprimant la "company" de la liste.
const f2 = (id) => {
  const index = getIndexById(id);
  if (index > -1) companies.splice(index, 1);
};

// Part 3: Create a function taking as a parameter an "id" of "company" and
// allowing to make a PATCH (as with an HTTP call) on all
// attributes of this "company" except on the "users" attribute.
// -----------------------------------------------------------------------------
// Parte 3: Crear una función tomando como parámetro un "id" de "company" y
// permitiendo hacer un PATCH (como con una llamada HTTP) en todos los
// atributos de esta "company" excepto en el atributo "users".
// -----------------------------------------------------------------------------
// Partie 3 : Créer une fonction prenant en paramètre un "id" de "company" et
// permettant de faire un PATCH (comme avec un appel HTTP) sur tous les
// attributs de cette "company" sauf sur l'attribut "users".
const f3 = (id) => {
  return (values = {}) => {
    const index = getIndexById(id);
    if (index > -1) {
      // Remove users from new values
      delete values.users;

      companies[index] = {
        ...companies[index],
        ...values,
      };
    }
  };
};

// Part 4: Create a function taking as parameter an "id" of "company" and a
// new "user" whose name is "Delgado", the first name "Juan", aged 35 and
// a car. The new "user" must be added to the "users" list of this
// "company" and have an automatically generated "id". The function must also modify
// the "usersLength" attribute of "company".
// -----------------------------------------------------------------------------
// Parte 4: Crear una función tomando como parámetro un "id" de "company" y un
// nuevo "user" cuyo el apelido es "Delgado", el nombre "Juan", de 35 años y
// dueño de un carro. El nuevo "user" debe agregarse a la lista de "users" de este
// "company" y tener un "id" generado automáticamente. La función también debe modificar
// el atributo "usersLength" de "company".
// -----------------------------------------------------------------------------
// Partie 4 : Créer une fonction prenant en paramètre un "id" de "company" et un
// nouvel "user" dont le nom est "Delgado", le prénom "Juan", ayant 35 ans et
// une voiture. Le nouvel "user" doit être ajouté à la liste des "users" de cette
// "company" et avoir un "id" généré automatiquement. La fonction doit aussi modifier
// l'attribut "usersLength" de "company".
const f4 = (id, user) => {
  const cIndex = getIndexById(id);

  companies[cIndex] = {
    ...companies[cIndex],
    users: [
      ...companies[cIndex].users,
      // The new "user" must be added to the "users" list of this "company"
      {
        ...user,
        id: companies[cIndex].users.length, // and have an automatically generated "id".
      },
    ],
    usersLength: (companies[cIndex].users.length + 1), // Update "usersLength"
  };
};

// Part 5: Create a function taking as parameter an "id" of "company" and
// allowing to make a PUT (as with an HTTP call) on this "company" except
// on the "users" attribute.
// -----------------------------------------------------------------------------
// Parte 5: Crear una función tomando como parámetro un "id" de "company" y
// permitiendo hacer un PUT (como con una llamada HTTP) en esta "company" excepto
// en el atributo "users".
// -----------------------------------------------------------------------------
// Partie 5 : Créer une fonction prenant en paramètre un "id" de "company" et
// permettant de faire un PUT (comme avec un appel HTTP) sur cette "company" sauf
// sur l'attribut "users".
const f5 = (id) => {
  return (values = {}) => {
    const index = getIndexById(id);
    if (index > -1) {
      companies[index] = {
        ...values,
        users: companies[index].users,
      };
    }
  };
};

// Part 6: Create a function taking as a parameter an "id" of "company" and a
// "id" of "user". The function must remove this "user" from the list of "users"
// from "company" and change the attribute "usersLength" from "company".
// -----------------------------------------------------------------------------
// Parte 6: Crear una función tomando como parámetro un "id" de "company" y un
// "id" de "user". La función debe quitar este "user" de la lista de "users"
// de "company" y cambiar el atributo "usersLength" de "company".
// -----------------------------------------------------------------------------
// Partie 6 : Créer une fonction prenant en paramètre un "id" de "company" et un
// "id" de "user". La fonction doit supprimer cet "user" de la liste des "users"
// de la "company" et modifier l'attribut "usersLength" de "company".
const f6 = (cId, uId) => {
  const companyIndex = getIndexById(cId);

  if (companyIndex > -1) {
    const userIndex = getIndexById(
        uId,
        companies[companyIndex].users,
    );

    if (userIndex > -1) {
      companies[companyIndex].users.splice(userIndex, 1);
      companies[companyIndex].usersLength = companies[companyIndex].users.length;
    }
  }
};

// Part 7: Create a function taking as a parameter an "id" of "company" and a
// "id" of "user" allowing to make a PATCH (as with an HTTP call) on this
// "user".
// -----------------------------------------------------------------------------
// Parte 7: Crear una función tomando como parámetro un "id" de "company" y un
// "id" de "user" que permite hacer un PATCH (como con una llamada HTTP) en este
// "user".
// -----------------------------------------------------------------------------
// Partie 7 : Créer une fonction prenant en paramètre un "id" de "company" et un
// "id" de "user" permettant de faire un PATCH (comme avec un appel HTTP) sur cet
// "user".
const f7 = (cId, uId) => {
  return (values) => {
    const companyIndex = getIndexById(cId);

    if (companyIndex > -1) {
      const userIndex = getIndexById(
          uId,
          companies[companyIndex].users,
      );

      if (userIndex > -1) {
        companies[companyIndex].users[userIndex] = {
          ...companies[companyIndex].users[userIndex],
          ...values,
        };
      }
    }
  };
};

// Part 8: Create a function taking as a parameter an "id" of "company" and a
// "id" of "user" allowing to make a PUT (as with an HTTP call) on this
// "user".
// -----------------------------------------------------------------------------
// Parte 8: Crear una función tomando como parámetro un "id" de "company" y un
// "id" de "user" que permite hacer un PUT (como con una llamada HTTP) en este
// "user".
// -----------------------------------------------------------------------------
// Partie 8 : Créer une fonction prenant en paramètre un "id" de "company" et un
// "id" de "user" permettant de faire un PUT (comme avec un appel HTTP) sur cet
// "user".
const f8 = (cId, uId) => {
  return (values) => {
    const companyIndex = getIndexById(cId);

    if (companyIndex > -1) {
      const userIndex = getIndexById(
          uId,
          companies[companyIndex].users,
      );

      if (userIndex > -1) {
        companies[companyIndex].users.splice(userIndex, 1, values);
      }
    }
  };
};

// Part 9: Create a function taking as parameter two "id" of "company" and
// an "id" of "user". The function must allow the user to be transferred as a parameter
// from the 1st "company" to the 2nd "company". The "usersLength" attribute of each
// "company" must be updated.
// -----------------------------------------------------------------------------
// Parte 9: Crear una función tomando como parámetro dos "id" de "company" y
// un "id" de "user". La función debe permitir que el user sea transferido de la
// primera "company" a la segunda "company". El atributo "usersLength" de cada
// "company" debe actualizarse.
// -----------------------------------------------------------------------------
// Partie 9 : Créer une fonction prenant en paramètre deux "id" de "company" et
// un "id" de "user". La fonction doit permettre de transférer l'user en paramètre
// de la 1re "company" à la 2e "company". L'attribut "usersLength" de chaque
// "company" doit être mis à jour.
const f9 = (cFromId, cToId, uId) => {
  const companyIndex = getIndexById(cFromId);

  if (companyIndex > -1) {
    const userIndex = getIndexById(
        uId,
        companies[companyIndex].users,
    );

    if (userIndex > -1) {
      // Add user to other company
      f4(cToId, companies[companyIndex].users[userIndex]);

      // Remove user form previous company
      f6(cFromId, uId);
    }
  }
};

cleanConsole(7, companies);
console.log('---- EXAMPLE 7 part 1 --- ', f1(1));
console.log('---- EXAMPLE 7 part 2 --- ', f2(1));
console.log('---- EXAMPLE 7 part 3 --- ', f3(7)({name: 'Great Company', users: []}));
console.log('---- EXAMPLE 7 part 4 --- ', f4(0, {firstName: 'Juan', lastName: 'Delgado', age: 35, car: true}));
console.log('---- EXAMPLE 7 part 5 --- ', f5(0)({name: 'Great Company'}));
console.log('---- EXAMPLE 7 part 6 --- ', f6(2, 1));
console.log('---- EXAMPLE 7 part 7 --- ', f7(7, 0)({firstName: 'Peter'}));
console.log('---- EXAMPLE 7 part 8 --- ', f8(7, 1)({firstName: 'John'}));
console.log('---- EXAMPLE 7 part 9 --- ', f9(3, 4, 0));
console.log(companies);
