import React from 'react';
import { VolunteerAd } from './VolunteerAd';

const BulletinBoard = ({ volunteer_ads }) => {
  return (
    <>
      <div>Searchbar component</div>

      <div>
        {volunteer_ads.map((ad) => {
          <VolunteerAd prop={ad} />;
        })}
      </div>
    </>
  );
};

export default BulletinBoard;
