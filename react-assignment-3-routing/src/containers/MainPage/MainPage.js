import React, { Component } from "react";
import { Route, NavLink } from "react-router-dom";
import Courses from "../Courses/Courses";
import Users from "../Users/Users";
import "./MainPage.css"
import Course from "../Course/Course"

class MainPage extends Component {
  render() {
    return (
      <div>
          <header>
            <nav>
        <ul>
          <li><NavLink to="/courses">Courses</NavLink></li>
          <li><NavLink to="/users">Users</NavLink></li>
        </ul>
        </nav>
        </header>
        <Route path="/courses" exact component={Courses} />
        <Route path="/users" component={Users} />
        <Route path="/courses/course" component={Course}/>
      </div>
    );
  }
}

export default MainPage;
