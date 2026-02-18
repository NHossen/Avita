import { useEffect } from "react";
import { useLocation } from "react-router-dom";

/**
 * ScrollToTop automatically scrolls the page to top
 * whenever the route changes.
 */
const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [pathname]);

  return null; // This component does not render anything
};

export default ScrollToTop;