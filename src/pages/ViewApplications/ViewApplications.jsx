import React from 'react';
import { useLoaderData } from 'react-router-dom';

    const ViewApplications = () => {
        const applications = useLoaderData();
    
    return (
        <div>
            <h2 className="text-3xl">Applications for this job: {applications.length}</h2>
        </div>
    );
};

export default ViewApplications;