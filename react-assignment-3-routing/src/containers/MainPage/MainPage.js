import React ,{Component} from 'react';
import {Route} from "react-router-dom"
import Courses from '../Courses/Courses';
import Users from '../Users/Users';

class MainPage extends Component {
 render(){
     return(
        <div>
        <Route path="/courses" component={Courses} />
        <Route path="/users" component={Users} />
        </div>
     )
 }
}

export default MainPage;