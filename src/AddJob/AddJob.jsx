import React from 'react';
import { useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';
import useAuth from '../hooks/useAuth';

const AddJob = () => {

  const { user } = useAuth();
  const navigate = useNavigate();
 

  const handleAddJob = e => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const initialData = Object.fromEntries(formData.entries());

    const { min, max, currency, ...newJob } = initialData;
    newJob.salaryRange = { min, max, currency };
    newJob.requirements = newJob.requirements.split('\n');
    newJob.responsibilities = newJob.responsibilities.split('\n');

    fetch('http://localhost:5000/jobs', {
      method: 'POST',
      headers: {
        'content-type': 'application/json',
      },
      body: JSON.stringify(newJob),
    })
      .then(res => res.json())
      .then(data => {
        if (data.insertedId) {
          Swal.fire({
            position: 'top-end',
            icon: 'success',
            title: 'Job has been added',
            showConfirmButton: false,
            timer: 1500,
          });
          navigate('/myApplications');
        }
      });
  };

  return (
    <div>
      <h2 className="text-3xl mb-4">Post a New Job</h2>
      <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
        <form className="card-body" onSubmit={handleAddJob}>
          {/* Job Title */}
          <div className="form-control">
            <label className="label">
              <span className="label-text">Job Title</span>
            </label>
            <input type="text" name="title" placeholder="Job Title" className="input input-bordered" required />
          </div>

          {/* Job Location */}
          <div className="form-control">
            <label className="label">
              <span className="label-text">Job Location</span>
            </label>
            <input type="text" name="location" placeholder="Job Location" className="input input-bordered" required />
          </div>

          {/* Job Type */}
          <div className="form-control">
            <label className="label">
              <span className="label-text">Job Type</span>
            </label>
            <select defaultValue="Pick a Job type" className="select select-ghost w-full max-w-xs" name="job_type" required>
              <option disabled>Pick a Job type</option>
              <option value="Full Time">Full Time</option>
              <option value="Intern">Intern</option>
              <option value="Part-Time">Part-Time</option>
            </select>
          </div>

          {/* Job Field */}
          <div className="form-control">
            <label className="label">
              <span className="label-text">Job Field</span>
            </label>
            <select defaultValue="Pick a Job Field" className="select select-ghost w-full max-w-xs" name="job_field" required>
              <option disabled>Pick a Job Field</option>
              <option value="Engineering">Engineering</option>
              <option value="Marketing">Marketing</option>
              <option value="Finance">Finance</option>
              <option value="Teaching">Teaching</option>
            </select>
          </div>

          {/* Salary Range and Currency */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 items-end">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Salary Min</span>
              </label>
              <input type="text" placeholder="Min" name="min" className="input input-bordered" required />
            </div>

            <div className="form-control">
              <label className="label">
                <span className="label-text">Salary Max</span>
              </label>
              <input type="text" placeholder="Max" name="max" className="input input-bordered" required />
            </div>

            <div className="form-control">
              <label className="label">
                <span className="label-text">Currency</span>
              </label>
              <select defaultValue="Pick a Currency" className="select select-ghost w-full max-w-xs" name="currency" required>
                <option disabled>Pick a Currency</option>
                <option value="BDT">BDT</option>
                <option value="USD">USD</option>
                <option value="INR">INR</option>
              </select>
            </div>
          </div>

          {/* Job Description */}
          <div className="form-control">
            <label className="label">
              <span className="label-text">Job Description</span>
            </label>
            <textarea className="textarea textarea-bordered" placeholder="Job Description" name="description" required></textarea>
          </div>

          {/* Company Name */}
          <div className="form-control">
            <label className="label">
              <span className="label-text">Company Name</span>
            </label>
            <input type="text" name="company_name" placeholder="Company Name" className="input input-bordered" required />
          </div>

          {/* Job Requirements */}
          <div className="form-control">
            <label className="label">
              <span className="label-text">Job Requirements</span>
            </label>
            <textarea className="textarea textarea-bordered" placeholder="Requirements" name="requirements" required></textarea>
          </div>

          {/* Job Responsibilities */}
          <div className="form-control">
            <label className="label">
              <span className="label-text">Job Responsibilities</span>
            </label>
            <textarea className="textarea textarea-bordered" placeholder="Responsibilities" name="responsibilities" required></textarea>
          </div>

          {/* HR Name */}
          <div className="form-control">
            <label className="label">
              <span className="label-text">HR Name</span>
            </label>
            <input type="text" name="hr_name" placeholder="HR Name" className="input input-bordered" required />
          </div>

          {/* HR Email */}
          <div className="form-control">
            <label className="label">
              <span className="label-text">HR Email</span>
            </label>
            <input type="text" defaultValue={user?.email} name="hr_email" placeholder="HR Email" className="input input-bordered" required />
          </div>

          {/* Application Deadline */}
          <div className="form-control">
            <label className="label">
              <span className="label-text">Deadline</span>
            </label>
            <input type="Date"  name="applicationDeadline" placeholder="Deadline" className="input input-bordered" required />
          </div>

          {/* Company Logo URL */}
          <div className="form-control">
            <label className="label">
              <span className="label-text">Company Logo URL</span>
            </label>
            <input type="url" name="company_logo" placeholder="Company Logo URL" className="input input-bordered" required />
          </div>

          {/* Submit */}
          <div className="form-control mt-6">
            <button type="submit" className="btn btn-primary">Post Job</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddJob;
