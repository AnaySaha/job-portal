import React, { useEffect, useState } from 'react';
import useAuth from '../../hooks/useAuth';
import axios from 'axios';

const MyApplications = () => {
const { user } = useAuth();
const [jobs, setJobs] = useState([]);

useEffect(() => {
//     fetch(`https://job-portal-server-iota-peach.vercel.app/job-applications?email=${user.email}`)

//     .then(res => res.json())
//     .then(data => setJobs(data))

axios.get(`https://job-portal-server-iota-peach.vercel.app/job-applications?email=${user.email}`,
  { withCredentials: true }
)
.then( res => console.log(setJobs(res.data)))

}, [user.email])

    return (
        <div>
            <h2 className="text-3xl">My Applications: {jobs.length}</h2>

            <div className="overflow-x-auto">
  <table className="table">
    {/* head */}


    <thead>
      <tr>
        <th>
          <label>
            <input type="checkbox" className="checkbox" />
          </label>
        </th>
        <th>Name</th>
        <th>Job</th>
        <th>Favorite Color</th>
        <th></th>
      </tr>
    </thead>
    <tbody>
      {/* row 1 *******/}

        {
            jobs.map(job => 
                <tr key={job._id}>
                  <th>
                    <label>
                      <input type="checkbox" className="checkbox" />
                    </label>
                  </th>
                  <td>
                    <div className="flex items-center gap-3">
                      <div className="avatar">
                        <div className="mask mask-squircle h-12 w-12">
                          <img
                            src={job.company_logo}
                            alt="Avatar Tailwind CSS Component" />
                        </div>
                      </div>
                      <div>
                        <div className="font-bold">{job.tittle}</div>
                        <div className="text-sm opacity-50">{job.location}</div>
                      </div>
                    </div>
                  </td>
                  <td>
                    Zemlak, Daniel and Leannon
                    <br />
                    <span className="badge badge-ghost badge-sm">Desktop Support Technician</span>
                  </td>
                  <td>Purple</td>
                  <th>
                    <button className="btn btn-ghost btn-xs">Details</button>
                  </th>
                </tr>
               )
        }
   
    
    </tbody>


  </table>
</div>
        </div>
    );
};

export default MyApplications;<h2 className="text-3xl">My App</h2>