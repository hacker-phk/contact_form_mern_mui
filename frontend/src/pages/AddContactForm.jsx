import React, { useState } from 'react';
import { Box, Paper, Stack, TextField, Button, Typography, Grid } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import useGetData from '../hooks/useGetData';
import { styled } from '@mui/material/styles';

const FormContainer = styled(Paper)(({ theme }) => ({
  padding: '20px', // Increased padding
  maxWidth: '600px',
  margin: '0 auto',
  borderRadius: '12px',
  boxShadow: '0 4px 10px rgba(0, 0, 0, 0.1)',
  backgroundColor: theme.palette.background.paper,
}));

const SubmitButton = styled(Button)(({ theme }) => ({
  backgroundColor: theme.palette.primary.main,
  color: '#fff',
  fontWeight: 'bold',
  '&:hover': {
    backgroundColor: theme.palette.primary.dark,
  },
  padding: '10px', // Increased padding
}));

function AddContactForm() {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [company, setCompany] = useState('');
  const [title, setTitle] = useState('');
  const navigate = useNavigate();
  const { fetchData } = useGetData();

  const handleSubmit = (event) => {
    event.preventDefault();
    const contact = { firstName, lastName, email, phone, company, title };
    fetch('http://localhost:5000/contacts', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(contact),
    })
      .then((response) => response.json())
      .then((data) => {
        alert(data.message);
        if(data.message!=="Contact added successfully")
          return;
        fetchData();
        navigate('/displayusers');
      })
      .catch((error) => {
        alert(error);
        console.error('Error adding contact:', error);
      });
  };

  return (
    <div className="App" style={{ padding: '20px', display: 'flex', justifyContent: 'center' }}>
      <FormContainer>
        <Typography variant="h4" align="center" gutterBottom>
          Add Contact
        </Typography>
        <form onSubmit={handleSubmit}>
          <Grid container spacing={3}>
            <Grid item xs={12} sm={6}>
              <TextField
                label="First Name"
                fullWidth
                variant="outlined"
                value={firstName}
                onChange={(e) => setFirstName(e.target.value)}
                required
                sx={{ padding: '2x' }} // Increased padding fo2input fields
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                label="Last Name"
                fullWidth
                variant="outlined"
                value={lastName}
                onChange={(e) => setLastName(e.target.value)}
                required
                sx={{ padding: '2px' }} // Increased padding fo2input fields
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                label="Email"
                type="email"
                fullWidth
                variant="outlined"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                sx={{ padding: '2px' }} // Increased padding fo2input fields
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                label="Phone"
                type="tel"
                fullWidth
                variant="outlined"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                required
                sx={{ padding: '2px' }} // Increased padding fo2input fields
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                label="Company"
                fullWidth
                variant="outlined"
                value={company}
                onChange={(e) => setCompany(e.target.value)}
                sx={{ padding: '2px' }} // Increased padding fo2input fields
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                label="Title"
                fullWidth
                variant="outlined"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                sx={{ padding: '2px' }} // Increased padding fo2input fields
              />
            </Grid>
            <Grid item xs={12}>
              <SubmitButton fullWidth variant="contained" type="submit">
                Add Contact
              </SubmitButton>
            </Grid>
          </Grid>
        </form>
      </FormContainer>
    </div>
  );
}

export default AddContactForm;
