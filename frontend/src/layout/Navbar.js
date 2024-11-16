import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <nav style={{ display: 'flex', gap: '1rem', padding: '1rem', background: '#f0f0f0', marginBottom: '2rem' }}>
            <Link to="/">Car dashboard</Link>
            <Link to="/employees">Employee dashboard</Link>
        </nav>
    );
};

export default Navbar;
