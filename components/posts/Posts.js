import React,{Component} from 'react';
import axios from 'axios';
import {NavLink} from 'react-router-dom';
class Posts extends Component{

constructor(){
super();
this.state = {
  posts : []
}
}

componentDidMount(){
axios.get("/posts").then((res)=>{
console.log('The response is ',res);
this.setState({
  posts : res.data
})
})
.catch((err)=>{
  console.log('The error is '+err)
})
}

render(){
return (
  <div>
<table>
<th>Title</th><th>Body</th>
{
  this.state.posts.map((post)=>{
    return (
 <tr>
<td>
<NavLink to={"/posts/"+post.id}>
{post.title}</NavLink>
</td>
<td>{post.body}</td>
 </tr>     
    )
  })
}
</table>
  </div>
)
}

}

export default Posts;