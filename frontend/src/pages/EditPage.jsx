import React, { useEffect, useState } from 'react';
import { Input, Box, Paper, Stack, Button } from '@mui/material';
import { styled } from '@mui/material/styles';
import { useContacts } from '../context/contactContext';
import { useNavigate } from 'react-router-dom';
import useGetData from '../hooks/useGetData';

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  textAlign: 'center',
  color: theme.palette.text.secondary,
  marginBottom: '10px', // Add margin between inputs
  borderRadius: '8px', // Rounded corners
  padding: '5px', // Increased padding for better spacing
}));

const EditPage = () => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [company, setCompany] = useState('');
  const [title, setTitle] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const { selectedContact } = useContacts();
  const navigate = useNavigate();
  const { fetchData } = useGetData();

  useEffect(() => {
    if (selectedContact) {
      setFirstName(selectedContact.firstName);
      setLastName(selectedContact.lastName);
      setEmail(selectedContact.email);
      setPhone(selectedContact.phone);
      setCompany(selectedContact.company);
      setTitle(selectedContact.title);
    }
  }, [selectedContact]);

  const handleSubmit = (event) => {
    event.preventDefault();
    setIsLoading(true);
    const contact = { firstName, lastName, email, phone, company, title };

    fetch(`http://localhost:5000/contacts${selectedContact ? `/${selectedContact.id}` : ''}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(contact),
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error(`Error: ${response.statusText}`);
        }
        return response.json();
      })
      .then((data) => {
        alert(data.message);
        console.log('Contact added:', data);
        setIsLoading(false);
        fetchData();
        navigate('/displayusers');
      })
      .catch((error) => {
        alert(error.message);
        console.error('Error adding contact:', error);
        setIsLoading(false);
      });
  };

  return (
    <div className="App">
      <Box sx={{ width: '50%', margin: 'auto', padding: '20px' }}>
        <h1 style={{ textAlign: 'center' }}>Edit Contact</h1>
        <Stack spacing={2}>
          <form onSubmit={handleSubmit}>
            <Item>
              <Input
                placeholder="First Name"
                value={firstName}
                fullWidth
                disableUnderline
                onChange={(e) => setFirstName(e.target.value)}
                inputProps={{ autoComplete: 'off' }}
                sx={{ padding: '8px' }} // Adjust padding to 8px for more spacing
              />
            </Item>
            <Item>
              <Input
                placeholder="Last Name"
                value={lastName}
                fullWidth
                disableUnderline
                onChange={(e) => setLastName(e.target.value)}
                sx={{ padding: '8px' }} // Adjust padding to 8px for more spacing
              />
            </Item>
            <Item>
              <Input
                placeholder="Email"
                value={email}
                type="email"
                fullWidth
                onChange={(e) => setEmail(e.target.value)}
                disableUnderline
                sx={{ padding: '8px' }} // Adjust padding to 8px for more spacing
              />
            </Item>
            <Item>
              <Input
                placeholder="Phone"
                value={phone}
                type="tel"
                fullWidth
                onChange={(e) => setPhone(e.target.value)}
                disableUnderline
                sx={{ padding: '8px' }} // Adjust padding to 8px for more spacing
              />
            </Item>
            <Item>
              <Input
                placeholder="Company"
                value={company}
                fullWidth
                onChange={(e) => setCompany(e.target.value)}
                disableUnderline
                sx={{ padding: '8px' }} // Adjust padding to 8px for more spacing
              />
            </Item>
            <Item>
              <Input
                placeholder="Title"
                value={title}
                fullWidth
                onChange={(e) => setTitle(e.target.value)}
                disableUnderline
                sx={{ padding: '8px' }} // Adjust padding to 8px for more spacing
              />
            </Item>
            <Item>
              <Button
                variant="contained"
                size="large"
                color="primary"
                fullWidth
                type="submit"
                sx={{ padding: '12px', marginTop: '20px' }} // Adjust button padding
                disabled={isLoading}
              >
                {isLoading ? 'Submitting...' : 'Submit'}
              </Button>
            </Item>
          </form>
        </Stack>
      </Box>
    </div>
  );
};

export default EditPage;
