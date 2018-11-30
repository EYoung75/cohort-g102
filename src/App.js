import React, { Component } from 'react';
import './App.css';
import Navbar from "./components/navbar.jsx";
import StudentList from "./components/studentList.jsx";
import Footer from "./components/footer.jsx";
import Student from "./components/student.jsx";

class App extends Component {

  constructor(){
    super()
    this.state = {
      students: [],
      student: 0
    }
  }

  handleStudent = (e) => {
    console.log(e.target.id)
    this.setState({student: e.target.id})
  }

  back = (e) => {
    this.setState({student: 0})
  }

  async componentDidMount() {
    const response = await fetch("https://g102-database.herokuapp.com/")
    const json = await response.json()
    this.setState({students: json})
    console.log(this.state.students)
  }

  render() {

    return (
      <div className="body">
        <Navbar />
        {this.state.student === 0 ? 
        <StudentList students={this.state.students} onClick={this.handleStudent}/> : 
        <Student students={this.state.students} selected={this.state.student} back={this.back}/>}
        
        
        <Footer />
      </div>
    );
  }
}

export default App;
