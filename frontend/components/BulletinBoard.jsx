import React from 'react';

import VolunteerAd from '../components/VolunteerAd';

const BulletinBoard = ({ volunteer_ads }) => {
  const renderList = volunteer_ads.map((ad) => (
    // console.log(item.id)

    <VolunteerAd key={ad.id} ad={ad} />
  ));
  return (
    <>
      <div>
        <div>Searchbar component</div>
        <div className="flex flex-row">{renderList}</div>
      </div>
    </>
  );
};

export default BulletinBoard;
