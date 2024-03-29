import { useState } from "react";

const Navbar = () => {
    const [name,setName]=useState('Assignment3');
    const handleClick=()=>{
        setName('Afourathon')
    }
    const logout=()=>{
        localStorage.setItem('username',"");
        console.log(localStorage.getItem('username'));
        window.location='/';
    }
    return ( 
        <nav className="navbar">
            <h1>{name}</h1>
            <div className="links">
                <a className="sub-name" href="/home1">Home</a>
                {/* <a className="sub-name" href="/home">Home</a>
                <a className="sub-name" href="/team">Teams</a>
                <a className="sub-name" href="/team-members">Members</a>
                <a className="sub-name" href="/create-team">New Team</a>
                <a className="sub-name" href="/create-team-members">New Member</a> */}
                
                <button onClick={logout}>Logout</button>
                {/* <button onClick={handleClick}>Click me</button> */}
            </div>
        </nav>
     );
}
 
export default Navbar;