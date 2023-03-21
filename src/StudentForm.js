import { useState } from "react";
import { useHistory } from "react-router-dom";

const StudentForm = () => { 
        return ( 
            <div className="create">
                <h2>Add a new Student </h2>
                <form>
                    <label>Student Id:</label>
                    <input 
                        type='text' 
                        required
                        // value={team_name}
                        // onChange={(e)=>setTeamName(e.target.value)}
                    >
                    </input>
                    <label>Name of student:</label>
                    <input 
                        type='text' 
                        required
                        // value={team_name}
                        // onChange={(e)=>setTeamName(e.target.value)}
                    >
                    </input>
                    <label>Student contact no.:</label>
                    <input 
                        required
                        // value={team_start_date}
                        // onChange={(e)=> setTeam_start_date(e.target.value)}
                    >
                    </input>
                    <label>Student Depeartment:</label>
                    <input 
                        required
                        // value={team_end_date}
                        // onChange={(e)=> setTeam_end_date(e.target.value)}
                    >
                    </input>
                    
                    {/* <label>Blog Author</label>
                    <select
                        value={author}
                        onChange={(e)=>setAuthor(e.target.value)}
                    >
                        <option value="mario">mario</option>
                        <option value="yoshi">yoshi</option>
                    </select> */}
                    {/* {!isLoading && <button>Add Team</button>}
                    {isLoading && <button>Adding Team...</button>} */}
                    <button>Add Student</button>
                </form>
            </div>
         );
     
}
 
export default StudentForm;