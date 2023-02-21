import React from "react";

const VolunteerAd = ({ ad }) => {
  return (
    <div className=" rounded-lg shadow-lg m-8 flex flex-col overflow-hidden bg-gray-100 p-5">
      <h1 className="text-lg font-semibold mb-2 underline text-center">
        {ad.title}
      </h1>
      <img
        src={ad.photo}
        alt="volunteering"
        style={{ border: "2px solid white" }}
        className="w-3/5 h-3/5 object-cover mx-auto"
      />
      <p className="m-1 text-xs leading-4 text-center ">
        <b>:מתנדבים דרושים</b> <br />
        {ad.volunteersNumber}
      </p>
      <p className="m-1 text-xs leading-4 text-center">
        <b>:רכז</b> <br />
        {ad.organizerCoordinator}
      </p>
      <p className="m-1 text-xs leading-4 text-center">
        <b>:בית חולים</b> <br />
        {ad.hospital}
      </p>
      <p className="m-1 text-xs leading-4 text-center">
        <b>:תיאור</b>
        <br /> {ad.describe}
      </p>
      <p className="m-1 text-xs leading-4 text-center">
        <b>:תאריך התנדבות</b> <br />
        {`${ad.volunteeringDate} | ${ad.volunteeringTime}`}
      </p>
      {/* <p className="m-1 text-xs leading-4 text-center">
        <b>Volunteers Needed:</b> <br />
        {ad.volunteersNumber}
      </p> */}
    </div>
  );
};

export default VolunteerAd;
