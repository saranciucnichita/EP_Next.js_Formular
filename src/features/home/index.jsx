"use client";
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { useState } from 'react';

export default function FormComponent() {
    const [id, setId] = useState('');
    const [titlu, setTitlu] = useState('');
    const [locatie, setLocatie] = useState('');
    const [descriere, setDescriere] = useState('');

    return (
        // h-screen -> height: 100vh;
        <div className="flex items-center justify-center h-screen bg-gray-200">
            {/*lg - 8px, xl - 12px, p - padding, mb - margin-bottom;*/}
            <Box className='border-2 border-black rounded-lg p-6 bg-white'
                component="form"
                sx={{ '& > :not(style)': { m: 1, width: '25ch' } }}
                noValidate
                autoComplete="off"
            >
                <h1 className="text-2xl font-bold mb-4">Evenimente</h1>
                <TextField
                    required
                    id="id"
                    placeholder="ID"
                    value={id}
                    onChange={(e) => setId(e.target.value)}
                    variant="outlined"
                />
                <TextField
                    required
                    id="titlu"
                    placeholder="Titlu"
                    value={titlu}
                    onChange={(e) => setTitlu(e.target.value)}
                    variant="outlined"
                />
                <TextField
                    required
                    id="locatie"
                    placeholder="Locație"
                    value={locatie}
                    onChange={(e) => setLocatie(e.target.value)}
                    variant="outlined"
                />
                <TextField
                    id="descriere"
                    placeholder="Descriere"
                    value={descriere}
                    onChange={(e) => setDescriere(e.target.value)}
                    variant="outlined"
                />
                <Button
                    type="submit"
                    variant="contained"
                    color="primary"
                    disabled
                    sx={{ m: 1 }}
                >
                    Submit
                </Button>
            </Box>
        </div>
    );
}
