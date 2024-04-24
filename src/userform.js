import React, { Component } from 'react';
import './userform.css';

class UserForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      email: ''
    };
  }

  handleInputChange = (event) => {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  }

  handleSubmit = (event) => {
    event.preventDefault();
    const { name, email } = this.state;
    alert(`Name: ${name}, Email: ${email}`);
  }

  render() {
    const { name, email } = this.state;
    return (
      <div>
        <h2>San Diego State University, California</h2>
        <form onSubmit={this.handleSubmit}>
          <div>
            <label>Name:</label>
            <input 
              type="text" 
              name="name" 
              value={name} 
              onChange={this.handleInputChange} 
              required 
            />
          </div>
          <div>
            <label>Email:</label>
            <input 
              type="email" 
              name="email" 
              value={email} 
              onChange={this.handleInputChange} 
              required 
            />
          </div>
          <button type="submit">Submit</button>
        </form>
      </div>
    );
  }
}

export default UserForm;
