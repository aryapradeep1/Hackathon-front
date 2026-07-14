import axios from "axios";
import React, { useEffect, useState } from "react";
import NaviBar from "./NaviBar";


const ViewStd = () => {

    const [team, setTeam] = useState([]);

    useEffect(() => {

        axios.post("http://localhost:3000/view-team")
            .then((response) => {
                setTeam(response.data);
            })
            .catch((error) => {
                console.log(error);
            });

    }, []);

    return (
        <div>

           <NaviBar/>

            <div className="container mt-5">

                <h2 className="text-center mb-4">
                    View Team Registrations
                </h2>

                <table className="table table-bordered table-striped table-hover">

                    <thead className="table-dark">
                        <tr>
                            <th>Sl No</th>
                            <th>Team ID</th>
                            <th>Team Name</th>
                            <th>Team Leader</th>
                            <th>Project Title</th>
                            <th>Leader Email</th>
                            <th>Leader Phone</th>
                            <th>College Name</th>
                            <th>Problem Statement Track</th>
                            <th>Technology Stack</th>
                            <th>Mentor Name</th>
                            <th>Registration Date</th>
                            <th>Members</th>
                            <th>Table / Station No</th>
                        </tr>
                    </thead>

                    <tbody>

                        {team.map((value, index) => (

                            <tr key={value._id}>

                                <td>{index + 1}</td>
                                <td>{value.teamId}</td>
                                <td>{value.teamName}</td>
                                <td>{value.teamLeaderName}</td>
                                <td>{value.projectTitle}</td>
                                <td>{value.leaderEmail}</td>
                                <td>{value.leaderPhone}</td>
                                <td>{value.collegeName}</td>
                                <td>{value.problemStatementTrack}</td>
                                <td>{value.technologyStack}</td>
                                <td>{value.mentorName}</td>
                                <td>{value.registrationDate}</td>
                                <td>{value.numberOfMembers}</td>
                                <td>{value.tableStationNumber}</td>

                            </tr>

                        ))}

                    </tbody>

                </table>

            </div>

        </div>
    );
};

export default ViewStd;