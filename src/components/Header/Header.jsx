import dncLogo from"../../assets/dnc-logo.png"
import "./index.scss"

const Header = () => {
  return (
    <div className='header'>
      <img className="header__img" src={dncLogo} alt="dnc logo" />
    </div>
  )
}

export default Header;