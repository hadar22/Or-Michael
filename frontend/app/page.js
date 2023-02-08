'use client';
import React from 'react';
import BulletinBoard from '../components/BulletinBoard';
// import { DATA } from '@/fake_data/data';
import axios from 'axios';
import { useState, useEffect } from 'react';

const VolunteerAdsUrl = 'http://localhost:5001/api/v1/volunteer/ad';

export default function Home() {
  const [volunteerAds, setVolunteerAds] = useState([]);

  useEffect(() => {
    axios
      .get(VolunteerAdsUrl)
      .then((response) => {
        // handle success
        console.log(response);
        setVolunteerAds(response.data.volunteer_ads);
      })
      .catch((error) => {
        // handle error
        console.log(error);
      })
      .finally(() => {
        // always executed
        console.log('Get method finish');
      });
  }, []);
  return (
    <div className="w-full h-screen homepage">
      <div className="w-4/5 text-center absolute top-1/2 left-1/2  -translate-x-1/2 -translate-y-1/2  ">
        <h1 className="text-red-400 text-3xl">לוח התנדבויות</h1>
        <BulletinBoard volunteer_ads={volunteerAds} />
      </div>
    </div>
  );
}
