import React from 'react';
import { useLoaderData } from 'react-router-dom';

const JobDetails = () => {

    const job = useLoaderData();
    console.log(job);
    return (
        <div>
            <h2>

            </h2>
        </div>
    );
};

export default JobDetails;