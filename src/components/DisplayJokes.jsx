// import React, { Component } from 'react';
// import axios from 'axios';

// class DisplayJokes  extends Component {
//     constructor(props) {
//         super(props);
//         this.state = { 
//             posts:[]
//          }
//     }


//     componentDidMount(){
//         this.setState ({posts});
//     }
    
//     async displayJokes(){
//         let response = await axios.get('https://v2.jokeapi.dev/joke/Programming?type=twopart&amount=5')
//         this.setState({
//             posts:response.data
//         });
//     }
//     render() { 
        
//         return (
//             <div>
//                 <h1>{this.displayJokes}</h1>

//             </div>
//           );
//     }
// }
 
// export default DisplayJokes ;