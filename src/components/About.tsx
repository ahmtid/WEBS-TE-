import React from 'react'

const About = () => {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 mb-8 md:mb-0">
            <img src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1471&q=80" alt="Team working together" className="rounded-lg shadow-md" />
          </div>
          <div className="md:w-1/2 md:pl-12">
            <h2 className="text-3xl font-bold mb-4">About Us</h2>
            <p className="text-gray-600 mb-4">
              We are a dedicated team of professionals committed to helping businesses thrive in today's competitive market. With years of experience and a passion for excellence, we deliver tailored solutions to meet your unique needs.
            </p>
            <p className="text-gray-600">
              Our mission is to empower businesses with the tools and knowledge they need to succeed. We believe in building long-lasting relationships with our clients based on trust, integrity, and results.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About