"use client";
import Box from '@mui/material/Box';
import { useState } from 'react';

const ViewForm = () => {
    const [id] = useState(() => {
        return localStorage.getItem('id') || '';
    });
    const [titlu] = useState(() => {
        return localStorage.getItem('titlu') || '';
    });
    const [locatie] = useState(() => {
        return localStorage.getItem('locatie') || '';
    });
    const [descriere] = useState(() => {
        return localStorage.getItem('descriere') || '';
    });
    return (
        <div className="flex items-center justify-center h-screen bg-gray-200">
            <Box className='border-2 border-black rounded-lg p-6 bg-white'
                component="form"
                sx={{ '& > :not(style)': { m: 1, width: '25ch' } }}
                noValidate
                autoComplete="off"
            >
                <h1 className="text-2xl font-bold mb-4">Event</h1>
                <h2 className="text-lg mb-2">ID: {id.replace(/"/g, '')}</h2>
                <h2 className="text-lg mb-2">Titlu: {titlu.replace(/"/g, '')}</h2>
                <h2 className="text-lg mb-2">Locație: {locatie.replace(/"/g, '')}</h2>
                {descriere && <h2 className="text-lg mb-2">Descriere: {descriere.replace(/"/g, '')}</h2>}
            </Box>
        </div>
    );
};

export default ViewForm;
