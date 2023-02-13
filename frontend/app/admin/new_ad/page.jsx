'use client';
import React, { useEffect, useState } from 'react';
import axios from 'axios';

const VolunteerAdsURL = 'http://localhost:5001/api/v1/volunteer/ad';

let axiosConfig = {
  headers: {
    'Content-Type': 'application/json;charset=UTF-8',
    'Access-Control-Allow-Origin': '*',
  },
};

const page = () => {
  // const hospitals = [
  //   { id: 2, value: 'הדסה', label: 'הדסה' },
  //   { id: 3, value: 'הלל-יפה', label: 'הלל-יפה' },
  //   { id: 4, value: 'איכילוב', label: 'איכילוב' },
  //   { id: 5, value: 'תל-השומר', label: 'תל-השומר' },
  // ];

  const [newVolunteerAd, setNewVolunteerAd] = useState({
    organizerCoordinator: 'אורית',
    volunteers: ['הדר', 'דניאל', 'חסי', 'חסי'],
    title: '',
    hospital: '',
    volunteeringDate: '',
    volunteeringTime: '',
    describe: '',
    photo: '',
    volunteersNumber: '0',
  });

  const handleChange = (e) => {
    setNewVolunteerAd((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    setNewVolunteerAd((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
    console.log(newVolunteerAd);

    axios
      .post(VolunteerAdsURL, JSON.stringify(newVolunteerAd), axiosConfig)

      .then(function (response) {
        console.log(response);
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  // useEffect(() => {
  //   // required action here
  // }, [newVolunteerAd]); // watch changes here
  return (
    <>
      <div className="w-full flex flex-col items-center">
        <h1 className="mr-4 text-blue-700 font-bold text-5xl">
          הוסף מודעה חדשה
        </h1>

        <form className="w-1/2 mt-10">
          <div className="relative z-0 w-full mb-6 group">
            <input
              onChange={handleChange}
              type="text"
              className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-black dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer text-end"
              name="title"
              value={newVolunteerAd.title}
              placeholder="כותרת מודעה"
              required
            />
          </div>

          <div className="relative z-0 w-full mb-6 group">
            <textarea
              onChange={handleChange}
              rows="4"
              name="describe"
              vlaue={newVolunteerAd.describe}
              className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500  dark:border-gray-600 dark:placeholder-gray-400 dark:text-black dark:focus:ring-blue-500 dark:focus:border-blue-500 text-end"
              placeholder="תיאור התנדבות"
              required
            ></textarea>
          </div>

          <div className="grid md:grid-cols-1 md:gap-6 ">
            <div className=" z-0 w-full mb-6 group flex  flex-col ">
              <label
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-black text-end"
                htmlFor="file_input"
              >
                הוסף תמונה
              </label>

              <input
                onChange={handleChange}
                name="photo"
                vlaue={newVolunteerAd.photo}
                className="block w-full text-sm text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50 dark:text-gray-400 focus:outline-none  dark:border-gray-600 dark:placeholder-gray-400"
                aria-describedby="file_input_help"
                id="file_input"
                type="file"
              />

              <p
                className="mt-1 text-sm text-gray-900 dark:text-gray-600"
                id="file_input_help"
              >
                (800x400px גודל מקסימאלי) SVG, PNG, JPG or GIF.
              </p>
            </div>
          </div>

          <div className="grid md:grid-cols-4 md:gap-6 ">
            <div className=" z-0 w-full mb-6 group flex  flex-row-reverse ">
              <input
                className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-black dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer text-end"
                type="text"
                name="volunteersNumber"
                onChange={handleChange}
                value={newVolunteerAd.volunteersNumber}
                placeholder="כמות מתנדבים"
              />
            </div>
            <div className=" z-0 w-full mb-6 group flex  flex-row-reverse">
              <input
                className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-black dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer text-end"
                type="text"
                value={newVolunteerAd.hospital}
                onChange={handleChange}
                name="hospital"
                placeholder="בית חולים"
              />
            </div>

            <div className="z-0 w-full mb-6 group flex  flex-row-reverse">
              <input
                className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-black dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer text-end"
                type="text"
                name="volunteeringDate"
                onChange={handleChange}
                value={newVolunteerAd.volunteeringDate}
                placeholder="תאריך"
              />
            </div>

            <div className="z-0 w-full mb-6 group flex flex-row-reverse">
              <input
                className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-black dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer text-end"
                type="text"
                onChange={handleChange}
                name="volunteeringTime"
                value={newVolunteerAd.volunteeringTime}
                placeholder="שעה"
              />
            </div>
          </div>
        </form>

        <button
          type="submit"
          onClick={handleSubmit}
          className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
        >
          פרסם התנדבות
        </button>
      </div>
    </>
  );
};

export default page;
