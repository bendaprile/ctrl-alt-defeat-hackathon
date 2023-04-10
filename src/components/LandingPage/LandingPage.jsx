import './LandingPage.css'
import logo from "../../images/legalbeagles.jpeg";
import { TextField } from "@mui/material";
import { DateField, LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { states } from "../../common/states";
import MenuItem from '@mui/material/MenuItem';
import { useState } from "react";
import Button from '@mui/material/Button';
import { useFormik } from 'formik';
import { useNavigate } from "react-router-dom";

function LandingPage() {
  const [valid, setValid] = useState(false);
  const navigate = useNavigate();

  const requiredValues = ["name", "city", "address1", "state", "zipCode", "birthDate", "summary"];
  const hasKeys = (val) => Object.keys(val).length > 0
  const formik = useFormik({
    initialValues: {},
    onSubmit: values => {
      navigate("/chat", {state: formik.values});
    },
    validate: (values) => {
      const errors = {};

      requiredValues.forEach((val) => {
        console.log(val, values[val]);
        if (!values[val]) {
          errors[val] = "Required";
        }
      });

      console.log(errors, valid);
      if (hasKeys(errors) && valid) setValid(false);
      if (!hasKeys(errors) && !valid) setValid(true);
      return errors;
    },
    validateOnMount: true,
    initialErrors: {name: "Required"}
  });

  return <div>
    <div className={"header-area"}>
      <img src={logo} className="logo" alt="logo" />
      <h1>LegalEASE Intake Form</h1>
      <p>Welcome to LegalEASE, powered by ChatGPT! Our intelligent chatbot will guide you through the process of
        providing us with the necessary information to help us understand your legal needs.
        <br /><br />Our goal is to make this process as easy and efficient as possible for you while ensuring that we
        gather all the necessary information to assist you.
        <br /><br />To get started, simply provide us with some basic information about yourself and a short summary of
        your legal matter. Our chatbot will review and ask any follow-up questions.
        <br /><br />Thank you for choosing Legal Beagles Inc.!</p>
    </div>
    <form className={"form-fields"} onSubmit={formik.handleSubmit}>
      <TextField onChange={formik.handleChange} name="name" id="name" className="name-field" label="Full Legal Name"
                 variant="outlined"
                 value={formik.values.name} />
      <LocalizationProvider dateAdapter={AdapterDayjs}>
        <DateField label="Birth Date" name="birthDate" className="date-field" value={formik.values.birthDate}
                   onChange={(value) => formik.handleChange({target: {value, name: "birthDate"}})} />
      </LocalizationProvider>
      <TextField onChange={formik.handleChange} name="address1" id="address1" className="address-1-field"
                 label="Address Line 1" variant="outlined"
                 value={formik.values.address1} />
      <TextField onChange={formik.handleChange} name="address2" id="address-line-2" className="address-2-field"
                 label="Address Line 2 (optional)" variant="outlined"
                 value={formik.values.address2} />
      <TextField onChange={formik.handleChange} name="city" id="city" className="city-field" label="City"
                 variant="outlined" value={formik.values.city} />
      <TextField
        id="state-select"
        select
        label="State"
        name="state"
        value={formik.values.state}
        onChange={formik.handleChange}
        variant="outlined"
        color="secondary"
        inputProps={{
          id: "state-select"
        }}
        fullWidth
      >
        {states.map((state, index) => {
          return <MenuItem value={state.value} key={index}>{state.text}</MenuItem>
        })}
      </TextField>
      <TextField onChange={formik.handleChange} name="zipCode" id="zip-code" className="zip-field" label="Zip Code"
                 variant="outlined"
                 value={formik.values.zipCode} />
      <TextField onChange={formik.handleChange}
                 id="summary"
                 name="summary"
                 className="summary-field"
                 placeholder="Please provide a short summary of your legal matter with as much detail as possible so we can best assist you."
                 label="Summary"
                 multiline
                 rows={5}
                 value={formik.values.summary}
      />
      <Button className="submit-button" variant="contained" onClick={formik.handleSubmit} size="large"
              disabled={!valid}>Submit</Button>
    </form>
  </div>
}

export default LandingPage;
