import React from 'react';

const testimonials = [
  {
    name: 'John Dallas',
    text: "Just received my order and I'm beyond happy! The fit is perfect and the quality is amazing. Will definitely be ordering again soon!",
    image: '/Ellipse 1.png', // Replace with actual image path or URL
  },
  {
    name: 'Anna Karla',
    text: "I'm so impressed with the selection and quality of clothes I received. Everything fits like a dream and the styles are on point. You've gained a loyal customer!",
    image: '/Ellipse 3.png', // Replace with actual image path or URL
  },
  {
    name: 'Kian Armani',
    text: "Absolutely love my new outfits! The styles are exactly what I've been looking for and the shipping was incredibly fast. A+ service!",
    image: '/Ellipse 4.png', // Replace with actual image path or URL
  },
  {
    name: 'Sarah Monir',
    text: "Wow, just wow! The attention to detail in every piece I ordered is remarkable. From the fabric to the fit, everything is flawless. Thank you for making shopping so satisfying.",
    image: '/Ellipse  2.png', // Replace with actual image path or URL
  },
];

const Testimonials = () => {
  return (
    <div className="bg-darkcoffecolor rounded-lg py-8 container mx-auto my-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} className=" border-2 border-solid border-gray-400 p-6 rounded-lg shadow-md">
              <div className="flex items-center">
                <img
                  className="h-10 w-10 rounded-full mr-4"
                  src={testimonial.image}
                  alt={testimonial.name}
                />
                <div>
                  <h5 className="text-lg font-bold">{testimonial.name}</h5>
                </div>
              </div>
              <p className="mt-4 text-gray-600">{testimonial.text}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
