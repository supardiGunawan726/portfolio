import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/router";
import { useMediaQuery } from "react-responsive";
import { CSSTransition } from "react-transition-group";
import Button from "./Button";

export default function Navbar() {
  const router = useRouter();
  const [isOpen, setIsOpen] = useState(false);
  const isLargeScreen = useMediaQuery({ query: "(min-width: 1024px)" });

  useEffect(() => {
    if (isOpen && !isLargeScreen) {
      document.getElementById("__next").style.overflowY = "hidden";
      document.getElementById("__next").style.height = "100vh";
    } else {
      document.getElementById("__next").style.overflowY = "initial";
      document.getElementById("__next").style.height = "initial";
    }
  }, [isOpen]);

  return (
    <header className="container mx-auto px-4 flex items-center justify-between lg:px-[64px] h-[60px] lg:h-[80px]">
      <div className="flex items-center justify-between w-full lg:w-auto">
        <Link href="/">
          <a className="flex items-center justify-between">
            <figure className="bg-primary rounded-full overflow-hidden w-6 h-6">
              <Image
                className="object-cover object-top"
                src="/me.png"
                width="24px"
                height="24px"
                quality={100}
                alt="pardiwan"
              />
            </figure>
            <h1 className="text-lg text-primary font-bold uppercase font-raleway ml-2 lg:text-xl">
              pardiwan
            </h1>
          </a>
        </Link>
        <div className="lg:hidden" onClick={() => setIsOpen(!isOpen)}>
          <svg
            width="16"
            height="16"
            viewBox="0 0 16 16"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g id="burger">
              <rect
                id={isOpen ? "line1" : ""}
                y="2"
                width="16"
                height="2"
                rx="1"
                fill="#404040"
              />
              <rect
                id={isOpen ? "line2" : ""}
                y="7"
                width="16"
                height="2"
                rx="1"
                fill="#404040"
              />
              <rect
                id={isOpen ? "line3" : ""}
                y="12"
                width="16"
                height="2"
                rx="1"
                fill="#404040"
              />
            </g>
          </svg>
        </div>
      </div>
      <CSSTransition
        in={isOpen || isLargeScreen}
        unmountOnExit
        classNames="fade"
        timeout={300}
      >
        <nav className="fixed lg:static z-[999] left-0 right-0 bottom-0 top-[60px] bg-white flex flex-col justify-center items-center lg:flex-row">
          <Link href="/">
            <a
              onClick={() => setIsOpen(!isOpen)}
              className={
                "text-sm mb-2 transition-colors ease-in-out duration-300 hover:text-primary lg:mb-0 lg:mr-8" +
                (router.asPath === "/" ? " text-primary" : " text-text-desc")
              }
            >
              Home
            </a>
          </Link>
          <Link href="/projects">
            <a
              onClick={() => setIsOpen(!isOpen)}
              className={
                "text-sm mb-2 transition-colors ease-in-out duration-300 hover:text-primary lg:mb-0 lg:mr-8" +
                (router.asPath === "/projects"
                  ? " text-primary"
                  : " text-text-desc")
              }
            >
              Projects
            </a>
          </Link>
          <Link href="/posts">
            <a
              onClick={() => setIsOpen(!isOpen)}
              className={
                "text-sm transition-colors ease-in-out duration-300 hover:text-primary lg:mr-8" +
                (router.asPath === "/posts"
                  ? " text-primary"
                  : " text-text-desc")
              }
            >
              Blog
            </a>
          </Link>
          <div className="hidden lg:block">
            <Button onClick={() => router.push("/contact")}>Contact</Button>
          </div>
        </nav>
      </CSSTransition>
    </header>
  );
}
