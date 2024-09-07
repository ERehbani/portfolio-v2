import type React from "react";
import { useEffect, useRef, useState } from "react";
import { Tooltip } from "react-tooltip";

const icons = [
  {
    // biome-ignore lint/a11y/useAltText: <explanation>
    icon: (props: React.ImgHTMLAttributes<HTMLImageElement>) => (
      <img
        aria-label="shadcn"
        src="/svg/shadcnui.svg"
        alt="Shadcn UI"
        {...props}
      />
    ),
    name: "Shadcn UI",
  },
  {
    // biome-ignore lint/a11y/useAltText: <explanation>
    icon: (props: React.ImgHTMLAttributes<HTMLImageElement>) => (
      <img aria-label="astro" src="/svg/astro.svg" alt="AstroJS" {...props} />
    ),
    name: "AstroJS",
  },
  {
    // biome-ignore lint/a11y/useAltText: <explanation>
    icon: (props: React.ImgHTMLAttributes<HTMLImageElement>) => (
      <img
        aria-label="daisyui"
        src="/svg/daisyui.svg"
        alt="DaisyUI"
        {...props}
      />
    ),
    name: "DaisyUI",
  },
  {
    // biome-ignore lint/a11y/useAltText: <explanation>
    icon: (props: React.ImgHTMLAttributes<HTMLImageElement>) => (
      <img aria-label="git" src="/svg/git.svg" alt="Git" {...props} />
    ),
    name: "Git",
  },
  {
    icon: (props: React.ImgHTMLAttributes<HTMLImageElement>) => (
      // biome-ignore lint/a11y/useAltText: <explanation>
      <img aria-label="mui" src="/svg/mui.svg" alt="MaterialUI" {...props} />
    ),
    name: "MaterialUI",
  },
  {
    icon: (props: React.ImgHTMLAttributes<HTMLImageElement>) => (
      // biome-ignore lint/a11y/useAltText: <explanation>
      <img
        aria-label="nextjs"
        src="/svg/nextdotjs.svg"
        alt="NextJS"
        {...props}
      />
    ),
    name: "NextJS",
  },

  {
    icon: (props: React.ImgHTMLAttributes<HTMLImageElement>) => (
      // biome-ignore lint/a11y/useAltText: <explanation>
      <img
        aria-label="nodedotjs"
        src="/svg/nodedotjs.svg"
        alt="NodeJS"
        {...props}
      />
    ),
    name: "NodeJS",
  },
  {
    icon: (props: React.ImgHTMLAttributes<HTMLImageElement>) => (
      // biome-ignore lint/a11y/useAltText: <explanation>
      <img
        aria-label="postgresql"
        src="/svg/postgresql.svg"
        alt="PostgreSQL"
        {...props}
      />
    ),
    name: "PostgreSQL",
  },
  {
    // biome-ignore lint/a11y/useAltText: <explanation>
    icon: (props: React.ImgHTMLAttributes<HTMLImageElement>) => (
      <img
        aria-label="prisma"
        src="/svg/prisma.svg"
        alt="Prisma ORM"
        {...props}
      />
    ),
    name: "Prisma ORM",
  },
  {
    // biome-ignore lint/a11y/useAltText: <explanation>
    icon: (props: React.ImgHTMLAttributes<HTMLImageElement>) => (
      <img aria-label="react" src="/svg/react.svg" alt="ReactJS" {...props} />
    ),
    name: "ReactJS",
  },
  {
    // biome-ignore lint/a11y/useAltText: <explanation>
    icon: (props: React.ImgHTMLAttributes<HTMLImageElement>) => (
      <img
        aria-label="tailwindcss"
        src="/svg/tailwindcss.svg"
        alt="TailwindCSS"
        {...props}
      />
    ),
    name: "TailwindCSS",
  },
  {
    // biome-ignore lint/a11y/useAltText: <explanation>
    icon: (props: React.ImgHTMLAttributes<HTMLImageElement>) => (
      <img
        aria-label="typescript"
        src="/svg/typescript.svg"
        alt="Typescript"
        {...props}
      />
    ),
    name: "Typescript",
  },
];
export default function Carousel() {
  const [scrollWidth, setScrollWidth] = useState(0);
  const [animationState, setAnimationState] = useState<"running" | "paused">(
    "running"
  );
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (containerRef.current) {
      setScrollWidth(containerRef.current.scrollWidth / 2);
    }
  }, []);

  const handleMouseEnter = () => {
    setAnimationState("paused");
  };

  const handleMouseLeave = () => {
    setAnimationState("running");
  };

  return (
    <div className="w-full bg-[#1212124D] text-white border border-[#393939] rounded-[32px] overflow-hidden">
      <h2 className="text-xl font-bold p-4">Technologies</h2>

      <div className="relative h-20 overflow-hidden"> {/* Aumentamos la altura a 28 para dar espacio al tooltip */}
        <div
          ref={containerRef}
          className="absolute flex animate-scroll whitespace-nowrap"
          style={
            {
              "--scroll-width": `${scrollWidth}px`,
              animationPlayState: animationState,
            } as React.CSSProperties
          }
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}>
          {[...Array(2)].map((_, outerIndex) => (
            <div key={outerIndex} className="flex">
              {icons.map(({ icon: Icon, name }, index) => (
                <div
                  key={`${outerIndex}-${index}`}
                  className="flex-none w-20 max-[930px]:w-24 flex items-center justify-center pb-4 cursor-pointer">
                  <div
                    className="max-[930px]:w-16 max-[930px]:h-16 flex items-center justify-center rounded-full transition-colors duration-200"
                    data-tooltip-id="my-tooltip"
                    data-tooltip-content={name}>
                    <Icon className="w-8 h-8  text-primary p-0" />
                  </div>
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>
      <Tooltip 
        id="my-tooltip" 
        place="top"  
        style={{ backgroundColor: "#373737", color: "white" }}
        offset={5}
        delayShow={300}
        delayHide={150}
      />
    </div>
  );
}
