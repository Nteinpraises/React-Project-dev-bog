import { useState } from "react";

const Home = () => {

   // let name = 'mario';

   const [name, myName] = useState('Paul');
   const [age, myAge] = useState(33);
   const [blogs, newBlog] = useState([
    {title:'my new react website', body: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae, natus', author: 'Moses', id:1},
    {title:'what we do', body: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae, natus', author: 'Patrick', id:2},
    {title:'our alumni community', body: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae, natus', author: 'Isaac', id:3},
    {title:'our future projects', body: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae, natus', author: 'Hamzad', id:4},
   ])

   const handleDelete = (id) => {
    const newBlogs = blogs.filter(blog => blog.id !== id);
    newBlog(newBlogs);
   }


    const whenClick=()=>{
        myName('laundry');
        myAge(50);
        
       
    }


    return ( 
        <div className="home">
           <h2>Homepage</h2>
            <p>{name} is turning {age} years old today</p>
            <button onClick={whenClick}>Click Me</button>

            {blogs.map((blog) => (
            <div className="blog-preview" key={blog.id}>
                <h2>{blog.title}</h2>
                <p>{blog.body}</p>
                <p>Written by {blog.author}</p> 
                <button onClick={() => handleDelete(blog.id)}>delete blog</button>
            </div>

            ))}



        </div>
     );
}
 
export default Home;

