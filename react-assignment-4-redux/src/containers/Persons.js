import React, { Component } from "react";

import Person from "../components/Person/Person";
import AddPerson from "../components/AddPerson/AddPerson";
import * as actionType from "../actionType";
import { connect } from "react-redux";
class Persons extends Component {
  //   state = {
  //     persons: []
  //   };

  //   personAddedHandler = () => {
  //     const newPerson = {
  //       id: Math.random(), // not really unique but good enough here!
  //       name: "Tanaya",
  //       age: Math.floor(Math.random() * 40)
  //     };
  //     this.setState(prevState => {
  //       return { persons: prevState.persons.concat(newPerson) };
  //     });
  //   };

  //   personDeletedHandler = personId => {
  //     this.setState(prevState => {
  //       return {
  //         persons: prevState.persons.filter(person => person.id !== personId)
  //       };
  //     });
  //   };

  render() {
    return (
      <div>
        <AddPerson personAdded={this.props.personAddedHandler} />
        {this.props.person.map(person => (
          <Person
            key={person.id}
            name={person.name}
            age={person.age}
            clicked={() => this.props.personDeleteHandler(person.id)}
          />
        ))}
      </div>
    );
  }
}
const mapStateToProps = state => {
  return {
    person: state.person
  };
};
const mapDispatchToProps = dispatch => {
  return {
    personAddedHandler: () => dispatch({ type: actionType.ADD_PERSON }),
    personDeleteHandler: id =>
      dispatch({
        type: actionType.DELETE_PERSON,
        personId: id
      })
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Persons);
