import { NavLink, Outlet } from 'react-router-dom';

export default function AboutUs() {
  return (
    <div>
      <h2>About Page</h2>

      <nav>
        <ul>
          <li>
            <NavLink to='/about/elena'>Elena</NavLink>
          </li>
          <li>
            <NavLink to='/about/basil'>Basil</NavLink>
          </li>
          <li>
            <NavLink to='/about/mary' style={({ isActive }) => ({ color: isActive ? 'green' : '' })}>
              Mary
            </NavLink>
          </li>
        </ul>
      </nav>

      <Outlet />
    </div>
  );
}
