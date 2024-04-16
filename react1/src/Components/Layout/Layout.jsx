import { Link } from 'react-router-dom'
import { Layoutdiv } from "./StyledLayout";

const Layout = ({ children }) => {
    return (
        <Layoutdiv>
            <nav>
                <ul>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/page2/1" >Page 2</Link></li>
                    <li><Link to="/Teatro/" >Teatro</Link></li>
                    <li><Link to="/Geko/" >Geko</Link></li>
                    <li><Link to="/Countries/" >Countries</Link></li>
                    <li><Link to="/Trivial/" >Trivial</Link></li>
                    <li><Link to="/CompWorkout/" >CompWorkout</Link></li>
                    <li><Link to="/CompCuento/" >CompCuento</Link></li>
                    <li><Link to="/CompBox/" >CompBox</Link></li>

                </ul>
            </nav>
            <main>{children}</main>
        </Layoutdiv>
    )
}

export default Layout;