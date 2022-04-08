import React, { useState } from 'react';
import styled from 'styled-components';
import { MdOutlineArrowDropDown } from 'react-icons/md';

function Header() {
  const [isLogin, setIsLogin] = useState(false);
  const [list, setList] = useState(true);
  const [userName] = useState('유송현');
  return (
    <StyledHeader>
      <div className="logo">Team Finder</div>
      <div className="header-right">
        {isLogin ? (
          <>
            <button>새 글 쓰기</button>
            <button onClick={() => setList(!list)}>
              {userName} <MdOutlineArrowDropDown fill="#868e96" />
            </button>
            {list && (
              <ul>
                <li>내 작성글</li>
                <li>설정</li>
                <li>로그아웃</li>
              </ul>
            )}
          </>
        ) : (
          <>
            <button>새 글 쓰기</button>
            <button onClick={() => setIsLogin(!isLogin)}>로그인</button>
          </>
        )}
      </div>
    </StyledHeader>
  );
}

export default Header;

const StyledHeader = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1.5rem;

  .logo {
    font-size: 2rem;
    font-family: 'Anton', sans-serif;
    letter-spacing: 0.3rem;

    padding: 5px 10px;
    cursor: pointer;
    &:hover {
      font-weight: bold;
    }
  }
  .header-right {
    position: relative;
    button {
      font-size: 1.2rem;
      font-weight: bold;
    }
    button + button {
      margin-left: 2rem;
    }
    ul {
      width: 15rem;
      position: absolute;
      background: #fff;
      box-shadow: 0 5px 25px rgb(0 0 0 / 15%);
      margin-top: 20px;
      right: 0;
      li {
        padding: 0.75rem 1rem;
        line-height: 1.5;
        font-weight: bold;
        cursor: pointer;
        &:hover {
          background-color: #f2f2f2;
        }
      }
    }
  }
`;
