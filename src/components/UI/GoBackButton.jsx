import { useNavigate } from "react-router-dom";

import { Button } from "@mui/material";
import { indigoColor } from "../../util/colors.js";

export default function GoBackButton() {
    const navigate = useNavigate();

    function handleGoBack() {
        navigate(-1);
    }

    return (
        <div style={{ marginBottom: '1rem' }}>
            <Button
                sx={{ backgroundColor: indigoColor }}
                variant='contained'
                onClick={handleGoBack}>
                Go Back
            </Button>
        </div>
    );
}