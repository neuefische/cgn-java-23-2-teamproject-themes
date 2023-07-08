import styled from "styled-components";
function Navigation() {
    return (
        <NavBar>
            <NavButton>Home</NavButton>
            <NavButton>Add Theme</NavButton>
            <NavButton>Gallery</NavButton>
        </NavBar>
    );
}

export default Navigation;


const NavBar = styled.nav`
  width: 344px;
  display: grid;
  grid-template-columns: 1.5fr 2fr 1.5fr;
  gap: 5px;
  padding: 15px;
  align-items: center;
  justify-content: center;
`;

const NavButton = styled.button`
  height: 44px;
  margin-left: 7px;
  margin-right: 7px;
  font-family: var(--font1);
  font-size: 20px;
  color: var(--colorBlack);
  background: var(--colorWhite);
  border: none;
  border-radius: 5px;
  box-shadow: var(--shadow2);
`;