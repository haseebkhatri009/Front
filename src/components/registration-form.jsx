// 'use client'

// import { useState } from 'react';

// const RegistrationForm = () => {
//   const [formData, setFormData] = useState({
//     name: '',
//     email: '',
//     cnic: '',
//   });

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData((prev) => ({ ...prev, [name]: value }));
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     // Handle registration logic here
//     console.log('Form submitted:', formData);
//   };

//   return (
//     <section className="py-12">
//       <div className="container mx-auto text-center">
//         <h2 className="text-2xl font-semibold mb-6">User Registration</h2>
        
//         <form onSubmit={handleSubmit} className="space-y-4">
//           <div>
//             <input
//               type="text"
//               name="name"
//               value={formData.name}
//               onChange={handleChange}
//               className="p-2 border border-gray-300 rounded-lg w-full"
//               placeholder="Full Name"
//               required
//             />
//           </div>

//           <div>
//             <input
//               type="email"
//               name="email"
//               value={formData.email}
//               onChange={handleChange}
//               className="p-2 border border-gray-300 rounded-lg w-full"
//               placeholder="Email"
//               required
//             />
//           </div>

//           <div>
//             <input
//               type="text"
//               name="cnic"
//               value={formData.cnic}
//               onChange={handleChange}
//               className="p-2 border border-gray-300 rounded-lg w-full"
//               placeholder="CNIC"
//               required
//             />
//           </div>

//           <div>
//             <button
//               type="submit"
//               className="bg-blue-500 text-white py-2 px-6 rounded-lg hover:bg-blue-600 transition duration-300"
//             >
//               Register
//             </button>
//           </div>
//         </form>
//       </div>
//     </section>
//   );
// };

// export default RegistrationForm;




// 'use client';

// import { useState } from 'react';
// import Link from 'next/link'; // For navigation

// const RegistrationForm = () => {
//   const [formData, setFormData] = useState({
//     name: '',
//     email: '',
//     cnic: '',
//   });

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData((prev) => ({ ...prev, [name]: value }));
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     // Handle registration logic here
//     console.log('Form submitted:', formData);
//   };

//   return (
//     <section className="py-12 bg-gradient-to-r text-white">
//       <div className="container mx-auto flex justify-center">
//         <div className="bg-white text-gray-800 shadow-xl rounded-lg p-8 w-full max-w-md">
//           <h2 className="text-3xl font-bold text-center mb-6">User Registration</h2>
//           <p className="text-center text-gray-600 mb-8">
//             Please fill in the form below to register.
//           </p>

//           <form onSubmit={handleSubmit} className="space-y-6">
//             {/* Full Name */}
//             <div>
//               <input
//                 type="text"
//                 name="name"
//                 value={formData.name}
//                 onChange={handleChange}
//                 className="p-3 border border-gray-300 rounded-lg w-full focus:ring-2 focus:ring-blue-500 focus:outline-none shadow-sm"
//                 placeholder="Full Name"
//                 required
//               />
//             </div>

//             {/* Email */}
//             <div>
//               <input
//                 type="email"
//                 name="email"
//                 value={formData.email}
//                 onChange={handleChange}
//                 className="p-3 border border-gray-300 rounded-lg w-full focus:ring-2 focus:ring-blue-500 focus:outline-none shadow-sm"
//                 placeholder="Email"
//                 required
//               />
//             </div>

//             {/* CNIC */}
//             <div>
//               <input
//                 type="text"
//                 name="cnic"
//                 value={formData.cnic}
//                 onChange={handleChange}
//                 className="p-3 border border-gray-300 rounded-lg w-full focus:ring-2 focus:ring-blue-500 focus:outline-none shadow-sm"
//                 placeholder="CNIC"
//                 required
//               />
//             </div>

//             {/* Submit Button */}
//             <div>
//               <button
//                 type="submit"
//                 className="bg-blue-600 text-white py-3 px-6 rounded-lg w-full font-semibold shadow-lg hover:bg-blue-700 transition duration-300"
//               >
//                 Register
//               </button>
//             </div>
//           </form>

//           {/* Already Have an Account */}
//           <div className="text-center text-sm text-gray-600 mt-6">
//             Already have an account?{' '}
//             <Link href="/login" className="text-blue-500 hover:underline">
//               Login
//             </Link>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default RegistrationForm;








// 'use client';

// import { useState } from 'react';
// import Link from 'next/link';

