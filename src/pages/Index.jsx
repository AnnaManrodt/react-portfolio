import { useNavigate } from "react-router-dom";
import React, { useEffect } from 'react';

export default function Index() {
    const navigate = useNavigate();
    useEffect(() => {
        // Call navigate() inside the useEffect hook
        navigate('/aboutme');
    }, []);

    return (
        <div>
            <p className="textContent">
            
            </p>
        </div>
    )
}