import React from "react";
import Image from "next/image";
import Link from "next/link";

export default function ProjectCard({ imageUrl, link, slug }) {
  return (
    <figure>
      <Image
        className="transition-opacity ease-in-out duration-300 hover:opacity-80"
        src={imageUrl}
        width={360}
        height={200}
      />
      <figcaption className="flex items-center pt-1">
        <Link href={link}>
          <a className="flex items-center mr-4 group">
            <span className="mr-2">
              <svg
                width="15"
                height="14"
                viewBox="0 0 15 14"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  className="stroke-current text-text-desc transition-colors ease-in-out duration-200 group-hover:text-primary"
                  d="M5.82257 7.60402C6.08329 7.9508 6.41592 8.23774 6.7979 8.44537C7.17988 8.653 7.60228 8.77648 8.03644 8.80741C8.4706 8.83835 8.90638 8.77602 9.3142 8.62467C9.72202 8.47331 10.0924 8.23646 10.4001 7.93018L12.2214 6.11814C12.7743 5.54855 13.0803 4.78568 13.0734 3.99382C13.0664 3.20197 12.7472 2.4445 12.1844 1.88456C11.6216 1.32461 10.8603 1.007 10.0644 1.00011C9.26847 0.993233 8.5017 1.29764 7.9292 1.84777L6.88499 2.88063"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  className="stroke-current text-text-desc transition-colors ease-in-out duration-200 group-hover:text-primary"
                  d="M8.2509 6.39605C7.99018 6.04927 7.65755 5.76233 7.27557 5.55469C6.89359 5.34706 6.47119 5.22359 6.03703 5.19265C5.60287 5.16172 5.1671 5.22404 4.75928 5.3754C4.35145 5.52675 3.98112 5.7636 3.67339 6.06988L1.8521 7.88192C1.29916 8.45151 0.993199 9.21439 1.00011 10.0062C1.00703 10.7981 1.32627 11.5556 1.88907 12.1155C2.45188 12.6755 3.21322 12.9931 4.00911 13C4.80501 13.0068 5.57178 12.7024 6.14428 12.1523L7.18241 11.1194"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </span>
            <span className="text-text-desc font-montserrat text-sm font-semibold capitalize transition-colors ease-in-out duration-200 group-hover:text-primary">
              view website
            </span>
          </a>
        </Link>
        {slug && (
          <Link href={`/blog/${slug}`}>
            <a className="flex items-center group">
              <span className="mr-2">
                <svg
                  width="13"
                  height="14"
                  viewBox="0 0 13 14"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    className="stroke-current text-text-desc transition-colors ease-in-out duration-200 group-hover:text-primary"
                    d="M1.72205 11.2083C1.72205 10.8216 1.87663 10.4506 2.1518 10.1771C2.42696 9.90365 2.80016 9.75 3.1893 9.75H11.1125"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    className="stroke-current text-text-desc transition-colors ease-in-out duration-200 group-hover:text-primary"
                    d="M3.1893 1H11.1125V12.6667H3.1893C2.80016 12.6667 2.42696 12.513 2.1518 12.2395C1.87663 11.966 1.72205 11.5951 1.72205 11.2083V2.45833C1.72205 2.07156 1.87663 1.70063 2.1518 1.42714C2.42696 1.15365 2.80016 1 3.1893 1V1Z"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </span>
              <span className="text-text-desc font-montserrat text-sm font-semibold capitalize transition-colors ease-in-out duration-200 group-hover:text-primary">
                study case
              </span>
            </a>
          </Link>
        )}
      </figcaption>
    </figure>
  );
}
