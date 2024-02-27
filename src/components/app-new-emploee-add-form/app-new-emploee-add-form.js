import { Component } from 'react';

import './app-new-emploee-add-form.css'

class AddNewEmploeeForm extends Component{
   constructor(props) {
      super(props)
      this.state = {
         name: '',
         salary: ''
      }
   }

   onChangeValue = (e) => {
      this.setState({
         [e.target.name]: e.target.value
      })
   }
   
   render() {
      const {name, salary} = this.state;
      return (
         <div className="add-emlpoee">
            <h3>Добавьте нового сотрудника</h3>
            <form action="#" className="add-form d-flex" onSubmit={(e) => {
               e.preventDefault();
               if (!name.trim() || !salary.trim()) return;
               this.props.onAddItem({name, salary})
               this.setState({
                  name: '',
                  salary: ''
               })
            }}>
               <input 
                  type="text"
                  className="form-control new-post-label"
                  placeholder="Как его зовут?"
                  name="name"
                  value={name}
                  onChange={this.onChangeValue}/>
               <input 
                  type="text"
                  className="form-control new-post-label"
                  placeholder="З/П в $"
                  name="salary"
                  value={salary}
                  onChange={this.onChangeValue}/>
               <button 
                  type="submit" 
                  className="btn btn-outline-light">Добавить</button>
            </form>
         </div>
      )
   }
}

export default AddNewEmploeeForm;