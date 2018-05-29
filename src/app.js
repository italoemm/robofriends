import React, {Component} from 'react';
import  CardArray from './cardArray'
import  SearchBox from './searchBox'
import './app.css';
import  Scroll from './scroll' 

class App extends Component {
    constructor() {
        super()
        
        this.state = {
            robots: [],
            searchfield: ''
        }
    }
  componentDidMount() {
      fetch('https://jsonplaceholder.typicode.com/users').then(response=> response.json()).then(users => {this.setState({robots:users})});
  }
    
    onSearchChange = (event) => {
        this.setState({searchfield: event.target.value})
    }
    
    render() {
       
        let filteredRobots = this.state.robots.filter(robots => {
            return robots.name.toLowerCase().includes(this.state.searchfield.toLowerCase())
        })
        
        if(this.state.robots.lenth === 0){
            return <h1>Loading</h1>
        }else{
            
    return (
        <div className='tc'>
            
            <div className>
            <h1>RoboFriends</h1>
            <SearchBox onSearchChange = {this.onSearchChange}/>
            </div>
            
            <Scroll>
            <CardArray robots={filteredRobots}/>
            </Scroll>
            
            </div>
    );
            }
}
}
export default App;
