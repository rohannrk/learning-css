import React from "react";

export const Navbar = () => {
    const links = [
        {
            title: "Home",
            href: "#"
        },
        {
            title: "About",
            href: "#"
        },
        {
            title: "Contact",
            href: "#"
        }
    ]
  return (
    <div className="navbar-root">
      <div className="logo">Fintech</div>
      <div className="links">
        {links.map((link, idx) => (
            <a className="link-item" key={link.title} href={link.href}>{link.title}
            </a>
        ))}
        <button className="btn">Start free trial</button>
      </div>
    </div>
  );
};