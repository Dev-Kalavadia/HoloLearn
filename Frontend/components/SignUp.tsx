// SignUp.tsx
'use client';
import React, { useState, FormEvent } from 'react';
import axios from 'axios';
import Link from 'next/link';

export default function SignUp() {
    // State hooks for form data
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    // Handle form submission
    const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault(); // Prevent default form submission

        try {
            const response = await axios.post(`${process.env.NEXT_PUBLIC_API_URL}/signup`, {
                firstName: firstName,
                lastName: lastName,
                email: email,
                password: password,
            });

            console.log('Signup success:', response.data);
            // Handle further logic after successful signup, like redirection or token storage
        } catch (error) {
            // Handle errors (e.g., display error message)
            console.error('Signup error:', error);
        }
    };

    return (
        <section className="relative">
            {/* ... other markup ... */}

            <div className="max-w-sm mx-auto">
                <form onSubmit={handleSubmit}>
                    {/* First Name Input */}
                    <div className="flex flex-wrap -mx-3 mb-4">
                        <div className="w-full px-3">
                            <label className="block text-gray-300 text-sm font-medium mb-1" htmlFor="first-name">First Name <span className="text-red-600">*</span></label>
                            <input 
                                id="first-name" 
                                type="text" 
                                className="form-input w-full text-gray-300" 
                                placeholder="Enter your first name" 
                                required 
                                value={firstName}
                                onChange={(e) => setFirstName(e.target.value)} 
                            />
                        </div>
                    </div>
                    {/* ... Last name input fields ... */}
                    <div className="flex flex-wrap -mx-3 mb-4">
                        <div className="w-full px-3">
                            <label className="block text-gray-300 text-sm font-medium mb-1" htmlFor="last-name">Last Name <span className="text-red-600">*</span></label>
                            <input 
                                id="last-name" 
                                type="text" 
                                className="form-input w-full text-gray-300" 
                                placeholder="Enter your last name" 
                                required 
                                value={lastName}
                                onChange={(e) => setLastName(e.target.value)} 
                            />
                        </div>
                    </div>

                    <div className="flex flex-wrap -mx-3 mb-4">
                        <div className="w-full px-3">
                            <label className="block text-gray-300 text-sm font-medium mb-1" htmlFor="email">Email <span className="text-red-600">*</span></label>
                            <input 
                                id="email" 
                                type="email" 
                                className="form-input w-full text-gray-300" 
                                placeholder="Enter your email address" 
                                required 
                                value={email}
                                onChange={(e) => setEmail(e.target.value)} 
                            />
                        </div>
                    </div>

                    {/* ... Password input fields ... */}

                    <div className="flex flex-wrap -mx-3 mb-4">
                        <div className="w-full px-3">
                            <label className="block text-gray-300 text-sm font-medium mb-1" htmlFor="password">Password <span className="text-red-600">*</span></label>
                            <input 
                                id="password" 
                                type="password" 
                                className="form-input w-full text-gray-300" 
                                placeholder="Enter your password" 
                                required 
                                value={password}
                                onChange={(e) => setPassword(e.target.value)} 
                            />
                        </div>
                    </div>
                    {/* ... Terms of service checkbox ... */}
                    <div className="text-sm text-gray-500 text-center">
                        I agree to be contacted by HoloLearn about this offer as per the HoloLearn <Link href="#" className="underline text-gray-400 hover:text-gray-200 hover:no-underline transition duration-150 ease-in-out">Privacy Policy</Link>.
                    </div>

                    {/* ... Submit button ... */}
                    <div className="flex flex-wrap -mx-3 mt-6">
                        <div className="w-full px-3">
                            <button type="submit" className="btn text-white bg-purple-600 hover:bg-purple-700 w-full">Sign up</button>
                        </div>
                    </div>
                </form>
            </div>
                
        </section>
    );
}



// return (
//     <section className="relative">
//       <div className="max-w-6xl mx-auto px-4 sm:px-6">
//         <div className="pt-32 pb-12 md:pt-40 md:pb-20">

