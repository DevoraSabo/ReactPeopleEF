import React from 'react';

const PersonForm = ({ firstName, lastName, age, onInputChange, onSubmit }) => {
    return(
        <div className= "col-md-6 col-md-offset-3 well">
            <div className="col-md-3">
                <input name="firstName" value={firstName} onChange={onInputChange} className="form-control" placeholder="First Name" />
            </div>
            <div className="col-md-3">
                <input name="lastName" value={lastName} onChange={onInputChange} className="form-control" placeholder="Last Name" />
            </div>
            <div className="col-md-3">
                <input name="age" value={age} onChange={onInputChange} className="form-control" placeholder="Age" />
            </div>
            <div className="col-md-3">
                <button className="btn btn-primary" onClick={onSubmit}>Submit</button>
            </div>
          </div >
    );
};

export default PersonForm;