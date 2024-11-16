import React from 'react';
import { Box, Button, Typography, Container, Paper } from '@mui/material';
import { Link } from 'react-router-dom';
import { styled } from '@mui/material/styles';

const WelcomePaper = styled(Paper)(({ theme }) => ({
  padding: theme.spacing(4),
  textAlign: 'center',
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  color: theme.palette.text.secondary,
  borderRadius: '10px',
  boxShadow: '0 4px 10px rgba(0, 0, 0, 0.1)',
}));

function WelcomePage() {
  return (
    <Container sx={{ height: '100vh', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
      <WelcomePaper>
        <Typography variant="h3" sx={{ marginBottom: '20px', fontWeight: 'bold' }}>
          Welcome to the Contact Manager App!
        </Typography>
        <Typography variant="body1" sx={{ marginBottom: '30px', color: 'text.secondary' }}>
          Manage your contacts easily, organize your information, and stay connected!
        </Typography>
        <Box sx={{ display: 'flex', justifyContent: 'center', gap: 3 }}>
          <Button variant="contained" color="primary" component={Link} to="/displayusers" sx={{ padding: '10px 20px' }}>
            View Contacts
          </Button>
          <Button variant="outlined" color="primary" component={Link} to="/add" sx={{ padding: '10px 20px' }}>
            Add New Contact
          </Button>
        </Box>
      </WelcomePaper>
    </Container>
  );
}

export default WelcomePage;
