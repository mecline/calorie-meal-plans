import { collection, addDoc } from 'firebase/firestore';
import { db, auth } from '../firebaseConfig';

export const addRecipe = async (recipeData) => {
  try {
    console.log('Recipe Data:', recipeData);
    console.log('Auth State:', auth);
    
    // Convert ingredients string to array and trim whitespace
    const ingredientsArray = recipeData.ingredients
      .split(',')
      .map(ingredient => ingredient.trim())
      .filter(ingredient => ingredient.length > 0);

    const docRef = await addDoc(collection(db, 'recipes'), {
      ...recipeData,
      ingredients: ingredientsArray,
      userId: auth.currentUser.uid,
      createdAt: new Date().toISOString()
    });
    return { success: true, id: docRef.id };
  } catch (error) {
    console.error('Error adding recipe:', error);
    throw error;
  }
};
