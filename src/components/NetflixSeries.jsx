import seriesData from "../api/seriesData.json";
import React from "react";
import { SeriesCard } from "./SeriesCard";

const NetFlixSeries = () => {
  return (
    <ul className="grid grid-three--cols">
      {seriesData.map((data) =>{
        return <SeriesCard key={data.id} data ={data} />;
      })}
    </ul>
  );
};

export default NetFlixSeries;