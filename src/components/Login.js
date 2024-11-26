import React, { useState } from 'react';
import { auth } from '../firebaseConfig';
import { signInWithEmailAndPassword, sendPasswordResetEmail } from 'firebase/auth';
import { useNavigate } from 'react-router-dom';
import { Platform } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { CrossPlatformContainer } from './SharedStyles';
import { 
  Paper,
  Typography,
  TextField,
  Button,
  Box,
  Alert,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions
} from '@mui/material';

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [resetEmail, setResetEmail] = useState('');
  const [openResetDialog, setOpenResetDialog] = useState(false);
  const [resetSuccess, setResetSuccess] = useState(false);
  // const webNavigate = useNavigate();
  const { navigation } = Platform.OS === 'web' ? {} : useNavigation();
  
  const navigate = (path) => {
    if (Platform.OS === 'web') {
      useNavigate(path);
    } else {
      navigation?.navigate(path);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await signInWithEmailAndPassword(auth, email, password);
      navigate('/dashboard');
    } catch (error) {
      setError('Failed to log in. Please check your credentials.');
    }
  };

  return (
    <CrossPlatformContainer component="main" maxWidth="xs">
      <Paper elevation={3} sx={{ width: '100%', maxWidth: 400 }}>
        <Box component="form" onSubmit={handleSubmit} sx={{ p: 3 }}>
          <Typography component="h1" variant="h5" sx={{ mb: 3, textAlign: 'center' }}>
            Login
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
            autoComplete="current-password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <Button
            type="submit"
            fullWidth
            variant="contained"
            sx={{ mt: 3, mb: 2 }}
          >
            Login
          </Button>
          <Box sx={{ textAlign: 'center', mb: 2 }}>
            <Button
              onClick={() => setOpenResetDialog(true)}
              sx={{ textTransform: 'none' }}
            >
              Forgot Password?
            </Button>
          </Box>
          <Box sx={{ textAlign: 'center' }}>
            <Typography variant="body2">
              Don't have an account?{' '}
              <Button
                onClick={() => navigate('/signup')}
                sx={{ p: 0, minWidth: 'auto' }}
              >
                Sign Up
              </Button>
            </Typography>
          </Box>
        </Box>
      </Paper>
      <Dialog open={openResetDialog} onClose={() => setOpenResetDialog(false)}>
        <DialogTitle>Reset Password</DialogTitle>
        <DialogContent>
          <TextField
            autoFocus
            margin="dense"
            id="resetEmail"
            label="Email Address"
            type="email"
            fullWidth
            variant="outlined"
            value={resetEmail}
            onChange={(e) => setResetEmail(e.target.value)}
          />
          {resetSuccess && (
            <Alert severity="success" sx={{ mt: 2 }}>
              Password reset email sent! Check your inbox.
            </Alert>
          )}
        </DialogContent>
        <DialogActions>
          <Button onClick={() => {
            setOpenResetDialog(false);
            setResetEmail('');
            setResetSuccess(false);
          }}>
            Cancel
          </Button>
          <Button onClick={async () => {
            try {
              await sendPasswordResetEmail(auth, resetEmail);
              setResetSuccess(true);
              setTimeout(() => {
                setOpenResetDialog(false);
                setResetEmail('');
                setResetSuccess(false);
              }, 3000);
            } catch (error) {
              setError('Failed to send reset email. Please check the email address.');
            }
          }}>
            Send Reset Link
          </Button>
        </DialogActions>
      </Dialog>
    </CrossPlatformContainer>
  );
}

export default Login;
