import "./Navbar.css";

function Navbar() {
  return (
    <header className="navbar">
      <div className="container navbar-container">

        <a href="/" className="logo">
          Algoritus
        </a>

        <nav className="nav-links">
          <a href="#about">About</a>
          <a href="#faq">FAQ</a>
        </nav>

        <a href="#waitlist" className="nav-button">
          Join Waitlist
        </a>

      </div>
    </header>
  );
}

export default Navbar;