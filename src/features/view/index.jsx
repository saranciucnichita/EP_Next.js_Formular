"use client";

import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';

const ViewForm = () => {
    const router = useRouter();

    const [datele, setDatele] = useState({
        id: '',
        data: '',
        titlu: '',
        locatie: '',
        descriere: ''
    });

    // Fetch from localStorage only after mounting
    useEffect(() => {
        const savedData = {
            id: localStorage.getItem('id') || '',
            data: localStorage.getItem('data') || '',
            titlu: localStorage.getItem('titlu') || '',
            locatie: localStorage.getItem('locatie') || '',
            descriere: localStorage.getItem('descriere') || ''
        };
        setDatele(savedData);
    }, []);

    return (
        <div className="flex items-center justify-center h-screen bg-gray-200">
            <Box className='border-2 border-black rounded-lg p-6 bg-white'
                component="form"
                sx={{ '& > :not(style)': { m: 1, width: '25ch' } }}
                noValidate
                autoComplete="off"
            >
                <h1 className="text-2xl font-bold mb-4">Eveniment</h1>
                <h2 className="text-lg mb-2">ID: {datele.id.replace(/"/g, '')}</h2>
                <h2 className="text-lg mb-2">Data: {datele.data.replace(/"/g, '')}</h2>
                <h2 className="text-lg mb-2">Titlu: {datele.titlu.replace(/"/g, '')}</h2>
                <h2 className="text-lg mb-2">Locație: {datele.locatie.replace(/"/g, '')}</h2>
                <h2 className="text-lg mb-2">{datele.descriere.replace(/"/g, '')}</h2>
                <Button variant="contained" color="primary" onClick={() => {
                    localStorage.removeItem('id');
                    localStorage.removeItem('data');
                    localStorage.removeItem('titlu');
                    localStorage.removeItem('locatie');
                    localStorage.removeItem('descriere');
                    router.push('/');
                }}>
                    Reset
                </Button>
            </Box>
        </div>
    );
};

export default ViewForm;
