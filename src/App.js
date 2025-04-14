// App.js
import React, { useState } from "react";

const TitleBar = ({ heading }) => <h1>{heading}</h1>;

const JokeFetcher = () => {
  const [currentJoke, setCurrentJoke] = useState(
    "Press the button to see a joke!"
  );

  const getJoke = async () => {
    try {
      const response = await fetch(
        "https://official-joke-api.appspot.com/random_joke"
      );
      const joke = await response.json();
      setCurrentJoke(`${joke.setup} - ${joke.punchline}`);
    } catch (error) {
      setCurrentJoke("Oops! Could not fetch a joke at the moment.");
    }
  };

  return (
    <div>
      <p>{currentJoke}</p>
      <button onClick={getJoke}>Show Me a Joke</button>
    </div>
  );
};

const AppFooter = () => (
  <footer
    style={{
      textAlign: "center",
      padding: "10px 0",
      backgroundColor: "#f0f0f0",
    }}
  >
    <p>Powered by React</p>
    <p>Have fun and keep learning!</p>
  </footer>
);

const App = () => (
  <div style={{ display: "flex", flexDirection: "column", minHeight: "100vh" }}>
    <div style={{ flex: 1, padding: "20px" }}>
      <TitleBar heading="Interactive Joke App" />
      <JokeFetcher />
    </div>
    <AppFooter />
  </div>
);

export default App;
