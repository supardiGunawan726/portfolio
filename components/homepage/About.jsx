import React from "react";
import Image from "next/image";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";

export default function About({ data }) {
  const { headline, description, image } = data.fields;
  const { file } = image.fields;

  return (
    <section className="bg-primary">
      <div className="relative z-[1] container mx-auto px-4 py-8 md:grid md:items-center md:grid-cols-12 md:py-[48px] lg:px-[64px]">
        <div className="flex items-center justify-center md:col-start-2 md:col-span-4">
          <figure className="w-[200px] h-[200px] md:w-[250px] md:h-[250px] lg:w-[300px] lg:h-[300px] xl:w-[375px] xl:h-[375px] relative mb-[10%]">
            <div className="absolute top-0 left-0 right-0 bottom-0 bg-primary-dark rounded-md transform translate-x-[10%] translate-y-[8%]"></div>
            <Image
              className="object-cover bg-gray-500 transform rounded-md"
              src={"http:" + file.url}
              alt="pardiwan"
              quality={100}
              layout="fill"
            />
          </figure>
        </div>
        <div className="text-white md:col-start-7 md:col-span-5">
          <h1 className="text-3xl text-center font-bold font-montserrat leading-[1em] md:text-left lg:text-[48px]">
            {headline}
          </h1>
          <div className="mt-4 text-sm leading-relaxed text-justify md:text-left">
            {documentToReactComponents(description)}
          </div>
        </div>
      </div>
    </section>
  );
}
