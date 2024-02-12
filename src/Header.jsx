function Header() {
  return (
    <div className="header">
      <div className="logo-container">
        <img src="logo/logo.png" alt="logoimage" className="logo" />
      </div>
      <div className="nav-items">
        <ul className="list-items">
          <li>Search</li>
          <li>Home</li>
          <li>About us</li>
          <li>Contact us</li>
          <li>Cart</li>
        </ul>
      </div>
    </div>
  );
}
export default Header;
