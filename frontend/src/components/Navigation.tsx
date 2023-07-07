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
  display: grid;
  grid-template-columns: 1.5fr 2fr 1.5fr;
  gap: 5px;
  padding: 15px;
  align-items: center;
  justify-content: center;
`;

const NavButton = styled.button`
  margin-left: 7px;
  margin-right: 7px;
  font-family: var(--font1);
  color: ghostwhite;
  height: 44px;
  background: #0F0F0F;
  border: none;
  border-radius: 5px;
  box-shadow: 0px 1px 2px 0px rgba(0, 0, 0, 0.50);
`;