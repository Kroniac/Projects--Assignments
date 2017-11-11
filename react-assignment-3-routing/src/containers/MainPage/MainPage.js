import React, { Component } from "react";
import { Route, NavLink, Switch, Redirect } from "react-router-dom";
import Courses from "../Courses/Courses";
import Users from "../Users/Users";
import "./MainPage.css";

class MainPage extends Component {
  render() {
    return (
      <div>
        <header>
          <nav>
            <ul>
              <li>
                <NavLink to="/courses">Courses</NavLink>
              </li>
              <li>
                <NavLink to="/users">Users</NavLink>
              </li>
            </ul>
          </nav>
        </header>
        <Switch>
          <Route path="/courses" component={Courses} />
          <Route path="/users" component={Users} />
          <Route render={()=><h1>Page Not Found</h1>} />
        </Switch>
      </div>
    );
  }
}

export default MainPage;
