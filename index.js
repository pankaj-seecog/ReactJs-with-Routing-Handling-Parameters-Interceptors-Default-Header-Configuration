import React, { Component } from 'react';
import { render } from 'react-dom';
import Hello from './Hello';
import './style.css';
import {BrowserRouter,Route} from 'react-router-dom';
import Home from './components/home/Home';
import Contact from './components/contact/Contact';
import About from './components/about/About';
import Posts from './components/posts/Posts';
import Navigation from './components/navigation/Navigation';
import Post from './components/post/Post';
import axios from 'axios';

axios.defaults.baseURL = "https://jsonplaceholder.typicode.com";

axios.defaults.headers.post['Token'] = "33333";

axios.interceptors.request.use((request)=>{
console.log('The interceptor request is ',request);
  return request;
})


// axios.defaults.request.use((request)=>{
//   console.log('The interceptor request is ',request);
//   return request;
// })

// axios.response.use((response)=>{
// console.log('The response object is ',response);
//   return response;
// })

class App extends Component {
  constructor() {
    super();
    this.state = {
      name: 'React'
    };
  }

  render() {
    return (
      <BrowserRouter>
      <div>
      <Navigation/>
<Route path="/" exact component={Home}/>
<Route path="/contact" component={Contact}/>
<Route path="/about" component={About}/>
<Route path="/posts" exact component={Posts}/>
<Route path="/posts/:id" component={Post}/>
</div>
      </BrowserRouter>
     
    );
  }
}

render(<App />, document.getElementById('root'));
