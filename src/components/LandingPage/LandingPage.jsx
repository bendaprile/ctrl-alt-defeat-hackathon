import './LandingPage.css'
import logo from "../../images/legalbeagles.jpeg";
import { FormControl, InputLabel, TextField } from "@mui/material";
import { DateField, LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { states } from "../../common/states";
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';
import { useState } from "react";
import { callChatGPTAPI } from '../../common/api';
import Button from '@mui/material/Button';

function LandingPage() {
  const [state, setState] = useState("");
  const handleStateChange = (event) => {
    setState(event.target.value)
  }

  const handleSubmit = () => {
    console.log("Clicked");
    //TODO: Call chat gpt api here and go to next page.
  }

  callChatGPTAPI("Hello world").then((response) => {
    console.log(response);
  }).catch((err) => {
    console.error("oops no go" + err);
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
    <form className={"form-fields"}>
      <TextField id="name" className="name-field" label="Full Legal Name" variant="outlined" />
      <LocalizationProvider dateAdapter={AdapterDayjs}>
        <DateField label="Birth Date" className="date-field" />
      </LocalizationProvider>
      <TextField id="address-line-1" className="address-1-field" label="Address Line 1" variant="outlined" />
      <TextField id="address-line-2" className="address-2-field" label="Address Line 2 (optional)" variant="outlined" />
      <TextField id="city" className="city-field" label="City" variant="outlined" />
      <TextField
        id="state-select"
        select
        label="State"
        value={state}
        onChange={handleStateChange}
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
      <TextField id="zip-code" className="zip-field" label="Zip Code" variant="outlined" />
      <TextField
        id="summary"
        className="summary-field"
        label="Summary"
        multiline
        rows={5}
        defaultValue="Please provide a short summary of your legal matter with as much detail as possible so we can best assist you."
      />
      <Button className="submit-button" variant="contained" onClick={handleSubmit} size="large">Submit</Button>
    </form>
  </div>
}

export default LandingPage;
