const users = [
  {
    firstName: "Pierre",
    lastName: "Dupont",
    birthdate: "2000-05-23",
  },
  {
    firstName: "Samir",
    lastName: "Desquesmi",
    birthdate: "2012-02-13",
  },
  {
    firstName: "Loanne",
    lastName: "Tredima",
    birthdate: "2002-10-22",
  },
  {
    firstName: "Paul",
    lastName: "Bismuth",
    birthdate: "1972-10-08",
  },
  {
    firstName: "Tom",
    lastName: "Sawyer",
    birthdate: "1955-01-14",
  },
];

for (let user of users) {
  const birthdate = new Date(user.birthdate);
  let age;
  // Is the birthdate a valid date ?
  if (birthdate instanceof Date && !isNaN(birthdate)) {
    // birthdate is valid
    user.age = new Date(Date.now() - birthdate).getFullYear() - 1970;
    user.premium1825 = user.age > 18 && user.age < 25;
  }
  // birthdate is invalid
}

console.table(users);
