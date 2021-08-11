import Hero from "../components/homepage/Hero";
import About from "../components/homepage/About";
import { createClient } from "contentful";
import ProjectContainer from "../components/ProjectContainer";
import Image from "next/image";
import Head from "next/head";

export async function getStaticProps() {
  const client = createClient({
    space: process.env.CONTENTFUL_SPACE_ID,
    accessToken: process.env.CONTENTFUL_ACCESS_KEY,
  });

  const hero = await client.getEntries({ content_type: "hero" });
  const about = await client.getEntries({ content_type: "about" });
  const projects = await client.getEntries({ content_type: "projects" });
  const testimonial = await client.getEntries({ content_type: "testimonial" });

  return {
    props: {
      hero: hero.items,
      about: about.items,
      projects: projects.items,
      testimonials: testimonial.items,
    },
  };
}

export default function Home({ hero, about, projects, testimonials }) {
  return (
    <>
      <Head>
        <title>Pardiwan</title>
        <meta name="Description" content="I'm Supardi Gunawan, I am a Junior Frontend developer."/>
        <meta name="google-site-verification" content="k-Bgfp5WSsN6S107vdIxZgGd7fPkDGxvujVwrbtmG2A" />
      </Head>
      <Hero data={hero[0]} />
      <About data={about[0]} />
      <ProjectContainer
        title="Favorit Project"
        projects={projects}
        cta={{
          text: "Get Yours on Fiverr now",
          button: {
            buttonText: "see more",
            buttonLink: "/projects",
          },
          secondButton: {
            secondButtonText: "order now",
            secondButtonLink: "https://fiverr.com/pardiwan",
          },
        }}
      />
      <section className="bg-primary">
        <div className="container mx-auto px-4 py-8 md:py-[48px] lg:px-[64px]">
          <h1 className="text-white text-center font-montserrat font-bold text-2xl lg:text-4xl">
            What People Say
          </h1>
          <p className="text-white text-center text-sm mt-2">
            Client satisfaction is my priority
          </p>
          <div className="flex items-start lg:justify-center overflow-scroll mt-8 scroll-hide">
            {testimonials.map((testimonial, index) => {
              const { name, jobTitle, message, photoProfile } =
                testimonial.fields;
              const { file } = photoProfile.fields;

              return (
                <div
                  key={index}
                  className="flex flex-col items-center justify-center mx-2"
                >
                  <figure className="rounded-full border-4 border-primary w-[72px] h-[72px] overflow-hidden relative z-10">
                    <Image
                      src={"http:" + file.url}
                      width={72}
                      height={72}
                    ></Image>
                  </figure>
                  <div className="bg-white p-4 pt-[72px] rounded w-[250px] relative bottom-9 z-0">
                    <p className="text-center text-text-desc text-sm leading-relaxed xl:text-base">
                      {message}
                    </p>
                    <h5 className="text-lg text-center font-bold text-text-title mt-3 xl:text-xl">
                      {name}
                    </h5>
                    <p className="text-center text-text-desc italic leading-[1em] text-sm xl:text-base">
                      {jobTitle}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
}
