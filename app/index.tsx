import { Text, View } from "react-native";
import { useEffect, useState } from "react";

export default function Index() {

useEffect(() => {
 //fetch data from pokeapi and log it to the console
 fetchData()
}, []);

async function fetchData() {
  try {
    const response = await fetch(
      "https://pokeapi.co/api/v2/pokemon?limit=10"
    );

    const data = await response.json();

    console.log(data); // clean line

  } catch (e) {
    console.log(e);
  }
}

  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Text>Pokedex</Text>
    </View>
  );
}
