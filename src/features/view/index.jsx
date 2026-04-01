"use client";
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';

const ViewForm = () => {
    const router = useRouter();
    const [isMounted, setIsMounted] = useState(false);
    const [id] = useState(() => {
        return localStorage.getItem('id') || '';
    });
    const [data] = useState(() => {
        return localStorage.getItem('data') || '';
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
    useEffect(() => {
        setIsMounted(true);
    }, []);

    if (!isMounted) {
        return <div className="h-screen bg-gray-200" />; 
    }
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
                <h2 className="text-lg mb-2">Data: {data.replace(/"/g, '')}</h2>
                <h2 className="text-lg mb-2">Titlu: {titlu.replace(/"/g, '')}</h2>
                <h2 className="text-lg mb-2">Locație: {locatie.replace(/"/g, '')}</h2>
                {descriere && <h2 className="text-lg mb-2">{descriere.replace(/"/g, '')}</h2>}
                <Button variant="contained" color="primary" onClick={() => {
                    localStorage.removeItem('id');
                    localStorage.removeItem('data');
                    localStorage.removeItem('titlu');
                    localStorage.removeItem('locatie');
                    localStorage.removeItem('descriere');
                    router.push('/');
                }}>
                    Clear Data
                </Button>
            </Box>
        </div>
    );
};

export default ViewForm;
