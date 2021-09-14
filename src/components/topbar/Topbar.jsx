import './topbar.scss'
import { Person, Mail, AccessibilityNew } from "@material-ui/icons"

export default function Topbar( { menuOpen, setMenuOpen } ) {
    return (
        <div className={"topbar " + (menuOpen && "active")}>
            <div className="wrapper">
                <div className="left">
                    <a href="#intro" className="logo">Born.<AccessibilityNew className="icon" /></a>
                    <div className="itemContainer">
                        <Person className="icon" />
                        <span>+3188123456 </span>
                    </div>
                    <div className="itemContainer">
                        <Mail className="icon" />
                        <span>daryll@dborn.nl</span>
                    </div>
                </div>
                <div className="right">
                    <div className="hamburger" onClick={() => setMenuOpen(!menuOpen)}>
                        <span className="line1"></span>
                        <span className="line2"></span>
                        <span className="line3"></span>
                    </div>
                </div>
            </div>
        </div>
    )
}
