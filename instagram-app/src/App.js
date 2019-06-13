import React from "react";
import SearchBar from "./componenets/SearchBar/SearchBar";
import "./App.css";

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <div className="header">
          <SearchBar />
        </div>
      </div>
    );
  }
}

export default App;
