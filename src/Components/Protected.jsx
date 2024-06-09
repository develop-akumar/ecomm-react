import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

export default function Protected(props) {
    const naviagte = useNavigate()
    useEffect(() => {
        if (!localStorage.getItem("user-info")) {
            naviagte("/login")
        }
    }, [])
    return (
        <>
        
        <div><props.Cmp /></div>
        
        </>
    )
}
