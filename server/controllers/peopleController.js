people = [{id: 0, name: 'Ben', age: 27, car: {make: 'Honda', model: 'Accord'}}]
id = 1

module.exports = {
  getPeople: (req, res) => {
    res.status(200).send(people)
  },
  postPeople: (req, res) => {
    const {name, age, car} = req.body
    const {make, model} = car
    console.log(car)
    const person = {
      name, age, car: {make, model}
    }
    people.push(person)
    res.status(200).send(people)
  },
  putPeople: (req, res)=> {
    const {name, age, car} = req.body
    const {make, model} = car
    const id = req.params
    const i = people.findIndex(person => person.id === +id)
    people[i].name = name
    people[i].age = age
    people[i].car.make = make
    people[i].car.model = model
    res.status(200).send(people)
  },
  deletePeople: (req, res)=> {
    const {id} = req.params
    people = people.filter(person => person.id !== +id)
    res.status(200).send(people)
  }
}