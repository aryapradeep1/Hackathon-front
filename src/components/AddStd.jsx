import axios from "axios";
import React, { useState } from "react";


const AddStd = () => {

  const [input, changeInput] = useState({
    teamId: "",
    teamName: "",
    teamLeaderName: "",
    projectTitle: "",
    leaderEmail: "",
    leaderPhone: "",
    collegeName: "",
    problemStatementTrack: "",
    technologyStack: "",
    mentorName: "",
    registrationDate: "",
    numberOfMembers: "",
    tableStationNumber: ""
  });

  const inputHandler = (event) => {
    changeInput({
      ...input,
      [event.target.name]: event.target.value
    });
  };

  const readValues = () => {

    console.log(input);

    axios
      .post("http://localhost:3000/add-team", input)
      .then((response) => {
        alert("Team Registered Successfully");
        console.log(response.data);

        changeInput({
          teamId: "",
          teamName: "",
          teamLeaderName: "",
          projectTitle: "",
          leaderEmail: "",
          leaderPhone: "",
          collegeName: "",
          problemStatementTrack: "",
          technologyStack: "",
          mentorName: "",
          registrationDate: "",
          numberOfMembers: "",
          tableStationNumber: ""
        });

      })
      .catch((error) => {
        console.log(error);
        alert("Failed to Register Team");
      });

  };

  return (
    <div>

     

      <div className="container mt-4">
        <div className="row">
          <div className="col-12">

            <div className="row g-3">

              <div className="col-md-6">
                <label className="form-label">Team ID</label>
                <input type="text" className="form-control" name="teamId" value={input.teamId} onChange={inputHandler} />
              </div>

              <div className="col-md-6">
                <label className="form-label">Team Name</label>
                <input type="text" className="form-control" name="teamName" value={input.teamName} onChange={inputHandler} />
              </div>

              <div className="col-md-6">
                <label className="form-label">Team Leader Name</label>
                <input type="text" className="form-control" name="teamLeaderName" value={input.teamLeaderName} onChange={inputHandler} />
              </div>

              <div className="col-md-6">
                <label className="form-label">Project Title</label>
                <input type="text" className="form-control" name="projectTitle" value={input.projectTitle} onChange={inputHandler} />
              </div>

              <div className="col-md-6">
                <label className="form-label">Leader Email</label>
                <input type="email" className="form-control" name="leaderEmail" value={input.leaderEmail} onChange={inputHandler} />
              </div>

              <div className="col-md-6">
                <label className="form-label">Leader Phone</label>
                <input type="text" className="form-control" name="leaderPhone" value={input.leaderPhone} onChange={inputHandler} />
              </div>

              <div className="col-md-6">
                <label className="form-label">College Name</label>
                <input type="text" className="form-control" name="collegeName" value={input.collegeName} onChange={inputHandler} />
              </div>

              <div className="col-md-6">
                <label className="form-label">Problem Statement Track</label>
                <input type="text" className="form-control" name="problemStatementTrack" value={input.problemStatementTrack} onChange={inputHandler} />
              </div>

              <div className="col-md-6">
                <label className="form-label">Technology Stack</label>
                <input type="text" className="form-control" name="technologyStack" value={input.technologyStack} onChange={inputHandler} />
              </div>

              <div className="col-md-6">
                <label className="form-label">Mentor Name</label>
                <input type="text" className="form-control" name="mentorName" value={input.mentorName} onChange={inputHandler} />
              </div>

              <div className="col-md-6">
                <label className="form-label">Registration Date</label>
                <input type="date" className="form-control" name="registrationDate" value={input.registrationDate} onChange={inputHandler} />
              </div>

              <div className="col-md-6">
                <label className="form-label">Number of Members</label>
                <input type="number" className="form-control" name="numberOfMembers" value={input.numberOfMembers} onChange={inputHandler} />
              </div>

              <div className="col-md-6">
                <label className="form-label">Table / Station Number</label>
                <input type="text" className="form-control" name="tableStationNumber" value={input.tableStationNumber} onChange={inputHandler} />
              </div>

              <div className="col-12 text-center">
                <button className="btn btn-success" onClick={readValues}>
                  Register Team
                </button>
              </div>

            </div>

          </div>
        </div>
      </div>

    </div>
  );
};

export default AddStd;