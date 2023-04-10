import './LandingPage.css'
import logo from "../../images/legalbeagles.jpeg";
import {TextField} from "@mui/material";
import { DateField, LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import {states} from "../../common/states";
import MenuItem from '@mui/material/MenuItem';
import Select  from '@mui/material/Select';
import {useState} from "react";

function LandingPage() {
    const [state, setState] = useState("Test");
    const handleStateChange = (event) => {
        setState(event.target.value)
    }
    return <div data-testid="landing-page">
        <div className={"header-area"}>
            <img src={logo} className="logo" alt="logo" data-testid="app-logo" />
        </div>
        <form className={"form-fields"}>
            <TextField id="name" data-testid="name-input" label="Full Legal Name" variant="outlined" />
            <LocalizationProvider dateAdapter={AdapterDayjs}>
                <DateField label="Birth Date" data-testid="birth-date"/>
            </LocalizationProvider>
            <TextField id="address-line-1" data-testid="address-line-1" label="Address Line 1" variant="outlined" />
            <TextField id="address-line-2" data-testid="address-line-2" label="Address Line 2 (optional)" variant="outlined" />
            <TextField id="city" data-testid="city" label="City" variant="outlined" />
            <Select
                id="state-select"
                data-testid="state-select"
                value={state}
                label="State"
                onChange={handleStateChange}
            >
                {states.map((state, index) => {
                    return <MenuItem value={state.value} key={index}>{state.text}</MenuItem>
                })}
            </Select>
            <TextField id="zip-code" data-testid="zip-code" label="Zip Code" variant="outlined" />
            <TextField
                id="summary"
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
