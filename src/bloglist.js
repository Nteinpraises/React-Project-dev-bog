import { Link } from "react-router-dom/cjs/react-router-dom.min";

const BlogList = (props) => {

    const blogs = props.blogs

    console.log(props,blogs);


    return ( 
        <div className="blog-list">
            <Link to ={'/blogs/${blog.id'}></Link>
        </div>
     );
}
 
export default BlogList;