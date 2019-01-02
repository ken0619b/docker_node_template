import React, { Component } from 'react';
import './App.css';
import Radium from 'radium';
import Person from './Person/Person';

class App extends Component {
  state = {
    persons: [
      { id: 'dqeqwqeadsad',name: 'aaa', age: 22},
      { id: 'dqeqwqweqweeq',name: 'bbb', age: 26},
      { id: 'dsadawqe',name: 'ccc', age: 33}
    ],
    showPersons: false
  }

  deletePersonHandler = (index) => {
    //const currentPersons = this.state.persons;
    const currentPersons = [...this.state.persons];
    currentPersons.splice(index, 1);
    this.setState({persons: currentPersons});
    
  }

  switchNameHandler = (name) => {
    // console.log('was clicked');
    // DONT'DO this.state.persons[0] = 'abcde'
    console.log(name);
    this.setState({
      persons: [
        ...this.state.persons, 
        { name: 'ddd', age: 30}
      ]
    })
  }

  nameChangeHandler = (event, id) => {
    const personIndex = this.state.persons.findIndex((p) => {
      return p.id === id
    });

    const targetPerson = {
      ...this.state.persons[personIndex]
    }

    targetPerson.name = event.target.value;

    const persons = [...this.state.persons];
    persons[personIndex] = targetPerson

    this.setState({
      persons: persons
    })
  }

  togglePersonsHandler = () => {
    const doesShow = this.state.showPersons;
    this.setState({
      showPersons: !doesShow
    });
  }

  render() {
    const style = {
      backgroundColor: 'green',
      color: 'white',
      font: 'inherit',
      border: '1x solid blue',
      padding: '8px',
      cursol: 'pointer',
      ':hover': {
        backgroundColor: 'lightgreen',
        color: 'black'
      }
    };

    let persons = null;

    if(this.state.showPersons) {
      // 下記の分岐で使用する
      persons = (
        <div>
          {
            this.state.persons.map((person, index) => {
              return (
                <Person
                 click={ () => this.deletePersonHandler(index) }
                 name={ person.name } 
                 age={ person.age }
                 key={ person.id }
                 changed={(event) => this.nameChangeHandler(event, person.id)}

                />
              )
            })
          }
        </div>
      );

      style.backgroundColor = 'red';
      style[':hover'] = {
        backgroundColor: 'salmon',
        color: 'black'
      }
    }

    let classes = [];
    if (this.state.persons.length <= 2) {
      classes.push('red') // classes = ['red']
    }
    if (this.state.persons.length <= 1) {
      classes.push('bold') // classes = ['red', 'bold']
    }
    
    return (
      <div className="App">
        <h1>Hi, I'm ...</h1>
        <p className={classes.join(' ')}>aaaaaaa</p>
        <button 
         style={style} 
         onClick={this.togglePersonsHandler}>Switch Name</button>
         {persons} 
      </div>
    );
  }
}

export default Radium(App);
