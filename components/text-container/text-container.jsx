import React from "react";
import { StyleSheet, Text, Image } from "react-native";
import spinner from "../../assets/spinner.svg";
import PropTypes from "prop-types";

export default function TextContainer({ children }) {
  if (!children)
    return (
      <Text style={styles.content_stub}>
        <Image style={styles.spinner} source={spinner} />
      </Text>
    );
  return <Text style={styles.content}>{children}</Text>;
}

TextContainer.propTypes = {
  children: PropTypes.node
}

const styles = StyleSheet.create({
  content: {
    backgroundColor: "rgba(255, 255, 255, 0.2)",
    padding: "5px",
    borderRadius: "5px",
    maxWidth: "200px",
    textAlign: "center",
    fontSize: "1.1rem",
    fontWeight: "500",
  },
  content_stub: {
    width: "240px",
    height: "140px",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(255, 255, 255, 0.2)",
    padding: "5px",
    borderRadius: "5px",
    textAlign: "center",
    fontSize: "1.1rem",
    fontWeight: "500",
  },
  spinner: {
    height: "3rem",
    width: "3rem",
  },
});
