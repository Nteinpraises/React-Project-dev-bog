import { useState } from "react";

const Home = () => {

   // let name = 'mario';

   const [name, myName] = useState('Paul');
   const [age, myAge] = useState(33);
   const [blogs, newBlog] = useState([
    {title:'my new react website', body: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae, natus', author: 'Moses'},
    {title:'what we do', body: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae, natus', author: 'Patrick'},
    {title:'our alumni community', body: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae, natus', author: 'Isaac'},
    {title:'our future projects', body: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae, natus', author: 'Hamzad'},
   ])
   


    const whenClick=()=>{
        myName('laundry');
        myAge(50);
        
       
    }


    return ( 
        <div className="home">
          <BlogList blogs={blogs}/>
          
        </div>
     );
}
 
export default Home;

