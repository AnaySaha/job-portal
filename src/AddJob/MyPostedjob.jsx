import React, { useEffect, useState } from 'react';
import useAuth from '../hooks/useAuth';
import { Link } from 'react-router-dom';

const MyPostedjob = () => {
    const [Jobs, setJobs] = useState([]);
    const { user } = useAuth();

    useEffect(() => {
        fetch(`https://job-portal-server-iota-peach.vercel.app/jobs?email=${user.email}`)
            .then(res => res.json())
            .then(data => setJobs(data))
    }, [user.email])

    return (
        <div>
            <h2>My Posted Jobs: {Jobs.length} </h2>
            <div className="overflow-x-auto">
                <table className="table">
                    {/* head */}
                    <thead>
                        <tr>
                            <th></th>
                            <th>Job Title</th>
                            <th>Deadline</th>
                            <th>Application Count</th>
                            <th>View Applications</th>
                        </tr>
                    </thead>
                    <tbody>
                   {
                    Jobs.map((job, index) => <tr>

                        <th>{index + 1}</th>
                        <td>{job.title}</td>
                        <td>{job.applicationDeadline}</td>
                        <td>{job.applicationCount}</td>
                        <td>
                            <Link to ={`/viewApplications/${job._id}`}>
                            <button className="btn btn-link">View Applications</button>
                            </Link>
                        </td>
                    </tr>)
                   }
                      
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default MyPostedjob;