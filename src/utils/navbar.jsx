import React from "react";

const NavBar = () => (
    <div className="bg-dark py-2 px-2">
        <span>
            <a
                className="btn-sm text-decoration-none bg-dark rounded-0 text-light"
                href="https://github.com/shreoshi-roy/ADA-Project"
            >
                <i className="fab text-light fa-github"></i>
                &nbsp; Source Code
            </a>
            <a
                className="btn-sm text-decoration-none bg-dark rounded-0 text-light"
                href="https://www.linkedin.com/in/shreoshi-roy/"
            >
                <i className="fab text-light fa-linkedin"></i>
                &nbsp; Janvi Arora
            </a>
            <a
                className="btn-sm text-decoration-none bg-dark rounded-0 text-light"
                href="https://www.linkedin.com/in/shreoshi-roy/"
            >
                <i className="fab text-light fa-linkedin"></i>
                &nbsp; Shreoshi Roy
            </a>
        </span>
    </div>
);

export default NavBar;
