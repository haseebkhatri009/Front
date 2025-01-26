import React from 'react';
import Header from "@/components/header";

function About() {
  return (
    <>
    <Header />
    <div className="py-8 px-4 bg-gray-100 text-gray-800">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold mb-6 text-center text-blue-600">About Saylani Welfare Trust</h1>
        <p className="text-lg leading-relaxed mb-4">
          Saylani Welfare International Trust is one of Pakistans largest and most well-known charitable organizations, dedicated to serving humanity and alleviating the hardships of the underprivileged. Established in May 1999 by the visionary Maulana Bashir Farooq Qadri, the trust started as a modest initiative to provide meals to the hungry. Over the years, it has grown into a multi-faceted organization, offering a wide range of services aimed at improving the quality of life for those in need.
        </p>
        <p className="text-lg leading-relaxed mb-4">
          With a mission to eradicate poverty, hunger, and ignorance, Saylani Welfare Trust operates across multiple sectors, including healthcare, education, food distribution, and social welfare. It serves millions of people annually through its extensive network of facilities and initiatives. Saylani is particularly renowned for its Dastarkhwan program, which feeds thousands of individuals daily, ensuring that no one goes to bed hungry. 
        </p>
        <p className="text-lg leading-relaxed mb-4">
          Beyond food, the organization provides free medical treatments through its state-of-the-art hospitals and clinics, scholarships for deserving students, vocational training programs, and financial assistance for struggling families. Their educational programs aim to empower individuals with skills that open doors to better job opportunities, ultimately helping them break the cycle of poverty.
        </p>
        <p className="text-lg leading-relaxed mb-4">
          Saylani Welfare Trust also steps forward during natural disasters, extending relief to victims through food supplies, temporary shelters, and medical aid. The trust’s operations are not confined to Pakistan alone—it has extended its charitable activities to other countries, helping communities in dire need of support.
        </p>
        <p className="text-lg leading-relaxed mb-4">
          Fueled by compassion and driven by the philosophy of serving humanity without discrimination, Saylani Welfare Trust continues to expand its reach and impact. It thrives on the generosity of donors and the tireless dedication of its volunteers. With an unwavering commitment to making a difference, Saylani remains a beacon of hope for millions, providing a lifeline to those who need it most.
        </p>
        <p className="text-lg font-semibold mt-6">
          To learn more or support Saylani Welfare Trust, visit their official website at{' '}
          <a
            href="https://saylaniwelfare.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-500 hover:underline"
          >
            www.saylaniwelfare.com
          </a>.
        </p>
      </div>
    </div>
    </>
  );
}

export default About;
