import React from 'react';

const AddJob = () => {
    return (
        <div>
            <h2 className="text-3xl">Post a new Job</h2>

            <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
                <form className="card-body">
                    {/* {job title} */}
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Job Title</span>
                        </label>
                        <input type="text" name="title" placeholder="Job Title" className="input input-bordered" required />
                    </div>


                 {/* {job location} */}
                 <div className="form-control">
                        <label className="label">
                            <span className="label-text">Job Location</span>
                        </label>
                        <input type="text" name="location" placeholder="Job Location" className="input input-bordered" required />
                    </div>

                    {/* {job Type} */}
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Job Type</span>
                        </label>
                        <select className="select select-ghost w-full max-w-xs">
                            <option disabled selected>Pick a Job type</option>
                            <option>Full Time</option>
                            <option>Intern</option>
                            <option>Part-Time</option>
                        </select>
                        
                    </div>

                    {/* {job Field} */}
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Job Field</span>
                        </label>
                        <select className="select select-ghost w-full max-w-xs">
                            <option disabled selected>Pick a Job Field</option>
                            <option>Engineering</option>
                            <option>Marketing</option>
                            <option>Finance</option>
                            <option>Teaching</option>
                        </select>
                        
                    </div>

                    {/* {salary range} */}

                
                <div className='grid grid-cols-1 lg:grid-cols-3 gap-4 items-end'>
               
                    <div className="form-control">
                        
                        <label className="label">
                       
                        <span className="label-text">Salary Range</span>
                        </label>
                        <input type="text" placeholder="min" name="min" className="input input-bordered" required />
                        
                    
                    </div>
                    

                    <div className="form-control">
                        <label className="label">
                            
                        </label>
                        <input type="text" placeholder="max" name="max" className="input input-bordered" required />
                    
                    </div>


                         {/* {salary Currency} */}
                    
                         <div className="form-control">
                        <label className="label">
                           
                        </label>
                        <select className="select select-ghost w-full max-w-xs">
                            <option disabled selected>Pick a Currency</option>
                            <option>BDT</option>
                            <option>USD</option>
                            <option>INR</option>
                            
                        </select>
                    </div>


                </div>
                

                {/* {job Description */}
                <div className="form-control">
                        <label className="label">
                            <span className="label-text">Job Description</span>
                        </label>
                        <input type="text" name="description"   required />
                        <textarea className="textarea textarea-bordered" placeholder="Job Description"></textarea>
                    </div>


                    {/* {Company Name} */}
                 <div className="form-control">
                        <label className="label">
                            <span className="label-text">Company Name</span>
                        </label>
                        <input type="text" name="company name" placeholder="Company Name" className="input input-bordered" required />
                    </div>


                {/* {job Requirements */}
                <div className="form-control">
                        <label className="label">
                            <span className="label-text">Job Requirements</span>
                        </label>
                        <input type="text" name="rewuirements"   required />
                        <textarea className="textarea textarea-bordered" placeholder="Requirements"></textarea>
                    </div>


                
                {/* {Responsibilities */}
                <div className="form-control">
                        <label className="label">
                            <span className="label-text">Job Responsibilities</span>
                        </label>
                        <input type="text" name="Resonsbilities"   required />
                        <textarea className="textarea textarea-bordered" placeholder="Resonsbilities"></textarea>
                    </div>



                    {/* {submit button} */}
                    <label className="label">
                            <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                        </label>
                    <div className="form-control mt-6">
                        <button className="btn btn-primary">Login</button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default AddJob;