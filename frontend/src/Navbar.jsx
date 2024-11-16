import React from 'react';
import { Link } from 'react-router-dom';
import { AppBar, Toolbar, Button, Typography } from '@mui/material';

function Navbar() {
  return (
    <AppBar position="static" sx={{ backgroundColor: '#1976d2' }}>
      <Toolbar>
        <Typography variant="h6" sx={{ flexGrow: 1, fontWeight: 'bold', fontSize: '1.5rem', color: '#ffffff' }}>
          Contact Manager
        </Typography>

        <Button
          component={Link}
          to="/"
          sx={{
            color: '#ffffff',
            textTransform: 'none',
            margin: 1,
            '&:hover': {
              backgroundColor: '#1565c0',
            },
          }}
        >
          Home
        </Button>
        <Button
          component={Link}
          to="/addcontact"
          sx={{
            color: '#ffffff',
            textTransform: 'none',
            margin: 1,
            '&:hover': {
              backgroundColor: '#1565c0',
            },
          }}
        >
          Add Contact
        </Button>
        <Button
          component={Link}
          to="/displayusers"
          sx={{
            color: '#ffffff',
            textTransform: 'none',
            margin: 1,
            '&:hover': {
              backgroundColor: '#1565c0',
            },
          }}
        >
          Display Users
        </Button>
      </Toolbar>
    </AppBar>
  );
}

export default Navbar;
