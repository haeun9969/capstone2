import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import Responsive from './Responsive';
import logo from '../../img/IENlogo2.png'

const HeaderBlock = styled.div`
  position: fixed;
  width: 100%;
  background: white;
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.08);
`;

const Wrapper = styled(Responsive)`
  height: 4rem;
  display: flex;
  align-items: center;
  justify-content: center;
  .logo {
    font-size: 1.125rem;
    font-weight: 800;
    letter-spacing: 2px;
  }
  .right {
    display: flex;
    align-items: center;
  }
`;

const Spacer = styled.div`
  height: 4rem;
`;

const Logo = styled.div`
	display: flex;
	align-items: center;
  justify-content: center;
  marginTop:'2vh';
  marginBottom:'2vh;
`;

const Header = () => {
  return (
    <div>
      <HeaderBlock>
        <Wrapper>
          <Link to="/">
            <Logo>
              <div className='logo'>
                <img className='logoImg' src={logo} alt='logo' />
              </div>
            </Logo>
          </Link>
          {/* <div className='right'>
            <button>로그인 없음</button>
          </div> */}
        </Wrapper>
      </HeaderBlock>
      <Spacer />
    </div>
  );
};

export default Header;