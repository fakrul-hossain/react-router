import React from 'react';
import { NavLink } from 'react-router-dom';

const ActiveLink = ({to, children}) => {
    return (
        <div>
            <NavLink
                    to={to}
                    className={({ isActive}) => isActive  ? "underline underline-offset-4 transition" : ""
                    }
                  >
                    {children}
                    {/* other code */}
                  </NavLink>
        </div>
    );
};

export default ActiveLink;