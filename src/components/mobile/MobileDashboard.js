import React from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';

function MobileDashboard() {
  return (
    <ScrollView style={styles.container}>
      {/* Daily Calorie Overview */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Daily Calorie Overview</Text>
        <View style={styles.calorieInfo}>
          <Text>Calories consumed today: 0</Text>
          <Text>Remaining calories: 2000</Text>
        </View>
      </View>

      {/* Meal Suggestions */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Meal Suggestions</Text>
        <Text>No meal suggestions available yet</Text>
      </View>

      {/* Quick Actions */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Quick Actions</Text>
        <View style={styles.buttonContainer}>
          <TouchableOpacity 
            style={styles.button}
            onPress={() => {/* TODO: Implement add recipe */}}
          >
            <Text style={styles.buttonText}>Add Recipe</Text>
          </TouchableOpacity>
          <TouchableOpacity 
            style={styles.button}
            onPress={() => {/* TODO: Implement update budget */}}
          >
            <Text style={styles.buttonText}>Update Budget</Text>
          </TouchableOpacity>
        </View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 16,
  },
  section: {
    backgroundColor: '#f5f5f5',
    padding: 16,
    borderRadius: 8,
    marginBottom: 16,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 12,
  },
  calorieInfo: {
    marginTop: 8,
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginTop: 8,
  },
  button: {
    backgroundColor: '#1976d2',
    padding: 12,
    borderRadius: 4,
    minWidth: 120,
    alignItems: 'center',
  },
  buttonText: {
    color: '#fff',
    fontWeight: 'bold',
  },
});

export default MobileDashboard;
