import { useHistory, useParams } from 'react-router-dom'
import useFetch from './useFetch';
import { Link } from 'react-router-dom'

const StudentDetails = () => {
    // const { id } = useParams();
    // const {data:proj, error, isLoading} = useFetch('http://localhost:8000/my_team_api/' + id);
    // const history= useHistory()
    // const handleEdit=()=>{
    //     history.push(`/edit-team/${id}`);
    // }
    // const members=()=>{
    //     window.location='/team-members'
    // }
    // // console.log(id.id)
    // const handleClick=()=>{
    //     fetch('http://localhost:8000/my_team_api/' + proj.team_id,{
    //         method:'DELETE',
    //     }).then(()=>{
    //         history.push('/home');
    //     })
    // }
    return (
        <div className="blog-details">

            <article>
                <h2>Student Id: </h2>
                <h2>Student Name: </h2>
                <h5>Student Branch: </h5>
                <h5>Email: </h5>
                <h5>Start Date:</h5>
                {/* <button onClick={handleEdit}>Edit</button>
                    <button onClick={handleClick}>Delete</button>
                    <p></p>
                    <button onClick={members}>Team Members</button> */}
                <table id="customers">
                    <tr>
                        <th>Subject Name</th>
                        <th>Dept Name</th>
                        <th>Total creds</th>
                    </tr>
                    <tr>
                        <td>Shreeshail Mahajan</td>
                        <td>CSE</td>
                        <td>9.15</td>
                    </tr>
                </table>
            </article>


        </div>
    );
}

export default StudentDetails;