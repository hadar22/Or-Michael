import React from 'react';
// import { VolunteerAd } from './VolunteerAd';

const BulletinBoard = ({ volunteer_ads }) => {
  return (
    <>
      <div className="flex flex-col">
        <div>Searchbar component</div>

        <div>
          BulletinBoard
          {/* {volunteer_ads.map((ad) => {
          <VolunteerAd prop={ad} />;
        })} */}
        </div>
      </div>
    </>
  );
};

export default BulletinBoard;
