import React, { useEffect } from "react";
import BlogCard from "./BlogCard";

export default function BlogContainer({ title, posts, cta, className }) {
  useEffect(() => {
    // Create the observer
    const observer = new IntersectionObserver((entries) => {
      // Loop over the entries
      entries.forEach((entry) => {
        // If the element is visible
        if (entry.isIntersecting) {
          // Add the animation class
          entry.target.childNodes.forEach((item) => {
            item.classList.add("animate-fadeBottom");
          });
        }
      });
    });

    // Tell the observer which elements to track
    observer.observe(document.querySelector(".blog-card-container"));
  }, []);

  return (
    <section className={className || ""}>
      <div className="container mx-auto px-4 py-8 md:py-[48px] lg:px-[64px]">
        <h1 className="text-text-title font-montserrat font-bold text-2xl lg:text-4xl">
          {title}
        </h1>
        <div className="mt-4 lg:mt-8 sm:grid-auto-fit blog-card-container">
          {posts.map((post, index) => {
            const { title, slug, content, thumbnail, date, author } =
              post.fields;
            const { file } = thumbnail.fields;

            return (
              <div
                key={index}
                className="post-card my-4 sm:mx-4"
                style={{
                  "--order": index,
                }}
              >
                <BlogCard
                  title={title}
                  slug={slug}
                  content={content}
                  image={"http:" + file.url}
                  date={date}
                  author={author}
                />
              </div>
            );
          })}
        </div>
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
