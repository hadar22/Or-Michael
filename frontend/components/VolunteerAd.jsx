import React from 'react';

const VolunteerAd = ({ ad }) => {
  return (
    <div>
      <ul>
        <li>{ad.title}</li>
        <li>{'מארגן ' + ad.organizerCoordinator} </li>
        <li>{'בית חולים' + ad.hospital}</li>
        <li>{'תאריך' + ad.volunteeringDate}</li>
        <li>{'תיאור ' + ad.describe}</li>
      </ul>
    </div>
  );
};

export default VolunteerAd;
