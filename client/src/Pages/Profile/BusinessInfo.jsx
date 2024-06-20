import { Button, Typography } from '@material-tailwind/react'
import React, { useState, useEffect } from 'react'
import { Checkbox, FormControl, InputLabel, ListItemText, MenuItem, OutlinedInput, Select, TextField } from '@mui/material'
import InputBase from '@mui/material/InputBase';
import { UpdateFirmProfileDetails } from '../../_redux/features/firm/firmSlice';
import { alpha, styled } from '@mui/material/styles';
import { useDispatch } from 'react-redux'


const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
    PaperProps: {
        style: {
            maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
            width: 250,
        },
    },
};

const names = [
    'Business Lawyer',
    'Constitutional Lawyer',
    'Criminal Defense Lawyer',
    'Employment & Labor Lawyer',
    'Entertainment Lawyer',
    'Estate Planning Lawyer',
    'Fimaily Lawyer',
    'Immigration Lawyer',
    'Tax Lawyer',
    'Kelly Snyder',
];

const BusinessInfo = ({ profileInfo, setActiveTab, onBusinessInfoChange, profileData ,previousBusinessProfile}) => {
    const dispatch = useDispatch()
    const user = JSON.parse(localStorage.getItem('user'))

    const [selectedFlag, setSelectedFlag] = React.useState('');
    const [firmBusinesseDetails, setFirmBusinessDetails] = useState(null);

    const [businessinfo, setBusinessinfo] = useState({
        name: profileInfo?.name,
        phone: profileInfo?.phone,
        address: profileInfo?.address,
        city: profileInfo?.city,
        country: profileInfo?.country,
        state: profileInfo?.state,
        totalAttorneyNum: profileData?.totalAttorneyNum || 0,
        majorPracticeArea: profileData?.majorPracticeArea || '',
        presidingPartner: profileData?.presidingPartner || '',
        majorOfficeLocation: profileData?.majorOfficeLocation || '',
        noOfOffices: profileData?.noOfOffices || 0,
        noteableAwards: profileData?.noteableAwards || '',
        noteableCases: profileData?.noteableCases || '',
        aboutFirm: profileData?.aboutFirm || ''
    })
 
    
    const buttonStyle = {
        backgroundColor: '#2E2829',
        padding: '50px',
        color: 'white', // Text color
        borderRadius: "8px"
    };

    const backButton = {
        borderRadius: "8px",
        padding: '50px',
        marginRight: 10,
        color: 'black', // Text color
        border: '2px solid #2E2829',
    };

    const [specialalityArea, setspecialalityArea] = useState([]);

    const handleChange = (event) => {
        const {
            target: { value },
        } = event;
        setspecialalityArea(
            // On autofill we get a stringified value.
            typeof value === 'string' ? value.split(',') : value,
        );
    };

    const BootstrapInput = styled(InputBase)(({ theme }) => ({
        'label + &': {
            marginTop: theme.spacing(3),
        },
        '& .MuiInputBase-input': {
            borderRadius: 4,
            position: 'relative',
            backgroundColor: theme.palette.mode === 'light' ? '#F3F6F9' : '#1A2027',
            border: '1px solid',
            borderColor: theme.palette.mode === 'light' ? '#E0E3E7' : '#2D3843',
            fontSize: 16,
            width: '100%',
            padding: '10px 12px',
            transition: theme.transitions.create([
                'border-color',
                'background-color',
                'box-shadow',
            ]),
            // Use the system font instead of the default Roboto font.
            //   fontFamily: [
            //     '-apple-system',
            //     'BlinkMacSystemFont',
            //     '"Segoe UI"',
            //     'Roboto',
            //     '"Helvetica Neue"',
            //     'Arial',
            //     'sans-serif',
            //     '"Apple Color Emoji"',
            //     '"Segoe UI Emoji"',
            //     '"Segoe UI Symbol"',
            //   ].join(','),
            //   '&:focus': {
            //     boxShadow: `${alpha(theme.palette.primary.main, 0.25)} 0 0 0 0.2rem`,
            //     borderColor: theme.palette.primary.main,
            //   },
        },
    }));

    const handleNext = () => {
        // Call the function to update the profileInfo state in the parent component
        onBusinessInfoChange(businessinfo);
        previousBusinessProfile(profileData)
        // Switch to the next tab
        setActiveTab(2);
    };


    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setBusinessinfo((prevValue) => ({
            ...prevValue,
            [name]: value,
        }));
    };
    // ===================== button back functionality start===============//

    const handleBackButton = () => {
        // Assuming you have a setCurrentStep function to manage steps
        if (setActiveTab) {
            setActiveTab((prevStep) => prevStep - 1);
        }
        // You can also use react-router or any other navigation method here
      };



    // =====================button back functionality end===============//



    return (
        <div>
            <Typography sx={{ fontSize: "30px !important" }}>Business Information</Typography>
            <div className="row mt-5">
                <div className="col-12 col-md-4 mb-3">
                    <Typography className='mb-2'>Total No. Attorneys</Typography>
                    {/* <TextField
                        select
                        variant='filled'
                        value={selectedFlag}
                        onChange={handleFlagChange}
                        fullWidth
                    >
                        {flagOptions.map((option) => (
                            <MenuItem
                                key={option.value}
                                value={option.value}
                                style={{ padding: '8px 8px' }} // Add some padding for spacing
                            >
                                {option.label}
                            </MenuItem>
                        ))}
                    </TextField> */}
                    <input
                        type="number"
                        value={businessinfo.totalAttorneyNum}
                        name="totalAttorneyNum"
                        placeholder="Total Num Of Attorney"
                        onChange={handleInputChange}
                        style={{
                            width: '100%',
                            backgroundColor: '#EFF1F9',
                            padding: 14,
                            borderRadius: 5,
                            paddingLeft: '40px', // Add left padding for the icon
                        }}
                    />
                </div>
                <div className="col-12 col-md-4 mb-3">
                    <Typography className='mb-2'>Major Practice Areas</Typography>

                    <FormControl sx={{ m: 1, width: 300, margin: '0px' }}>
                        {/* <InputLabel id="demo-multiple-checkbox-label">Tag</InputLabel> */}
                        <input
                             type="text"
                             value={businessinfo.majorPracticeArea}
                             name="majorPracticeArea"
                             placeholder='Major Practice Area'
                             onChange={(e) => {
                                 setBusinessinfo((prevValue) => ({
                                     ...prevValue,
                                     majorPracticeArea: e.target.value,
                                 }));
                             }}
                            style={{
                                width: '100%',
                                backgroundColor: '#EFF1F9',
                                padding: 14,
                                borderRadius: 5,
                                paddingLeft: '40px', // Add left padding for the icon
                            }}
                        />
                    </FormControl>


                </div>
                <div className="col-12 col-md-4 mb-3">
                    <Typography className='mb-2'>Presiding Partner</Typography>
                    {/* <TextField
                        variant='filled'
                        fullWidth
                    /> */}
                    <input
                        type="text"
                        value={businessinfo.presidingPartner}
                        name="presidingPartner"
                        placeholder='Presiding Partner'
                        onChange={handleInputChange}
                        style={{
                            width: '100%',
                            backgroundColor: '#EFF1F9',
                            padding: 14,
                            borderRadius: 5,
                            paddingLeft: '40px', // Add left padding for the icon
                        }}
                    />
                </div>
                <div className="col-12 col-sm-6 col-md-4 mb-3">
                    <Typography className='mb-2'>Major Office Location</Typography>
                    {/* <TextField
                        variant='filled'
                        fullWidth
                    /> */}
                    <input
                        type="text"
                        value={businessinfo.majorOfficeLocation}
                        name="majorOfficeLocation"
                        placeholder='Major Office Location'
                        onChange={handleInputChange}

                        style={{
                            width: '100%',
                            backgroundColor: '#EFF1F9',
                            padding: 14,
                            borderRadius: 5,
                            paddingLeft: '40px', // Add left padding for the icon
                        }}
                    />
                </div>
                <div className="col-12 col-sm-6 col-md-4 mb-3">
                    <Typography className='mb-2'>No. of Offices</Typography>
                    {/* <TextField
                        variant='filled'
                        fullWidth
                    /> */}
                    <input
                        type="Number"
                        value={businessinfo.noOfOffices}
                        name="noOfOffices"
                        placeholder='Num Of Offices'
                        onChange={handleInputChange}

                        style={{
                            width: '100%',
                            backgroundColor: '#EFF1F9',
                            padding: 14,
                            borderRadius: 5,
                            paddingLeft: '40px', // Add left padding for the icon
                        }}
                    />
                </div>
            </div>
            <div className="row">
                <div className="col-12 col-sm-6 mb-3">
                    <Typography className='mb-2'>Noteable Awards</Typography>
                    {/* <TextField
                        variant='filled'
                        fullWidth
                    /> */}
                    <input
                        type="text"
                        value={businessinfo.noteableAwards}
                        name="noteableAwards"
                        placeholder='Awards'
                        onChange={handleInputChange}

                        style={{
                            width: '100%',
                            backgroundColor: '#EFF1F9',
                            padding: 14,
                            borderRadius: 5,
                            paddingLeft: '40px', // Add left padding for the icon
                        }}
                    />
                </div>
                <div className="col-12 col-sm-6 mb-3">
                    <Typography className='mb-2'>Noteable Cases</Typography>
                    {/* <TextField
                        variant='filled'
                        fullWidth
                    /> */}
                    <input
                        type="text"
                        value={businessinfo.noteableCases}
                        name="noteableCases"
                        placeholder='Cases'
                        onChange={handleInputChange}

                        style={{
                            width: '100%',
                            backgroundColor: '#EFF1F9',
                            padding: 14,
                            borderRadius: 5,
                            paddingLeft: '40px', // Add left padding for the icon
                        }}
                    />
                </div>
                <div className="col-12 mb-3">
                    <Typography className='mb-2'>About Firm</Typography>
                    {/* <TextField
                        variant='filled'
                        fullWidth
                    /> */}
                    <input
                        type="text"
                        value={businessinfo.aboutFirm}
                        name="aboutFirm"
                        placeholder='Awards'
                        onChange={handleInputChange}

                        style={{
                            width: '100%',
                            backgroundColor: '#EFF1F9',
                            padding: 14,
                            borderRadius: 5,
                            paddingLeft: '40px', // Add left padding for the icon
                        }}
                    />
                </div>
                <div className='mt-5'>
                    <Button variant='outlined' style={backButton} onClick={handleBackButton}>Back</Button>
                    <Button style={buttonStyle} onClick={handleNext}>Next</Button>
                </div>
            </div>
        </div>
    )
}

export default BusinessInfo
