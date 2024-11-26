import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { addRecipe } from '../../services/recipeService';
import {
  Box,
  Container,
  Paper,
  TextField,
  Typography,
  Button,
  FormControlLabel,
  Checkbox,
  Grid
} from '@mui/material';

function WebAddRecipe() {
  const [recipe, setRecipe] = useState({
    name: '',
    calories: '',
    protein: '',
    carbs: '',
    fat: '',
    ingredients: '',
    isFastFood: false
  });

  const handleChange = (e) => {
    const { name, value, checked } = e.target;
    setRecipe(prev => ({
      ...prev,
      [name]: name === 'isFastFood' ? checked : value
    }));
  };

  const navigate = useNavigate();
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    try {
      await addRecipe(recipe);
      navigate('/dashboard');
    } catch (error) {
      console.error('Error saving recipe:', error);
      // You might want to show an error message to the user here
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <Container maxWidth="md" sx={{ mt: 4, mb: 4 }}>
      <Paper sx={{ p: 3 }}>
        <Typography variant="h5" gutterBottom>
          Add New Recipe
        </Typography>
        <Box component="form" onSubmit={handleSubmit} sx={{ mt: 2 }}>
          <Grid container spacing={3}>
            <Grid item xs={12}>
              <TextField
                fullWidth
                label="Recipe Name"
                name="name"
                value={recipe.name}
                onChange={handleChange}
                required
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                fullWidth
                label="Calories"
                name="calories"
                type="number"
                value={recipe.calories}
                onChange={handleChange}
                required
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                fullWidth
                label="Protein (g)"
                name="protein"
                type="number"
                value={recipe.protein}
                onChange={handleChange}
                required
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                fullWidth
                label="Carbohydrates (g)"
                name="carbs"
                type="number"
                value={recipe.carbs}
                onChange={handleChange}
                required
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                fullWidth
                label="Fat (g)"
                name="fat"
                type="number"
                value={recipe.fat}
                onChange={handleChange}
                required
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                fullWidth
                label="Ingredients"
                name="ingredients"
                multiline
                rows={4}
                value={recipe.ingredients}
                onChange={handleChange}
                required
                helperText="Enter ingredients, one per line"
              />
            </Grid>
            <Grid item xs={12}>
              <FormControlLabel
                control={
                  <Checkbox
                    checked={recipe.isFastFood}
                    onChange={handleChange}
                    name="isFastFood"
                  />
                }
                label="This is a fast food item"
              />
            </Grid>
            <Grid item xs={12}>
              <Button
                type="submit"
                variant="contained"
                color="primary"
                fullWidth
                disabled={isSubmitting}
              >
                Add Recipe
              </Button>
            </Grid>
          </Grid>
        </Box>
      </Paper>
    </Container>
  );
}

export default WebAddRecipe;
