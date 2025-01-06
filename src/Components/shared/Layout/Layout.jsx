import { Outlet, Link, NavLink } from 'react-router-dom';
import HamburgerMenuIcon from '../../../assets/images/shared/icon-hamburger.svg';
import Logo from '../../../assets/images/shared/logo.svg';
import PropTypes from 'prop-types';

export default function Layout() {
  const navLinks = [
    { id: 1, title: 'HOME', href: '/' },
    { id: 2, title: 'DESTINATION', href: '/destination' },
    { id: 3, title: 'CREW', href: '/crew' },
    { id: 4, title: 'THECHNOLOGY', href: '/thechnology' },
  ];

  return (
    <div className="relative">
      <header className="fixed w-full">
        <div>
          <div className="relative flex items-center justify-between lg:container lg:mt-8">
            <Link to="/" className="p-4 md:px-8 lg:me-12 lg:px-0">
              <img src={Logo} alt="Logo" />
            </Link>
            <span className="z-20 hidden h-[1px] flex-1 translate-x-8 bg-white/50 lg:block"></span>
            <div className="md:flex-1 lg:flex-grow-0">
              <div className="hidden items-center justify-end gap-8 bg-blue-dark px-12 tracking-wider text-white backdrop-blur-md md:flex lg:gap-12 lg:bg-[rgba(255,255,255,0.1)] lg:ps-52 xl:ps-64">
                {navLinks.map((link) => (
                  <HeaderNavLink key={link.id} {...link} />
                ))}
              </div>
              <button className="p-4 md:hidden">
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
  );
}

function HeaderNavLink({ title, href }) {
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
}

HeaderNavLink.propTypes = {
  title: PropTypes.string.isRequired,
  href: PropTypes.string.isRequired,
};
