import { useNavigate } from "react-router-dom";
import React, { useEffect } from 'react';
import { Button, Form, FormGroup, FormLabel, FormControl } from 'react-bootstrap'
export default function Contact() {

    const navigate = useNavigate();
    useEffect(() => {
        // Call navigate() inside the useEffect hook
        navigate('/contact');
    }, []);

    return (
<Form className="border p-3">
    <FormGroup className="mb-3">
        <h2>Contact Me</h2>
    </FormGroup>
    <FormGroup className="mb-3">
        <FormLabel>Name:</FormLabel>
        <FormControl type="text" placeholder="John Doe" required />
    </FormGroup>
    <FormGroup className="mb-3">
        <FormLabel>Email address:</FormLabel>
        <FormControl type="email" placeholder="Enter email" required />
    </FormGroup>
    <FormGroup className="mb-3">
        <FormLabel>Message:</FormLabel>
        <FormControl as="textarea" rows={3} required />
    </FormGroup>
    <Button type="submit" variant="primary">Submit</Button>
</Form>
    )
}