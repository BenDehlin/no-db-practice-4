import React, {Component} from 'react'
import axios from 'axios'
import './App.css'
import List from './Components/List/List'
import SubmitPerson from './Components/Submit/SubmitPerson'


export default class App extends Component{
  constructor(props){
    super(props)
    this.state = {
      peopleUrl: '/api/people',
      people: []
    }
    this.handleSubmit = this.handleSubmit.bind(this)
    this.handleDelete = this.handleDelete.bind(this)
  }

  componentDidMount(){
    const {peopleUrl} = this.state
    axios.get(peopleUrl).then(results => {
      this.setState({people: results.data})
    }).catch(err => console.log(err))
  }

  handleSubmit(body, submitType, dataType){
    console.log(body)
    const {peopleUrl} = this.state
    let url = ''
    if(dataType === 'people'){url = peopleUrl}
    if(submitType === 'post'){
      axios.post(url, body).then(results => {
        this.setState({people: results.data})
      })
    }
    if(submitType === 'put'){
      axios.put(`${url}/${body.id}`, body).then(results => {
        this.setState({people: results.data})
      })
    }
  }

  handleDelete(id, dataType){
    const {peopleUrl} = this.state
    let url = ''
    if(dataType === 'people'){url = peopleUrl}
    axios.delete(`${url}/${id}`).then(results => {
      this.setState({people: results.data})
    })
  }

  render(){
    const {people} = this.state
    return(
      <div className = "App">
        <SubmitPerson handleSubmit={this.handleSubmit} />
        <List 
          list={people} 
          type='people' 
          handleDelete={this.handleDelete}/>
        <div></div>
      </div>
    )
  }
}