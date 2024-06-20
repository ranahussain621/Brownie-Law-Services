import { Typography, Button } from '@material-tailwind/react'
import { Table, Link, TableContainer, TableHead, TableBody, FormControlLabel, Switch, TableRow, TableCell, Paper, Avatar, Box, } from "@mui/material"
import React, { useState } from 'react'
import SearchIcon from "../../assets/images/search.png";
import Rating from '@mui/material/Rating';

const Reviews = () => {
    const [value, setValue] = useState(2);

    const tableData = [{
        "name": <Box display="flex" alignItems="center">
            <Avatar sx={{ bgcolor: '#6A5B97', marginRight: 2 }}>D</Avatar>
            <Typography>David Deacon</Typography>
        </Box>,
        "content": <Typography>I use this website on a daily basis. The amount of c.....</Typography>,
        "rating": <Rating
            name="simple-controlled"
            value={value}
            size='large'
            onChange={(event, newValue) => {
                setValue(newValue);
            }}
        />,
        "date": <Typography>Mar 23, 2022, 13:00 PM</Typography>,
        "status": <Box>
            <Switch sx={{
                '& .Mui-checked': {
                    color: '#28C76F',
                },
            }}
                checked={true} />
            <Link>Delete</Link>
        </Box>,
    }, {
        "name": <Box display="flex" alignItems="center">
            <Avatar sx={{ bgcolor: '#2EBD59', marginRight: 2 }}>L</Avatar>
            <Typography>Larry Brown</Typography>
        </Box>,
        "content": <Typography>Great website, great content and great support!</Typography>,
        "rating": <Rating
            name="simple-controlled"
            value={4}
            size='large'
            onChange={(event, newValue) => {
                setValue(newValue);
            }}
        />,
        "date": <Typography>Mar 23, 2022, 13:00 PM</Typography>,
        "status": <Box>
            <Switch sx={{
                '& .Mui-checked': {
                    color: '#28C76F',
                },
            }}
                checked={false} />
            <Link>Delete</Link>
        </Box>,
    }, {
        "name": <Box display="flex" alignItems="center">
            <Avatar sx={{ bgcolor: '#F9A000', marginRight: 2 }}>R</Avatar>
            <Typography>Robert Billings</Typography>
        </Box>,
        "content": <Typography>Website needs more content good website but con...</Typography>,
        "rating": <Rating
            name="simple-controlled"
            value={3}
            size='large'
            onChange={(event, newValue) => {
                setValue(newValue);
            }}
        />,
        "date": <Typography>Mar 23, 2022, 13:00 PM</Typography>,
        "status": <Box>
            <Switch sx={{
                '& .Mui-checked': {
                    color: '#28C76F',
                },
            }}
                checked={false} />
            <Link>Delete</Link>
        </Box>,
    }, {
        "name": <Box display="flex" alignItems="center">
            <Avatar sx={{ bgcolor: '#0F82FF', marginRight: 2 }}>D</Avatar>
            <Typography>Daniel Callaghan</Typography>
        </Box>,
        "content": <Typography>Great!</Typography>,
        "rating": <Rating
            name="simple-controlled"
            value={value}
            size='large'
            onChange={(event, newValue) => {
                setValue(newValue);
            }}
        />,
        "date": <Typography>Mar 23, 2022, 13:00 PM</Typography>,
        "status": <Box>
            <Switch sx={{
                '& .Mui-checked': {
                    color: '#28C76F',
                },
            }}
                checked={true} />
            <Link>Delete</Link>
        </Box>,
    }, {
        "name": <Box display="flex" alignItems="center">
            <Avatar sx={{ bgcolor: '#6A5B97', marginRight: 2 }}>J</Avatar>
            <Typography>Joshua Kennedy</Typography>
        </Box>,
        "content": <Typography>Fantastic website! has everything i need to know...</Typography>,
        "rating": <Rating
            name="simple-controlled"
            value={3}
            size='large'
            onChange={(event, newValue) => {
                setValue(newValue);
            }}
        />,
        "date": <Typography>Mar 23, 2022, 13:00 PM</Typography>,
        "status": <Box>
            <Switch sx={{
                '& .Mui-checked': {
                    color: '#28C76F',
                },
            }}
                checked={false} />
            <Link>Delete</Link>
        </Box>,
    }]

    return (
        <div className='mt-3'>
            <Box display="flex" alignItems="center" justifyContent="space-between">
                <Typography variant='h3' color='black'>Reviews</Typography>
                <input
                    type="text"
                    style={{
                        backgroundColor: '#EFF1F9',
                        padding: '14px',
                        width: '25%',
                        borderRadius: '5px',
                        paddingLeft: '40px',
                        backgroundImage: `url(${SearchIcon})`,
                        backgroundRepeat: 'no-repeat',
                        backgroundPosition: 'left center',
                        backgroundSize: '30px',
                    }}
                    placeholder='Search by amount, payment method...'
                />
            </Box>
            <TableContainer component={Paper} sx={{ maxHeight: 600, marginTop: 10 }}>
                <Table aria-label="simple table" stickyHeader>
                    <TableHead>
                        <TableRow>
                            <TableCell>NAME</TableCell>
                            <TableCell>CONTENT</TableCell>
                            <TableCell>RATING</TableCell>
                            <TableCell>DATE</TableCell>
                            <TableCell>STATUS</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {
                            tableData.map(row => (
                                <TableRow key={row.name}>
                                    <TableCell>{row.name}</TableCell>
                                    <TableCell>{row.content}</TableCell>
                                    <TableCell>{row.rating}</TableCell>
                                    <TableCell>{row.date}</TableCell>
                                    <TableCell>{row.status}</TableCell>
                                </TableRow>
                            ))
                        }
                    </TableBody>
                </Table>
            </TableContainer>
            <div className='mt-5 d-flex justify-content-between row'>
                <div className='mt-2 col-12 col-sm-6 mb-2'>
                    5 results
                </div>
                <div className='col-12 col-sm-6'>
                    <Button variant='outlined'  style={{ color: '#4B5563', border:'none',marginRight:'5px' }}>Previous</Button>
                    <Button variant='outlined'  style={{ color: '#4B5563', border:'none' }}>Next</Button>
                </div>
            </div>
        </div>
    )
}

export default Reviews

