import React from 'react';
import PropTypes from 'prop-types';
import { FlexWrapper } from '../../Common/GlobalStyles';
import { Block, InfoLeft, InfoRight } from './styles';

const DetailInfo = ({ year, sub, overview, genres, companies }) => {
  return (
    <Block>
      <InfoLeft>
        <FlexWrapper>
          <div className="year info-item">{year}</div>
          <div className="info-item">{sub}</div>
        </FlexWrapper>
        <div className="overview">{overview}</div>
      </InfoLeft>
      <InfoRight>
        <div className="genres-wrapper">
          <span>장르:</span>
          {genres &&
            genres.map((genre, index) =>
              index === genres.length - 1 ? genre.name : `${genre.name} • `
            )}
        </div>
        <div className="logos-wrapper">
          {companies
            .slice(0, 4)
            .map(
              (company) =>
                company.logo_path && (
                  <img
                    className="logo"
                    key={company.id}
                    src={`https://image.tmdb.org/t/p/w200/${company.logo_path}`}
                    alt={company.name}
                  />
                )
            )}
        </div>
      </InfoRight>
    </Block>
  );
};

DetailInfo.propTypes = {
  year: PropTypes.string,
  sub: PropTypes.string.isRequired,
  overview: PropTypes.string.isRequired,
  genres: PropTypes.array.isRequired,
  companies: PropTypes.array.isRequired,
};

export default DetailInfo;
