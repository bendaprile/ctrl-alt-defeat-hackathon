import logo from "../../images/legalbeagles.jpeg";
import {TextField} from "@mui/material";
import { DateField, LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';

function LandingPage() {
    return <div data-testid="landing-page">
        <img src={logo} className="logo" alt="logo" data-testid="app-logo" />
        <TextField id="name" data-testid="name-input" label="Name" variant="outlined" />
        <LocalizationProvider dateAdapter={AdapterDayjs}>
            <DateField label="Birth Date" data-testid="birth-date"/>
        </LocalizationProvider>
    </div>
}

export default LandingPage;
