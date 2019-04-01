import "materialize-css/dist/css/materialize.min.css"
import "materialize-css/dist/js/materialize.min"
import '../assets/css/app.scss';
import React, {Component} from 'react';
import axios from "axios";
import StudentTable from "./students_table";
import AddStudent from "./add_student";
// import studentData from '../dummy_date/student_list'

class App extends Component {
    state = {
        students: [],
        error: ""
    };

    addStudent = async (student) => {
        await axios.post("/api/grades", student);
        this.getStudentData();
    }

    deleteStudent = async (id) => {
        await axios.delete(`/api/grades/${id}`);
        this.getStudentData();
    }

    componentDidMount(){
        this.getStudentData();
    }

    async getStudentData(){
        //call server here

        /*======================THIS IS A PROMISE========================*/
        // axios.get("http://localhost:3001/api/grades").then((resp) => {       
        //     this.setState({
        //         students: resp.data.data
        //     });
        // }).catch((err) =>{
        //     console.log("Error getting student data:", err.message);
        //     this.setState({
        //         error: "Error retrieving student data"
        //     });
        // });




        try{
            const resp = await axios.get("/api/grades");
        this.setState({
            students: resp.data.data
        });
        } catch(err){
            console.log("Error getting data:", err.message);

            this.setState({
                error: "Error retrieving student data"
            });
        }
    }

    render(){
        return(
            <div>
                <h1 className="center">React SGT</h1>
                <h5 className="red-text text-darken-2">{this.state.error}</h5>
                <div className="row">
                    <StudentTable col="s12 m8" delete={this.deleteStudent} list={this.state.students}/>
                    <AddStudent col="s12 m4" add={this.addStudent}/>
                </div>
            </div>
        );
    }
}

export default App;
