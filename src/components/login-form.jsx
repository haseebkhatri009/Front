// 'use client';
// import { useState } from 'react';

// const LoginForm = () => {
//   const [credentials, setCredentials] = useState({
//     email: '',
//     password: '',
//   });

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setCredentials((prev) => ({ ...prev, [name]: value }));
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     // Handle login logic here
//     console.log('Login submitted:', credentials);
//   };

//   return (
//     <section className="min-h-screen bg-gray-50 flex items-center justify-center">
//       <div className="w-full max-w-md bg-white rounded-2xl shadow-lg p-8 space-y-6">
//         <h2 className="text-3xl font-bold text-gray-800 text-center">Login</h2>
//         <p className="text-sm text-gray-500 text-center">
//           Please enter your credentials to login
//         </p>

//         <form onSubmit={handleSubmit} className="space-y-4">
//           <div className="relative">
//             <input
//               type="email"
//               name="email"
//               value={credentials.email}
//               onChange={handleChange}
//               className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
//               placeholder="Email"
//               required
//             />
//           </div>

//           <div className="relative">
//             <input
//               type="password"
//               name="password"
//               value={credentials.password}
//               onChange={handleChange}
//               className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
//               placeholder="Password"
//               required
//             />
//           </div>

//           <button
//             type="submit"
//             className="w-full bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600 transition duration-300"
//           >
//             Login
//           </button>
//         </form>

//         <div className="text-sm text-gray-600 text-center">
//           Don't have an account?{' '}
//           <a href="/registration" className="text-blue-500 hover:underline">
//             Sign Up
//           </a>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default LoginForm;

// 'use client';
// import { useState } from 'react';
// import { useRouter } from 'next/navigation'; // For navigation after successful login

// const LoginForm = () => {
//   const [credentials, setCredentials] = useState({
//     email: '',
//     password: '',
//   });

//   const [loading, setLoading] = useState(false); // To show loading state
//   const [error, setError] = useState(''); // To handle and display errors
//   const router = useRouter(); // Next.js router for navigation

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setCredentials((prev) => ({ ...prev, [name]: value }));
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     setLoading(true); // Start loading
//     setError(''); // Reset error

//     try {
//       const response = await fetch('http://localhost:5000/auth/login', {
//         method: 'POST',
//         headers: {
//           'Content-Type': 'application/json',
//         },
//         body: JSON.stringify(credentials),
//       });

//       const data = await response.json();

//       if (response.ok) {
//         alert('Login successful!');
//         console.log('Response:', data);

//         // Save user data (optional, if tokens or user info need to be stored)
//         localStorage.setItem('userToken', data.token); // Save token if received

//         // Redirect to dashboard
//         router.push('/');
//       } else {
//         setError(data.message || 'Invalid email or password');
//       }
//     } catch (err) {
//       console.error('Error:', err);
//       setError('Something went wrong. Please try again.');
//     } finally {
//       setLoading(false); // Stop loading
//     }
//   };

//   return (
//     <section className="min-h-screen bg-gray-50 flex items-center justify-center">
//       <div className="w-full max-w-md bg-white rounded-2xl shadow-lg p-8 space-y-6">
//         <h2 className="text-3xl font-bold text-gray-800 text-center">Login</h2>
//         <p className="text-sm text-gray-500 text-center">
//           Please enter your credentials to login
//         </p>

//         <form onSubmit={handleSubmit} className="space-y-4">
//           {error && (
//             <p className="text-red-500 text-sm text-center">{error}</p>
//           )}

//           <div className="relative">
//             <input
//               type="email"
//               name="email"
//               value={credentials.email}
//               onChange={handleChange}
//               className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
//               placeholder="Email"
//               required
//             />
//           </div>

//           <div className="relative">
//             <input
//               type="password"
//               name="password"
//               value={credentials.password}
//               onChange={handleChange}
//               className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
//               placeholder="Password"
//               required
//             />
//           </div>

//           <button
//             type="submit"
//             disabled={loading}
//             className={`w-full py-2 rounded-lg text-white ${
//               loading ? 'bg-blue-400 cursor-not-allowed' : 'bg-blue-500 hover:bg-blue-600'
//             } transition duration-300`}
//           >
//             {loading ? 'Logging in...' : 'Login'}
//           </button>
//         </form>

//         <div className="text-sm text-gray-600 text-center">
//           Don't have an account?{' '}
//           <a href="/registration" className="text-blue-500 hover:underline">
//             Sign Up
//           </a>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default LoginForm;










'use client';
import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation'; // For navigation after successful login

const LoginForm = () => {
  const [credentials, setCredentials] = useState({
    email: '',
    password: '',
  });

  const [loading, setLoading] = useState(false); // To show loading state
  const [error, setError] = useState(''); // To handle and display errors
  const router = useRouter(); // Next.js router for navigation

  useEffect(() => {
    // Check if the user is already logged in
    const token = localStorage.getItem('userToken');
    if (token) {
      // Redirect to the homepage if the user is already logged in
      router.push('/');
    }
  }, [router]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setCredentials((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true); // Start loading
    setError(''); // Reset error

    try {
      const response = await fetch('http://localhost:5000/auth/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(credentials),
      });

      const data = await response.json();

      if (response.ok) {
        alert('Login successful!');
        console.log('Response:', data);

        // Save user data (optional, if tokens or user info need to be stored)
        localStorage.setItem('userToken', data.token); // Save token if received

        // Redirect to the homepage
        router.push('/');
      } else {
        setError(data.message || 'Invalid email or password');
      }
    } catch (err) {
      console.error('Error:', err);
      setError('Something went wrong. Please try again.');
    } finally {
      setLoading(false); // Stop loading
    }
  };

  return (
    <section className="min-h-screen bg-gray-50 flex items-center justify-center">
      <div className="w-full max-w-md bg-white rounded-2xl shadow-lg p-8 space-y-6">
        <h2 className="text-3xl font-bold text-gray-800 text-center">Login</h2>
        <p className="text-sm text-gray-500 text-center">
          Please enter your credentials to login
        </p>

        <form onSubmit={handleSubmit} className="space-y-4">
          {error && (
            <p className="text-red-500 text-sm text-center">{error}</p>
          )}

          <div className="relative">
            <input
              type="email"
              name="email"
              value={credentials.email}
              onChange={handleChange}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
              placeholder="Email"
              required
            />
          </div>

          <div className="relative">
            <input
              type="password"
              name="password"
              value={credentials.password}
              onChange={handleChange}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
              placeholder="Password"
              required
            />
          </div>

          <button
            type="submit"
            disabled={loading}
            className={`w-full py-2 rounded-lg text-white ${
              loading ? 'bg-blue-400 cursor-not-allowed' : 'bg-blue-500 hover:bg-blue-600'
            } transition duration-300`}
          >
            {loading ? 'Logging in...' : 'Login'}
          </button>
        </form>

        <div className="text-sm text-gray-600 text-center">
          Don't have an account?{' '}
          <a href="/registration" className="text-blue-500 hover:underline">
            Sign Up
          </a>
        </div>
      </div>
    </section>
  );
};

export default LoginForm;
