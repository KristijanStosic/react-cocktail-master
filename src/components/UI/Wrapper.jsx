import { Container } from "@mui/material";

export default function Wrapper({ children }) {
    return (
        <Container
            sx={{
                p: 4,
                backgroundColor: '#e2e8f0'
            }}
            maxWidth='100%'
        >
            {children}
        </Container>
    );
}