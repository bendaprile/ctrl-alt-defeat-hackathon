import './LandingPage.css'
import logo from "../../images/legalbeagles.jpeg";
import {TextField} from "@mui/material";
import { DateField, LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';

function LandingPage() {
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
        </form>
    </div>
}

export default LandingPage;
