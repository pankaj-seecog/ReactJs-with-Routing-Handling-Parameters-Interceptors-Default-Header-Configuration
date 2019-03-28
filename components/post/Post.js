import React,{Component} from 'react';
import axios from 'axios';
class Post extends Component{

constructor(){
super();
this.state={
  post : {}
}
}

componentDidMount(){
  console.log('The id is ',this.props.match.params.id)
axios.get("/posts/"+this.props.match.params.id).then((res)=>{
console.log('The post is ',res.data)
this.setState({
  post : res.data
})
})
.catch((err)=>{
  console.log('Tyhe error is ',err);
})
}

render(){
  let style = {
    width : '200px',
    height : '200px',
    border : '1px solid #ccc',
    borderRadius : '10px',
    margin : '20px',
    padding : '10px'
  }

  let pStyle = {
    fontSize : '15px',
    fontFamily : 'georgia'
  }
  return (
    <div style={style}>
<small>{this.state.post.title}</small>
<hr/>
<p style={pStyle}>
{this.state.post.body}
</p>
    </div>
  )
}

}

export default Post;