import React, { useEffect } from 'react';
// import { useSelector } from 'react-redux';
import styled from 'styled-components';
import data from './data';
import dataFilter from '../../dataFilter';
import fetchUserByPosts from '../../store/posts/postsThunk';
import { useDispatch } from 'react-redux';

function Card() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchUserByPosts());
  }, []);
  return (
    <StyledCardWrap>
      <StyledCard>
        {data.map((item) => {
          return (
            <li key={item.id}>
              <p className="title">{item.title}</p>
              <div className="sports-wrap">
                {item.sportsTypes.map((sport, index) => {
                  if (index > 2) return;
                  const sportPick = dataFilter.sports[sport];
                  return (
                    <div key={index}>
                      <img
                        src={`/images/sports/${sportPick}.png`}
                        alt={sportPick}
                      />
                      <p>{sportPick}</p>
                    </div>
                  );
                })}
              </div>
              <div className="card-footer">
                <span className="city-name">
                  {dataFilter.cities[item.city]}
                </span>
                <span>♥ {item.likeCount}</span>
              </div>
            </li>
          );
        })}
      </StyledCard>
    </StyledCardWrap>
  );
}

export default Card;

const StyledCard = styled.ul`
  width: 100%;
  max-width: 1400px;
  justify-content: center;
  display: flex;
  flex-wrap: wrap;
  padding: 0;
  margin-bottom: 10rem;
  li {
    width: 100%;
    max-width: 320px;

    height: 320px;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    margin: 0.625rem;
    padding: 1.5rem;
    background: #fff;
    box-shadow: 0 5px 25px rgb(0 0 0 / 15%);
    border-radius: 1.5rem;
    cursor: pointer;
    .title {
      font-size: 1.2rem;
      font-weight: 400;
      width: 100%;
      text-align: center;
      line-height: 1.265;
      display: -webkit-box;
      -webkit-box-orient: vertical;
      -webkit-line-clamp: 2;
      overflow: hidden;
    }
    .sports-wrap {
      display: flex;
      justify-content: center;
      align-items: center;
      text-align: center;
      div + div {
        margin-left: 2rem;
      }
      p {
        margin-top: 10px;
      }
      img {
        width: 60px;
        height: 60px;
      }
    }
    .card-footer {
      display: flex;
      justify-content: space-between;
      align-items: center;
      .city-name {
        border-radius: 5px;
        background-color: black;
        padding: 5px;
        color: #fff;
      }
    }
  }
`;

const StyledCardWrap = styled.section`
  display: flex;
  justify-content: center;
`;