// const RegistrationForm = () => {
//   const [formData, setFormData] = useState({
//     name: '',
//     email: '',
//     cnic: '',
//     password: '', // Add a password field for the API
//   });

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData((prev) => ({ ...prev, [name]: value }));
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     try {
//       const response = await fetch('http://localhost:5000/auth/signup', {
//         method: 'POST',
//         headers: {
//           'Content-Type': 'application/json',
//         },
//         body: JSON.stringify(formData),
//       });

//       const data = await response.json();

//       if (response.ok) {
//         alert('User registered successfully');
//         console.log('Response:', data);
//       } else {
//         alert(data.message || 'Registration failed');
//       }
//     } catch (error) {
//       console.error('Error:', error);
//       alert('Something went wrong. Please try again.');
//     }
//   };

//   return (
//     <section className="py-12 bg-gradient-to-r text-white">
//       <div className="container mx-auto flex justify-center">
//         <div className="bg-white text-gray-800 shadow-xl rounded-lg p-8 w-full max-w-md">
//           <h2 className="text-3xl font-bold text-center mb-6">User Registration</h2>
//           <p className="text-center text-gray-600 mb-8">
//             Please fill in the form below to register.
//           </p>

//           <form onSubmit={handleSubmit} className="space-y-6">
//             {/* Full Name */}
//             <div>
//               <input
//                 type="text"
//                 name="name"
//                 value={formData.name}
//                 onChange={handleChange}
//                 className="p-3 border border-gray-300 rounded-lg w-full focus:ring-2 focus:ring-blue-500 focus:outline-none shadow-sm"
//                 placeholder="Full Name"
//                 required
//               />
//             </div>

//             {/* Email */}
//             <div>
//               <input
//                 type="email"
//                 name="email"
//                 value={formData.email}
//                 onChange={handleChange}
//                 className="p-3 border border-gray-300 rounded-lg w-full focus:ring-2 focus:ring-blue-500 focus:outline-none shadow-sm"
//                 placeholder="Email"
//                 required
//               />
//             </div>

//             {/* CNIC */}
//             <div>
//               <input
//                 type="text"
//                 name="cnic"
//                 value={formData.cnic}
//                 onChange={handleChange}
//                 className="p-3 border border-gray-300 rounded-lg w-full focus:ring-2 focus:ring-blue-500 focus:outline-none shadow-sm"
//                 placeholder="CNIC"
//                 required
//               />
//             </div>

//             {/* Password */}
//             <div>
//               <input
//                 type="password"
//                 name="password"
//                 value={formData.password}
//                 onChange={handleChange}
//                 className="p-3 border border-gray-300 rounded-lg w-full focus:ring-2 focus:ring-blue-500 focus:outline-none shadow-sm"
//                 placeholder="Password"
//                 required
//               />
//             </div>

//             {/* Submit Button */}
//             <div>
//               <button
//                 type="submit"
//                 className="bg-blue-600 text-white py-3 px-6 rounded-lg w-full font-semibold shadow-lg hover:bg-blue-700 transition duration-300"
//               >
//                 Register
//               </button>
//             </div>
//           </form>

//           {/* Already Have an Account */}
//           <div className="text-center text-sm text-gray-600 mt-6">
//             Already have an account?{' '}
//             <Link href="/login" className="text-blue-500 hover:underline">
//               Login
//             </Link>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default RegistrationForm;




// 'use client';

// import { useState } from 'react';
// import Link from 'next/link';

// const RegistrationForm = () => {
//   const [formData, setFormData] = useState({
//     name: '',
//     email: '',
//     cnic: '',
//     password: '',
//   });

//   const [loading, setLoading] = useState(false); // Add a loading state

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData((prev) => ({ ...prev, [name]: value }));
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     setLoading(true); // Set loading to true when form is submitted

//     try {
//       const response = await fetch('http://localhost:5000/auth/signup', {
//         method: 'POST',
//         headers: {
//           'Content-Type': 'application/json',
//         },
//         body: JSON.stringify(formData),
//       });

//       const data = await response.json();

//       if (response.ok) {
//         alert('User registered successfully');
//         console.log('Response:', data);
//       } else {
//         alert(data.message || 'Registration failed');
//       }
//     } catch (error) {
//       console.error('Error:', error);
//       alert('Something went wrong. Please try again.');
//     } finally {
//       setLoading(false); // Reset loading state
//     }
//   };

//   return (
//     <section className="py-12 bg-gradient-to-r text-white">
//       <div className="container mx-auto flex justify-center">
//         <div className="bg-white text-gray-800 shadow-xl rounded-lg p-8 w-full max-w-md">
//           <h2 className="text-3xl font-bold text-center mb-6">User Registration</h2>
//           <p className="text-center text-gray-600 mb-8">
//             Please fill in the form below to register.
//           </p>

//           <form onSubmit={handleSubmit} className="space-y-6">
//             {/* Full Name */}
//             <div>
//               <input
//                 type="text"
//                 name="name"
//                 value={formData.name}
//                 onChange={handleChange}
//                 className="p-3 border border-gray-300 rounded-lg w-full focus:ring-2 focus:ring-blue-500 focus:outline-none shadow-sm"
//                 placeholder="Full Name"
//                 required
//               />
//             </div>

//             {/* Email */}
//             <div>
//               <input
//                 type="email"
//                 name="email"
//                 value={formData.email}
//                 onChange={handleChange}
//                 className="p-3 border border-gray-300 rounded-lg w-full focus:ring-2 focus:ring-blue-500 focus:outline-none shadow-sm"
//                 placeholder="Email"
//                 required
//               />
//             </div>

//             {/* CNIC */}
//             <div>
//               <input
//                 type="text"
//                 name="cnic"
//                 value={formData.cnic}
//                 onChange={handleChange}
//                 className="p-3 border border-gray-300 rounded-lg w-full focus:ring-2 focus:ring-blue-500 focus:outline-none shadow-sm"
//                 placeholder="CNIC"
//                 required
//               />
//             </div>

//             {/* Password */}
//             <div>
//               <input
//                 type="password"
//                 name="password"
//                 value={formData.password}
//                 onChange={handleChange}
//                 className="p-3 border border-gray-300 rounded-lg w-full focus:ring-2 focus:ring-blue-500 focus:outline-none shadow-sm"
//                 placeholder="Password"
//                 required
//               />
//             </div>

//             {/* Submit Button */}
//             <div>
//               <button
//                 type="submit"
//                 disabled={loading} // Disable button while loading
//                 className={`${
//                   loading ? 'bg-blue-400 cursor-not-allowed' : 'bg-blue-600 hover:bg-blue-700'
//                 } text-white py-3 px-6 rounded-lg w-full font-semibold shadow-lg transition duration-300`}
//               >
//                 {loading ? 'Signing in...' : 'Register'}
//               </button>
//             </div>
//           </form>

//           {/* Already Have an Account */}
//           <div className="text-center text-sm text-gray-600 mt-6">
//             Already have an account?{' '}
//             <Link href="/login" className="text-blue-500 hover:underline">
//               Login
//             </Link>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default RegistrationForm;





'use client';

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';

const RegistrationForm = () => {
  const router = useRouter();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    cnic: '',
    password: '',
  });

  const [loading, setLoading] = useState(false);

  // Simulate user authentication check (replace this with actual logic)
  const [user, setUser] = useState(null);

  useEffect(() => {
    // Replace this with your actual authentication logic
    const isAuthenticated = localStorage.getItem('authToken'); // Example check
    if (isAuthenticated) {
      setUser(true);
      router.push('/'); // Redirect to dashboard or any protected route
    }
  }, [router]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const response = await fetch('https://back-end-haseeb.vercel.app/auth/signup', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (response.ok) {
        alert('User registered successfully');
        console.log('Response:', data);
        router.push('/login'); // Redirect to login page after successful registration
      } else {
        alert(data.message || 'Registration failed');
      }
    } catch (error) {
      console.error('Error:', error);
      alert('Something went wrong. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  if (user) {
    return null; // Prevents rendering of the signup form if user is logged in
  }

  return (
    <section className="py-12 bg-gradient-to-r text-white">
      <div className="container mx-auto flex justify-center">
        <div className="bg-white text-gray-800 shadow-xl rounded-lg p-8 w-full max-w-md">
          <h2 className="text-3xl font-bold text-center mb-6">User Registration</h2>
          <p className="text-center text-gray-600 mb-8">
            Please fill in the form below to register.
          </p>

          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Full Name */}
            <div>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className="p-3 border border-gray-300 rounded-lg w-full focus:ring-2 focus:ring-blue-500 focus:outline-none shadow-sm"
                placeholder="Full Name"
                required
              />
            </div>

            {/* Email */}
            <div>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="p-3 border border-gray-300 rounded-lg w-full focus:ring-2 focus:ring-blue-500 focus:outline-none shadow-sm"
                placeholder="Email"
                required
              />
            </div>

            {/* CNIC */}
            <div>
              <input
                type="text"
                name="cnic"
                value={formData.cnic}
                onChange={handleChange}
                className="p-3 border border-gray-300 rounded-lg w-full focus:ring-2 focus:ring-blue-500 focus:outline-none shadow-sm"
                placeholder="CNIC"
                required
              />
            </div>

            {/* Password */}
            <div>
              <input
                type="password"
                name="password"
                value={formData.password}
                onChange={handleChange}
                className="p-3 border border-gray-300 rounded-lg w-full focus:ring-2 focus:ring-blue-500 focus:outline-none shadow-sm"
                placeholder="Password"
                required
              />
            </div>

            {/* Submit Button */}
            <div>
              <button
                type="submit"
                disabled={loading}
                className={`${
                  loading ? 'bg-blue-400 cursor-not-allowed' : 'bg-blue-600 hover:bg-blue-700'
                } text-white py-3 px-6 rounded-lg w-full font-semibold shadow-lg transition duration-300`}
              >
                {loading ? 'Signing in...' : 'Register'}
              </button>
            </div>
          </form>

          {/* Already Have an Account */}
          <div className="text-center text-sm text-gray-600 mt-6">
            Already have an account?{' '}
            <Link href="/login" className="text-blue-500 hover:underline">
              Login
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default RegistrationForm;

