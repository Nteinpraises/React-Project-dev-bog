const BlogList = (props) => {

    const blogs = props.blogs

    console.log(props,blogs);


    return ( 
        <div className="blog-list">
             <h2>Homepage</h2>
            <p>{name} is turning {age} years old today</p>
            <button onClick={whenClick}>Click Me</button>

            {blogs.map((blog) => (
            <div className="blog-preview" key={blog.id}>
                <h2>{blog.title}</h2>
                <p>{blog.body}</p>
                <p>Written by {blog.author}</p>
            </div>

            ))}
        </div>
     );
}
 
export default BlogList;