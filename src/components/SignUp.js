import React, { useState } from 'react';
import { auth } from '../firebaseConfig';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { useNavigate } from 'react-router-dom';
import { Platform } from 'react-native';
import { CrossPlatformContainer } from './SharedStyles';
import { 
  Paper,
  Typography,
  TextField,
  Button,
  Box,
  Alert
} from '@mui/material';

function SignUp() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [error, setError] = useState('');
  const webNavigate = useNavigate();
  const navigate = (path) => {
    if (Platform.OS === 'web') {
      webNavigate(path);
    } else {
      props.navigation.navigate(path);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (password !== confirmPassword) {
      setError('Passwords do not match');
      return;
    }

    try {
      await createUserWithEmailAndPassword(auth, email, password);
      navigate('/dashboard');
    } catch (error) {
      setError('Failed to create an account. ' + error.message);
    }
  };

  return (
    <CrossPlatformContainer component="main" maxWidth="xs">
      <Paper elevation={3} sx={{ width: '100%', maxWidth: 400 }}>
        <Box component="form" onSubmit={handleSubmit} sx={{ p: 3 }}>
          <Typography component="h1" variant="h5" sx={{ mb: 3, textAlign: 'center' }}>
            Sign Up
          </Typography>
          {error && <Alert severity="error" sx={{ mb: 2 }}>{error}</Alert>}
          <TextField
            margin="normal"
            required
            fullWidth
            id="email"
            label="Email Address"
            name="email"
            autoComplete="email"
            autoFocus
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <TextField
            margin="normal"
            required
            fullWidth
            name="password"
            label="Password"
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <TextField
            margin="normal"
            required
            fullWidth
            name="confirmPassword"
            label="Confirm Password"
            type="password"
            id="confirmPassword"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
          />
          <Button
            type="submit"
            fullWidth
            variant="contained"
            sx={{ mt: 3, mb: 2 }}
          >
            Sign Up
          </Button>
          <Box sx={{ textAlign: 'center' }}>
            <Typography variant="body2">
              Already have an account?{' '}
              <Button
                onClick={() => navigate('/')}
                sx={{ p: 0, minWidth: 'auto' }}
              >
                Login
              </Button>
            </Typography>
          </Box>
        </Box>
      </Paper>
    </CrossPlatformContainer>
  );
}

export default SignUp;
