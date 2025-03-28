"use client";

import { useState } from "react";
import Image from "next/image";
import Head from "next/head";

const EvaSection: React.FC = () => {
  const [mouseover, setMouseOver] = useState(0);
  return (
    <>
      <Head>
        <link rel="preload" href="/assets/eva/eva-back1.webp" as="image" />
        <link rel="preload" href="/assets/eva/eva-back2.webp" as="image" />
        <link rel="preload" href="/assets/eva/eva-back3.webp" as="image" />
      </Head>
      <div
        className={`section-Eva w-full h-[1128px] md:h-auto relative bg-cover bg-no-repeat md:bg-top transition-all duration-300 ${
          mouseover == 1
            ? "bg-[right_-280px_top] md:bg-right"
            : mouseover !== 0
            ? "bg-[right_0px_top_-100px] md:bg-right"
            : "bg-right"
        } `}
        style={{
          backgroundImage:
            mouseover == 0
              ? "url('/assets/eva/eva-back1.webp'), url('/assets/eva/eva-back2.webp'), url('/assets/eva/eva-back3.webp')"
              : mouseover == 1
              ? "url('/assets/eva/eva-back2.webp')"
              : "url('/assets/eva/eva-back3.webp')",
        }}
      >
        <div className=" max-w-[1440px] h-[100%] md:h-auto m-auto px-0 md:px-[30px] lg:px-[99px] pt-[264px] pb-[298px] relative">
          <Image
            src={"/assets/eva/top-effect.png"}
            alt="effect"
            width={1391}
            height={171}
            className={` w-[100%] h-[171px] ${
              mouseover !== 1 && mouseover !== 0 ? "block" : "hidden"
            } md:hidden absolute top-0 left-0 `}
          />
          <div className="flex flex-row md:flex-col gap-7 md:gap-12 justify-center absolute md:relative bottom-[206px] md:bottom-0 w-[100%] md:w-auto">
            <div className=" relative">
              <div
                className="w-[80px] h-[80px] md:w-[128px] md:h-[128px] border-2 md:border-4 rounded-[50%] bg-center bg-no-repeat transition-all cursor-pointer"
                style={{
                  backgroundImage: "url('/assets/eva/avatar-1.png')",
                  backgroundSize: "120% 120%",
                  scale: mouseover == 0 ? 1.25 : 1,
                  borderColor: mouseover == 0 ? "#41FFC6" : "#1E7EF4",
                }}
                onClick={() => {
                  setMouseOver(0);
                }}
              ></div>
              <div
                className={` ${
                  mouseover == 0 ? "block" : "hidden"
                } z-30 bg-[url('/assets/eva/mobile-text-back1.png')] md:bg-[url('/assets/eva/text-back1.png')] w-[343px] md:w-[550px] pt-5 md:pt-10 pb-10 md:pb-10 ps-[20px] pe-[20px] md:ps-[75px] md:pe-[30px] absolute top-[-224px] left-[-20.2px] md:top-[-54px] md:left-[144px] transition-all `}
                style={{
                  backgroundSize: "100% 100%",
                }}
              >
                <div className="">
                  <h1 className=" text-[14px] md:text-[28px] font-[Poppins] font-bold text-[#41FFC6]">
                    Eva, the Host
                  </h1>
                  <div className="w-[224px] md:w-[283px] h-[2px] md:h-1 mt-3 md:mt-6 bg-[#1E7EF4]"></div>
                  <div className="text-[12px] md:text-[16px] font-medium font-[Poppins] text-[#CAD4EF] mt-3 md:mt-8 leading-[150%]">
                    Eva is the heart of the arena, a host whose charm and energy
                    light up every game. Her voice resonants through every clash
                    of light, weaving battles into legend. To billions, she is a
                    radiant goddess of spectacle, but behind her charm lies
                    secrets known only to her.
                  </div>
                </div>
              </div>
            </div>
            <div className=" relative">
              <div
                className="w-[80px] h-[80px] md:w-[128px] md:h-[128px] border-2 md:border-4 rounded-[50%] bg-center bg-no-repeat transition-all cursor-pointer"
                style={{
                  backgroundImage: "url('/assets/eva/avatar-2.png')",
                  backgroundSize: "100% 100%",
                  scale: mouseover == 1 ? 1.25 : 1,
                  borderColor: mouseover == 1 ? "#41FFC6" : "#FF62FC",
                }}
                onClick={() => {
                  setMouseOver(1);
                }}
              ></div>
              <div
                className={` ${
                  mouseover == 1 ? "block" : "hidden"
                } z-30 bg-[url('/assets/eva/mobile-text-back2.png')] md:bg-[url('/assets/eva/text-back2.png')] w-[343px] md:w-[550px] pt-5 md:pt-10 pb-10 md:pb-10 ps-[20px] pe-[20px] md:ps-[75px] md:pe-[30px] absolute top-[-242px] left-[-129.3px] md:top-[-94px] md:left-[144px] transition-all `}
                style={{
                  backgroundSize: "100% 100%",
                }}
              >
                <h1 className=" text-[14px] md:text-[28px] font-[Poppins] font-bold text-[#41FFC6]">
                  SOL Arena, the Games
                </h1>
                <div className=" w-[224px] md:w-[283px] h-[2px] md:h-1 bg-[#FF62FC] mt-3 md:mt-6"></div>
                <div className="text-[12px] md:text-[16px] font-medium font-[Poppins] text-[#CAD4EF] mt-3 md:mt-8 leading-[150%]">
                  The arenas, glowing colosseums of shifting holograms, stand as
                  battlegrounds for challengers of every kind. Reality twisted
                  under the flicker of light, transforming each field into a
                  realm of conflict and wonder. Here, corporate elites,
                  rebellious underdogs, and wildcards fight to etch their names
                  into history.
                </div>
              </div>
            </div>
            <div className=" relative">
              <div
                className="w-[80px] h-[80px] md:w-[128px] md:h-[128px] border-2 md:border-4 rounded-[50%] bg-center bg-no-repeat transition-all cursor-pointer"
                style={{
                  backgroundImage: "url('/assets/eva/avatar-3.png')",
                  backgroundSize: "100% 100%",
                  scale: mouseover == 2 ? 1.25 : 1,
                  borderColor: mouseover == 2 ? "#41FFC6" : "#6F58FF",
                }}
                onClick={() => {
                  setMouseOver(2);
                }}
              ></div>
              <div
                className={` ${
                  mouseover == 2 ? "block" : "hidden"
                } z-30 bg-[url('/assets/eva/mobile-text-back3.png')] md:bg-[url('/assets/eva/text-back3.png')] w-[343px] md:w-[550px] pt-5 md:pt-10 pb-10 md:pb-10 ps-[20px] pe-[20px] md:ps-[75px] md:pe-[30px] absolute top-[-224px] left-[-238px] md:top-[-142px] md:left-[144px] transition-all `}
                style={{
                  backgroundSize: "100% 100%",
                }}
              >
                <h1 className=" text-[14px] md:text-[28px] font-[Poppins] font-bold text-[#41FFC6]">
                  Spectators, the Draw
                </h1>
                <div className="w-[224px] md:w-[283px] h-[2px] md:h-1 mt-3 md:mt-6 bg-[#6F58FF]"></div>
                <div className="text-[12px] md:text-[16px] font-medium font-[Poppins] text-[#CAD4EF] mt-3 md:mt-8 leading-[150%]">
                  Can you hear the roar slicing through the twilight? The soul
                  of the games—the crowd. Holograms beam in fans from across the
                  world, their glowing emblems a testament to their loyalty. For
                  them, this isn’t just entertainment—it’s pride, belonging, and
                  a chance to live the game as if it were own.
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default EvaSection;
