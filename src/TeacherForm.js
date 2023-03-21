import { useState } from "react";
import { useHistory } from "react-router-dom";

const TeacherForm = () => { 
        return ( 
            <div className="create">
                <h2>Add a new Teacher </h2>
                <form>
                    <label>Teacher name:</label>
                    <input 
                        type='text' 
                        required
                        // value={team_name}
                        // onChange={(e)=>setTeamName(e.target.value)}
                    >
                    </input>
                    <label>Teacher Department:</label>
                    <input 
                        required
                        // value={team_start_date}
                        // onChange={(e)=> setTeam_start_date(e.target.value)}
                    >
                    </input>
                    <label>Salary:</label>
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
                    <button>Add teacher</button>
                </form>
            </div>
         );
     
}
 
export default TeacherForm;