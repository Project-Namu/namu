import styled from 'styled-components';
import { useLocation, Link } from 'react-router-dom';
import {
  Home,
  SearchRounded,
  ModeEditOutlineRounded
} from '@mui/icons-material';

const SideBarContainer = styled.nav`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: fixed;
  top: 30%;
  left: 1.5%;
`;

const IconWrapper = styled.div`
  width: 60px;
  height: 60px;
  background-color: #ffffff;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0px 0px 30px 0px;

  &:hover {
    cursor: pointer;
  }
`;

const CustomIcon = styled(({ color, hoverColor, ...props }) => (
  <props.component {...props} />
))`
  color: ${({ color }) => color};
  transition: color 0.3s;

  &:hover {
    color: ${({ hoverColor }) => hoverColor};
  }
`;

const SideBar = () => {
  const location = useLocation();
  const isHomePage = location.pathname === '/';

  const homeLink = isHomePage ? (
    <Link
      to="/"
      state={{
        comp: 'list'
      }}
    >
      <IconWrapper>
        <CustomIcon
          component={Home}
          color="#3F3F3F"
          hoverColor="#c7d36f"
          sx={{ fontSize: 35 }}
        />
      </IconWrapper>
    </Link>
  ) : (
    <Link to="/">
      <IconWrapper>
        <CustomIcon
          component={Home}
          color="#3F3F3F"
          hoverColor="#c7d36f"
          sx={{ fontSize: 35 }}
        />
      </IconWrapper>
    </Link>
  );

  return (
    <SideBarContainer>
      {homeLink}
      <Link to="/search">
        <IconWrapper>
          <CustomIcon
            component={SearchRounded}
            color="#3F3F3F"
            hoverColor="#c7d36f"
            sx={{ fontSize: 35 }}
          />
        </IconWrapper>
      </Link>
      <Link to="/newPost">
        <IconWrapper>
          <CustomIcon
            component={ModeEditOutlineRounded}
            color="#3F3F3F"
            hoverColor="#c7d36f"
            sx={{ fontSize: 35 }}
          />
        </IconWrapper>
      </Link>
    </SideBarContainer>
  );
};

export default SideBar;
