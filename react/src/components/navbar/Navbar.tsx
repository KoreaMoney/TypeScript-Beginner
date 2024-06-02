import Link from "next/link";
import React from "react";

const Navbar = () => {
    return (
        <div className="navbar">
            <span className="logo">FEDowon</span>
            <div className="links">
                <Link href="/">Home</Link>
                <Link href="/childrenPropExample">Parent&Child</Link>
                <Link href="/exampleEvent">EventType</Link>
                <Link href="/useStateExample">UseStateType</Link>
                <Link href="/useContextExample">UseContextType</Link>
            </div>
        </div>
    );
};

export default Navbar;
