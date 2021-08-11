import React from "react";
import Image from "next/image";
import { useRouter } from "next/router";

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

export default function BlogCard({
  title,
  date,
  slug,
  content,
  image,
  author,
}) {
  const router = useRouter();
  const year = date.substring(0, 4);
  const month = months[parseInt(date.substring(5, 7) - 1)];
  const day = date.substring(8, 10);
  const authorName = author.fields.name;
  const authorPhotoProfile = author.fields.photoProfile.fields.file.url;

  return (
    <figure
      onClick={() => router.push("/posts/" + slug)}
      className="rounded shadow group cursor-pointer"
    >
      <Image
        className="transition ease-in-out duration-300 group-hover:opacity-80"
        src={image}
        width={360}
        height={200}
      />
      <figcaption className="p-4">
        <span className="flex items-center font-semibold">
          <svg
            className="w-4 h-4 mr-2"
            viewBox="0 0 17 16"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M13.351 2.66667H4.24367C3.52513 2.66667 2.94263 3.26363 2.94263 4.00001V13.3333C2.94263 14.0697 3.52513 14.6667 4.24367 14.6667H13.351C14.0695 14.6667 14.652 14.0697 14.652 13.3333V4.00001C14.652 3.26363 14.0695 2.66667 13.351 2.66667Z"
              stroke="#6A6A6A"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M11.3994 1.33333V3.99999"
              stroke="#6A6A6A"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M6.19507 1.33333V3.99999"
              stroke="#6A6A6A"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M2.94263 6.66667H14.652"
              stroke="#6A6A6A"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
          <span className="text-xs text-text-desc font-montserrat">{`${day} ${month} ${year}`}</span>
        </span>
        <h5 className="text-lg font-montserrat text-text-title font-semibold mt-2">
          {title}
        </h5>
        <span className="flex items-center mt-4">
          <Image
            className="rounded-full mr-2"
            src={"http:" + authorPhotoProfile}
            width={24}
            height={24}
          />
          <h5 className="text-sm text-text-desc font-montserrat font-semibold">
            {authorName}
          </h5>
        </span>
      </figcaption>
    </figure>
  );
}
