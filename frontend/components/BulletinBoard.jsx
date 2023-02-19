import React from "react";

import VolunteerAd from "../components/VolunteerAd";

const BulletinBoard = ({ volunteer_ads }) => {
  const renderList = volunteer_ads.map((ad) => (
    // console.log(item.id)
    <VolunteerAd key={ad._id} ad={ad} />
  ));
  return (
    <>
      <div>
        <div>Searchbar component</div>
        <div>
          <div className="grid md:grid-cols-3  gap-4 absolute">
            {renderList}
          </div>
        </div>
      </div>
    </>
  );
};

export default BulletinBoard;
