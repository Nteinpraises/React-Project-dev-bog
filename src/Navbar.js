import { Link } from 'react-router-dom';

const Navbar = () => {
    return ( 
        <nav className="navbar">
            <h1>The Developer's Tool</h1>
            <div className="links">
                <link to="/">Home</link>
                <link to="/create" style={{
                    color: "white",
                    backgroundColor:'#f1356d',
                    borderRadius: '8px'
                }}>New Blog</link>
            </div>
        </nav>
     );
}
 
export default Navbar;