import React from 'react';
import { useLoaderData } from 'react-router-dom';

    const ViewApplications = () => {
        const applications = useLoaderData();
    
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
        <th>Job</th>
        <th>Favorite Color</th>
        <th></th>
      </tr>
    </thead>
    <tbody>

        {
            applications.map((app, index) => <tr key= {app._id}>

            <th>{index + 1 }</th>
            <td>{app.applicant_email}</td>


            </tr>)
        }

        </tbody>
        </table>
        </div>
    );
};

export default ViewApplications;