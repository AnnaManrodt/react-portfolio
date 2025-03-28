import React from 'react';
import { useForm, ValidationError } from '@formspree/react';
import { TextField, Button, Typography, Container, Box } from '@mui/material';

function ContactForm() {
    const [state, handleSubmit] = useForm("mkgjvgal");

    if (state.succeeded) {
        return <Typography variant="h2">Thanks for Reaching out!</Typography>;
    }

    return (
        <Container maxWidth="sm">
            <Box
                sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'center',
                    alignItems: 'center',
                    padding: 2,
                }}
            >
                <Typography variant="h4" gutterBottom>
                    Contact Us
                </Typography>
                <form onSubmit={handleSubmit} style={{ width: '100%' }}>
                    <TextField
                        label="Email Address"
                        id="email"
                        name="email"
                        type="email"
                        fullWidth
                        margin="normal"
                        variant="outlined"
                        required
                    />
                    <ValidationError prefix="Email" field="email" errors={state.errors} />

                    <TextField
                        label="Message"
                        id="message"
                        name="message"
                        fullWidth
                        margin="normal"
                        variant="outlined"
                        required
                        multiline
                        rows={4}
                    />
                    <ValidationError prefix="Message" field="message" errors={state.errors} />

                    <Button
                        type="submit"
                        variant="contained"
                        color="primary"
                        fullWidth
                        disabled={state.submitting}
                        sx={{ mt: 2 }}
                    >
                        Submit
                    </Button>
                </form>
            </Box>
        </Container>
    );
}

function App() {
    return <ContactForm />;
}

export default App;
