import React from "react";
import { FormRow, Alert, FormRowSelect } from "../../components";
import { useAppContext } from "../../context/appContext";
import Wrapper from "../../assets/wrappers/DashboardFormPage";

const AddJob = () => {
  const {
    showAlert,
    displayAlert,
    position,
    company,
    jobLocation,
    jobType,
    jobTypeOptions,
    status,
    statusOptions,
    isEditing,
    handleChange,
    clearValues,
    createJob,
    isLoading,
    editJob,
  } = useAppContext();

  const handleJobInput = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    handleChange({ name, value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!position || !company || !jobLocation) {
      displayAlert();
      return;
    }

    if (isEditing) {
      editJob();
      return;
    }

    createJob();
  };

  return (
    <Wrapper>
      <h3>{isEditing ? "edit job" : "add job"}</h3>
      {showAlert && <Alert />}
      <div className="form-center">
        <FormRow
          type="text"
          name="position"
          value={position}
          handleChange={handleJobInput}
        ></FormRow>
        <FormRow
          type="text"
          name="company"
          value={company}
          handleChange={handleJobInput}
        ></FormRow>
        <FormRow
          type="text"
          name="jobLocation"
          labelText="job location"
          value={jobLocation}
          handleChange={handleJobInput}
        ></FormRow>
        {/* job type */}
        <FormRowSelect
          name="status"
          value={status}
          handleChange={handleJobInput}
          list={statusOptions}
        ></FormRowSelect>
        {/* job status */}
        <FormRowSelect
          name="jobType"
          labelText={"job type"}
          value={jobType}
          handleChange={handleJobInput}
          list={jobTypeOptions}
        ></FormRowSelect>
        <div className="btn-container">
          <button
            type="submit"
            className="btn btn-block submit-btn"
            onClick={handleSubmit}
            disabled={isLoading}
          >
            submit
          </button>
          <button className="btn btn-block clear-btn" onClick={clearValues}>
            clear
          </button>
        </div>
      </div>
    </Wrapper>
  );
};

export default AddJob;
