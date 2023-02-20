"use client";
import { useEffect, useState } from "react";

export default function FilterBar(props) {
  //adding "All" to hospital array
  const data = props.data;
  // const data = ["All", ...props.data];
  // Hospital Selected State
  const [hospitalSelected, setHospitalSelected] = useState(undefined);
  // today's date foramted
  const today = new Date().toISOString().substring(0, 10);
  // Date Selected State
  const [dateSelected, setDateSelected] = useState(today);

  //update fetch request (Ill work on it, not final)
  const fetchUrl =
    "https://server/api/v1/volunteer" +
    (hospitalSelected || dateSelected != today ? "?" : "") +
    (hospitalSelected ? "hospital=" + hospitalSelected : "") +
    (hospitalSelected && dateSelected != today ? "&" : "") +
    (dateSelected && dateSelected != today ? "date=" + dateSelected : "");

  console.log(fetchUrl);
  return (
    <div className="bg-gray-100 mx-auto max-w-[400px] mt-2 flex justify-evenly py-2 rounded-md">
      <select
        className="rounded-md p-1"
        name=""
        id=""
        onChange={(event) => {
          const option = event.target.value;
          if (option === "All") {
            setHospitalSelected(undefined);
          } else {
            setHospitalSelected(option);
          }
        }}
        value={hospitalSelected}
      >
        <option>All</option>
        {data.map((hospital, index) => {
          return <option key={index}>{hospital}</option>;
        })}
      </select>
      <input
        className="rounded-md p-1"
        type="date"
        onChange={(event) => setDateSelected(event.target.value)}
        value={dateSelected}
      />
    </div>
  );
}
