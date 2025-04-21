import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import {
  Box,
  Typography,
  TextField,
  Button,
  Link,
} from '@mui/material';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errors, setErrors] = useState({});
  const [showSSO, setShowSSO] = useState(false);
  const navigate = useNavigate();

  const validateForm = () => {
    const newErrors = {};
    if (!email) newErrors.email = 'Email is required';
    else if (!/\S+@\S+\.\S+/.test(email)) newErrors.email = 'Invalid email format';
    if (!password) newErrors.password = 'Password is required';
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleLogin = (e) => {
    e.preventDefault();
    if (validateForm()) {
      setShowSSO(true);
    }
  };

  const handleSSOLogin = () => {
    navigate('/dashboard');
  };

  return (
    <Box sx={{ display: 'flex', height: '100vh' }}>
      {/* Left Panel - 50% */}
      <Box
        sx={{
          width: '50%',
          backgroundColor: '#DEEBE5',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          textAlign: 'center',
          px: 4,
        }}
      >
        <Typography variant="h1" sx={{ fontWeight: 'bold', color: '#003D1E', fontSize: '4rem', mb: 2 }}>
          G.A.G.E.
        </Typography>
        <Typography variant="h6" sx={{ mb: 3 }}>
          Grow Above Green Energy
        </Typography>
        <img src="/logo.svg" alt="Cultura Logo" height="30" />
      </Box>

      {/* Right Panel - 50% */}
      <Box
        sx={{
          width: '50%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          px: 4,
        }}
      >
        <Box sx={{ width: '100%', maxWidth: 400 }}>
          <Typography variant="h5" sx={{ mb: 3 }}>
            Log in to continue
          </Typography>

          {!showSSO ? (
            <form onSubmit={handleLogin}>
              <TextField
                fullWidth
                label="Email *"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                error={!!errors.email}
                helperText={errors.email}
                margin="normal"
              />
              <TextField
                fullWidth
                label="Password *"
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                error={!!errors.password}
                helperText={errors.password}
                margin="normal"
              />
              <Box textAlign="right" mt={1} mb={2}>
                <Link href="#" variant="body2" color="error">
                  Forgot your password?
                </Link>
              </Box>
              <Button
                fullWidth
                variant="contained"
                sx={{ backgroundColor: '#003D1E', color: '#fff' }}
                type="submit"
              >
                LOG IN
              </Button>
            </form>
          ) : (
            <>
              <Typography variant="body1" sx={{ mb: 3 }}>
                For a secure login, you will be redirected to a single sign-on page for logging into GAGE Dashboard.
              </Typography>
              <Button
                fullWidth
                variant="contained"
                onClick={handleSSOLogin}
                sx={{ backgroundColor: '#003D1E', color: '#fff' }}
              >
                LOGIN VIA SSO
              </Button>
            </>
          )}
        </Box>
      </Box>
    </Box>
  );
};

export default Login;
