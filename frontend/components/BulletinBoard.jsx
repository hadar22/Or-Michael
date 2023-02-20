import React from "react";
import FilterBar from "./FilterBar";

import VolunteerAd from "../components/VolunteerAd";

const BulletinBoard = ({ volunteer_ads }) => {
  const renderList = volunteer_ads.map((ad) => (
    // console.log(item.id)
    <VolunteerAd key={ad._id} ad={ad} />
  ));


  //Will be api endpoint for hospitals
  const hospitals = volunteer_ads.map((ad) => ad.hospital);

  return (
    <>
      <div>
        <FilterBar data={hospitals} />

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
