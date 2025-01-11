import { memo } from 'react';
import { createPortal } from 'react-dom';
import { NavLink } from 'react-router-dom';
import PropTypes from 'prop-types';
import closeIcon from '../../../assets/images/shared/icon-close.svg';

const HamburgerMenu = memo(({ show, onClose }) => {
  // check if browser supports backdrop-filter css property.
  const supportsBlurBackground = CSS.supports('backdrop-filter', 'blur()');

  const navLinks = [
    { id: 1, title: 'HOME', href: '/' },
    { id: 2, title: 'DESTINATION', href: '/destination' },
    { id: 3, title: 'CREW', href: '/crew' },
    { id: 4, title: 'TECHNOLOGY', href: '/technology' },
  ];

  return createPortal(
    <div
      className={`fixed top-0 h-screen w-full bg-[rgba(0,0,0,.5)] transition-all duration-200 ${show ? 'visible z-10 opacity-100' : 'invisible z-[-1] opacity-0'}`}
      onClick={(e) => e.currentTarget === e.target && onClose(false)}
    >
      <div
        className={`bg-red-40 ms-auto h-full w-[250px] transition-all duration-200 ${show ? 'translate-x-0 opacity-100' : 'translate-x-full opacity-0'} ${supportsBlurBackground ? 'backdrop-blur-xl' : 'bg-blue-dark'}`}
      >
        <div className="mb-5 text-end">
          <button className="p-6 text-white" onClick={() => onClose(false)}>
            <img src={closeIcon} alt="Close" />
          </button>
        </div>
        <ul className="flex flex-col gap-2 ps-6">
          {navLinks.map((link) => (
            <MobileNavLink key={link.id} {...link} clickHandler={onClose} />
          ))}
        </ul>
      </div>
    </div>,
    document.getElementById('hamburgerMenu')
  );
});

const MobileNavLink = memo(({ title, href, clickHandler }) => {
  return (
    <li>
      <NavLink
        className={({ isActive }) =>
          `block py-2 text-white ${isActive ? 'border-e-[5px]' : ''}`
        }
        to={href}
        // close hamburger menu when user click on a link
        onClick={() => clickHandler(false)}
      >
        {title}
      </NavLink>
    </li>
  );
});

HamburgerMenu.propTypes = {
  show: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
};

MobileNavLink.propTypes = {
  title: PropTypes.string.isRequired,
  href: PropTypes.string.isRequired,
  clickHandler: PropTypes.func.isRequired,
};

HamburgerMenu.displayName = 'HamburgerMenu';
MobileNavLink.displayName = 'MobileNavLink';

export default HamburgerMenu;
