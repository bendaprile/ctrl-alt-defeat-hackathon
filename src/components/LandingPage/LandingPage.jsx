import {TextField} from "@mui/material";

function LandingPage() {
    return <div data-testid="landing-page">
        <TextField id="name" data-testid="name-input" label="Name" variant="outlined" />
    </div>
}

export default LandingPage;
