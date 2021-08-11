import React from "react";
import Button from "../Button";
import useRouter from "next/router";

export default function Hero({ data }) {
  const router = useRouter;
  const { headline, headlineHighlight, description, image } = data.fields;
  const { file, title } = image.fields;

  return (
    <section className="relative">
      <div className="absolute left-0 right-0 top-0 bottom-0">
        <div className="w-[30px] lg:w-[40px] xl:w-[50px] absolute right-[8%] top-[55%] animate-spin md:top-[20%]">
          <svg
            width="100%"
            viewBox="0 0 31 30"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M25.5181 0.117424C28.5233 -0.553605 31.1279 2.28022 30.2064 5.21831L23.4682 26.7031C22.5467 29.6412 18.7902 30.48 16.7065 28.2129L1.46926 11.635C-0.614462 9.36797 0.537375 5.69535 3.54257 5.02432L25.5181 0.117424Z"
              fill="#F2994A"
            />
          </svg>
        </div>
        <div className="w-[50px] lg:w-[60px] xl:w-[70px] absolute left-[12%] top-[50%] animate-doubleSpin md:left-[55%] md:top-[15%]">
          <svg
            width="100%"
            viewBox="0 0 69 69"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M22.958 66.8378C22.6307 66.7242 22.3045 66.6054 21.9796 66.4813L60.7356 13.5634C60.9519 13.8357 61.1636 14.1108 61.3707 14.3886L22.958 66.8378ZM58.7148 11.2453C58.9499 11.4914 59.1807 11.7404 59.4072 11.9923L20.0809 65.6889C19.7724 65.549 19.4653 65.4041 19.1597 65.2542L58.7148 11.2453ZM55.8641 60.8336C57.9462 59.0963 59.8525 57.0802 61.5269 54.7939C63.2013 52.5076 64.5482 50.0818 65.5762 47.5725L55.8641 60.8336ZM67.3696 41.7389C67.5255 40.999 67.6563 40.2559 67.762 39.5106L48.8376 65.3503C49.5162 65.0246 50.1852 64.6757 50.8436 64.3037L67.3696 41.7389ZM4.48919 51.4368C4.30778 51.1154 4.13186 50.7913 3.96146 50.4649L40.0287 1.21832C40.3913 1.28228 40.7533 1.35222 41.1145 1.42817L4.48919 51.4368ZM36.621 0.793842C37.0087 0.822331 37.3962 0.857486 37.7833 0.899336L2.97977 48.4205C2.82305 48.064 2.67261 47.7052 2.52847 47.3442L36.621 0.793842ZM12.4279 60.9064C12.1694 60.693 11.9148 60.4765 11.6641 60.2569L51.6885 5.60705C51.9735 5.77979 52.2568 5.9572 52.5383 6.13927L12.4279 60.9064ZM49.0335 4.15491C49.336 4.30325 49.637 4.45645 49.9364 4.61453L10.1891 58.886C9.94807 58.6482 9.71118 58.4075 9.47848 58.1639L49.0335 4.15491ZM35.2384 68.6868C35.6689 68.6721 36.0989 68.6492 36.5282 68.6182L67.1631 26.7889C67.0631 26.3703 66.9551 25.9534 66.8393 25.5385L35.2384 68.6868ZM66.0876 23.1801C65.9533 22.8062 65.8123 22.4344 65.6648 22.0649L31.5723 68.6153C31.969 68.6445 32.366 68.6666 32.763 68.6819L66.0876 23.1801ZM0.174719 37.0186C0.138269 36.4882 0.114181 35.9567 0.102522 35.4247L24.5251 2.07784C25.0358 1.92841 25.5497 1.79101 26.0664 1.66571L0.174719 37.0186ZM19.3557 4.05887C19.9607 3.76849 20.5733 3.49658 21.1925 3.2433L0.208004 31.8958C0.262629 31.229 0.337006 30.563 0.431277 29.8985L19.3557 4.05887ZM17.3719 64.3104C17.0812 64.1457 16.7921 63.9763 16.5047 63.8021L56.5292 9.15223C56.7819 9.37363 57.0307 9.59812 57.2755 9.82561L17.3719 64.3104ZM54.186 7.27433C54.4558 7.47196 54.7219 7.67283 54.9842 7.87683L14.8226 62.714C14.5489 62.5255 14.2771 62.3325 14.0073 62.1348L54.186 7.27433ZM43.6682 67.3313C44.2116 67.1723 44.7513 66.9997 45.2868 66.8136L68.0857 35.6838C68.1015 35.1171 68.1032 34.5504 68.0908 33.9844L43.6682 67.3313ZM67.8816 30.8851C67.8275 30.4073 67.7633 29.9307 67.689 29.4556L39.2293 68.3149C39.7046 68.2423 40.1784 68.1597 40.6503 68.0672L67.8816 30.8851ZM1.71341 45.0723C1.58618 44.6737 1.46636 44.2731 1.35397 43.8706L32.9549 0.722303C33.3726 0.707988 33.7907 0.701333 34.209 0.702373L1.71341 45.0723ZM28.964 1.09422C29.4201 1.02456 29.8776 0.964134 30.3362 0.912975L0.74554 41.3165C0.655919 40.8638 0.575469 40.4094 0.504245 39.9535L28.964 1.09422ZM8.11238 56.6443C7.88965 56.3809 7.67142 56.1147 7.45771 55.8457L46.2137 2.92786C46.5346 3.05045 46.8542 3.17817 47.1725 3.31105L8.11238 56.6443ZM43.2177 1.94129C43.5584 2.03609 43.8982 2.13638 44.2368 2.2422L6.20746 54.168C6.0044 53.877 5.80625 53.5834 5.61306 53.2871L43.2177 1.94129ZM28.1646 68.1908C28.534 68.256 28.9041 68.3149 29.2746 68.3677L64.7354 19.9491C64.5733 19.6117 64.4054 19.2767 64.2318 18.9442L28.1646 68.1908ZM63.1532 17.032C62.9673 16.7261 62.7763 16.4227 62.5802 16.122L24.9756 67.4678C25.3215 67.5641 25.6683 67.6546 26.0161 67.7396L63.1532 17.032ZM1.47526 25.0881C1.79833 23.992 2.17873 22.9067 2.61713 21.8366L12.3292 8.5756C13.2171 7.83472 14.1371 7.14455 15.0846 6.50577L1.47526 25.0881Z"
              fill="#8400FF"
            />
          </svg>
        </div>
        <div className="w-[30px] lg:w-[40px] xl:w-[50px] absolute left-[12%] bottom-[10%] animate-topToTop md:left-[4%] md:bottom-[15%]">
          <svg
            width="100%"
            viewBox="0 0 49 82"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <rect width="5" height="5" fill="#8400FF" />
            <rect x="44" width="5" height="5" fill="#8400FF" />
            <rect x="22" width="5" height="5" fill="#8400FF" />
            <rect x="11" width="5" height="5" fill="#8400FF" />
            <rect x="33" width="5" height="5" fill="#8400FF" />
            <rect y="44" width="5" height="5" fill="#8400FF" />
            <rect x="44" y="44" width="5" height="5" fill="#8400FF" />
            <rect x="22" y="44" width="5" height="5" fill="#8400FF" />
            <rect x="11" y="44" width="5" height="5" fill="#8400FF" />
            <rect x="33" y="44" width="5" height="5" fill="#8400FF" />
            <rect y="22" width="5" height="5" fill="#8400FF" />
            <rect x="44" y="22" width="5" height="5" fill="#8400FF" />
            <rect x="22" y="22" width="5" height="5" fill="#8400FF" />
            <rect x="11" y="22" width="5" height="5" fill="#8400FF" />
            <rect x="33" y="22" width="5" height="5" fill="#8400FF" />
            <rect y="66" width="5" height="5" fill="#8400FF" />
            <rect x="44" y="66" width="5" height="5" fill="#8400FF" />
            <rect x="22" y="66" width="5" height="5" fill="#8400FF" />
            <rect x="11" y="66" width="5" height="5" fill="#8400FF" />
            <rect x="33" y="66" width="5" height="5" fill="#8400FF" />
            <rect y="11" width="5" height="5" fill="#8400FF" />
            <rect x="44" y="11" width="5" height="5" fill="#8400FF" />
            <rect x="22" y="11" width="5" height="5" fill="#8400FF" />
            <rect x="11" y="11" width="5" height="5" fill="#8400FF" />
            <rect x="33" y="11" width="5" height="5" fill="#8400FF" />
            <rect y="55" width="5" height="5" fill="#8400FF" />
            <rect x="44" y="55" width="5" height="5" fill="#8400FF" />
            <rect x="22" y="55" width="5" height="5" fill="#8400FF" />
            <rect x="11" y="55" width="5" height="5" fill="#8400FF" />
            <rect x="33" y="55" width="5" height="5" fill="#8400FF" />
            <rect y="33" width="5" height="5" fill="#8400FF" />
            <rect x="44" y="33" width="5" height="5" fill="#8400FF" />
            <rect x="22" y="33" width="5" height="5" fill="#8400FF" />
            <rect x="11" y="33" width="5" height="5" fill="#8400FF" />
            <rect x="33" y="33" width="5" height="5" fill="#8400FF" />
            <rect y="77" width="5" height="5" fill="#8400FF" />
            <rect x="44" y="77" width="5" height="5" fill="#8400FF" />
            <rect x="22" y="77" width="5" height="5" fill="#8400FF" />
            <rect x="11" y="77" width="5" height="5" fill="#8400FF" />
            <rect x="33" y="77" width="5" height="5" fill="#8400FF" />
          </svg>
        </div>
        <div className="hidden md:block w-[100px] lg:w-[150px] xl:w-[200px] absolute left-[50%] bottom-[0px] animate-leftToLeft">
          <svg
            width="100%"
            viewBox="0 0 200 100"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M200 100C200 86.8678 197.413 73.8642 192.388 61.7317C187.362 49.5991 179.997 38.5752 170.711 29.2893C161.425 20.0035 150.401 12.6375 138.268 7.61205C126.136 2.58658 113.132 -5.74026e-07 100 0C86.8678 5.74026e-07 73.8642 2.58658 61.7317 7.61205C49.5991 12.6375 38.5752 20.0035 29.2893 29.2893C20.0035 38.5752 12.6375 49.5991 7.61204 61.7317C2.58657 73.8642 -1.14805e-06 86.8678 0 100H26.8804C26.8804 90.3978 28.7717 80.8896 32.4463 72.0183C36.1209 63.1471 41.5068 55.0864 48.2966 48.2966C55.0864 41.5068 63.147 36.1209 72.0183 32.4463C80.8896 28.7717 90.3978 26.8804 100 26.8804C109.602 26.8804 119.11 28.7717 127.982 32.4463C136.853 36.1209 144.914 41.5068 151.703 48.2966C158.493 55.0864 163.879 63.1471 167.554 72.0183C171.228 80.8896 173.12 90.3978 173.12 100H200Z"
              fill="#F2994A"
            />
          </svg>
        </div>
      </div>
      <div className="relative z-[1] container mx-auto px-4 py-8 md:grid md:grid-cols-12 md:items-center md:py-[64px] lg:py-[100px] xl:py-[126px] lg:px-[64px]">
        <div className="md:col-start-2 col-span-5">
          <h1
            className="text-4xl lg:text-5xl xl:text-[54px] font-extrabold font-montserrat text-text-title leading-[1.2em] capitalize"
            dangerouslySetInnerHTML={{
              __html: headline.replace(
                headlineHighlight,
                `<span class="text-primary">${headlineHighlight}</span>`
              ),
            }}
          ></h1>
          <p className="text-sm text-text-desc">{description}</p>
          <div className="flex items-center mt-4">
            <Button onClick={() => router.push("/contact")}>contact</Button>
            <div className="ml-4">
              <Button
                className="inline-block px-[18px] py-[8px] font-bold text-primary border-2 border-primary rounded uppercase transition-colors ease-in-out duration-300 hover:bg-primary hover:outline-none hover:text-white"
                onClick={() => router.push("projects")}
              >
                projects
              </Button>
            </div>
          </div>
        </div>
        <div className="flex justify-center md:col-start-9 md:col-span-3">
          <figure className="w-[180px] h-[180px] lg:w-[220px] lg:h-[220px] xl:w-[250px] xl:h-[250px] rounded-full bg-primary relative mt-[30%]">
            <img
              className="absolute left-0 right-0 bottom-0 h-[150%] object-cover rounded-full"
              src={file.url}
              alt={title}
            />
          </figure>
        </div>
      </div>
    </section>
  );
}
