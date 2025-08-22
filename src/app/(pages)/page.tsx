import Hero from "@/shared/hero";
import BodyTypes from "@/shared/bodyTypes";
import Wrapper from "@/shared/wrapper";
import Offers from "@/shared/offers";

export default function Home() {
  return (
    <div className="">
      <Hero />
      <Wrapper>
        <BodyTypes />
        <Offers />
      </Wrapper>
    </div>
  );
}
