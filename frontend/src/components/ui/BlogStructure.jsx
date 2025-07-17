import React from 'react';
import { PortableText } from '@portabletext/react';
import CategoryDate from '../smallFunctionComponents/CategoryDate';

function BlogStructure({ data }) {
  const { title, intro, sections } = data;

  return (
    <div className="grid bg-gray-50 min-h-screen p-4">
      <article className="max-w-3xl mx-auto grid gap-4">
        <CategoryDate />
        <h1 className="text-3xl md:text-4xl">{title}</h1>

        {intro?.map((para, idx) => (
          <p key={idx}>{para}</p>
        ))}

        <div className="grid gap-10">
          {sections?.map((section, idx) => (
            <section key={idx} className="border p-2">
              {section.heading && <h2 className="text-2xl">{section.heading}</h2>}
              {section.body && <PortableText value={section.body} />}
              {section.sectionImage?.asset?.url && (
                <img
                  src={section.sectionImage.asset.url}
                  alt={section.sectionImage.alt || ''}
                  className="w-full object-cover"
                  loading="lazy"
                />
              )}
            </section>
          ))}
        </div>
      </article>
    </div>
  );
}

export default BlogStructure;
