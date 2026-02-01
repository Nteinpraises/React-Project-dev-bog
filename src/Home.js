import { useState } from "react";

const Home = () => {

   // let name = 'mario';

   const [name, myName] = useState('Paul');
   const [age, myAge] = useState(33);


    const whenClick=()=>{
        myName('laundry');
        myAge(50);
       
    }


    return ( 
        <div className="home">
            <h2>Homepage</h2>
            <p>{name} is turning {age} years old today</p>
            <button onClick={whenClick}>Click Me</button>
        </div>
     );
}
 
export default Home;