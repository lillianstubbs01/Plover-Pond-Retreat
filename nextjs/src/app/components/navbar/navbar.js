import Link from 'next/link';
import './navbar.css'

const links = [
    {'href': '/details', 'name': 'Details'},
    {'href': '/availabilities', 'name': 'Availabilities'},
    {'href': '/photo-gallery', 'name': 'Photo Gallery'},
]

function NavBar() {
    return (
        <div className='navbar'>
            <div className='link-container'>
                {links.map((link) => (<Link href={link.href} className='nav-link'>
                    {link.name}
                </Link>))}
            </div>
            <Link className='nav-link' href='/contact'>Contact</Link>
        </div>
    );
}

export default NavBar