import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  Switch
} from 'react-native';

function MobileAddRecipe() {
  const [recipe, setRecipe] = useState({
    name: '',
    calories: '',
    protein: '',
    carbs: '',
    fat: '',
    ingredients: '',
    isFastFood: false
  });

  const handleChange = (name, value) => {
    setRecipe(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = () => {
    // TODO: Implement recipe submission
    console.log(recipe);
  };

  return (
    <ScrollView style={styles.container}>
      <View style={styles.formContainer}>
        <Text style={styles.title}>Add New Recipe</Text>
        
        <Text style={styles.label}>Recipe Name</Text>
        <TextInput
          style={styles.input}
          value={recipe.name}
          onChangeText={(value) => handleChange('name', value)}
          placeholder="Enter recipe name"
        />

        <Text style={styles.label}>Calories</Text>
        <TextInput
          style={styles.input}
          value={recipe.calories}
          onChangeText={(value) => handleChange('calories', value)}
          placeholder="Enter calories"
          keyboardType="numeric"
        />

        <Text style={styles.label}>Protein (g)</Text>
        <TextInput
          style={styles.input}
          value={recipe.protein}
          onChangeText={(value) => handleChange('protein', value)}
          placeholder="Enter protein content"
          keyboardType="numeric"
        />

        <Text style={styles.label}>Carbohydrates (g)</Text>
        <TextInput
          style={styles.input}
          value={recipe.carbs}
          onChangeText={(value) => handleChange('carbs', value)}
          placeholder="Enter carbs content"
          keyboardType="numeric"
        />

        <Text style={styles.label}>Fat (g)</Text>
        <TextInput
          style={styles.input}
          value={recipe.fat}
          onChangeText={(value) => handleChange('fat', value)}
          placeholder="Enter fat content"
          keyboardType="numeric"
        />

        <Text style={styles.label}>Ingredients</Text>
        <TextInput
          style={[styles.input, styles.textArea]}
          value={recipe.ingredients}
          onChangeText={(value) => handleChange('ingredients', value)}
          placeholder="Enter ingredients, one per line"
          multiline
          numberOfLines={4}
        />

        <View style={styles.switchContainer}>
          <Text style={styles.label}>Fast Food Item</Text>
          <Switch
            value={recipe.isFastFood}
            onValueChange={(value) => handleChange('isFastFood', value)}
          />
        </View>

        <TouchableOpacity
          style={styles.button}
          onPress={handleSubmit}
        >
          <Text style={styles.buttonText}>Add Recipe</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  formContainer: {
    padding: 16,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  label: {
    fontSize: 16,
    marginBottom: 5,
    fontWeight: '500',
  },
  input: {
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 4,
    padding: 10,
    marginBottom: 15,
    fontSize: 16,
  },
  textArea: {
    height: 100,
    textAlignVertical: 'top',
  },
  switchContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 20,
  },
  button: {
    backgroundColor: '#1976d2',
    padding: 15,
    borderRadius: 4,
    alignItems: 'center',
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default MobileAddRecipe;
