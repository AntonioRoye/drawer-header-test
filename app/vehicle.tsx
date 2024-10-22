// VehiclePage.tsx
import React, { useState } from "react";
import { View, Text, TouchableOpacity, StyleSheet, ScrollView } from "react-native";
import { Picker } from "@react-native-picker/picker";

const VehiclePage = () => {
  const [activeTab, setActiveTab] = useState<string>("Vehicle Info");
  const [vehicleType, setVehicleType] = useState<string>("Passenger Vehicle");

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>Vehicle Page</Text>
      </View>
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        {/* Tab Buttons */}
        <View style={styles.tabContainer}>
          <TouchableOpacity
            style={[
              styles.tabButton,
              activeTab === "Vehicle Info" && styles.activeTabButton,
            ]}
            onPress={() => setActiveTab("Vehicle Info")}
          >
            <Text
              style={[
                styles.tabButtonText,
                activeTab === "Vehicle Info" && styles.activeTabButtonText,
              ]}
            >
              Vehicle Info
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[
              styles.tabButton,
              activeTab === "Odometer" && styles.activeTabButton,
            ]}
            onPress={() => setActiveTab("Odometer")}
          >
            <Text
              style={[
                styles.tabButtonText,
                activeTab === "Odometer" && styles.activeTabButtonText,
              ]}
            >
              Odometer
            </Text>
          </TouchableOpacity>
        </View>

        {/* Content based on tab selection */}
        {activeTab === "Vehicle Info" ? (
          <View style={styles.contentContainer}>
            <Text style={styles.label}>Vehicle Type</Text>
            <View style={styles.pickerContainer}>
              <Picker
                selectedValue={vehicleType}
                onValueChange={(itemValue) => setVehicleType(itemValue)}
                style={styles.picker}
              >
                <Picker.Item label="Select Vehicle" value="" />
                <Picker.Item label="Motor Vehicle" value="Motor Vehicle" />
                <Picker.Item label="Passenger Vehicle" value="Passenger Vehicle" />
              </Picker>
            </View>
          </View>
        ) : (
          <View style={styles.contentContainer}>
            <Text style={styles.label}>Odometer Tab Content</Text>
          </View>
        )}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  scrollContainer: {
    flexGrow: 1,
    width: "100%",
  },
  header: {
    padding: 20,
    alignItems: "center",
    backgroundColor: "#0078A0",
  },
  title: {
    fontSize: 24,
    color: "white",
    fontWeight: "bold",
  },
  tabContainer: {
    flexDirection: "row",
    justifyContent: "space-around",
    marginVertical: 20,
  },
  tabButton: {
    padding: 10,
    backgroundColor: "#f0f0f0",
    borderRadius: 5,
  },
  activeTabButton: {
    backgroundColor: "#0078A0",
  },
  tabButtonText: {
    fontSize: 16,
    color: "#000",
  },
  activeTabButtonText: {
    color: "white",
    fontWeight: "bold",
  },
  contentContainer: {
    padding: 20,
  },
  label: {
    fontSize: 16,
    marginBottom: 10,
  },
  pickerContainer: {
    borderWidth: 1,
    borderRadius: 5,
    borderColor: "#ddd",
    padding: 5,
  },
  picker: {
    width: "100%",
  },
});

export default VehiclePage;
