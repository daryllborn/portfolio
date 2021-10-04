import './menu.scss'

export default function Menu({ menuOpen, setMenuOpen }) {
    return (
        <div className={"menu " + (menuOpen && "active")} >
            <ul>
                <li>
                    <a onClick={() => setMenuOpen(false)} href="#intro">Home</a>
                </li>
                <li>
                    <a onClick={() => setMenuOpen(false)} href="#portfolio">Portfolio</a>
                </li>
                <li>
                    <a onClick={() => setMenuOpen(false)} href="#about">About</a>
                </li>
                <li>
                    <a onClick={() => setMenuOpen(false)} href="#contact">Contact</a>
                </li>
            </ul>
        </div>
    )
}
