import One from "../../public/achive/1.jpg";
import Two from "../../public/achive/2.jpg";
import Three from "../../public/achive/3.jpeg";
import Image from "next/image";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/react-splide/css/skyblue";

const achive = [
  {
    img: One,
    alt: "rakib",
  },
  {
    img: Two,
    alt: "Rakib",
  },
  {
    img: Three,
    alt: "rakib",
  },
];

const Achivement = () => {
  return (
    <div className="mt-6 md:mt-28 scroll-mt-[100px]" id="achivements">
      <h1 className="text-2xl font-bold mb-2 border-l-2 border-primary pl-3 uppercase">
        Achivement
      </h1>
      <h2 className="text-lg font-bold mt-4">
        <span className="text-[#fc00ff] ">BUET</span> CSE FEST 2022
      </h2>
      <p className="text-neutral-content">Hackathon: Web 3.0 and Blockchain</p>
      <p className="text-neutral-content">Position: 2nd</p>
      <br />
      <Splide
        options={{
          rewind: true,
          autoplay: true,
          type: "loop",
          interval: 1500,
        }}
        aria-label="My Favorite Images"
      >
        {achive.map((data, index) => (
          <SplideSlide key={index}>
            <Image
              src={data.img}
              priority="true"
              key={index}
              className="rounded-lg w-full h-[250px] md:h-[400px] lg:h-[650px] object-cover"
              width="100"
              height="100"
              alt={data.alt}
            />
          </SplideSlide>
        ))}
      </Splide>
    </div>
  );
};

export default Achivement;
