import React from 'react';
import styled from 'styled-components';
import Card from '../common/Card';

const Home = () => {
  return (
    <StyledHome>
      <section className="banner">
        <p className="title">
          원하는 지역과 스포츠를
          <br />
          함께할 팀원을 찾는 방법
        </p>
        <p>
          <span>Team Finder</span>에서 함께 할 팀원을 찾아보세요!
        </p>
        <img src="/images/team.png" alt="we are the team" />
      </section>
      <Card />
    </StyledHome>
  );
};

export default Home;

const StyledHome = styled.main`
  .banner {
    text-align: center;
    p {
      font-size: 1.5rem;
    }
    .title {
      font-size: 2rem;
      font-weight: bold;
      margin-bottom: 20px;
    }
    span {
      font-family: 'Anton', sans-serif;
    }
    img {
      width: 100%;
      max-width: 800px;
    }
  }
`;
