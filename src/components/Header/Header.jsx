import { Link, NavLink } from 'react-router-dom';
import logo from '../../assets/logo_oasis.png'; // replace with oasis logo
import {
  Navbar,
  NavbarBrand,
  NavbarCollapse,
  NavbarLink,
  NavbarToggle,
  Button,
} from 'flowbite-react';

const Header = () => {
  const navLinkClass =
    "text-[#C4B454] hover:text-[#C4B454] hover:underline font-semibold px-5";

  return (
    <>
      {/* 🔹 Fixed Notice Bar */}
      <div className="w-full fixed top-0 left-0 z-50 bg-[#C4B454] flex items-center justify-between px-4 py-4">
        <p className="text-white text-sm sm:text-base text-center flex-1">
          📢 Enjoy <span className="text-black font-bold">20% OFF</span> +
          <span className="text-white font-semibold"> FREE Visa Assistance</span>.
          One place for everything —{" "}
          <span className="text-black font-bold">With Oasis Luxury</span> !
        </p>
      </div>

      {/* 🔹 Fixed Navbar */}
      <div className="w-full fixed left-0 z-40 bg-white shadow-md top-[70px] sm:top-[45px]">
        <Navbar className="!bg-white !px-10 !py-3">

          {/* 🔹 GRID LAYOUT (TRUE CENTER) */}
          <div className="w-full grid grid-cols-2 md:grid-cols-3 items-center">

            {/* LEFT */}
            <div className="flex items-center justify-start">
              <NavbarBrand as={Link} to="/">
                <img src={logo} className="" alt="Oasis Luxury Logo" />
              </NavbarBrand>
            </div>

            {/* CENTER MENU */}
            <div className="hidden md:flex items-center justify-center">
              <NavbarCollapse className="md:flex md:items-center">
                <NavbarLink as={NavLink} to="/" className={navLinkClass}>Home</NavbarLink>
                <NavbarLink as={NavLink} to="/about" className={navLinkClass}>About Us</NavbarLink>
                <NavbarLink as={NavLink} to="/contact" className={navLinkClass}>Contact Us</NavbarLink>
                <NavbarLink as={NavLink} to="/blogs" className={navLinkClass}>Blogs</NavbarLink>
              </NavbarCollapse>
            </div>

            {/* RIGHT */}
            <div className="flex items-center justify-end gap-2 md:gap-3">
              {/* Mobile toggle first */}
              <NavbarToggle className="md:hidden !text-[#C4B454]" />

              <Link to="/contact" className="md:ml-3">
                <Button className="!bg-[#C4B454] !text-white hover:!bg-white hover:!text-[#C4B454] hover:border hover:border-[#C4B454] px-4 py-2 whitespace-nowrap text-sm sm:text-base">
                  Enroll Now
                </Button>
              </Link>
            </div>
          </div>

          {/* 🔹 Mobile Menu */}
          <div className="md:hidden w-full sm:mt-4">
            <NavbarCollapse>
              <NavbarLink as={NavLink} to="/" className={navLinkClass}>Home</NavbarLink>
              <NavbarLink as={NavLink} to="/about" className={navLinkClass}>About Us</NavbarLink>
              <NavbarLink as={NavLink} to="/contact" className={navLinkClass}>Contact Us</NavbarLink>
              <NavbarLink as={NavLink} to="/blogs" className={navLinkClass}>Blogs</NavbarLink>
            </NavbarCollapse>
          </div>

        </Navbar>
      </div>

      {/* Spacer */}
      <div className="pt-[100px] sm:pt-[100px]"></div>
    </>
  );
};

export default Header;