import { useNavigate } from "react-router-dom";

import { Button } from "@mui/material";
import { indigoColor } from "../../util/colors.js";
import { useTranslation } from "react-i18next";

export default function GoBackButton() {
    const { t } = useTranslation();

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
                {t('goBack.goBackButton')}
            </Button>
        </div>
    );
}