import React from 'react';

export function About() {
  return (
    <section className="max-w-2xl mx-auto py-12 px-4 text-center">
      <img
        src="/images/ai.png"
        alt="Influencer/Creator"
        className="mx-auto mb-6 w-32 h-32 rounded-full object-cover shadow-lg border-4 border-orange-200"
      />
      <h1 className="text-3xl sm:text-4xl font-bold mb-4 text-gray-900">About the Creator</h1>
      <p className="text-lg sm:text-xl text-gray-700 mb-6">
        Welcome! I'm <span className="font-semibold text-orange-700">Ritik</span>, a passionate creator and influencer dedicated to sharing practical ideas, inspiration, and real stories for modern hustlers and culture lovers. This blog is a space where creativity, entrepreneurship, and positive change meet.
      </p>
      <p className="text-base sm:text-lg text-gray-600 mb-4">
        Here, you'll find:
      </p>
      <ul className="text-left inline-block mx-auto mb-6 text-gray-700 text-base sm:text-lg list-disc pl-6">
        <li>Actionable guides for side hustles and digital entrepreneurship</li>
        <li>Culture-driven stories and civic inspiration</li>
        <li>Tips for personal growth, productivity, and creative living</li>
        <li>Resources to help you start, grow, and thrive in your own journey</li>
      </ul>
      <p className="text-base sm:text-lg text-gray-600">
        Whether you're a student, a working professional, or a dreamer looking for your next big idea, this blog is for you. Let's build, learn, and inspire each other!
      </p>
      <p className="text-base sm:text-lg text-gray-600">
        More posts & article are coming soon!
      </p>

    </section>
  );
}