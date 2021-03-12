import {
  Button,
  Container,
  CssBaseline,
  InputLabel,
  makeStyles,
  TextField,
  Typography,
} from "@material-ui/core";
import React from "react";
import { useForm, useFieldArray } from "react-hook-form";

const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(8),
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: "100%", // Fix IE 11 issue.
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));

//functional Component

const UserInformation = ({ register, control }) => {
  const { fields, append, remove } = useFieldArray({
    control,
    name: "users",
  });

  return (
    <>
      {fields.map((item, index) => (
        <div key={item.id}>
          <TextField
            variant="outlined"
            margin="normal"
            inputref={register()}
            label="Enter your first name "
            name={`users[${index}].firstName`}
            defaultValue={item.firstName}
          />

          <TextField
            variant="outlined"
            margin="normal"
            inputref={register()}
            label="Enter your last name "
            name={`users[${index}].lastName`}
            defaultValue={item.lastName}
          />
          <TextField
            variant="outlined"
            margin="normal"
            inputref={register()}
            label="Enter your email "
            name={`users[${index}].emailAddress`}
            defaultValue={item.emailAddress}
          />
          <div className="col">
            <InputLabel id="state">Select your city</InputLabel>
            <select
              id="state"
              inputref={register()}
              name={`users[${index}].state`}
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

          {/* <Select
            labelId="label"
            id="select"
            inputRef={register()}
            name={`users[${index}].state`}
            defaultValue={item.state}
          >
            <MenuItem value="Dhaka">Dhaka</MenuItem>
            <MenuItem value="Chittagong">Chittagong</MenuItem>
            <MenuItem value="Rajshahi">Rajshahi</MenuItem>
            <MenuItem value="Khulna">Khulna</MenuItem>
          </Select> */}
          <div className="col">
            <Button
              color="secondary"
              variant="contained"
              onClick={() => remove(index)}
            >
              Remove
            </Button>
          </div>
        </div>
      ))}
      <Button
        type="submit"
        fullWidth
        variant="contained"
        color="primary"
        onClick={() =>
          append({
            firstName: "",
            lastName: "",
            emailAddress: "",
            state: "",
          })
        }
      >
        Add +
      </Button>
    </>
  );
};

const ReactForm = () => {
  const classes = useStyles();
  const { register, handleSubmit, control } = useForm();
  const basicForm = (
    <>
      <TextField
        variant="outlined"
        margin="normal"
        fullWidth
        id="fullname"
        label="Full Name "
        name="fullname"
        inputRef={register}
      />

      <TextField
        variant="outlined"
        margin="normal"
        fullWidth
        id="email"
        label="Email"
        name="email"
        inputRef={register}
      />
      <TextField
        variant="outlined"
        margin="normal"
        fullWidth
        id="phone"
        label="Phone"
        name="phone"
        inputRef={register}
      />
      <TextField
        variant="outlined"
        margin="normal"
        fullWidth
        id="password"
        label="Password"
        name="password"
        type="password"
        inputRef={register}
      />
    </>
  );
  const onSubmit = (data) => console.log(data);
  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <div className={classes.paper}>
        <Typography component="h1" variant="h5">
          Basic Information
        </Typography>
        <form className={classes.root} onSubmit={handleSubmit(onSubmit)}>
          {basicForm}
          <UserInformation register={register} control={control} />
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
          >
            Sign In
          </Button>
        </form>
      </div>
    </Container>
  );
};

export default ReactForm;
