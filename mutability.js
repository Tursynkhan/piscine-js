const person = {
  name: 'Rick',
  age: 77,
  country: 'US',
}

let clone1={}
let clone2={}
let samePerson=person

for (let key in person){
  clone1[key]=person[key];
}
for (let key in person){
  clone2[key]=person[key];
}
person.age=78
person.country='FR'
