//do i need lifecycle methodS?
// do i need state?
// if you answer yes to either one, then you need a class component instead of a functional component

import React, {Component} from "react";
import StudentRow from './student_row';


class StudentTable extends Component{

    render(){
    
        const { col = "s12", list } = this.props;
                     // ^ default value
        //const students = this.state.students;
        const studentElements = list.map((student)=>{
            return (
                // <StudentRow key={student.id} name={student.name} course={student.course} grade={student.grade} />
                // <StudentRow key={student.id} {...student}/>
                <StudentRow delete={this.props.delete} key={student.id} {...student} />
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
                            <th>Actions</th>
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