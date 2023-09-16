const data = [
  { name: "john", age: 24, profession: "developer" },
  { name: "jane", age: 27, profession: "admin" },
];

// 1. Print Developers
function printDeveloper() {
  console.log('Developers List: ');
  for(let i of data.filter(e => e.profession == 'developer')){
    console.log(`Name: ${i.name}, Age: ${i.age}, Profession: ${i.profession}`);
  }
}

// 2. Add Data
function addData() {
  let obj = {};
  obj.name = prompt('Enter name: ');
  obj.age = Number(prompt('Enter age(Number only): '));
  obj.profession = prompt('Enter profession: ');
  data.push(obj);
  console.log('Data after new object added: ', data);
}

// 3. Remove Admins
function removeAdmin() {
  let result = [];
  for(let i = 0; i<data.length; i++){
    if(data[i].profession == 'admin'){
      result.push(data[i]);
      data.splice(i, 1);
    }
  }

  console.log('Removed: ', result);
  console.log('After Remove: ', data);
}

// 4. Concatenate dataay
function concatenateArray() {
  let newData = [
    { name: 'sourav', age: 23, profession: 'developer' },
    { name: 'rohit', age: 30, profession: 'Analyst' },
    { name: 'arjun', age: 32, profession: 'tester' }
  ];
  let result = [...data, ...newData];
  console.log('Concatenated Dummy Array:', result);
}

// 5. Average Age
function averageAge() {
  let sum = 0;
  data.forEach(e => {
    sum += e.age;
  });

  console.log('Average age:', sum/data.length);
}

// 6. Age Check
function checkAgeAbove25() {
  let age25 = data.filter(e => e.age>25);

  if(age25.length>0) console.log('Valid');
  else console.log('Invalid');
}

// 7. Unique Professions
function uniqueProfessions() {
  let unique = {};
  let result = [];

  for(let i of data){
    if(!(i.profession in unique)){
      unique[i.profession] = undefined;
      result.push(i.profession);
    }
  }
  console.log('All unique professions:', result);
}

// 8. Sort by Age
function sortByAge() {
  data.sort((a, b) => a.age-b.age);
  console.log('Data after sorted by age in ascending order:', data);
}

// 9. Update Profession
function updateJohnsProfession() {
  data.forEach(e => {
    if(e.name === 'john'){
      e.profession = 'manager';
      console.log(`Profession of jhon updated to manager.\nName: ${e.name}, Age: ${e.age}, Profession: ${e.profession}`);
    }
  });
}

// 10. Profession Count
function getTotalProfessions() {
  let unique = {};
  data.forEach(e => {
    if(e.profession in unique) unique[e.profession] = unique[e.profession] + 1;
    else unique[e.profession] = 1;
  });
  console.log('Total Professions:', unique);
}