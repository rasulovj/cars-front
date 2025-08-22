import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { MapPin, Gauge, Fuel, Settings, Heart } from "lucide-react";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip";

const offers = [
  {
    id: 1,
    image: "/car.jpg",
    date: "28/06/2024",
    title: "Maserati Granturismo",
    year: "(2020)",
    price: "$73,000",
    tags: ["Verified", "Used"],
    location: "Los Angeles",
    mileage: "69K mi",
    fuel: "Gasoline",
    transmission: "Automatic",
  },
  {
    id: 2,
    image: "/car.jpg",
    date: "23/10/2024",
    title: "Volvo XC90 Sport 4WD",
    year: "(2024)",
    price: "$92,500",
    tags: ["New"],
    location: "Chicago",
    mileage: "0 mi",
    fuel: "Hybrid",
    transmission: "Automatic",
  },
  {
    id: 3,
    image: "/car.jpg",
    date: "15/07/2024",
    title: "Mercedes-Benz Coupe",
    year: "(2021)",
    price: "$115,400",
    tags: ["Used"],
    location: "New York",
    mileage: "15K mi",
    fuel: "Diesel",
    transmission: "Manual",
  },
];

export default function Offers() {
  return (
    <section className="py-10">
      <div className="px-4">
        {/* Heading */}
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-3xl font-bold">Top offers</h2>
          <button className="text-sm font-medium text-muted-foreground hover:underline">
            View all →
          </button>
        </div>

        {/* Grid Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-[40%_60%] gap-6">
          {/* Big Card */}
          <Card className="lg:flex flex-row lg:flex-col overflow-hidden hidden">
            <div className="relative w-full h-48 sm:h-56 md:h-64 lg:h-auto">
              <img
                src={offers[0].image}
                alt={offers[0].title}
                className="w-full h-full object-cover"
              />
              <div className="absolute top-4 left-4 flex gap-2">
                {offers[0].tags.map((tag) => (
                  <Badge
                    key={tag}
                    className={
                      tag === "Verified"
                        ? "bg-teal-700"
                        : tag === "Used"
                        ? "bg-orange-500"
                        : "bg-primary"
                    }
                  >
                    {tag}
                  </Badge>
                ))}
              </div>
            </div>
            <CardContent className="p-4">
              <div className="flex justify-between">
                <p className="text-sm text-muted-foreground mb-1">
                  {offers[0].date}
                </p>
                <Tooltip>
                  <TooltipTrigger>
                    <Heart size={20} className="cursor-pointer" />
                  </TooltipTrigger>
                  <TooltipContent>
                    <p>Wishlist</p>
                  </TooltipContent>
                </Tooltip>
              </div>
              <h3 className="font-semibold mb-1">
                {offers[0].title}{" "}
                <span className="text-muted-foreground">{offers[0].year}</span>
              </h3>
              <p className="text-lg font-bold">{offers[0].price}</p>

              <div className="h-[1px] bg-gray-300 my-4 w-full flex"></div>

              <div className="flex flex-wrap gap-2 mt-3 text-sm text-muted-foreground">
                <span className="flex items-center gap-1">
                  <MapPin size={14} /> {offers[0].location}
                </span>
                <span className="flex items-center gap-1">
                  <Gauge size={14} /> {offers[0].mileage}
                </span>
                <span className="flex items-center gap-1">
                  <Fuel size={14} /> {offers[0].fuel}
                </span>
                <span className="flex items-center gap-1">
                  <Settings size={14} /> {offers[0].transmission}
                </span>
              </div>
            </CardContent>
          </Card>

          {/* Right column with stacked small cards */}
          <div className="flex flex-col gap-6 justify-between">
            {offers.map((offer, index) => (
              <Card
                key={offer.id}
                className={`flex flex-col sm:flex-row h-full overflow-hidden ${
                  index === 0 ? "lg:hidden" : ""
                }`}
              >
                <div className="relative w-full h-48 sm:h-56 md:h-64 lg:h-auto">
                  <img
                    src={offer.image}
                    alt={offer.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute top-4 left-4 flex gap-2">
                    {offer.tags.map((tag) => (
                      <Badge
                        key={tag}
                        className={
                          tag === "Used"
                            ? "bg-orange-500"
                            : tag === "New"
                            ? "bg-red-500"
                            : "bg-primary"
                        }
                      >
                        {tag}
                      </Badge>
                    ))}
                  </div>
                </div>
                <CardContent className="p-4 w-full">
                  <div className="flex justify-between ">
                    <p className="text-sm text-muted-foreground mb-1">
                      {offer.date}
                    </p>
                    <Tooltip>
                      <TooltipTrigger>
                        <Heart size={20} className="cursor-pointer" />
                      </TooltipTrigger>
                      <TooltipContent>
                        <p>Wishlist</p>
                      </TooltipContent>
                    </Tooltip>
                  </div>
                  <h3 className="font-semibold">
                    {offer.title}{" "}
                    <span className="text-muted-foreground">{offer.year}</span>
                  </h3>
                  <p className="text-lg font-bold">{offer.price}</p>
                  <div className="flex flex-wrap gap-2 mt-3 text-sm text-muted-foreground">
                    <span className="flex items-center gap-1">
                      <MapPin size={14} /> {offer.location}
                    </span>
                    <span className="flex items-center gap-1">
                      <Gauge size={14} /> {offer.mileage}
                    </span>
                    <span className="flex items-center gap-1">
                      <Fuel size={14} /> {offer.fuel}
                    </span>
                    <span className="flex items-center gap-1">
                      <Settings size={14} /> {offer.transmission}
                    </span>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
