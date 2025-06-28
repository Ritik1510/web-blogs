import React from "react";
import sideHustleData from "../../postsData/sideHustles.json";
import CategoryDate from "../../smallFunctionComponents/CategoryDate";

export default function Hustling() {
  const {
    title,
    intro,
    sections,
  } = sideHustleData;

  return (
    <div className="grid sm:gap-2 lg:gap-4 xl:gap-6 bg-gray-50 min-h-screen p-3 md:p-4">

      <article className="grid gap-4 max-w-3xl mx-auto ">
        <CategoryDate /> 
        {/* Title */}
        <div>
          <h1 className="text-3xl md:text-4xl">{title}</h1>
        </div>

        {/* Intro */}
        <div>
          {intro && intro.map((para, idx) => (
            <p key={idx}>{para}</p>
          ))}
        </div>

        {/* Sections */}
        <div className="grid gap-7 md:gap-8 lg:gap-9 xl:gap-10">
          {sections.map((section, idx) => (
            <section key={idx} className="grid border-b-2 border-l-2 border-t-2 border-gray-400 p-1">
              {section.heading && (
                <h2 className="text-2xl text-gray-900 sm:p-1 md:p-1.5 lg:p-2.5 xl:p-3 border-b-2 border-gray-400">{section.heading}</h2>
              )}
              {section.body && section.body.map((para, pIdx) => (
                <p key={pIdx}>{para}</p>
              ))}
              {section.image && (
                <div className="flex justify-center items-center sm:p-1.5 md:p-2 lg:p-2.5 xl:p-3">
                  <img
                    src={section.image}
                    alt={section.imageAlt || "Section visual"}
                    className="w-full max-w-3xl object-cover"
                    loading="lazy"
                  />
                </div>
              )}
            </section>
          ))}
        </div>
      </article>
    </div>
  );
}