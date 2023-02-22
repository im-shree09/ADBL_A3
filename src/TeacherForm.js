import { useState } from "react";
import { useHistory } from "react-router-dom";

const TeacherForm = () => { 
        return ( 
            <div className="create">
                <h2>Add a new team </h2>
                <form>
                    <label>Team name:</label>
                    <input 
                        type='text' 
                        required
                        // value={team_name}
                        // onChange={(e)=>setTeamName(e.target.value)}
                    >
                    </input>
                    <label>Team start date:</label>
                    <input 
                        required
                        // value={team_start_date}
                        // onChange={(e)=> setTeam_start_date(e.target.value)}
                    >
                    </input>
                    <label>Team end date:</label>
                    <input 
                        required
                        // value={team_end_date}
                        // onChange={(e)=> setTeam_end_date(e.target.value)}
                    >
                    </input>
                    <label>Team Lead:</label>
                    <input 
                        type='text' 
                        required
                        // value={team_lead}
                        // onChange={(e)=>setTeam_lead(e.target.value)}
                    >
                    </input>
                    <label>Team Lead email:</label>
                    <input 
                        type='email' 
                        required
                        // value={team_lead_email}
                        // onChange={(e)=>setTeam_lead_email(e.target.value)}
                    >
                    </input>
                    <label>Project Name:</label>
                    <input 
                        type='text' 
                        required
                        // value={proj_name}
                        // onChange={(e)=>setProj_name(e.target.value)}
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