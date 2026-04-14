import {NavLink} from "react-router-dom";

export const Navigation = () => {
    return (
        <>
            <nav>
                <ul>
                    <li><NavLink to={'/'}>Home</NavLink></li>
                    <li><NavLink to={'/cars'}>Cars</NavLink></li>
                    <li><NavLink to={'/about-us'}>About us</NavLink></li>
                </ul>
            </nav>
        </>
    )
}
