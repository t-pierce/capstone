import React, { Component } from "react";

export default class Blog extends Component {
  constructor(props) {
    super(props);

    this.state = {
      blog_post:[],
      error: false
    }
  }

  componentDidMount() {
    fetch("https://capstonebackendapp.herokuapp.com/blog_post/get")
    .then(response => response.json())
    .then(data => {
      this.setState({
        blog_post: data
      })
    })
    .catch(error => {
      console.log("error getting posts", error)
    })
  }

  render() {
    return (
      <div className= "blog-post-wrapper">
        {this.state.blog_post.map(item=>(
          <div className= "blog-post">
            {item.title}
            {item.content}
            <img src={item.image}></img>
          </div>
        ))}
      </div>
    );
  }
}
