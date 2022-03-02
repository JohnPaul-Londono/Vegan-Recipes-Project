import { Link } from 'react-router-dom';


const Nav = (props) => {


    return (
        <div className='nav'>
            <div className='links'>
                <Link to={"/"} className='linkText'>Home</Link>
                <Link to={"/recipes/create"} className='linkText'>Create</Link>
                <Link to={"/recipes/viewall"} className='linkText'>Recipes</Link>
                <Link to={"/"} className='linkText'>About Us</Link>
            </div>

        </div>
    )

}

export default Nav;