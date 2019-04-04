import React, { Component } from "react";

class PostForm extends Component {
  render() {
    return (
      <div>
        <h1>Add Post</h1>
        <form action="">
          <div>
            <label>Title: </label>
            <br />
            <input type="text" name="title" id="" />
          </div>
          <div>
            <label>Body: </label>
            <br />
            <textarea name="body" id="" cols="30" rows="10" />
          </div>
          <div>
            <input type="submit" name="submit" id="" />
          </div>
        </form>
      </div>
    );
  }
}

export default PostForm;
