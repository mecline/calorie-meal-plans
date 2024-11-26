import { collection, addDoc } from 'firebase/firestore';
import { db } from '../firebaseConfig';

export const addRecipe = async (recipeData) => {
  try {
    const docRef = await addDoc(collection(db, 'recipes'), {
      ...recipeData,
      userId: auth.currentUser.uid,
      createdAt: new Date().toISOString()
    });
    return { success: true, id: docRef.id };
  } catch (error) {
    console.error('Error adding recipe:', error);
    throw error;
  }
};
