"use client"
// Update the import statement for Link
import { Link } from "react-scroll";
import { useMediaQuery} from "react-responsive";

const links = [
    {
        path: 'home',
        name: 'Home'
    },
    {
        path: 'tours',
        name: 'Tours'
    },
    {
        path: 'discography',
        name: 'Discography'
    },
    {
        path: 'contact',
        name: 'Contact'
    },
];

const Nav = ({ containerStyles, linkStyles }) => {
    const isDesktop = useMediaQuery({
        query: '(min-width: 1310px)',
    });

    console.log(isDesktop);

    return (
        <nav className={`${containerStyles}`}>
            {links.map((link, index) => (
                <Link
                    to={link.path}
                    className={`${linkStyles} cursor-pointer`}
                    key={index}
                    smooth={!isDesktop ? false : true}
                    spy
                    offset={-50}
                    activeClass='active'
                >
                    {link.name}
                </Link>
            ))}
        </nav>
    );
};

export default Nav;
