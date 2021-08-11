import React, { useState } from "react";
import Link from "next/link";
import Head from "next/head";

const Contact = () => {
  let [name, setName] = useState("");
  let [email, setEmail] = useState("");
  let [message, setMessage] = useState("");
  let [disabled, setDisabled] = useState(false);
  const submit = (e) => {
    e.preventDefault();
    setDisabled(true);
    fetch("https://formsubmit.co/ajax/d5d095d193d37405452c1923602993a3", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify({
        name: name,
        email: email,
        message: message,
      }),
    })
      .then((response) => {
        response.json();
        setDisabled(false);
      })
      .then((data) => {
        console.log(data);
        alert("Message succesfully sent");
      })
      .catch((error) => {
        console.log(error);
        setDisabled(false);
        alert("Something error");
      });
  };

  return (
    <>
      <Head>
        <title>contact Pardiwan</title> 
      </Head>
      <section className="relative z-[1] container mx-auto px-4 py-8 md:grid md:grid-cols-12 md:items-center md:py-[48px]">
        <div className="md:col-start-2 col-span-5">
          <h1 className="text-2xl text-text-title font-montserrat font-bold md:mb-2 md:text-3xl lg:text-4xl xl:text-5xl">
            Get a Quote
          </h1>
          <p className="text-sm text-text-desc leading-relaxed">
            I will get back to you within one to two days through email. Also
            please don't forget to check your spam account just in case!
          </p>
          <div className="mt-8">
            <span className="flex flex-row items-center text-sm text-text-desc">
              <svg
                className="w-6 h-6 mr-2"
                viewBox="0 0 25 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M22.4284 16.92V19.92C22.4295 20.1985 22.3714 20.4742 22.2576 20.7293C22.1439 20.9845 21.9771 21.2136 21.7678 21.4019C21.5586 21.5901 21.3116 21.7335 21.0427 21.8227C20.7737 21.9119 20.4887 21.9451 20.2059 21.92C17.0688 21.5856 14.0554 20.5341 11.4078 18.85C8.94456 17.3147 6.85616 15.2662 5.29091 12.85C3.56797 10.2412 2.49574 7.27099 2.16111 4.18C2.13563 3.90346 2.16914 3.62476 2.25949 3.36162C2.34984 3.09849 2.49506 2.85669 2.6859 2.65162C2.87674 2.44655 3.10902 2.28271 3.36796 2.17052C3.62689 2.05833 3.9068 2.00026 4.18987 2H7.24832C7.74308 1.99522 8.22273 2.16708 8.59786 2.48353C8.973 2.79998 9.21803 3.23944 9.28728 3.72C9.41637 4.68006 9.65577 5.62272 10.0009 6.53C10.1381 6.88792 10.1678 7.27691 10.0865 7.65088C10.0051 8.02484 9.81625 8.36811 9.54215 8.64L8.24741 9.91C9.69869 12.4135 11.812 14.4864 14.3643 15.91L15.659 14.64C15.9362 14.3711 16.2862 14.1858 16.6674 14.1061C17.0487 14.0263 17.4452 14.0555 17.8101 14.19C18.7351 14.5285 19.6961 14.7634 20.6749 14.89C21.1701 14.9585 21.6224 15.2032 21.9457 15.5775C22.269 15.9518 22.4408 16.4296 22.4284 16.92Z"
                  stroke="#8400FF"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
              +62 838-2324-2073
            </span>
            <span className="flex flex-row items-center text-sm text-text-desc mt-4">
              <svg
                className="w-6 h-6 mr-2"
                viewBox="0 0 25 27"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M4.07802 4.5H20.3897C21.5111 4.5 22.4287 5.5125 22.4287 6.75V20.25C22.4287 21.4875 21.5111 22.5 20.3897 22.5H4.07802C2.95659 22.5 2.03906 21.4875 2.03906 20.25V6.75C2.03906 5.5125 2.95659 4.5 4.07802 4.5Z"
                  stroke="#8400FF"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M22.4287 6.75L12.2339 14.625L2.03906 6.75"
                  stroke="#8400FF"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
              pardiwan267@gmail.com
            </span>
            <span className="flex flex-row items-center text-sm text-text-desc mt-4">
              <svg
                className="w-6 h-6 mr-2"
                viewBox="0 0 25 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M21.4092 10C21.4092 17 12.2339 23 12.2339 23C12.2339 23 3.05859 17 3.05859 10C3.05859 7.61305 4.02528 5.32387 5.74598 3.63604C7.46669 1.94821 9.80047 1 12.2339 1C14.6674 1 17.0011 1.94821 18.7219 3.63604C20.4426 5.32387 21.4092 7.61305 21.4092 10Z"
                  stroke="#8400FF"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M12.2337 13C13.9229 13 15.2922 11.6569 15.2922 10C15.2922 8.34315 13.9229 7 12.2337 7C10.5446 7 9.17529 8.34315 9.17529 10C9.17529 11.6569 10.5446 13 12.2337 13Z"
                  stroke="#8400FF"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
              West Java, Indonesia
            </span>
          </div>
          <div className="mt-8 flex items-center justify-left">
            <Link href="https://instagram.com/supardi2607">
              <a>
                <svg
                  className="w-6 h-6 mr-4"
                  viewBox="0 0 27 26"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M19.3506 1H7.11688C3.73862 1 1 3.68629 1 7V19C1 22.3137 3.73862 25 7.11688 25H19.3506C22.7289 25 25.4675 22.3137 25.4675 19V7C25.4675 3.68629 22.7289 1 19.3506 1Z"
                    fill="#8400FF"
                    stroke="white"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M18.1272 12.2441C18.2781 13.2428 18.1042 14.2628 17.6302 15.1589C17.1561 16.0551 16.406 16.7818 15.4867 17.2357C14.5673 17.6896 13.5254 17.8476 12.5091 17.6872C11.4929 17.5268 10.5542 17.0562 9.82635 16.3423C9.09853 15.6284 8.61874 14.7076 8.45522 13.7108C8.2917 12.714 8.45277 11.692 8.91553 10.7902C9.37828 9.88834 10.1192 9.15261 11.0328 8.68761C11.9464 8.22261 12.9862 8.05202 14.0044 8.20012C15.0429 8.35118 16.0044 8.82587 16.7468 9.55409C17.4892 10.2823 17.9732 11.2254 18.1272 12.2441Z"
                    fill="#8400FF"
                    stroke="white"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M19.9624 6.3999H19.9745"
                    stroke="white"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </a>
            </Link>
            <Link href="https://web.facebook.com/suizen.suizen.3/">
              <a>
                <svg
                  className="w-6 h-6 mr-4"
                  viewBox="0 0 19 26"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M17.5973 1H13.1487C11.1823 1 9.29639 1.63214 7.90592 2.75736C6.51544 3.88258 5.73429 5.4087 5.73429 7V10.6H1.28564V15.4H5.73429V25H11.6658V15.4H16.1145L17.5973 10.6H11.6658V7C11.6658 6.68174 11.822 6.37652 12.1001 6.15147C12.3782 5.92643 12.7554 5.8 13.1487 5.8H17.5973V1Z"
                    fill="#8400FF"
                    stroke="white"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLineJoin="round"
                  />
                </svg>
              </a>
            </Link>
            <Link href="https://wa.me/+6283823242073">
              <a>
                <svg
                  className="w-6 h-6 mr-4"
                  viewBox="0 0 25 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M21.3085 3.48906C20.1817 2.37858 18.8398 1.49819 17.3611 0.899179C15.8823 0.300172 14.2963 -0.00546639 12.6954 7.39956e-05C5.98708 7.39956e-05 0.519984 5.33706 0.51384 11.889C0.51384 13.9875 1.07606 16.029 2.13753 17.8365L0.415527 24L6.87343 22.347C8.65996 23.2964 10.6614 23.794 12.6954 23.7945H12.7015C19.4113 23.7945 24.8769 18.4575 24.8831 11.8995C24.8846 10.3366 24.5694 8.78883 23.9556 7.34537C23.3419 5.90191 22.4417 4.59131 21.3069 3.48906H21.3085ZM12.6954 21.7815C10.8812 21.7821 9.10037 21.3054 7.54011 20.4015L7.17144 20.1855L3.34032 21.1665L4.36339 17.517L4.12375 17.1405C3.10961 15.566 2.57325 13.7431 2.57687 11.883C2.57687 6.44405 7.11921 2.00707 12.7015 2.00707C14.0314 2.00474 15.3486 2.25948 16.5772 2.7566C17.8058 3.25373 18.9215 3.9834 19.8599 4.90356C20.8016 5.82013 21.5481 6.90969 22.0565 8.1094C22.5648 9.3091 22.8248 10.5952 22.8216 11.8935C22.8154 17.352 18.2731 21.7815 12.6954 21.7815V21.7815ZM18.2485 14.3805C17.9459 14.232 16.4512 13.5135 16.1701 13.4115C15.8905 13.314 15.6862 13.263 15.4865 13.56C15.2822 13.8555 14.6985 14.529 14.5234 14.7225C14.3483 14.922 14.167 14.9445 13.8628 14.7975C13.5602 14.6475 12.5786 14.3355 11.4173 13.32C10.511 12.5325 9.90422 11.5575 9.72296 11.262C9.54784 10.965 9.70606 10.806 9.85814 10.6575C9.99178 10.5255 10.1608 10.3095 10.3128 10.1385C10.4664 9.96754 10.5171 9.84154 10.617 9.64354C10.7168 9.44254 10.6692 9.27154 10.5939 9.12305C10.5171 8.97455 9.91037 7.50905 9.65383 6.91805C9.40805 6.33455 9.15766 6.41555 8.97025 6.40805C8.79513 6.39755 8.59083 6.39755 8.38652 6.39755C8.23224 6.4013 8.08041 6.43614 7.94057 6.4999C7.80073 6.56366 7.6759 6.65495 7.57391 6.76805C7.29433 7.06505 6.51244 7.78355 6.51244 9.24904C6.51244 10.7145 7.60309 12.123 7.75671 12.3225C7.90725 12.522 9.89808 15.5205 12.9534 16.8105C13.6754 17.118 14.2438 17.2995 14.6877 17.4375C15.4174 17.6655 16.0764 17.631 16.6018 17.5575C17.1855 17.4705 18.4006 16.8375 18.6571 16.143C18.909 15.447 18.909 14.853 18.8322 14.7285C18.757 14.6025 18.5527 14.529 18.2485 14.3805V14.3805Z"
                    fill="#8400FF"
                  />
                </svg>
              </a>
            </Link>
            <Link href="https://fiverr.com/pardiwan">
              <a>
                <svg
                  className="w-6 h-6"
                  viewBox="0 0 26 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M17.1274 15.7776V9.77759H11.0106V9.40319C11.0106 8.78279 11.5244 8.27759 12.1581 8.27759H13.3044V6.02759H12.1581C11.2457 6.02854 10.3709 6.38449 9.72574 7.01733C9.08058 7.65017 8.71769 8.50822 8.71672 9.40319V9.77759H7.1875V12.0276H8.71672V15.7776H7.1875V18.0276H12.5398V15.7776H11.0106V12.0276H14.8556V15.7776H13.3044V18.0276H18.6567V15.7776H17.1274Z"
                    fill="#8400FF"
                  />
                  <path
                    d="M15.8735 8.36627C16.5499 8.36627 17.0981 7.82847 17.0981 7.16507C17.0981 6.50166 16.5499 5.96387 15.8735 5.96387C15.1972 5.96387 14.6489 6.50166 14.6489 7.16507C14.6489 7.82847 15.1972 8.36627 15.8735 8.36627Z"
                    fill="#8400FF"
                  />
                  <path
                    d="M5.59468 2.4C4.94576 2.4 4.32342 2.65286 3.86456 3.10294C3.40571 3.55303 3.14793 4.16348 3.14793 4.8V19.2C3.14793 19.8365 3.40571 20.447 3.86456 20.8971C4.32342 21.3471 4.94576 21.6 5.59468 21.6H20.2752C20.9241 21.6 21.5465 21.3471 22.0053 20.8971C22.4642 20.447 22.722 19.8365 22.722 19.2V4.8C22.722 4.16348 22.4642 3.55303 22.0053 3.10294C21.5465 2.65286 20.9241 2.4 20.2752 2.4H5.59468ZM5.59468 0H20.2752C21.573 0 22.8177 0.505713 23.7354 1.40589C24.6531 2.30606 25.1687 3.52696 25.1687 4.8V19.2C25.1687 20.473 24.6531 21.6939 23.7354 22.5941C22.8177 23.4943 21.573 24 20.2752 24H5.59468C4.29684 24 3.05216 23.4943 2.13445 22.5941C1.21674 21.6939 0.701172 20.473 0.701172 19.2V4.8C0.701172 3.52696 1.21674 2.30606 2.13445 1.40589C3.05216 0.505713 4.29684 0 5.59468 0V0Z"
                    fill="#8400FF"
                  />
                </svg>
              </a>
            </Link>
          </div>
        </div>
        <div className="mt-8 md:col-start-9 md:col-span-3">
          <form onSubmit={(e) => submit(e)}>
            <div className="mb-4">
              <label className="text-sm text-text-title">Name</label>
              <div className="flex border-2 border-gray-200 px-3 py-2 rounded transition-colors ease-in-out duration-200">
                <span className="mr-2">
                  <svg
                    id="person"
                    className="w-5 h-5 stroke-current text-gray-200 transition-colors ease-in-out duration-200"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M20 21V19C20 17.9391 19.5786 16.9217 18.8284 16.1716C18.0783 15.4214 17.0609 15 16 15H8C6.93913 15 5.92172 15.4214 5.17157 16.1716C4.42143 16.9217 4 17.9391 4 19V21"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M12 11C14.2091 11 16 9.20914 16 7C16 4.79086 14.2091 3 12 3C9.79086 3 8 4.79086 8 7C8 9.20914 9.79086 11 12 11Z"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </span>
                <input
                  className="focus:outline-none w-full text-sm text-text-desc"
                  type="text"
                  placeholder="John Doe"
                  value={name}
                  onChange={(e) => {
                    setName(e.target.value);
                  }}
                  onFocus={(e) => {
                    e.target.parentElement.classList.toggle("border-primary");
                    e.target.parentElement.classList.toggle("border-gray-200");
                    document
                      .getElementById("person")
                      .classList.toggle("text-gray-200");
                    document
                      .getElementById("person")
                      .classList.toggle("text-primary");
                  }}
                  onBlur={(e) => {
                    e.target.parentElement.classList.toggle("border-primary");
                    e.target.parentElement.classList.toggle("border-gray-200");
                    document
                      .getElementById("person")
                      .classList.toggle("text-gray-200");
                    document
                      .getElementById("person")
                      .classList.toggle("text-primary");
                  }}
                />
              </div>
            </div>
            <div className="mb-4">
              <label className="text-sm text-text-title">Email</label>
              <div className="flex items-center border-2 border-gray-200 px-3 py-2 rounded transition-colors ease-in-out duration-200">
                <span className="mr-2">
                  <svg
                    id="email"
                    className="w-5 h-5 stroke-current text-gray-200 transition-colors ease-in-out duration-200"
                    viewBox="0 0 24 27"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M4 4.5H20C21.1 4.5 22 5.5125 22 6.75V20.25C22 21.4875 21.1 22.5 20 22.5H4C2.9 22.5 2 21.4875 2 20.25V6.75C2 5.5125 2.9 4.5 4 4.5Z"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M22 6.75L12 14.625L2 6.75"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </span>
                <input
                  className="focus:outline-none w-full text-sm text-text-desc"
                  type="text"
                  placeholder="johndoe@gmail.com"
                  value={email}
                  onChange={(e) => {
                    setEmail(e.target.value);
                  }}
                  onFocus={(e) => {
                    e.target.parentElement.classList.toggle("border-primary");
                    e.target.parentElement.classList.toggle("border-gray-200");
                    document
                      .getElementById("email")
                      .classList.toggle("text-gray-200");
                    document
                      .getElementById("email")
                      .classList.toggle("text-primary");
                  }}
                  onBlur={(e) => {
                    e.target.parentElement.classList.toggle("border-primary");
                    e.target.parentElement.classList.toggle("border-gray-200");
                    document
                      .getElementById("email")
                      .classList.toggle("text-gray-200");
                    document
                      .getElementById("email")
                      .classList.toggle("text-primary");
                  }}
                />
              </div>
            </div>
            <div className="mb-4">
              <label className="text-sm text-text-title">Message</label>
              <textarea
                className="focus:outline-none focus:border-primary h-24 w-full text-sm text-text-desc border-2 border-gray-200 px-3 py-2 rounded transition-colors ease-in-out duration-200"
                type="text"
                placeholder="Lets just collaborate...."
                value={message}
                onChange={(e) => {
                  setMessage(e.target.value);
                }}
              />
            </div>
            <div className="md:flex md:justify-end">
              <button
                type="submit"
                disabled={disabled}
                className="inline-block px-[20px] py-[10px] font-semibold text-white text-sm w-full md:w-auto bg-primary rounded uppercase transition-colors ease-in-out duration-300 disabled:opacity-70 disabled:bg-primary-dark hover:bg-primary-dark hover:outline-none active:ring active:ring-offset-2 active:ring-primary"
              >
                send message
              </button>
            </div>
          </form>
        </div>
      </section>
    </>
  );
};

export default Contact;
