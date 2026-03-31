"use client";
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';

export default function HomeComponent() {
    return (
        // h-screen -> height: 100vh;
        <div className="flex items-center justify-center h-screen bg-gray-200 px-6">

            <Box className='border-2 border-black rounded-lg'
                component="form"
                sx={{ '& > :not(style)': { m: 1, width: '25ch' } }}
                noValidate
                autoComplete="off"
            >
                <h1>Evenimente</h1>
                <TextField label="ID" variant="outlined" />
                <TextField label="Titlu" variant="outlined" />
                <TextField label="Locație" variant="outlined" />
                <TextField label="Descriere" variant="outlined" />
                <Button variant="contained">Upload</Button>

            </Box>
        </div>
    );
}
