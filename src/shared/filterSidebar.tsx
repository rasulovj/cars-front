"use client";

import { useState, useEffect } from "react";
import { Checkbox } from "@/components/ui/checkbox";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { ToggleGroup, ToggleGroupItem } from "@/components/ui/toggle-group";
import { Slider } from "@/components/ui/slider";
// import { Switch } from "@/components/ui/switch";
import { Label } from "@/components/ui/label";

// Example API call function
const sendFiltersToApi = async (filters: any) => {
  console.log("Sending filters:", filters);
  // await fetch("/api/cars", { method: "POST", body: JSON.stringify(filters) });
};

export const FilterSidebar = () => {
  const [filters, setFilters] = useState({
    condition: "used",
    location: "",
    radius: "",
    bodyTypes: [] as string[],
    yearFrom: "",
    yearTo: "2023",
    make: "",
    model: "",
    price: [17000, 120000],
    negotiable: false,
    drivetrain: [] as string[],
  });

  // Call API whenever filters change
  useEffect(() => {
    sendFiltersToApi(filters);
  }, [filters]);

  // Toggle checkbox selection
  const handleCheckbox = (field: string, value: string) => {
    setFilters((prev) => {
      const exists = prev[field as keyof typeof prev] as string[];
      const updated = exists.includes(value)
        ? exists.filter((v) => v !== value)
        : [...exists, value];
      return { ...prev, [field]: updated };
    });
  };

  return (
    <div className="max-w-[320px] w-full p-5 border border-gray-200 rounded-2xl shadow-sm space-y-6">
      {/* Condition */}
      <ToggleGroup
        type="single"
        value={filters.condition}
        onValueChange={(val) =>
          val && setFilters({ ...filters, condition: val })
        }
        className="gap-2"
      >
        {["new", "used"].map((item) => (
          <ToggleGroupItem
            key={item}
            value={item}
            className="cursor-pointer border border-gray-200 rounded-xl px-4 py-2 
              data-[state=on]:border-black data-[state=on]:bg-gray-50 
              hover:bg-gray-50 transition-colors"
          >
            <span className="capitalize">{item} cars</span>
          </ToggleGroupItem>
        ))}
      </ToggleGroup>

      {/* Location */}
      <div className="space-y-2">
        <Label>Location and radius</Label>
        <Select
          onValueChange={(val) => setFilters({ ...filters, location: val })}
        >
          <SelectTrigger>
            <SelectValue placeholder="Any location" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="andijan">Andijan</SelectItem>
            <SelectItem value="namangan">Namangan</SelectItem>
            <SelectItem value="fargona">Fargona</SelectItem>
          </SelectContent>
        </Select>

        <Select
          onValueChange={(val) => setFilters({ ...filters, radius: val })}
        >
          <SelectTrigger>
            <SelectValue placeholder="Any radius" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="10">10 km</SelectItem>
            <SelectItem value="50">50 km</SelectItem>
            <SelectItem value="100">100 km</SelectItem>
          </SelectContent>
        </Select>
      </div>

      {/* Body Type */}
      <div className="space-y-2">
        <Label>Body type</Label>
        {["Sedan", "SUV", "Wagon", "Crossover", "Coupe", "Pickup"].map(
          (type) => (
            <div key={type} className="flex items-center space-x-2">
              <Checkbox
                checked={filters.bodyTypes.includes(type)}
                onCheckedChange={() => handleCheckbox("bodyTypes", type)}
              />
              <span>{type}</span>
            </div>
          )
        )}
      </div>

      {/* Year */}
      <div className="space-y-2">
        <Label>Year</Label>
        <div className="flex items-center gap-2">
          <Select
            onValueChange={(val) => setFilters({ ...filters, yearFrom: val })}
          >
            <SelectTrigger className="w-full">
              <SelectValue placeholder="From" />
            </SelectTrigger>
            <SelectContent>
              {["2010", "2015", "2018", "2020"].map((year) => (
                <SelectItem key={year} value={year}>
                  {year}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
          <Select
            value={filters.yearTo}
            onValueChange={(val) => setFilters({ ...filters, yearTo: val })}
          >
            <SelectTrigger className="w-full">
              <SelectValue />
            </SelectTrigger>
            <SelectContent>
              {["2021", "2022", "2023"].map((year) => (
                <SelectItem key={year} value={year}>
                  {year}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>
      </div>

      {/* Price */}
      <div className="space-y-2">
        <Label>Price</Label>
        <Slider
          value={filters.price}
          min={17000}
          max={120000}
          step={1000}
          onValueChange={(val) => setFilters({ ...filters, price: val })}
        />
        <div className="flex items-center gap-2">
          <Input
            type="number"
            value={filters.price[0]}
            onChange={(e) =>
              setFilters({
                ...filters,
                price: [Number(e.target.value), filters.price[1]],
              })
            }
          />
          <span>-</span>
          <Input
            type="number"
            value={filters.price[1]}
            onChange={(e) =>
              setFilters({
                ...filters,
                price: [filters.price[0], Number(e.target.value)],
              })
            }
          />
        </div>
        {/* <div className="flex items-center space-x-2">
          <Switch
            checked={filters.negotiable}
            onCheckedChange={(val) =>
              setFilters({ ...filters, negotiable: val })
            }
          />
          <span>Negotiated price</span>
        </div> */}
      </div>

      {/* Drivetrain */}
      <div className="space-y-2">
        <Label>Drivetrain</Label>
        {["AWD/4WD", "FWD", "RWD"].map((type) => (
          <div key={type} className="flex items-center space-x-2">
            <Checkbox
              checked={filters.drivetrain.includes(type)}
              onCheckedChange={() => handleCheckbox("drivetrain", type)}
            />
            <span>{type}</span>
          </div>
        ))}
      </div>
    </div>
  );
};
