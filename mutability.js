
  let clone1={}
  let clone2={}

  for (let key in person){
    clone1[key]=person[key]
  }
  for (let key in person){
    clone2[key]=person[key]
  }
  let samePerson=person

    person.age=78
    person.country='FR'
