import React from 'react'
import { Briefcase, TrendingUp, Users } from 'lucide-react'

const Services = () => {
  const services = [
    { icon: <Briefcase className="h-12 w-12 text-blue-600 mb-4" />, title: 'Consulting', description: 'Expert advice to optimize your business processes' },
    { icon: <TrendingUp className="h-12 w-12 text-blue-600 mb-4" />, title: 'Marketing', description: 'Strategies to boost your brand and reach more customers' },
    { icon: <Users className="h-12 w-12 text-blue-600 mb-4" />, title: 'HR Solutions', description: 'Comprehensive human resources management services' },
  ]

  return (
    <section id="services" className="py-20 bg-gray-100">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">Our Services</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-md text-center">
              {service.icon}
              <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
              <p className="text-gray-600">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Services