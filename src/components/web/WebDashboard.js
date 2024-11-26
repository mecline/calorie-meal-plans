import React from 'react';
import { Box, Container, Grid, Paper, Typography, Button } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import RestaurantIcon from '@mui/icons-material/Restaurant';
import AccountBalanceWalletIcon from '@mui/icons-material/AccountBalanceWallet';

function WebDashboard() {
  return (
    <Container maxWidth="lg" sx={{ mt: 4, mb: 4 }}>
      <Grid container spacing={3}>
        {/* Daily Calorie Overview */}
        <Grid item xs={12} md={8}>
          <Paper sx={{ p: 2, display: 'flex', flexDirection: 'column' }}>
            <Typography variant="h6" gutterBottom>
              Daily Calorie Overview
            </Typography>
            <Typography variant="body1">
              Calories consumed today: 0
            </Typography>
            <Typography variant="body1">
              Remaining calories: 2000
            </Typography>
          </Paper>
        </Grid>

        {/* Meal Suggestions */}
        <Grid item xs={12} md={4}>
          <Paper sx={{ p: 2, display: 'flex', flexDirection: 'column' }}>
            <Typography variant="h6" gutterBottom>
              Meal Suggestions
            </Typography>
            <Typography variant="body1">
              No meal suggestions available yet
            </Typography>
          </Paper>
        </Grid>

        {/* Quick Actions */}
        <Grid item xs={12}>
          <Paper sx={{ p: 2 }}>
            <Typography variant="h6" gutterBottom>
              Quick Actions
            </Typography>
            <Box sx={{ display: 'flex', gap: 2 }}>
              <Button
                variant="contained"
                startIcon={<RestaurantIcon />}
                onClick={() => window.location.href = '/add-recipe'}
              >
                Add Recipe
              </Button>
              <Button
                variant="contained"
                startIcon={<AccountBalanceWalletIcon />}
                onClick={() => {/* TODO: Implement update budget */}}
              >
                Update Budget
              </Button>
            </Box>
          </Paper>
        </Grid>
      </Grid>
    </Container>
  );
}

export default WebDashboard;
