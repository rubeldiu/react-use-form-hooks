import React from "react";
import { useForm, useFieldArray } from "react-hook-form";

const UserInformation = ({ register, control }) => {
    const { fields, append, remove } = useFieldArray({
        control,
        name: "users",
      });
  return (
    <div className="card mb-2">
      <div className="card-header">Add Morde information</div>
      <div className="card-body">
       {
           fields.map((item,index)=>(
            <div className="form-row form-group" key={item.id}>
            <div className="col">
              <input
                type="text"
                className="form-control"
                placeholder="Enter Your First name"
                ref={register()}
                name={`users[${index}].fName`}
                defaultValue={item.fName}
              />
            </div>
            <div className="col">
              <input
                type="text"
                className="form-control"
                placeholder="Enter Your Last name"
                ref={register()}
                name={`users[${index}].lName`}
                defaultValue={item.lName}
              />
            </div>
            <div className="col">
              <input
                type="text"
                className="form-control"
                placeholder="Enter Your E-mail Address"
                ref={register()}
                name={`users[${index}].emailAdd`}
                defaultValue={item.emailAdd}
               
              />
            </div>
            <div className="col">
             
              <select className="form-control" id="state" ref={register()}   name={`users[${index}].state`}
               defaultValue={item.state}
              >
                <option value="">Select Your State</option>
                <option value="Jharkhand">Jharkhand</option>
                <option value="Bihar">Bihar</option>
                <option value="Assam">Assam</option>
                <option value="Goa">Goa</option>
                <option value="Manipur">Manipur</option>
              </select>
            </div>
            <div className="col">
                <button className="btn btn-danger" onClick={()=>remove(index)}>delete</button>
            </div>
          </div>

           ))
       }
        <button className="btn btn-primary" 
         onClick={() =>
            append({
              fName: "",
              lName: "",
              emailAdd: "",
              state: "",
            })
          }
        
        >Add info</button>
      </div>
    </div>
  );
};

const BootStrapForm = () => {
  const { register, handleSubmit, control } = useForm();
  const basicForm = (
    <div className="card mb-3">
      <div className="card-header">Basic Information</div>
      <div className="card-body">
        <div className="form-group">
          <label htmlFor="fullname">Full Name</label>
          <input
            type="text"
            className="form-control"
            id="fullname"
            name="name"
            ref={register}
          />
        </div>
        <div className="form-group">
          <label htmlFor="email">Email address</label>
          <input
            type="email"
            className="form-control"
            id="email"
            name="email"
            ref={register}
          />
        </div>
        <div className="form-group">
          <label htmlFor="phone">Phone Number</label>
          <input
            type="text"
            className="form-control"
            id="phone"
            name="phone"
            ref={register}
          />
        </div>
        <div className="form-group">
          <label htmlFor="password">Password</label>
          <input
            type="password"
            className="form-control"
            id="password"
            name="pass"
            ref={register}
          />
        </div>
      </div>
    </div>
  );
  const onSubmit = (data) => console.log(data);
  return (
    <div className="App">
      <div className="container py-5 ">
        <form onSubmit={handleSubmit(onSubmit)}>
          {basicForm}
          <UserInformation register={register} control={control}/>
          <button className="btn btn-primary" type="submit">
            Save
          </button>
        </form>
      </div>
    </div>
  );
};

export default BootStrapForm;
