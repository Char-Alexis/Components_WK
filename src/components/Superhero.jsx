import React from 'react';


const Superhero=(props) =>{
    return(
      
    
      <table>
      <thead>
      <td>Name</td>
      <td>Primary Ability</td>
      <td>Secondary Ability</td>
      
      
      
      
      </thead>
      <tbody>
        {/* {props.heroes.map(hero => <li> {hero} </li>)} */}
      
      
      <tr>
        <td>
          Batman
        </td>
        <td>
          
        </td>
        <td>
         
        </td>
      </tr>
      
      </tbody>
      </table>
      
      );
    
}
    export default Superhero;
    

      // <React.Fragment>
      //   <h2>Superhero List</h2>
      //   <hr/>
      //   <ul>
      //       {props.heroes.map((hero, index) => {
      //         return <li key={index} >{hero} </li>
      //       })}
      //   </ul>
      // </React.Fragment>