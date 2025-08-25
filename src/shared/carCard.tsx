"use client";

import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { MapPin, Gauge, Fuel, Settings, Heart } from "lucide-react";

const CarCard = ({
  image,
  date,
  title,
  year,
  price,
  location,
  mileage,
  fuel,
  transmission,
  verified,
  used,
}: any) => {
  return (
    <Card className="overflow-hidden rounded-xl bg-[#F5F7FA] flex flex-col">
      {/* Image */}
      <div className="relative w-full aspect-[16/9]">
        <img
          src={image}
          alt={title}
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute top-3 left-3 flex gap-2">
          {/* {verified && (
            <span className="bg-green-600 text-white text-xs px-2 py-1 rounded-md">
              Verified
            </span>
          )} */}
          {used && (
            <span className="bg-orange-500 text-white text-xs px-2 py-1 rounded-md">
              Used
            </span>
          )}
        </div>
      </div>

      {/* Content */}
      <CardHeader className="flex-0">
        <div className="flex justify-between items-center text-[13px] text-gray-500">
          <p>{date}</p>
          <Heart className="w-8 h-8 cursor-pointer border border-gray-300 rounded-full p-2 text-black" />
        </div>
        <CardTitle className="text-lg leading-snug">
          {title}{" "}
          <span className="text-gray-500 font-medium text-xs">({year})</span>
        </CardTitle>
        <p className="text-lg font-bold">${price}</p>
      </CardHeader>

      <div className="border-t mx-6 border-gray-300"></div>

      <CardContent className="grid grid-cols-2 gap-4 text-sm text-gray-600 mt-3 mb-4 flex-1">
        <div className="flex items-center gap-2">
          <MapPin className="w-4 h-4" /> {location}
        </div>
        <div className="flex items-center gap-2">
          <Gauge className="w-4 h-4" /> {mileage}
        </div>
        <div className="flex items-center gap-2">
          <Fuel className="w-4 h-4" /> {fuel}
        </div>
        <div className="flex items-center gap-2">
          <Settings className="w-4 h-4" /> {transmission}
        </div>
      </CardContent>
    </Card>
  );
};

export default CarCard;
