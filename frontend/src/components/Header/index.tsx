import logo from '../../assets/img/logo.svg'

import './styles.css'

function Header() {
    return (
        <header>
            <div className="logo-container">
                <img src={logo} alt="Logo"/>
                    <h1>DSMeta</h1>
                    <p>Desenvolvido por &nbsp; <a href="https://www.linkedin.com/in/joaognevess/"> João Gabriel</a> &copy;</p>
            </div>
        </header>
    )
}

export default Header