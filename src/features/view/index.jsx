const ViewForm = () => {
    return (
        <div className="flex items-center justify-center h-screen bg-gray-200">
            <Box className='border-2 border-black rounded-lg p-6 bg-white'
                component="form"
                sx={{ '& > :not(style)': { m: 1, width: '25ch' } }}
                noValidate
                autoComplete="off"
            >
                <h1 className="text-2xl font-bold mb-4">View Event</h1>
                {/* View form fields go here */}
            </Box>
        </div>
    );
};

export default ViewForm;
