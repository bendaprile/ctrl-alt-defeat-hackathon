import './LandingPage.css'
import logo from "../../images/legalbeagles.jpeg";
import {TextField} from "@mui/material";
import { DateField, LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import {states} from "../../common/states";
import MenuItem from '@mui/material/MenuItem';
import Select  from '@mui/material/Select';
import {useState} from "react";
import { callChatGPTAPI } from '../../common/api';

function LandingPage() {
    const [state, setState] = useState("Test");
    const handleStateChange = (event) => {
        setState(event.target.value)
    }
    callChatGPTAPI("Hello world").then((response) => {
        console.log(response);
    }).catch((err) => {
        console.error("oops no go" + err);
    });
    return <div data-testid="landing-page">
        <div className={"header-area"}>
            <img src={logo} className="logo" alt="logo" data-testid="app-logo" />
        </div>
        <form className={"form-fields"}>
            <TextField id="name" className="name-field" data-testid="name-input" label="Full Legal Name" variant="outlined" />
            <LocalizationProvider dateAdapter={AdapterDayjs}>
                <DateField label="Birth Date" className="date-field" data-testid="birth-date"/>
            </LocalizationProvider>
            <TextField id="address-line-1" className="address-1-field" data-testid="address-line-1" label="Address Line 1" variant="outlined" />
            <TextField id="address-line-2" className="address-2-field" data-testid="address-line-2" label="Address Line 2 (optional)" variant="outlined" />
            <TextField id="city" className="city-field" data-testid="city" label="City" variant="outlined" />
            <Select
                id="state-select"
                data-testid="state-select"
                className="state-field"
                value={state}
                label="State"
                onChange={handleStateChange}
            >
                {states.map((state, index) => {
                    return <MenuItem value={state.value} key={index}>{state.text}</MenuItem>
                })}
            </Select>
            <TextField id="zip-code" className="zip-field" data-testid="zip-code" label="Zip Code" variant="outlined" />
            <TextField
                id="summary"
                className="summary-field"
                data-testid="summary"
                label="Summary"
                multiline
                rows={5}
                defaultValue="Please provide a short summary of your legal matter with as much detail as possible so we can best assist you."
            />
        </form>
    </div>
}

export default LandingPage;
