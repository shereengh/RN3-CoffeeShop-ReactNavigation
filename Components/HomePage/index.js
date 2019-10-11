import React, { Component } from "react";
import { View } from "react-native";

// NativeBase Components
import { Container, Header } from "native-base";
import AppContainer from "../../Navigation/index";
// Style
import styles from "./styles";

const HomePage = () => {
  return (
    <Container style={styles.transparent}>
      <View style={styles.overlay} />
      <Header style={styles.transparent} />
      <AppContainer />
    </Container>
  );
};

export default HomePage;
