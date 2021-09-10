import React from 'react';


function Superhero(props){
    return(
      
    <table>
      <thead>
        <th>
          {/* <td>Id</td> */}
          <td>Name</td>
          <td>Primary Ability</td>
          <td>Secondary Ability</td>

        </th>
      </thead>
      <tbody>
          {
        
            props.superheroes.map(hero => <li> {hero} </li>)

          }
        <tr>
          <td>1</td>
          <td>2</td>
          <td>3</td>
        </tr>
        <tr>
          <td>4</td>
          <td>5</td>
          <td>6</td>
        </tr>
        <tr>
          <td></td>
          <td></td>
          <td></td>
        </tr>
      </tbody>
    </table>
    )

};


export default Superhero

