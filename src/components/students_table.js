//do i need lifecycle methodS?
// do i need state?
// if you answer yes to either one, then you need a class component instead of a functional component

import React, {Component} from "react";


class StudentTable extends Component{

    render(){
    
        const { col = "s12", list } = this.props;
                     // ^ default value
        //const students = this.state.students;
        const studentElements = list.map((student)=>{
            return (
                <tr key={student.id}>
                    <td>{student.name}</td>
                    <td>{student.course}</td>
                    <td>{student.grade}</td>
                </tr>
            );
        });

        return (
            <div className={`col ${col}`}>
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