//           {/* Page header */}
//           <div className="max-w-3xl mx-auto text-center pb-12 md:pb-20">
//             <h1 className="h1">Welcome. We exist to make learning easier.</h1>
//           </div>

//           {/* Form */}
//           <div className="max-w-sm mx-auto">
//             <form onSubmit={handleSubmit}>
//               <div className="flex flex-wrap -mx-3">
//                 <div className="w-full px-3">
//                   <button className="btn px-0 text-white bg-red-600 hover:bg-red-700 w-full relative flex items-center">
//                     <svg className="w-4 h-4 fill-current text-white opacity-75 shrink-0 mx-4" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg">
//                       <path d="M7.9 7v2.4H12c-.2 1-1.2 3-4 3-2.4 0-4.3-2-4.3-4.4 0-2.4 2-4.4 4.3-4.4 1.4 0 2.3.6 2.8 1.1l1.9-1.8C11.5 1.7 9.9 1 8 1 4.1 1 1 4.1 1 8s3.1 7 7 7c4 0 6.7-2.8 6.7-6.8 0-.5 0-.8-.1-1.2H7.9z" />
//                     </svg>
//                     <span className="h-6 flex items-center border-r border-white border-opacity-25 mr-4" aria-hidden="true"></span>
//                     <span className="flex-auto pl-16 pr-8 -ml-16">Sign up with Google</span>
//                   </button>
//                 </div>
//               </div>
//             </form>
//             <div className="flex items-center my-6">
//               <div className="border-t border-gray-700 border-dotted grow mr-3" aria-hidden="true"></div>
//               <div className="text-gray-400">Or, register with your email</div>
//               <div className="border-t border-gray-700 border-dotted grow ml-3" aria-hidden="true"></div>
//             </div>

//             {/* Form */}

//             <form onSubmit={handleSubmit}>
//               <div className="flex flex-wrap -mx-3">
//                 <div className="w-full px-3">
//                   <label className="block text-gray-300 text-sm font-medium mb-1" htmlFor="full-name">First Name <span className="text-red-600">*</span></label>
//                   <input id="full-name" type="text" className="form-input w-full text-gray-300" placeholder="First and last name" required />
//                 </div>
//               </div>
//               <div className="flex flex-wrap -mx-3">
//                 <div className="w-full px-3">
//                   <label className="block text-gray-300 text-sm font-medium mb-1" htmlFor="company-name">Last Name <span className="text-red-600">*</span></label>
//                   <input id="company-name" type="text" className="form-input w-full text-gray-300" placeholder="Your company or app name" required />
//                 </div>
//               </div>
//               <div className="flex flex-wrap -mx-3">
//                 <div className="w-full px-3">
//                   <label className="block text-gray-300 text-sm font-medium mb-1" htmlFor="email">Email Address<span className="text-red-600">*</span></label>
//                   <input id="email" type="email" className="form-input w-full text-gray-300" placeholder="
                
//                 " required />
//                 </div>
//               </div>
//               <div className="flex flex-wrap -mx-3">
//                 <div className="w-full px-3">
//                   <label className="block text-gray-300 text-sm font-medium mb-1" htmlFor="password">Password <span className="text-red-600">*</span></label>
//                   <input id="password" type="password" className="form-input w-full text-gray-300" placeholder="Password (at least 10 characters)" required />
//                 </div>
//               </div>
//               <div className="text-sm text-gray-500 text-center">
//                 I agree to be contacted by HoloLearn about this offer as per the HoloLearn <Link href="#" className="underline text-gray-400 hover:text-gray-200 hover:no-underline transition duration-150 ease-in-out">Privacy Policy</Link>.
//               </div>
//               <div className="flex flex-wrap -mx-3 mt-6">
//                 <div className="w-full px-3">
//                   <button className="btn text-white bg-purple-600 hover:bg-purple-700 w-full">Sign up</button>
//                 </div>
//               </div>
//             </form>
//             <div className="text-gray-400 text-center mt-6">
//               Already using HoloLearn? <Link href="/signin" className="text-purple-600 hover:text-gray-200 transition duration-150 ease-in-out">Sign in</Link>
//             </div>
//           </div>

//         </div>
//       </div>
//     </section>
//   )
// }