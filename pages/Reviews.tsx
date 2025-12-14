import React from 'react';
import PageMeta from '../components/ui/PageMeta';
import Hero from '../components/sections/Hero';
import Section from '../components/ui/Section';
import { Star } from 'lucide-react';

const Reviews: React.FC = () => {
  const reviews = [
    {
      author: "Sarah J.",
      location: "Arlington, VA",
      rating: 5,
      date: "2 weeks ago",
      text: "Flood Doctor arrived within 45 minutes of my call. A pipe burst in our basement at 2 AM on a Sunday. They were professional, calm, and handled everything with our insurance. Highly recommended."
    },
    {
      author: "Michael T.",
      location: "Fairfax, VA",
      rating: 5,
      date: "1 month ago",
      text: "We had significant storm damage from the recent hurricane. The team was thorough in the cleanup and drying process. They used thermal cameras to ensure no moisture was left behind behind the drywall."
    },
    {
      author: "Business Owner",
      location: "Tysons, VA",
      rating: 5,
      date: "3 months ago",
      text: "Professional commercial service. They minimized our downtime significantly after a sprinkler malfunction. The documentation provided for our insurance claim was impeccable."
    },
    {
      author: "Emily R.",
      location: "Ashburn, VA",
      rating: 5,
      date: "4 months ago",
      text: "I was panicked when I found mold in the attic. The Flood Doctor team explained the remediation process clearly and safely removed everything. The air quality testing afterward gave us peace of mind."
    }
  ];

  return (
    <main className="flex-grow bg-white">
      <PageMeta title="Customer Reviews" description="Read what homeowners and businesses in Northern Virginia say about Flood Doctor's restoration services." />
      
      <Hero 
        title="Trusted by your neighbors" 
        subtitle="We take pride in our 5-star reputation across Northern Virginia, DC, and Maryland."
      />

      <Section bg="gray" borderTop>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {reviews.map((review, index) => (
                    <div key={index} className="bg-white p-8 rounded-2xl border border-gray-200 shadow-sm hover:shadow-md transition-all">
                        <div className="flex items-center gap-1 text-orange-400 mb-4">
                            {[...Array(review.rating)].map((_, i) => (
                                <Star key={i} size={20} fill="currentColor" />
                            ))}
                        </div>
                        <p className="text-gray-600 leading-relaxed mb-6 text-lg italic">
                            "{review.text}"
                        </p>
                        <div className="flex items-center justify-between">
                            <div>
                                <div className="font-semibold text-gray-900">{review.author}</div>
                                <div className="text-sm text-gray-500">{review.location}</div>
                            </div>
                            <div className="text-sm text-gray-400">{review.date}</div>
                        </div>
                    </div>
                ))}
            </div>
            
            <div className="mt-16 text-center">
                 <h3 className="text-2xl font-semibold text-gray-900 mb-4">See more verified reviews</h3>
                 <div className="flex justify-center gap-6">
                     <span className="text-gray-500 font-medium">Google Reviews (5.0/5.0)</span>
                     <span className="text-gray-300">|</span>
                     <span className="text-gray-500 font-medium">Yelp (4.9/5.0)</span>
                 </div>
            </div>
      </Section>
    </main>
  );
};

export default Reviews;