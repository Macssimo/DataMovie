import { useState, useEffect } from "react";
import { FaArrowUp, FaClock } from "react-icons/fa";

const Footer = () => {
  const [showScrollButton, setShowScrollButton] = useState(false);
  const [currentTime, setCurrentTime] = useState("");

  // Actualizar hora de Buenos Aires
  useEffect(() => {
    const updateTime = () => {
      const options = {
        timeZone: "America/Argentina/Buenos_Aires",
        hour12: false,
        hour: "2-digit",
        minute: "2-digit",
        second: "2-digit",
      };
      const formatter = new Intl.DateTimeFormat("es-AR", options);
      setCurrentTime(formatter.format(new Date()));
    };

    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  // Botón de scroll
  useEffect(() => {
    const handleScroll = () => {
      setShowScrollButton(window.scrollY > 200);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <footer className="site-footer">
      <div className="footer-content">
        <div className="time-container">
          <FaClock /> Hora Buenos Aires: {currentTime}
        </div>

        <div className="footer-links">
          <a href="#">Política de privacidad</a>
          <a href="#">Términos de uso</a>
          <a href="#">Contacto</a>
        </div>

        {showScrollButton && (
          <button className="scroll-top" onClick={scrollToTop}>
            <FaArrowUp />
          </button>
        )}
      </div>

      <div className="footer-bottom">
        <p>
          © {new Date().getFullYear()} MovieApp - Todos los derechos reservados
        </p>
      </div>
    </footer>
  );
};

export default Footer;
