import React from 'react';
import { useLoaderData } from 'react-router-dom';

const ViewApplications = () => {
  const applications = useLoaderData();


  const handleStatusUpdate = (e, id) => {
    console.log(e.target.value, id)

    const data = {
      status: e.target.value
    }
    fetch(`http://localhost:5000/job-applications/${id}`, {
      method: 'PATCH',
      headers: {
        'content-type': 'application/json'
      },
      body: JSON.stringify(data)
    })
    .then(res => res.json())
    .then(data => {
      console.log(data);
    })
  }

  return (
    <div>
      <h2 className="text-3xl">Applications for this job: {applications.length}</h2>

      <table className="table">
        {/* head */}


        <thead>
          <tr>
            <th>
              <label>
                <input type="checkbox" className="checkbox" />
              </label>
            </th>
            <th>Email</th>
            <th>Status</th>
            <th>Update Status</th>
            <th></th>
          </tr>
        </thead>
        <tbody>

          {
            applications.map((app, index) => <tr key={app._id}>

              <th>{index + 1}</th>
              <td>{app.applicant_email}</td>
              <td>Quality Control Specialist</td>
              <td>
                {/* xs */}
                <select 
                onChange={(e) => handleStatusUpdate(e, app._id)}
                defaultValue={app.status || 'Change Status'}
                
                className="select select-bordered select-xs w-full max-w-xs">
                  <option disabled>Change Status</option>
                  <option>Under Review</option>
                  <option>Set Interview</option>
                  <option>Hired</option>
                  <option>Rejected</option>
                </select>

              </td>


            </tr>)
          }

        </tbody>
      </table>
    </div>
  );
};

export default ViewApplications;