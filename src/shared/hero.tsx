"use client";

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { ToggleGroup, ToggleGroupItem } from "@/components/ui/toggle-group";
import { Button } from "@/components/ui/button";
import { useForm } from "react-hook-form";
import { toast } from "sonner";
import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Search } from "lucide-react";
import { FcGoogle } from "react-icons/fc";
import Wrapper from "./wrapper";
import Image from "next/image";

const Hero = () => {
  const [selected, setSelected] = useState("all");

  const { handleSubmit, setValue } = useForm({
    defaultValues: {
      make: "",
      location: "",
      model: "",
      yearFrom: "",
      yearTo: "",
      bodyType: "",
      priceFrom: "",
      priceTo: "",
    },
  });

  const onSubmit = (data: any) => {
    toast("You submitted the following values", {
      description: (
        <pre className="mt-2 w-[320px] rounded-md bg-neutral-950 p-4">
          <code className="text-white">{JSON.stringify(data, null, 2)}</code>
        </pre>
      ),
    });
  };

  return (
    <div className="relative min-h-[736px] bg-[url('/background.png')] bg-cover bg-center flex items-center justify-center overflow-hidden px-4">
      <Wrapper>
        <div className="relative z-10 flex flex-col-reverse lg:flex-row items-center  gap-10">
          {/* Search Box */}
          <div className="bg-white/10 backdrop-blur-md p-8 rounded-xl w-full max-w-[750px]">
            {/* Tabs */}
            <ToggleGroup
              type="single"
              value={selected}
              onValueChange={(value) => {
                if (value) setSelected(value);
              }}
              className="gap-2 mb-6"
            >
              {["all", "new", "used"].map((item) => (
                <ToggleGroupItem
                  key={item}
                  value={item}
                  className="
                  border border-gray-400 rounded-xl px-4 py-2
                  data-[state=on]:border-white
                  data-[state=on]:bg-transparent
                  hover:bg-transparent
                  hover:border-gray-200
                  transition-colors duration-200
                "
                >
                  <h1 className="text-white capitalize">{item} cars</h1>
                </ToggleGroupItem>
              ))}
            </ToggleGroup>

            {/* Form */}
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2  gap-4">
                <Select onValueChange={(val) => setValue("make", val)}>
                  <SelectTrigger className="w-full">
                    <SelectValue placeholder="Make" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="Toyota">Toyota</SelectItem>
                    <SelectItem value="BMW">BMW</SelectItem>
                    <SelectItem value="Mercedes">Mercedes</SelectItem>
                  </SelectContent>
                </Select>

                <Select onValueChange={(val) => setValue("location", val)}>
                  <SelectTrigger className="w-full">
                    <SelectValue placeholder="Location" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="New York">New York</SelectItem>
                    <SelectItem value="London">London</SelectItem>
                    <SelectItem value="Tokyo">Tokyo</SelectItem>
                  </SelectContent>
                </Select>

                <Select onValueChange={(val) => setValue("model", val)}>
                  <SelectTrigger className="w-full">
                    <SelectValue placeholder="Model" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="Camry">Camry</SelectItem>
                    <SelectItem value="X5">X5</SelectItem>
                    <SelectItem value="C-Class">C-Class</SelectItem>
                  </SelectContent>
                </Select>

                <div className="flex w-full rounded-md overflow-hidden border">
                  {/* Year From */}
                  <Select onValueChange={(val) => setValue("yearFrom", val)}>
                    <SelectTrigger className="w-1/2 rounded-none border-none">
                      <SelectValue placeholder="Year from" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="2015">2015</SelectItem>
                      <SelectItem value="2018">2018</SelectItem>
                      <SelectItem value="2020">2020</SelectItem>
                    </SelectContent>
                  </Select>

                  {/* Divider */}
                  <div className="w-px bg-gray-300" />

                  {/* Year To */}
                  <Select onValueChange={(val) => setValue("yearTo", val)}>
                    <SelectTrigger className="w-1/2 rounded-none border-none">
                      <SelectValue placeholder="Year to" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="2022">2022</SelectItem>
                      <SelectItem value="2023">2023</SelectItem>
                      <SelectItem value="2024">2024</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <Select onValueChange={(val) => setValue("bodyType", val)}>
                  <SelectTrigger className="w-full">
                    <SelectValue placeholder="Body Type" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="SUV">SUV</SelectItem>
                    <SelectItem value="Sedan">Sedan</SelectItem>
                    <SelectItem value="Birbalo">Birbalo</SelectItem>
                  </SelectContent>
                </Select>

                <div className="flex w-full rounded-md overflow-hidden border not-dark:bg-white/90">
                  {/* Price From */}
                  <Input
                    placeholder="$ Price from"
                    className="rounded-none border-none"
                  />

                  {/* Divider */}
                  <div className="w-px bg-gray-300" />

                  {/* Price To */}
                  <Input
                    placeholder="$ Price to"
                    className="rounded-none border-none"
                  />
                </div>
              </div>

              {/* Buttons */}
              <div className="flex items-center gap-4">
                <Button type="submit" className="bg-pink-bg text-white">
                  <Search /> Search
                </Button>
              </div>
            </form>
          </div>

          {/* Text Block */}
          <div className="text-white text-center lg:text-left max-w-md">
            <h1 className="text-5xl font-bold mb-4">
              Easy way to find the right car
            </h1>
            <div className="flex items-center justify-center lg:justify-start gap-2 mt-2">
              <FcGoogle size={24} />
              <span className="text-sm">Google</span>
              <span className="text-sm text-yellow-400">⭐ 4.9</span>
            </div>
          </div>
        </div>
      </Wrapper>

      {/* Foreground Car Image */}
      <Image
        src="/image.png"
        alt="Hero Car"
        width={500}
        height={500}
        className="
          absolute
          max-w-[1300px]
          w-full
          bottom-0
          left-1/2
          translate-x-[-50%]
          sm:bottom-auto
          sm:left-auto
          sm:translate-x-0
          sm:right-0
          sm:top-1/2
          sm:translate-y-[-50%]
          opacity-30
          z-0
          pointer-events-none
        "
      />
    </div>
  );
};

export default Hero;
