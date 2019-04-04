import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import Post from "./components/Post";
import PostForm from "./components/PostForm";

class App extends Component {
  render() {
    return (
      <div className="App">
        <PostForm />
        <hr />
        <Post />
      </div>
    );
  }
}

export default App;
