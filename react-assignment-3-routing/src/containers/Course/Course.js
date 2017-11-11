import React, { Component } from "react";
class Course extends Component {
  state = {
    title: ""
  };
  componentDidMount() {
    console.log(this.props);
    const query = new URLSearchParams(this.props.location.search);
    for (let params of query.entries()) {
      this.setState({ title: params[1] });
    }
  }
  componentDidUpdate() {
    const query = new URLSearchParams(this.props.location.search);
    for (let params of query.entries()) {
      if (this.state.title !== params[1]) this.setState({ title: params[1] });
    }
  }

  render() {
    return (
      <div>
        <h1>{this.state.title}</h1>
        <p>You selected the Course with ID: {this.props.match.params.id}</p>
      </div>
    );
  }
}

export default Course;
