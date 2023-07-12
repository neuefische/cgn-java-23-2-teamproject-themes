import styled from "styled-components";
import {getSeasonAccentColor} from "../utils/utils.ts";
import {useFetch} from "../hooks/useFetch.ts";
import {Link, useLocation} from "react-router-dom";

function Navigation() {

    const location = useLocation();

    const themes = useFetch((state) => state.themes);
    const themeIndex = useFetch(state => state.themeIndex);
    const currentTheme = themes[themeIndex];

    return (
        <Footer $seasonstatus={currentTheme.seasonStatus}>
            <NavBar>
                <Link to={"/"}><NavButton selected={location.pathname === "/"} $variant={"side"}>Home</NavButton></Link>
                <Link to={"/add-theme"}><NavButton selected={location.pathname === "/add-theme"} $variant={"center"}>Add Theme</NavButton></Link>
                <Link to={"/themes"}><NavButton selected={location.pathname === "/themes"} $variant={"side"}>Gallery</NavButton></Link>
            </NavBar>
        </Footer>
    );
}

export default Navigation;


const NavBar = styled.nav`
  width: 345px;
  display: flex;
  justify-content: center;
  padding: 15px;

`;

type NavButtonProps = {
    $variant: string
    selected: boolean
}

const NavButton = styled.button<NavButtonProps>`
  width: ${({$variant}) => $variant === "center" ? "130px" : "93px"};
  height: 44px;
  margin-left: 7px;
  margin-right: 7px;
  font-family: var(--font1);
  font-size: 20px;
  color: var(--colorBlack);
  background: var(--colorWhite);
  border: ${({selected}) => selected ? "1px solid var(--colorBlack)" : "none"};
  border-radius: 5px;
  box-shadow: var(--shadow2);
  cursor: pointer;
  
    &:hover {
        background: lightgray;
    }
`;

type StyledProps = {
    $seasonstatus: string
}

const Footer = styled.footer<StyledProps>`
  position: fixed;
  bottom: 0;
  display: grid;
  place-items: center;
  width: 100%;
  background: ${({$seasonstatus}) => getSeasonAccentColor($seasonstatus)};
`;
