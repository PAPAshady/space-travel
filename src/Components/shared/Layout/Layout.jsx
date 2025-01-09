import { memo, useEffect, useState } from 'react';
import { Outlet, Link, NavLink } from 'react-router-dom';
import HamburgerMenu from '../HamburgerMenu/HamburgerMenu';
import HamburgerMenuIcon from '../../../assets/images/shared/icon-hamburger.svg';
import Logo from '../../../assets/images/shared/logo.svg';
import PropTypes from 'prop-types';

export default function Layout() {
  const [showHamburgerMenu, setShowHamburgerMenu] = useState(false);
  const [showHeaderBackground, setShowHeaderBackground] = useState(false);
  // check if browser supports backdrop-filter css property.
  const supportsBlurBackground = CSS.supports('backdrop-filter', 'blur()');

  const navLinks = [
    { id: 1, title: 'HOME', href: '/' },
    { id: 2, title: 'DESTINATION', href: '/destination' },
    { id: 3, title: 'CREW', href: '/crew' },
    { id: 4, title: 'TECHNOLOGY', href: '/technology' },
  ];

  useEffect(() => {
    function handleHeaderOnScroll() {
      if (window.scrollY > 50) {
        setShowHeaderBackground(true);
      } else {
        setShowHeaderBackground(false);
      }
    }
    window.addEventListener('scroll', handleHeaderOnScroll);

    return () => window.removeEventListener('scroll', handleHeaderOnScroll);
  }, []);

  return (
    <>
      <div className="relative">
        <header
          className={`fixed w-full transition-colors md:bg-transparent ${showHeaderBackground ? 'bg-blue-dark' : 'bg-transparent'}`}
        >
          <div>
            <div className="relative flex items-center justify-between lg:container lg:mt-8">
              <Link to="/" className="p-4 md:px-8 lg:me-12 lg:px-0">
                <img src={Logo} alt="Logo" />
              </Link>
              <span className="z-20 hidden h-[1px] flex-1 translate-x-8 bg-white/50 lg:block"></span>
              <div className="md:flex-1 lg:flex-grow-0">
                <div
                  className={`hidden items-center justify-end gap-8 bg-blue-dark px-12 tracking-wider text-white md:flex lg:gap-12 lg:ps-52 xl:ps-64 ${supportsBlurBackground ? 'backdrop-blur-md lg:bg-[rgba(255,255,255,0.1)]' : ''}`}
                >
                  {navLinks.map((link) => (
                    <HeaderNavLink key={link.id} {...link} />
                  ))}
                </div>
                <button
                  className="p-4 md:hidden"
                  onClick={() => setShowHamburgerMenu(true)}
                >
                  <img src={HamburgerMenuIcon} alt="Menu" />
                </button>
              </div>
            </div>
          </div>
        </header>
        <main>
          <Outlet />
        </main>
      </div>
      <HamburgerMenu show={showHamburgerMenu} onClose={setShowHamburgerMenu} />
    </>
  );
}

const HeaderNavLink = memo(({ title, href }) => {
  return (
    <NavLink
      className={({ isActive }) =>
        `border-b-4 pb-6 pt-8 font-bellefair text-sm transition-colors duration-300 hover:border-white/50 xl:py-8 ${isActive ? 'border-white' : 'border-transparent'}`
      }
      to={href}
    >
      {title}
    </NavLink>
  );
});

HeaderNavLink.propTypes = {
  title: PropTypes.string.isRequired,
  href: PropTypes.string.isRequired,
};
