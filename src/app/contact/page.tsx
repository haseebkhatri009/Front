import React from 'react';
import Header from "@/components/header";

function Contact() {
  return (
    <>
    <Header />
    <div className="py-8 px-4 bg-gray-100 text-gray-800">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold mb-6 text-center text-blue-600">Contact Saylani Welfare Trust</h1>
        
        <p className="text-lg leading-relaxed mb-4">
          Saylani Welfare Trust is always open to hearing from you! Whether you have inquiries, feedback, or would like to learn more about our services and programs, feel free to reach out. Heres how you can get in touch with us:
        </p>

        <div className="mb-6">
          <h2 className="text-2xl font-semibold mb-2">Contact Information:</h2>
          <ul className="space-y-2">
            <li className="text-lg">
              <strong>Phone:</strong> +92 21 111 111 111
            </li>
            <li className="text-lg">
              <strong>Email:</strong> info@saylaniwelfare.com
            </li>
            <li className="text-lg">
              <strong>Address:</strong> Saylani Welfare Trust, Karachi, Pakistan
            </li>
          </ul>
        </div>

        <div className="mb-6">
          <h2 className="text-2xl font-semibold mb-2">Connect with Us on Social Media:</h2>
          <ul className="space-y-2">
            <li className="text-lg">
              <strong>Facebook:</strong> 
              <a 
                href="https://www.facebook.com/saylaniwelfare" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="text-blue-500 hover:underline"
              >
                facebook.com/saylaniwelfare
              </a>
            </li>
            <li className="text-lg">
              <strong>Instagram:</strong>
              <a 
                href="https://www.instagram.com/saylaniwelfare" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="text-blue-500 hover:underline"
              >
                instagram.com/saylaniwelfare
              </a>
            </li>
            <li className="text-lg">
              <strong>WhatsApp:</strong>
              <a 
                href="https://wa.me/923411111111" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="text-blue-500 hover:underline"
              >
                Chat on WhatsApp
              </a>
            </li>
          </ul>
        </div>

        <div className="mb-6">
          <h2 className="text-2xl font-semibold mb-2">Visit Our Website:</h2>
          <p className="text-lg">
            To learn more about our initiatives, donate, or get involved, visit our official website: 
            <a 
              href="https://saylaniwelfare.com" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="text-blue-500 hover:underline"
            >
              www.saylaniwelfare.com
            </a>
          </p>
        </div>
      </div>
    </div>
    </>
  );
}

export default Contact;
