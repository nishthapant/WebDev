import React from 'react';
import {Link} from 'react-router-dom';

import * as ROUTES from '../../constants/routes'; 

const Navigation = ()=>(
    <div>
        <ul>
            <li>
                <Link to={ROUTES.SIGN_IN}>Sign In</Link>
            </li>
            <li>
                <Link to={ROUTES.SIGN_UP}>Sign Up</Link>
            </li>
            <li>
                <Link to={ROUTES.INSTRUCTORS}>Instructors</Link>
            </li>
            <li>
                <Link to={ROUTES.SUBJECTS}>Sujects</Link>
            </li>
            <li>
                <Link to={ROUTES.BLOGS}>Blogs</Link>
            </li>
            <li>
                <Link to={ROUTES.ABOUT}>About</Link>
            </li>
            <li>
                <Link to={ROUTES.CONTACT}>Contact Us</Link>
            </li>
        </ul>
    </div>
);

export default Navigation;
