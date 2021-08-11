import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import React from "react";
import Image from "next/image";

const months = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

export default function PostContainer({
  title,
  date,
  author,
  content,
  className,
  cta,
}) {
  const { name, photoProfile } = author.fields;
  const { file } = photoProfile.fields;
  const year = date.substring(0, 4);
  const month = months[parseInt(date.substring(5, 7) - 1)];
  const day = date.substring(8, 10);

  return (
    <section className={className || ""}>
      <div className="container mx-auto px-4 py-8 md:py-[48px] lg:px-[64px]">
        <h1 className="text-text-title font-montserrat font-bold text-2xl lg:text-4xl">
          {title}
        </h1>
        <div className="mt-4 flex items-center">
          <Image
            className="rounded-full mr-4"
            src={"http:" + file.url}
            width={40}
            height={40}
          />
          <div>
            <h5 className="font-montserrat text-text-title font-semibold">
              {name}
            </h5>
            <p className="font-montserrat text-text-desc text-xs font-semibold">
              {`${day} ${month} ${year}`}
            </p>
          </div>
        </div>
        <div className="mt-4 lg:mt-8 font-montserrat text-sm text-text-desc">{documentToReactComponents(content)}</div>
        {cta && (
          <div className="mt-8 bg-primary rounded p-4 flex flex-col items-center justify-center md:flex-row md:justify-between">
            <h1 className="text-xl text-white font-semibold text-center">
              {text}
            </h1>
            <div className="mt-4 md:mt-0">
              <Button
                onClick={() => router.push(buttonLink)}
                className="mr-4 text-sm inline-block px-[20px] py-[10px] font-bold text-white bg-primary rounded uppercase transition-colors ease-in-out duration-300 hover:text-primary hover:bg-white focus:outline-none"
              >
                {buttonText}
              </Button>
              <Button
                onClick={() => router.push(secondButtonLink)}
                className="text-sm inline-block px-[18px] py-[8px] font-bold text-white bg-primary border-2 border-white rounded uppercase transition-colors ease-in-out duration-300 hover:text-primary hover:bg-white focus:outline-none"
              >
                {secondButtonText}
              </Button>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
