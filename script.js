/* General Styling */
body {
  font-family: Arial, sans-serif;
  margin: 0;
  padding: 0;
}

header {
  background-color: #333;
  padding: 10px 20px;
}

nav {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

nav .logo a {
  color: white;
  text-decoration: none;
  font-size: 24px;
  font-weight: bold;
}

ul.nav-links {
  list-style-type: none;
  display: flex;
}

ul.nav-links li {
  margin: 0 15px;
}

ul.nav-links li a {
  color: white;
  text-decoration: none;
  font-size: 18px;
  padding: 10px 15px;
  transition: background-color 0.3s ease;
}

ul.nav-links li a:hover {
  background-color: #575757;
}

/* Hamburger Menu */
.hamburger {
  display: none;
  cursor: pointer;
}

.hamburger span {
  font-size: 30px;
  color: white;
}

/* Media Queries for Responsiveness */
@media (max-width: 768px) {
  .nav-links {
    display: none;
    width: 100%;
    flex-direction: column;
    align-items: center;
    background-color: #333;
    position: absolute;
    top: 60px;
    left: 0;
  }

  .nav-links.active {
    display: flex;
  }

  .nav-links li {
    margin: 10px 0;
  }

  .hamburger {
    display: block;
  }
}
