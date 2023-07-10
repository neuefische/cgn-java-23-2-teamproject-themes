import styled from "styled-components";
function Navigation() {
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
  width: 344px;
  display: grid;
  grid-template-columns: 1.5fr 2fr 1.5fr;
  gap: 5px;
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
`;
