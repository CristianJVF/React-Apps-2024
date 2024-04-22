import { Link } from 'react-router-dom'
import { Layoutdiv } from "./StyledLayout";

const Layout = ({ children }) => {
    return (
        <Layoutdiv>
            <nav>
                <ul>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/page2/1" >Page 2</Link></li>

                </ul>
            </nav>
            <main>{children}</main>
        </Layoutdiv>
    )
}

export default Layout;