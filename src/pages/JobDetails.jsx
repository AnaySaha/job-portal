import React from 'react';
import { useLoaderData } from 'react-router-dom';
import { Link } from 'react-router-dom';

const JobDetails = () => {

    const { _id, title, company, deadline } = useLoaderData();
   
    return (
        <div className='m-10'>
            <h2 className='text-3xl'>
            Job Details for {title}
            </h2>
            <p>Apply for: {company}</p>
            <p>deadline: {deadline}</p>
            <Link to={`/ApplyJob/${_id}`}>
            <button className='btn btn-primary'>Apply Now</button>
            </Link>
        </div>
    );
};

export default JobDetails;