import { useState } from "react"
import styled from "styled-components"

function Header() {
    const [active, setMode] = useState(false)
    const ToggleMode = () => {
        setMode(!active)
    }
    return (
        

      <HeaderPage className="header">
        <div className={active ? 'icon iconActive' : 'icon' } onClick={ToggleMode}>
            <div className="hamburguer hamburguerIcon"></div>
        </div>
        <div className={active ? 'menu menuOpen' : "menu menuClose"}>
            <div className="list">
                <ul className="listItems">
                    <li>HOME</li>
                    <li>PRODUCTS</li>
                    <li>CONTACT</li>
                    <li>ABOUT US</li>
                </ul>
            </div>
        </div>
      </HeaderPage>

    );
  }

  const HeaderPage = styled.header`
  .icon {
    position: absolute;
    z-index: 4;
    left: 1%;
    width: fit-content;
    height: 44px;
    cursor: pointer;
  }

  .hamburguer {
    top: 50%;
    left: 10%;
    width: 30px;
    height: 6px;
    background: #ff3300;
    position: absolute;
    box-shadow: 0 2px 5px rgba(0, 0, 0, 0.2);
    transition: 0.5s;
  }

  .hamburguer::before {
    top: -12px;
    content: '';
    position: absolute;
    width: 37px;
    height: 6px;
    background: #ff3300;
    box-shadow: 0 2px 5px rgba(0, 0, 0, 0.2);
    transition: 0.5s;
  }

  .hamburguer::after {
    top: 12px;
    content: '';
    position: absolute;
    width: 37px;
    height: 6px;
    background: #ff3300;
    box-shadow: 0 2px 5px rgba(0, 0, 0, 0.2);
    transition: 0.5s;
  }

  .list {
    display: flex;
    flex-direction: column;
    left: 1%;
    padding: 45px 0 0;
    flex-wrap: nowrap;
    color: white;
    font-size: 1.2rem;
    font-weight: 600;
  }

  .list .listItems {
    padding: 0;
    list-style: none;
  }

  .list .listItems li{
    margin: 2px 8px;
    cursor: pointer;
  }

  .list .listItems li:hover {
    font-weight: 800;
  }

  .icon.iconActive .hamburguer {
    background: transparent;
    box-shadow: 0 2px 5px transparent;
  }

  .icon.iconActive .hamburguer::after {
    top: 0;
    background: #fff;
    transform: rotate(225deg);
    box-shadow: 0 -2px 5px rgba(0, 0, 0, 0.2);
  }

  .icon.iconActive .hamburguer::before {
    top: 0;
    background: #fff;
    transform: rotate(135deg);
    box-shadow: 0 -2px 5px rgba(0, 0, 0, 0.2);
  }

  .menu.menuOpen {
    width: 150px;
    height: 100vh;
    background: #000;
    box-shadow: 10px 0px 69px 0px rgba(0, 0, 0, 0.59)
  }
`;
  
  export default Header;
  