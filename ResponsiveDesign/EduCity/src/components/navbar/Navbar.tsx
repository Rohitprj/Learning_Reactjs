import { useEffect, useState } from "react";
import logo from "../../assets/logo.png";
import "./Navbar.css";

export const Navbar = () => {
  const [sticky, setSticky] = useState(false);
  useEffect(() => {
    window.addEventListener("scroll", () => {
      window.scrollY > 50 ? setSticky(true) : setSticky(false);
    });
  }, []);
  return (
    <nav className={`container ${sticky ? "dark-background" : ""}`}>
      <img className="logo" src={logo} alt="" />
      <ul>
        <li>Home</li>
        <li>Programe</li>
        <li>About us</li>
        <li>Campus</li>
        <li>Testimonials</li>
        <li>
          <button className="btn">Contact us</button>
        </li>
      </ul>
    </nav>
  );
};
