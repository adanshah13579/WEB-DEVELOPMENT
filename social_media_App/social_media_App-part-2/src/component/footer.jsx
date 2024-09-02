const Footer = () => {
  return (
    <div className="container-fluid bg-dark text-light" style={styles.footerContainer}>
      <footer className="py-4">
        <ul className="nav justify-content-center border-bottom pb-3 mb-3">
          <li className="nav-item">
            <a href="#" className="nav-link px-2 text-light" style={styles.navLink}>
              Home
            </a>
          </li>
          <li className="nav-item">
            <a href="#" className="nav-link px-2 text-light" style={styles.navLink}>
              Features
            </a>
          </li>
          <li className="nav-item">
            <a href="#" className="nav-link px-2 text-light" style={styles.navLink}>
              Pricing
            </a>
          </li>
          <li className="nav-item">
            <a href="#" className="nav-link px-2 text-light" style={styles.navLink}>
              FAQs
            </a>
          </li>
          <li className="nav-item">
            <a href="#" className="nav-link px-2 text-light" style={styles.navLink}>
              About
            </a>
          </li>
        </ul>
        <p className="text-center text-light" style={styles.copyText}>
          © 2024 Company, Inc
        </p>
      </footer>
    </div>
  );
};

const styles = {
  footerContainer: {
    background: "linear-gradient(to right, #0f2027, #203a43, #2c5364)",
    marginTop: "20px",
    padding: "20px 0",
  },
  navLink: {
    color: "#ffffff",
    transition: "color 0.3s",
  },
  copyText: {
    marginBottom: "0",
  },
};

export default Footer;
