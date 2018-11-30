import React from "react";
import "../App.css";

class Student extends React.Component {
    render() {
        const selected = this.props.selected;
        const students = this.props.students;
        const student = students.map(student => {
            if (selected == student.id) {
                return (
                    <div>
                        <button onClick={this.props.back} name="back" className="back">Back to Class</button>
                        <div className="studentBody">
                            <h1 className="person">{student.name}</h1>
                            <div className="imageCont">
                                <img src={student.fave_animal} alt={student.name} className="image" />
                            </div>
                            <div className="personInfo">
                                <p>Previous Occupation: {student.previous_occupation}</p>
                                <p>Hometown Lat: {student.hometown_lat}</p>
                                <p>Hometown Long: {student.hometown_long}</p>
                                <p>Useless Superpower: {student.useless_superpower}</p>
                            </div>
                        </div>
                    </div>
                )
            }
        })

        return (
            <div>
                {student}
            </div>
        )
    }
}

export default Student;