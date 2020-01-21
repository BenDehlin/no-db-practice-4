import React, {Component} from 'react'


export default class SubmitPerson extends Component{
  constructor(props){
    super(props)
    this.state = {
      name: '',
      age: '',
      car: {make: '', model: ''}
    }
  }

  handleChange = ({name, value}) => {
    this.setState({[name]: value})
  }
  handleCarChange = ({name, value}) => {
    const {car} = this.state
    car[name] = value
    this.setState({car})
  }

  render(){
    const {name, age, car} = this.state
    const {make, model} = car
    const {handleSubmit} = this.props
    return(
      <div className = "submit">
        <input
          name="name"
          value={name}
          placeholder="Enter Name"
          onChange={(e) => this.handleChange(e.target)}
        />
        <input
          name="age"
          value={age}
          placeholder="Enter Age"
          onChange={(e) => this.handleChange(e.target)}
        />
        <input
          name="make"
          value={make}
          placeholder="Enter Make"
          onChange={(e) => this.handleCarChange(e.target)}
        />
        <input
          name="model"
          value={model}
          placeholder="Enter Model"
          onChange={(e) => this.handleCarChange(e.target)}
        />
        <button
          onClick={() => {
            console.log(this.state)
            handleSubmit(this.state, 'post', 'people')
            this.setState({name: '', age: '', car: {make: '', model: ''}})
          }}
        >Submit</button>
      </div>
    )
  }
}