import React from 'react';
import dataFilter from '../../dataFilter';
import styled from 'styled-components';
import { useDispatch, useSelector } from 'react-redux';
import { sportsFilter } from '../../store/posts/postsSlice';

function Filter() {
  const { cities, sports } = dataFilter;
  const { cityTypes } = useSelector((state) => state.posts);
  const { sportsTypes } = useSelector((state) => state.posts);
  console.log(sportsTypes);
  const dispatch = useDispatch();

  const sportsOnClick = (index) => {
    dispatch(sportsFilter(index));
  };

  const cityOnClick = () => {};

  return (
    <section>
      <StyledCityFilter>
        <ul className="city-filter">
          {cities.map((city, index) => {
            return (
              <li
                key={city}
                className={!cityTypes.includes(index) ? 'active' : undefined}
                onClick={cityOnClick}
              >
                {city}
              </li>
            );
          })}
        </ul>
      </StyledCityFilter>
      <StyledSportsFilter>
        <ul className="sports-filter">
          {sports.map((sport, index) => {
            return (
              <li
                key={sport}
                className={!sportsTypes.includes(index) ? 'active' : undefined}
                onClick={() => sportsOnClick(index)}
              >
                <img src={`/images/sports/${sport}.png`} alt={sport} />
                <p>{sport}</p>
              </li>
            );
          })}
        </ul>
      </StyledSportsFilter>
    </section>
  );
}

export default Filter;

const StyledCityFilter = styled.div`
  background-color: #e0e0e0;
  .city-filter {
    max-width: 1400px;
    margin: 0 auto;
    padding: 20px 1rem;
    display: flex;
    flex-wrap: wrap;
    gap: 10px;
    li {
      padding: 5px 10px;
      color: #fff;
      background-color: #000;
      cursor: pointer;
      border-radius: 15px;
      &:hover {
        transform: scale(1.2);
        transition: 0.5s;
      }
      &.active {
        background-color: #fff;
        color: #000;
      }
    }
  }
`;

const StyledSportsFilter = styled.div`
  border-top: 1px solid #606060a8;
  border-bottom: 1px solid #606060a8;
  ul {
    max-width: 1400px;
    margin: 0 auto;
    display: flex;
    flex-wrap: wrap;
    gap: 2rem 8rem;
    padding: 15px 10px;
  }
  li {
    text-align: center;

    &.active {
      opacity: 0.4;
    }

    p {
      margin-top: 5px;
    }
  }
  img {
    width: 70px;
    height: 70px;
    cursor: pointer;
    &:hover {
      transform: scale(1.2);
      transition: 0.5s;
    }
  }
`;
