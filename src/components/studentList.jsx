import React from "react";
import "../App.css";

class StudentList extends React.Component {
    
    render() {
        const students = this.props.students;
        const studentsList = students.map(student => {
            return (
                <div onClick={this.handleClick}>
                    <li id={student.id} onClick={this.props.onClick}>{student.name}</li>
                </div>
            )
        })

        return (
            <div className="studentBody">
                <h1 id="studentHeader">Students of g102:</h1>
                <ul className="students">
                    {studentsList}
                </ul>
            </div>
        )
    }
}

export default StudentList;