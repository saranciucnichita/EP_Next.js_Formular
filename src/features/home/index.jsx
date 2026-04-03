"use client";
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { useLocalStorage } from 'react-use';
import { useRouter } from 'next/navigation';
import { DemoContainer } from '@mui/x-date-pickers/internals/demo';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { DateField } from '@mui/x-date-pickers/DateField';
import dayjs from 'dayjs';
import NumberField from '@/components/NumberField';
import SendIcon from '@mui/icons-material/Send';

const FormComponent = () => {
    const router = useRouter();
    const [id, setId] = useLocalStorage('id', 1);
    const [data, setData] = useLocalStorage('data', null);
    const [titlu, setTitlu] = useLocalStorage('titlu', '');
    const [locatie, setLocatie] = useLocalStorage('locatie', '');
    const [descriere, setDescriere] = useLocalStorage('descriere', '');

    const isFormValid = () => {
        return data?.trim() && titlu?.trim() && locatie?.trim();
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        if (isFormValid()) {
            console.log('Form submitted successfully:', { id, data, titlu, locatie, descriere });
            router.push('/view');
        }
    };

    return (
        // h-screen -> height: 100vh;
        <div className="flex items-center justify-center h-screen bg-gray-200">
            {/*lg - 8px, xl - 12px, p - padding, mb - margin-bottom;*/}
            <Box className='border-2 border-black rounded-lg p-6 bg-white'
                component="form"
                sx={{ '& > :not(style)': { m: 1, width: '25ch' } }}
                noValidate
                autoComplete="off"
                onSubmit={handleSubmit}
            >
                <h1 className="text-2xl font-bold mb-4">Evenimente</h1>

                <NumberField
                    label="ID de eveniment"
                    id="id"
                    name="ID de eveniment"
                    value={id || '1'}
                    min={1}
                    max={999}
                    onChange={(value) => setId(value || 1)}
                />

                <LocalizationProvider dateAdapter={AdapterDayjs}>
                    <DemoContainer components={['DateField']}>
                        <DateField
                            required
                            label="Data"
                            value={data ? dayjs(data) : null}
                            onChange={(dataValue) => {
                                if (dataValue && dataValue.isValid()) {
                                    setData(dataValue.format('DD/MM/YYYY'));
                                }
                            }}
                        />
                    </DemoContainer>
                </LocalizationProvider>
                <TextField
                    required
                    id="titlu"
                    placeholder="Titlu"
                    value={titlu || ''}
                    onChange={(e) => setTitlu(e.target.value)}
                    variant="outlined"
                />
                <TextField
                    required
                    id="locatie"
                    placeholder="Locație"
                    value={locatie || ''}
                    onChange={(e) => setLocatie(e.target.value)}
                    variant="outlined"
                />
                <TextField
                    id="descriere"
                    placeholder="Descriere"
                    value={descriere || ''}
                    onChange={(e) => setDescriere(e.target.value)}
                    multiline
                />
                <Button
                    type="submit"
                    variant="contained"
                    color="primary"
                    disabled={!isFormValid()}
                    sx={{ m: 1 }}
                    endIcon={<SendIcon />}
                >
                    Submit
                </Button>
            </Box>
        </div>
    );
};

export default FormComponent;
