import CarCard from "@/shared/carCard";
import { FilterSidebar } from "@/shared/filterSidebar";
import Wrapper from "@/shared/wrapper";

export default function CarsPage() {
  const cars = [
    {
      image: "/car.jpg",
      date: "27/05/2024",
      title: "Volvo XC90 Sport 4WD",
      year: 2019,
      price: 43500,
      location: "Houston",
      mileage: "78K mi",
      fuel: "Diesel",
      transmission: "Automatic",
      verified: true,
      used: true,
    },
    {
      image: "/car.jpg",
      date: "16/08/2024",
      title: "Porsche 911 Turbo S",
      year: 2017,
      price: 85000,
      location: "Chicago",
      mileage: "32K mi",
      fuel: "Gasoline",
      transmission: "Manual",
      verified: false,
      used: true,
    },
    {
      image: "/car.jpg",
      date: "30/09/2024",
      title: "Ford Truck Lifted",
      year: 2022,
      price: 63000,
      location: "Boston",
      mileage: "17K mi",
      fuel: "Diesel",
      transmission: "Automatic",
      verified: false,
      used: true,
    },
    {
      image: "/car.jpg",
      date: "30/09/2024",
      title: "Ford Truck Lifted",
      year: 2022,
      price: 63000,
      location: "Boston",
      mileage: "17K mi",
      fuel: "Diesel",
      transmission: "Automatic",
      verified: false,
      used: true,
    },
  ];

  return (
    <Wrapper>
      <div className="flex gap-6">
        {/* Sidebar */}
        <div className="hidden md:block">
          <FilterSidebar />
        </div>

        {/* Cars grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 flex-1">
          {cars.map((car, idx) => (
            <CarCard key={idx} {...car} />
          ))}
        </div>
      </div>
    </Wrapper>
  );
}
