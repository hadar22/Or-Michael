"use client";
import React from "react";
import BulletinBoard from "../components/BulletinBoard";
// import { DATA } from '@/fake_data/data';
import axios from "axios";
import { useState, useEffect } from "react";
import FilterBar from "@/components/FilterBar";
const VolunteerAdsURL = "http://localhost:5002/api/v1/volunteer/ad";

export default function Home() {
  const [volunteerAds, setVolunteerAds] = useState([]);

  useEffect(() => {
    axios
      .get(VolunteerAdsURL)
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

        console.log("Get method finish");
      });
  }, []);
  return (
    <div className="w-full">
      <div className="relative w-4/5 text-center mx-auto">
        <h1 className="text-red-400 text-3xl">לוח התנדבויות</h1>

        <BulletinBoard className="fixed" volunteer_ads={volunteerAds} />
      </div>
    </div>
  );
}
