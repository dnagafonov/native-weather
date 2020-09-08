import React from "react";
import { StyleSheet, Text, Image } from "react-native";
import spinner from "../../assets/spinner.svg";

export default function TextContainer({ text }) {
  if (!text)
    return (
      <Text style={styles.content_stub}>
        <Image style={styles.spinner} source={spinner} />
      </Text>
    );
  return <Text style={styles.content}>{text}</Text>;
}

const styles = StyleSheet.create({
  content: {
    backgroundImage:
      "linear-gradient(141deg, rgba(212, 212, 212, 0.2) 0%, rgba(255, 255, 255, 0.3) 75%)",
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
    backgroundColor: "rgba(255, 255, 255, 0.1)",
    padding: "5px",
    borderRadius: "5px",
    textAlign: "center",
    fontSize: "1.1rem",
    fontWeight: "500",
  },
  spinner: {
    height: "50px",
    width: "50px",
  },
});
