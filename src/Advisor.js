import { useState } from "react";
import { useHistory } from "react-router-dom";

const Advisor = () => {
    return (
        <div className="create">
            <h2>Add a new team </h2>
            <a href="/teacherform">
                <button >Add Techer</button>
            </a>
            <a href="/studentform">
                <button>Add Student</button>
            </a>
        </div>
    );

}

export default Advisor;