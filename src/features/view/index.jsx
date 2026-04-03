"use client";

import DeleteIcon from '@mui/icons-material/Delete';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import { useState } from 'react';
import { useRouter } from 'next/navigation';

const ViewForm = () => {
    const router = useRouter();

    const [datele] = useState(() => {
        // Check if we are in the browser
        if (typeof window !== 'undefined') {
            return {
                id: localStorage.getItem('id') || '',
                data: localStorage.getItem('data') || '',
                titlu: localStorage.getItem('titlu') || '',
                locatie: localStorage.getItem('locatie') || '',
                descriere: localStorage.getItem('descriere') || ''
            };
        } else
        // Return default if on server
        return { id: '', data: '', titlu: '', locatie: '', descriere: '' };
    });

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
                <Button variant="contained" color="primary" startIcon={<DeleteIcon />} onClick={() => {
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
