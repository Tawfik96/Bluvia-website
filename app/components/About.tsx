import React from "react";
import Image from "next/image";

const AboutSection: React.FC = () => {
  return (
    <div className="animate-fadeIn">
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Section Title */}
          <div className="text-center mb-16">
            <h1 className="text-5xl font-bold text-gray-900 mb-4">
              About Bluvia
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Revolutionizing industrial water waste solutions through
              innovation, sustainability, and a vision for a cleaner future.
            </p>
          </div>

          {/* Who We Are */}
          <div className="grid md:grid-cols-2 gap-12 items-center mb-24">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                Who We Are
              </h2>
              <p className="text-lg text-gray-600">
                Bluvia is a team of passionate engineers, environmental
                scientists, and innovators dedicated to transforming how
                industries handle water waste. We merge cutting-edge technology
                with sustainable practices to build a better world — one drop at
                a time.
              </p>
            </div>
            <div className="rounded-xl overflow-hidden shadow-lg">
              <Image
                src="/images/team.jpg"
                alt="Bluvia Team"
                width={600}
                height={400}
                className="object-cover w-full h-full"
              />
            </div>
          </div>

          {/* Our Story */}
          <div className="grid md:grid-cols-2 gap-12 items-center mb-24">
            <div className="rounded-xl overflow-hidden shadow-lg order-2 md:order-1">
              <Image
                src="/images/story.jpg"
                alt="Our Story"
                width={600}
                height={400}
                className="object-cover w-full h-full"
              />
            </div>
            <div className="order-1 md:order-2">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                Our Story
              </h2>
              <p className="text-lg text-gray-600">
                Bluvia started as a bold idea in a small lab — to turn
                industrial water waste into a resource, not a liability. Over
                the years, we've grown into a global force, helping hundreds of
                companies optimize waste treatment and protect the environment
                with measurable impact.
              </p>
            </div>
          </div>

          {/* Impact Metrics */}
          <div className="grid md:grid-cols-3 gap-8 text-center mb-24">
            <div className="p-6 bg-blue-50 rounded-lg shadow">
              <div className="text-4xl font-bold text-blue-600 mb-2">500+</div>
              <div className="text-gray-700">Companies Served</div>
            </div>
            <div className="p-6 bg-green-50 rounded-lg shadow">
              <div className="text-4xl font-bold text-green-600 mb-2">
                99.9%
              </div>
              <div className="text-gray-700">Contaminant Removal</div>
            </div>
            <div className="p-6 bg-purple-50 rounded-lg shadow">
              <div className="text-4xl font-bold text-purple-600 mb-2">
                50M+
              </div>
              <div className="text-gray-700">Gallons Processed Daily</div>
            </div>
          </div>

          {/* Core Values */}
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              Our Core Values
            </h2>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center p-6 bg-white border rounded-xl shadow-sm">
              <h3 className="text-2xl font-semibold text-teal-600 mb-3">
                Innovation
              </h3>
              <p className="text-gray-600">
                We push boundaries to create breakthrough solutions in water
                treatment.
              </p>
            </div>
            <div className="text-center p-6 bg-white border rounded-xl shadow-sm">
              <h3 className="text-2xl font-semibold text-green-600 mb-3">
                Sustainability
              </h3>
              <p className="text-gray-600">
                Every solution is designed with the planet and future
                generations in mind.
              </p>
            </div>
            <div className="text-center p-6 bg-white border rounded-xl shadow-sm">
              <h3 className="text-2xl font-semibold text-blue-600 mb-3">
                Excellence
              </h3>
              <p className="text-gray-600">
                We deliver results through precision, quality, and dedicated
                support.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutSection;
