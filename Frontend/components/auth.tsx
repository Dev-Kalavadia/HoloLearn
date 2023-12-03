//  child compoenent for google auth sign in button
import { initializeApp } from 'firebase/app';
import { signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import { getAuth } from "firebase/auth";
import { httpsCallable , Functions} from "firebase/functions";

export default function SignIn() {
    return (
        <section className="relative">
            <div className="max-w-6xl mx-auto px-4 sm:px-6">
                <div className="pt-32 pb-12 md:pt-40 md:pb-20">

                    {/* Page header */}
                    <div className="max-w-3xl mx-auto text-center pb-12 md:pb-20">
                        <h1 className="h1">Welcome back. We exist to make learning easier.</h1>
                    </div>

                    {/* Form */}
                    <div className="max-w-sm mx-auto">
                        <form>
                            <div className="flex flex-wrap -mx-3">
                                <div className="w-full px-3">
                                    <button className="btn px-0 text-white bg-red-600 hover:bg-red-700 w-full relative flex items-center">
                                        <span className="group-hover:animate-bounce absolute left-0 inset-y-0 flex items-center pl-3">
                                            <svg className="h-6 w-6 text-white group-hover:animate-bounce" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 13l-5 5m0 0l-5-5m5 5V6" />
                                            </svg>
                                        </span>
                                        <span className="pr-2">Sign in with Google</span>
                                    </button>
                                </div>
                            </div>
                        </form>
                    </div>

                </div>
            </div>
        </section>
    )
}
