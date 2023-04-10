import logo from "../../images/legalbeagles.jpeg";
import {TextField} from "@mui/material";

function LandingPage() {
    return <div data-testid="landing-page">
        <img src={logo} className="logo" alt="logo" data-testid="app-logo" />
        <TextField id="name" data-testid="name-input" label="Name" variant="outlined" />
    </div>
}

export default LandingPage;
