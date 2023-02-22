import useFetch from './useFetch';

const Home1 = () => {
    // const token=localStorage.getItem('username')
    // const {data:projs, isLoading,error} = useFetch('http://127.0.0.1:8000/my_project_api/')
    // const {data:teams} = useFetch('http://127.0.0.1:8000/my_team_api/')
    // if(!token)
    // {
    //     console.log(token);
    //     window.location='/login'
    // }
    // console.log(token)
    // const login=()=>{
    //     window.location='/'
    // }
    // if(token.length>0){
    //     return ( 
    //         <div className="home">
    //             {error && <div>{error}</div>}
    //             {isLoading && <div>Loading...</div>}
    //             {projs && <BlogList project={projs} teams={teams} title="All Projects" />}
    //         </div>
    //      );
    // }
    return (
        <div className="blog-details">
            <h2>Hello User!</h2>
            <h3>Report Table</h3>
                <table id="customers">
                <tr>
                    <th>Student Id</th>
                    <th>Student Name</th>
                    <th>Student Contact</th>
                    <th>Student Dept</th>
                </tr>
                <tr>
                    <td>2020BTECS00055</td>
                    <td>Shreeshail Mahajan</td>
                    <td>1216584</td>
                    <td>CSE</td>
                </tr>
                </table>
        </div>
    )
}

export default Home1;