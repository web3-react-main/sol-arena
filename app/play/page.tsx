"use client";

import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Mousewheel, Pagination } from "swiper/modules";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

const Page: React.FC = () => {
  const [isButton, setIsButton] = useState(false);
  const navigator = useRouter();

  const handlePlayButton = () => {
    setIsButton(true);
    setTimeout(() => {
      setIsButton(false);
    }, 600);
    navigator.push("https://play.solarena.io")
  };

  const [height, setHeight] = useState<number>(0);

  useEffect(() => {
    // Update height on component mount and window resize
    const updateHeight = () => {
      setHeight(window.innerHeight); // Adjust for any fixed headers
    };

    updateHeight(); // Set initial height

    window.addEventListener("resize", updateHeight);
    return () => {
      window.removeEventListener("resize", updateHeight);
    };
  }, []);

  return (
    <>
      {/* <Layout> */}
      <div className=" w-full bg-[url('/assets/play/back.webp')] bg-no-repeat h-screen bg-center bg-cover pt-[72px]">
        <div className="max-w-[1440px] m-auto ">
          <Swiper
            direction={"vertical"}
            pagination={{
              clickable: true,
            }}
            modules={[Pagination, Mousewheel]}
            style={{
              height: height - 72 + "px",
            }}
            mousewheel
            className="playSlider"
          >
            {/* 1m */}
            <SwiperSlide className=" relative flex flex-row justify-center items-center px-[30px] md:px-0">
              <div className=" w-[100%] h-[100%] flex flex-col justify-center items-center gap-8 ">
                <h2 className=" font-semibold text-[16px] md:text-[24px] text-[#41FFC6] text-center">
                  1. Enter the Arena
                </h2>
                <div className=" relative">
                  {/* <Image
                    src={"/assets/play/1m.png"}
                    alt="1m"
                    width={640}
                    height={360}
                    className=" "
                  /> */}
                  <video width="640" height="360" controls>
                    <source src="/assets/play/video/video-1.mp4" type="video/mp4" />
                  </video>
                  <Image
                    src={"/assets/play/1m-left.png"}
                    alt="1m-left"
                    width={407}
                    height={187}
                    className=" w-auto md:w-[406px] h-[85px] md:h-[187px] absolute right-[83%] md:right-[100%] bottom-[-20px] md:bottom-0 "
                  />
                  <Image
                    src={"/assets/play/1m-right.png"}
                    alt="1m-left"
                    width={407}
                    height={187}
                    className=" w-auto md:w-[406px] h-[85px] md:h-[187px] absolute left-[83%] md:left-[100%] bottom-[-20px] md:bottom-0 "
                  />
                </div>
                <p className=" text-[#C9D5FF] text-[13px] md:text-[18px] font-medium leading-[150%] max-w-[640px] h-[60px] md:h-[154px] flex justify-center items-center text-center">
                  Choose your Challenger and Team—teammates can’t harm you! When
                  you’re ready, Enter the Arena!
                </p>
              </div>
            </SwiperSlide>
            {/* 2m-3m */}
            <SwiperSlide className=" slider-desktop relative flex flex-row justify-center items-center">
              <div className=" w-[100%] h-[100%] flex flex-row gap-5 justify-center items-center">
                {/* 2m */}
                <div className=" w-[100%] h-[100%] flex flex-col justify-center items-end">
                  <div className=" flex flex-col justify-center items-center gap-8">
                    <h2 className=" font-semibold text-[24px] text-[#41FFC6] text-center">
                      2. Gather Energy
                    </h2>
                    <div className=" relative">
                      {/* <Image
                        src={"/assets/play/2m.png"}
                        alt="2m"
                        width={640}
                        height={360}
                        className=" relative z-10"
                      /> */}
                      <video width="640" height="360" controls>
                        <source src="/assets/play/video/video-2.mp4" type="video/mp4" />
                      </video>
                      <Image
                        src={"/assets/play/2m-1.png"}
                        alt="2m-1"
                        width={121}
                        height={126}
                        className=" absolute left-[-60px] top-10 z-0 "
                      />
                      <Image
                        src={"/assets/play/2m-2.png"}
                        alt="2m-2"
                        width={89}
                        height={91}
                        className=" absolute right-[40px] top-[-45px] z-20"
                      />
                      <Image
                        src={"/assets/play/2m-3.png"}
                        alt="2m-3"
                        width={97}
                        height={101}
                        className=" absolute right-[50px] bottom-[-70px] z-20"
                      />
                      <Image
                        src={"/assets/play/2m-4.png"}
                        alt="2m-4"
                        width={143}
                        height={145}
                        className=" absolute left-[-70px] bottom-[-20px] z-20"
                      />
                      <Image
                        src={"/assets/play/2m-2.png"}
                        alt="2m-5"
                        width={89}
                        height={91}
                        className=" absolute left-[60px] bottom-[-45px] z-0"
                      />
                    </div>
                    <p className=" text-[#C9D5FF] text-[18px] font-medium leading-[150%] max-w-[640px] h-[154px] flex justify-center items-center text-center">
                      Collect Energy to grow your Trail!
                    </p>
                  </div>
                </div>
                {/* 3m */}
                <div className=" w-[100%] h-[100%] flex flex-col justify-center items-start">
                  <div className=" flex flex-col justify-center items-center gap-8">
                    <h2 className=" font-semibold text-[24px] text-[#41FFC6] text-center">
                      3. Mystery Box & Power-ups
                    </h2>
                    <div className=" relative">
                      {/* <Image
                        src={"/assets/play/3m.png"}
                        alt="3m"
                        width={640}
                        height={360}
                        className=" "
                      /> */}
                      <video width="640" height="360" controls>
                        <source src="/assets/play/video/video-3.mp4" type="video/mp4" />
                      </video>
                      <Image
                        src={"/assets/play/3m-1.png"}
                        alt="3m-1"
                        width={73}
                        height={73}
                        className=" absolute right-[-60px] top-[40px]"
                      />
                      <Image
                        src={"/assets/play/3m-2.png"}
                        alt="3m-2"
                        width={227}
                        height={226}
                        className=" absolute right-[-100px] bottom-[-100px]"
                      />
                      <Image
                        src={"/assets/play/3m-3.png"}
                        alt="3m-3"
                        width={77}
                        height={77}
                        className=" absolute left-37 top-[150px]"
                      />
                    </div>
                    <p className=" text-[#C9D5FF] text-[18px] font-medium leading-[150%] max-w-[640px] h-[154px] flex justify-center items-center text-center">
                      Grab Mystery Boxes for random Power-ups!
                    </p>
                  </div>
                </div>
              </div>
            </SwiperSlide>
            {/* 2m-mobile */}
            <SwiperSlide className=" slider-mobile relative flex flex-row justify-center items-center px-[30px] md:px-0">
              <div className=" w-[100%] h-[100%] flex flex-col justify-center items-center gap-8">
                <h2 className=" font-semibold text-[16px] md:text-[24px] text-[#41FFC6] text-center">
                  2. Gather Energy
                </h2>
                <div className=" relative">
                  {/* <Image
                    src={"/assets/play/2m.png"}
                    alt="2m"
                    width={640}
                    height={360}
                    className=" relative z-10"
                  /> */}
                  <video width="640" height="360" controls>
                    <source src="/assets/play/video/video-2.mp4" type="video/mp4" />
                  </video>
                  <Image
                    src={"/assets/play/2m-1.png"}
                    alt="2m-1"
                    width={121}
                    height={126}
                    className=" w-[80px] h-[83px] md:w-[121px] md:h-[126px] absolute left-[-10%] top-[5%] z-0 "
                  />
                  <Image
                    src={"/assets/play/2m-2.png"}
                    alt="2m-2"
                    width={89}
                    height={91}
                    className=" w-[60px] h-[62px] md:w-[89px] md:h-[91px] absolute right-[3%] top-[-15%] z-20"
                  />
                  <Image
                    src={"/assets/play/2m-3.png"}
                    alt="2m-3"
                    width={97}
                    height={101}
                    className=" w-[67px] h-[71px] md:w-[97px] md:h-[101px] absolute right-[10%] bottom-[-15%] z-20"
                  />
                  <Image
                    src={"/assets/play/2m-4.png"}
                    alt="2m-4"
                    width={143}
                    height={145}
                    className=" w-[93px] h-[95px] md:w-[143px] md:h-[145px] absolute left-[-13%] bottom-[-10%] z-20"
                  />
                  <Image
                    src={"/assets/play/2m-2.png"}
                    alt="2m-5"
                    width={89}
                    height={91}
                    className=" absolute left-[60px] bottom-[-45px] z-0"
                  />
                </div>
                <p className="text-[#C9D5FF] text-[13px] md:text-[18px] font-medium leading-[150%] max-w-[640px] h-[60px] md:h-[154px] flex justify-center items-center text-center">
                  Collect Energy to grow your Trail!
                </p>
              </div>
            </SwiperSlide>
            {/* 3m-mobile */}
            <SwiperSlide className=" slider-mobile relative flex flex-row justify-center items-center px-[30px] md:px-0">
              <div className=" w-[100%] h-[100%] flex flex-col justify-center items-center gap-8">
                <h2 className=" font-semibold text-[16px] md:text-[24px] text-[#41FFC6] text-center">
                  3. Mystery Box & Power-ups
                </h2>
                <div className=" relative">
                  {/* <Image
                    src={"/assets/play/3m.png"}
                    alt="3m"
                    width={640}
                    height={360}
                    className=" "
                  /> */}
                  <video width="640" height="360" controls>
                    <source src="/assets/play/video/video-3.mp4" type="video/mp4" />
                  </video>
                  <Image
                    src={"/assets/play/3m-1.png"}
                    alt="3m-1"
                    width={73}
                    height={73}
                    className=" w-[43px] h-[43px] md:w-[73px] md:h-[73px] absolute right-[10%] top-[-10%]"
                  />
                  <Image
                    src={"/assets/play/3m-2.png"}
                    alt="3m-2"
                    width={227}
                    height={226}
                    className=" w-[107px] h-[106px] md:w-[227px] md:h-[226px] absolute right-[0%] bottom-[-20%]"
                  />
                  <Image
                    src={"/assets/play/3m-3.png"}
                    alt="3m-3"
                    width={77}
                    height={77}
                    className=" w-[37px] h-[37px] md:w-[77px] md:h-[77px] absolute left-[0%] top-[30%]"
                  />
                </div>
                <p className="text-[#C9D5FF] text-[13px] md:text-[18px] font-medium leading-[150%] max-w-[640px] h-[60px] md:h-[154px] flex justify-center items-center text-center">
                  Grab Mystery Boxes for random Power-ups!
                </p>
              </div>
            </SwiperSlide>
            {/* 4m-5m */}
            <SwiperSlide className=" slider-desktop relative flex flex-row justify-center items-center">
              <div className=" w-[100%] h-[100%] flex flex-row gap-5 justify-center items-center">
                {/* 4m */}
                <div className=" w-[100%] h-[100%] flex flex-col justify-center items-end">
                  <div className=" flex flex-col justify-center items-center gap-10">
                    <h2 className=" font-semibold text-[24px] text-[#41FFC6] text-center">
                      4. Boost to Win
                    </h2>
                    <div className=" relative">
                      {/* <Image
                        src={"/assets/play/4m.png"}
                        alt="4m"
                        width={640}
                        height={360}
                        className=" relative z-10"
                      /> */}
                      <video width="640" height="360" controls>
                        <source src="/assets/play/video/video-4.mp4" type="video/mp4" />
                      </video>
                      <Image
                        src={"/assets/play/4m-1.png"}
                        alt="4m-1"
                        width={111}
                        height={112}
                        className=" absolute left-[-55px] top-[-55px] z-20"
                      />
                      <Image
                        src={"/assets/play/4m-2.png"}
                        alt="4m-2"
                        width={258}
                        height={30}
                        className=" absolute right-0 top-[-30px] z-20"
                      />
                    </div>
                    <p className=" text-[#C9D5FF] text-[18px] font-medium leading-[150%] max-w-[640px] h-[140px] flex justify-center items-center text-center">
                      Tap Boost to speed up, but beware—it burns your Energy!
                    </p>
                  </div>
                </div>
                {/* 5m */}
                <div className=" w-[100%] h-[100%] flex flex-col justify-center items-start">
                  <div className=" flex flex-col justify-center items-center gap-8">
                    <h2 className=" font-semibold text-[24px] text-[#41FFC6] text-center">
                      5. Collect noCHILL
                    </h2>
                    <div className=" relative">
                      {/* <Image
                        src={"/assets/play/5m.png"}
                        alt="5m"
                        width={640}
                        height={360}
                        className=" "
                      /> */}
                      <video width="640" height="360" controls>
                        <source src="/assets/play/video/video-5.mp4" type="video/mp4" />
                      </video>
                      <Image
                        src={"/assets/play/5m-1.png"}
                        alt="5m-1"
                        width={64}
                        height={64}
                        className=" absolute left-[-20px] top-[30px]"
                      />
                      <Image
                        src={"/assets/play/5m-2.png"}
                        alt="5m-2"
                        width={51}
                        height={51}
                        className=" absolute right-[-40px] top-[160px]"
                      />
                      <Image
                        src={"/assets/play/5m-3.png"}
                        alt="5m-3"
                        width={141}
                        height={141}
                        className=" absolute right-[-70px] bottom-[-70px]"
                      />
                    </div>
                    <p className=" text-[#C9D5FF] text-[18px] font-medium leading-[150%] max-w-[640px] h-[140px] flex justify-center items-center text-center">
                      Your main objective is to collect noCHILL. This is how
                      you’ll climb the leaderboards.
                    </p>
                  </div>
                </div>
              </div>
            </SwiperSlide>
            {/* 4m-mobile */}
            <SwiperSlide className=" slider-mobile relative flex flex-row justify-center items-center px-[30px] md:px-0">
              <div className=" w-[100%] h-[100%] flex flex-col justify-center items-center gap-8">
                <h2 className=" font-semibold text-[16px] md:text-[24px] text-[#41FFC6] text-center">
                  4. Boost to Win
                </h2>
                <div className=" relative">
                  {/* <Image
                    src={"/assets/play/4m.png"}
                    alt="4m"
                    width={640}
                    height={360}
                    className=" relative z-10"
                  /> */}
                  <video width="640" height="360" controls>
                    <source src="/assets/play/video/video-4.mp4" type="video/mp4" />
                  </video>
                  <Image
                    src={"/assets/play/4m-1.png"}
                    alt="4m-1"
                    width={111}
                    height={112}
                    className=" w-[50px] h-[50px] md:w-[111px] md:h-[112px] absolute left-[5%] top-[-20%] z-20"
                  />
                  <Image
                    src={"/assets/play/4m-2.png"}
                    alt="4m-2"
                    width={258}
                    height={30}
                    className=" w-[124px] h-[14px] md:w-[258px] md:h-[30px] absolute right-0 top-[-14px] md:top-[-30px] z-20"
                  />
                </div>
                <p className="text-[#C9D5FF] text-[13px] md:text-[18px] font-medium leading-[150%] max-w-[640px] h-[60px] md:h-[154px] flex justify-center items-center text-center">
                  Tap Boost to speed up, but beware—it burns your Energy!
                </p>
              </div>
            </SwiperSlide>
            {/* 5m-mobile */}
            <SwiperSlide className=" slider-mobile relative flex flex-row justify-center items-center px-[30px] md:px-0">
              <div className=" w-[100%] h-[100%] flex flex-col justify-center items-center gap-8">
                <h2 className=" font-semibold text-[16px] md:text-[24px] text-[#41FFC6] text-center">
                  5. Collect noCHILL
                </h2>
                <div className=" relative">
                  {/* <Image
                    src={"/assets/play/5m.png"}
                    alt="5m"
                    width={640}
                    height={360}
                    className=" "
                  /> */}
                  <video width="640" height="360" controls>
                    <source src="/assets/play/video/video-5.mp4" type="video/mp4" />
                  </video>
                  <Image
                    src={"/assets/play/5m-1.png"}
                    alt="5m-1"
                    width={64}
                    height={64}
                    className=" w-[34px] h-[34px] me:w-[64px] md:h-[64px] absolute left-[10%] top-[-10%]"
                  />
                  <Image
                    src={"/assets/play/5m-2.png"}
                    alt="5m-2"
                    width={51}
                    height={51}
                    className=" w-[21px] h-[21px] md:w-[51px] md:h-[51px] absolute right-[0%] top-[30%]"
                  />
                  <Image
                    src={"/assets/play/5m-3.png"}
                    alt="5m-3"
                    width={141}
                    height={141}
                    className=" w-[71px] h-[71px] md:w-[141px] md:h-[141px] absolute right-[10%] bottom-[-15%]"
                  />
                </div>
                <p className="text-[#C9D5FF] text-[13px] md:text-[18px] font-medium leading-[150%] max-w-[640px] h-[60px] md:h-[154px] flex justify-center items-center text-center">
                  Your main objective is to collect noCHILL. This is how
                  you’ll climb the leaderboards.
                </p>
              </div>
            </SwiperSlide>
            {/* 6m-7m */}
            <SwiperSlide className=" slider-desktop relative flex flex-row justify-center items-center">
              <div className=" w-[100%] h-[100%] flex flex-row gap-5 justify-center items-center">
                {/* 6m */}
                <div className=" w-[100%] h-[100%] flex flex-col justify-center items-end">
                  <div className=" flex flex-col justify-center items-center gap-10">
                    <h2 className=" font-semibold text-[24px] text-[#41FFC6] text-center">
                      6. Avoid Collisions
                    </h2>
                    <div className=" relative">
                      {/* <Image
                        src={"/assets/play/6m.png"}
                        alt="6m"
                        width={640}
                        height={360}
                        className=" relative z-10"
                      /> */}
                      <video width="640" height="360" controls>
                        <source src="/assets/play/video/video-6.mp4" type="video/mp4" />
                      </video>
                      <Image
                        src={"/assets/play/6m-1.png"}
                        alt="6m-1"
                        width={140}
                        height={79}
                        className=" absolute left-[-40px] top-[0px] z-20"
                      />
                      <Image
                        src={"/assets/play/6m-2.png"}
                        alt="6m-2"
                        width={144}
                        height={132}
                        className=" absolute right-[-40px] bottom-[-35px] z-20"
                      />
                    </div>
                    <p className=" text-[#C9D5FF] text-[18px] font-medium leading-[150%] max-w-[640px] h-[140px] flex justify-center items-center text-center">
                      Avoid obstacles and enemy trails—colliding means defeat!
                    </p>
                  </div>
                </div>
                {/* 7m */}
                <div className=" w-[100%] h-[100%] flex flex-col justify-center items-start">
                  <div className=" flex flex-col justify-center items-center gap-8">
                    <h2 className=" font-semibold text-[24px] text-[#41FFC6] text-center">
                      7. Defeat Enemies
                    </h2>
                    <div className=" relative">
                      {/* <Image
                        src={"/assets/play/7m.png"}
                        alt="7m"
                        width={640}
                        height={360}
                        className=" "
                      /> */}
                      <video width="640" height="360" controls>
                        <source src="/assets/play/video/video-7.mp4" type="video/mp4" />
                      </video>
                      <Image
                        src={"/assets/play/7m-1.png"}
                        alt="7m-1"
                        width={194}
                        height={208}
                        className=" absolute right-[-75px] bottom-[-80px]"
                      />
                    </div>
                    <p className=" text-[#C9D5FF] text-[18px] font-medium leading-[150%] max-w-[640px] h-[140px] flex justify-center items-center text-center">
                      Defeat players by making them crash into your trail to
                      loot their backpack and claim their noCHILL!
                    </p>
                  </div>
                </div>
              </div>
            </SwiperSlide>
            {/* 6m-mobile */}
            <SwiperSlide className=" slider-mobile relative flex flex-row justify-center items-center px-[30px] md:px-0">
              <div className=" w-[100%] h-[100%] flex flex-col justify-center items-center gap-8">
                <h2 className=" font-semibold text-[16px] md:text-[24px] text-[#41FFC6] text-center">
                  6. Avoid Collisions
                </h2>
                <div className=" relative">
                  {/* <Image
                    src={"/assets/play/6m.png"}
                    alt="6m"
                    width={640}
                    height={360}
                    className=" relative z-10"
                  /> */}
                  <video width="640" height="360" controls>
                    <source src="/assets/play/video/video-6.mp4" type="video/mp4" />
                  </video>
                  <Image
                    src={"/assets/play/6m-1.png"}
                    alt="6m-1"
                    width={140}
                    height={79}
                    className=" w-[100px] h-[55px] md:w-[140px] md:h-[79px] absolute left-[-5%] top-[0%] z-20"
                  />
                  <Image
                    src={"/assets/play/6m-2.png"}
                    alt="6m-2"
                    width={144}
                    height={132}
                    className=" w-[95px] h-[85px] md:w-[144px] md:h-[132px] absolute right-[0%] bottom-[-10%] z-20"
                  />
                </div>
                <p className="text-[#C9D5FF] text-[13px] md:text-[18px] font-medium leading-[150%] max-w-[640px] h-[60px] md:h-[154px] flex justify-center items-center text-center">
                  Avoid obstacles and enemy trails—colliding means defeat!
                </p>
              </div>
            </SwiperSlide>
            {/* 7m-mobile */}
            <SwiperSlide className=" slider-mobile relative flex flex-row justify-center items-center px-[30px] md:px-0">
              <div className=" w-[100%] h-[100%] flex flex-col justify-center items-center gap-8">
                <h2 className=" font-semibold text-[16px] md:text-[24px] text-[#41FFC6] text-center">
                  7. Defeat Enemies
                </h2>
                <div className=" relative">
                  {/* <Image
                    src={"/assets/play/7m.png"}
                    alt="7m"
                    width={640}
                    height={360}
                    className=" "
                  /> */}
                  <video width="640" height="360" controls>
                    <source src="/assets/play/video/video-7.mp4" type="video/mp4" />
                  </video>
                  <Image
                    src={"/assets/play/7m-1.png"}
                    alt="7m-1"
                    width={194}
                    height={208}
                    className=" w-[104px] h-[118px] md:w-[194px] md:h-[208px] absolute right-[-5%] bottom-[-20%]"
                  />
                </div>
                <p className="text-[#C9D5FF] text-[13px] md:text-[18px] font-medium leading-[150%] max-w-[640px] h-[60px] md:h-[154px] flex justify-center items-center text-center">
                  Defeat players by making them crash into your trail to
                  loot their backpack and claim their noCHILL!
                </p>
              </div>
            </SwiperSlide>
            {/* 8m-9m */}
            <SwiperSlide className=" slider-desktop relative flex flex-row justify-center items-center">
              <div className=" w-[100%] h-[100%] flex flex-row gap-5 justify-center items-center">
                {/* 8m */}
                <div className=" w-[100%] h-[100%] flex flex-col justify-center items-end">
                  <div className=" flex flex-col justify-center items-center gap-10">
                    <h2 className=" font-semibold text-[24px] text-[#41FFC6] text-center">
                      8. Use Wormholes to Extract
                    </h2>
                    <div className=" relative">
                      {/* <Image
                        src={"/assets/play/8m.png"}
                        alt="8m"
                        width={640}
                        height={360}
                        className=" relative z-10 "
                      /> */}
                      <video width="640" height="360" controls>
                        <source src="/assets/play/video/video-8.mp4" type="video/mp4" />
                      </video>
                      <Image
                        src={"/assets/play/8m-1.png"}
                        alt="8m-1"
                        width={82}
                        height={57}
                        className=" absolute left-[-40px] bottom-[-28px] z-20"
                      />
                      <Image
                        src={"/assets/play/8m-2.png"}
                        alt="8m-2"
                        width={122}
                        height={75}
                        className=" absolute right-[-20px] bottom-[-30px] z-20"
                      />
                    </div>
                    <p className=" text-[#C9D5FF] text-[18px] font-medium leading-[150%] max-w-[640px] h-[140px] flex justify-center items-center text-center">
                      Escape through a wormhole to secure your noCHILL and rise
                      on the leaderboards!
                    </p>
                  </div>
                </div>
                {/* 9m */}
                <div className=" w-[100%] h-[100%] flex flex-col justify-center items-start">
                  <div className=" flex flex-col justify-center items-center gap-8">
                    <h2 className=" font-semibold text-[24px] text-[#41FFC6] text-center">
                      9. Airdrop
                    </h2>
                    <div className=" relative">
                      {/* <Image
                        src={"/assets/play/9m.png"}
                        alt="9m"
                        width={640}
                        height={360}
                        className=" "
                      /> */}
                      <video width="640" height="360" controls>
                        <source src="/assets/play/video/video-9.mp4" type="video/mp4" />
                      </video>
                      <Image
                        src={"/assets/play/9m-1.png"}
                        alt="9m-1"
                        width={270}
                        height={206}
                        className=" absolute right-[-65px] bottom-[-33px]"
                      />
                    </div>
                    <p className=" text-[#C9D5FF] text-[18px] font-medium leading-[150%] max-w-[640px] h-[140px] flex justify-center items-center text-center">
                      The more noCHILL you extract, the more $CHILL airdrop
                      you’ll receive!
                    </p>
                  </div>
                </div>
              </div>
            </SwiperSlide>
            {/* 8m-mobile */}
            <SwiperSlide className=" slider-mobile relative flex flex-row justify-center items-center px-[30px] md:px-0">
              <div className=" w-[100%] h-[100%] flex flex-col justify-center items-center gap-8">
                <h2 className=" font-semibold text-[16px] md:text-[24px] text-[#41FFC6] text-center">
                  8. Use Wormholes to Extract
                </h2>
                <div className=" relative">
                  {/* <Image
                    src={"/assets/play/8m.png"}
                    alt="8m"
                    width={640}
                    height={360}
                    className=" relative z-10 "
                  /> */}
                  <video width="640" height="360" controls>
                    <source src="/assets/play/video/video-8.mp4" type="video/mp4" />
                  </video>
                  <Image
                    src={"/assets/play/8m-1.png"}
                    alt="8m-1"
                    width={82}
                    height={57}
                    className=" w-[62px] h-[40px] md:w-[82px] md:h-[57px] absolute left-[0%] bottom-[-5%] z-20"
                  />
                  <Image
                    src={"/assets/play/8m-2.png"}
                    alt="8m-2"
                    width={122}
                    height={75}
                    className=" w-[92px] h-[60px] md:w-[122px] md:h-[75px] absolute right-[0%] bottom-[-10%] z-20"
                  />
                </div>
                <p className="text-[#C9D5FF] text-[13px] md:text-[18px] font-medium leading-[150%] max-w-[640px] h-[60px] md:h-[154px] flex justify-center items-center text-center">
                  Escape through a wormhole to secure your noCHILL and rise
                  on the leaderboards!
                </p>
              </div>
            </SwiperSlide>
            {/* 9m-mobile */}
            <SwiperSlide className=" slider-mobile relative flex flex-row justify-center items-center px-[30px] md:px-0">
              <div className=" w-[100%] h-[100%] flex flex-col justify-center items-center gap-8">
                <h2 className=" font-semibold text-[16px] md:text-[24px] text-[#41FFC6] text-center">
                  9. Airdrop
                </h2>
                <div className=" relative">
                  {/* <Image
                    src={"/assets/play/9m.png"}
                    alt="9m"
                    width={640}
                    height={360}
                    className=" "
                  /> */}
                  <video width="640" height="360" controls>
                    <source src="/assets/play/video/video-9.mp4" type="video/mp4" />
                  </video>
                  <Image
                    src={"/assets/play/9m-1.png"}
                    alt="9m-1"
                    width={270}
                    height={206}
                    className=" w-[170px] h-[136px] md:w-[270px] md:h-[206px] absolute right-[0%] bottom-[-20%]"
                  />
                  <Image
                    src={"/assets/play/9m-2.png"}
                    alt="9m-2"
                    width={63}
                    height={68}
                    className=" absolute left-[-3%] bottom-[30%]"
                  />
                  <Image
                    src={"/assets/play/9m-3.png"}
                    alt="9m-3"
                    width={56}
                    height={67}
                    className=" absolute right-[0%] top-[-20%]"
                  />
                </div>
                <p className="text-[#C9D5FF] text-[13px] md:text-[18px] font-medium leading-[150%] max-w-[640px] h-[60px] md:h-[154px] flex justify-center items-center text-center">
                  The more noCHILL you extract, the more $CHILL airdrop
                  you’ll receive!
                </p>
              </div>
            </SwiperSlide>
            {/* 10m */}
            <SwiperSlide className=" relative flex flex-row justify-center items-center px-[30px] md:px-0">
              <div className=" w-[100%] h-[100%] flex flex-col justify-center items-center">
                <div className=" flex flex-col justify-center items-center gap-8">
                  <h2 className=" font-semibold text-[16px] md:text-[24px] text-[#41FFC6] text-center">
                    10. Refer your Friends!
                  </h2>
                  <div className=" relative">
                    {/* <Image
                      src={"/assets/play/10m.png"}
                      alt="10m"
                      width={640}
                      height={360}
                      className=" border-[#6F58FF] border-[6px] relative z-10"
                    /> */}
                    <video width="640" height="360" controls>
                      <source src="/assets/play/video/video-10.mp4" type="video/mp4" />
                    </video>
                    <Image
                      src={"/assets/play/10m-1.png"}
                      alt="10m-1"
                      width={162}
                      height={347}
                      className=" w-[57px] h-[113px] md:w-[162px] md:h-[347px] absolute right-[83%] md:right-[100%] bottom-[-15%] md:bottom-0 z-20"
                    />
                    <Image
                      src={"/assets/play/10m-2.png"}
                      alt="10m-2"
                      width={191}
                      height={308}
                      className=" w-[69px] h-[104px] md:w-[191px] md:h-[308px] absolute left-[83%] md:left-[100%] bottom-[-15%] md:bottom-0 z-20"
                    />
                  </div>
                  <p className="text-[#C9D5FF] text-[13px] md:text-[18px] font-medium leading-[150%] max-w-[640px] h-[60px] md:h-[154px] flex justify-center items-center text-center">
                    Refer your friends and earn a 5% bonus on all their noCHILL
                    extractions!
                  </p>
                  <div className="flex justify-center items-center w-[100%] relative">
                    <button
                      className="w-[163px] md:w-[260px] h-[53px] md:h-[84px] rounded-md font-bold font-[Oswald] text-[28px] md:text-[38px] text-[#020215]"
                      style={{
                        backgroundImage: "url(./assets/play-now-btn.png)",
                        backgroundSize: "100% 100%",
                        boxShadow: "0px 0px 10px 1px",
                      }}
                      onClick={() => {
                        handlePlayButton();
                      }}
                    >
                      PLAY NOW
                    </button>
                    <Image
                      src={"/assets/play-spark.png"}
                      alt="spark"
                      width={264}
                      height={264}
                      className=" absolute top-[-40px] left-[50%] w-[160px] h-[160px]"
                      style={{ display: isButton ? "block" : "none" }}
                    />
                  </div>
                </div>
              </div>
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
      {/* </Layout> */}
    </>
  );
};

export default Page;
