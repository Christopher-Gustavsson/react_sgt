//do i need lifecycle methodS?
// do i need state?
// if you answer yes to either one, then you need a class component instead of a functional component

import React, {Component} from "react";
import studentData from '../dummy_date/student_list'

class StudentTable extends Component{

    state = {
        students: []
    };

    

    componentDidMount(){
        this.getStudentData();
    }

    getStudentData(){
        //call server here

        this.setState({
            students: studentData
        });
    }

    render(){
        const { students } = this.state; //this is doing the same thing as the line below
        //const students = this.state.students;
        const studentElements = students.map((student)=>{
            return (
                <tr key={student.id}>
                    <td>{student.name}</td>
                    <td>{student.course}</td>
                    <td>{student.grade}</td>
                </tr>
            );
        });

        return (
            <div className="col s12 m8">
                <table>
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Course</th>
                            <th>Grade</th>
                        </tr>
                    </thead>
                    <tbody>
                        {studentElements}
                    </tbody>
                </table>
            </div>
        );
    }
}

export default StudentTable; 