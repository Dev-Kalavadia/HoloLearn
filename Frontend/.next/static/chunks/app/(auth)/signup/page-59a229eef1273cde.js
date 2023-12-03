(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[129],{3773:function(e,s,a){Promise.resolve().then(a.bind(a,594))},3382:function(e,s,a){"use strict";a.d(s,{H:function(){return AuthProvider},a:function(){return useAuth}});var t=a(7437),r=a(2265);let l=(0,r.createContext)(null),AuthProvider=e=>{let{children:s}=e,[a,n]=(0,r.useState)(!1),[i,o]=(0,r.useState)(null);return(0,r.useEffect)(()=>{try{let e=localStorage.getItem("user");e&&"undefined"!==e&&(o(JSON.parse(e)),n(!0))}catch(e){console.error("Error parsing user data from local storage",e),localStorage.removeItem("user")}},[]),(0,t.jsx)(l.Provider,{value:{user:i,setUser:o,isAuthenticated:a,setIsAuthenticated:n,logout:()=>{localStorage.removeItem("user"),localStorage.removeItem("token"),n(!1),o(null)}},children:s})},useAuth=()=>{let e=(0,r.useContext)(l);if(!e)throw Error("useAuth must be used within an AuthProvider");return e}},594:function(e,s,a){"use strict";a.r(s),a.d(s,{default:function(){return SignUp}});var t=a(7437),r=a(1396),l=a.n(r),n=a(2265),i=a(2173),o=a(7292),d=a(9804),c=a(3382);function SignUp(){(0,n.useEffect)(()=>{document.title="Sign Up - HoloLearn"},[]);let[e,s]=(0,n.useState)(""),[a,r]=(0,n.useState)(""),[m,u]=(0,n.useState)(""),[x,h]=(0,n.useState)(""),[p,f]=(0,n.useState)({open:!1,message:"",severity:""}),{setIsAuthenticated:g}=(0,c.a)(),handleSubmit=async s=>{s.preventDefault();try{let s=await i.Z.post("http://localhost:4000/signup",{firstname:e,lastname:a,email:m,password:x});console.log("User signed up:",s.data),localStorage.setItem("token",s.data.token),localStorage.setItem("user",JSON.stringify(s.data.user)),g(!0),f({open:!0,message:"User signed up successfully",severity:"success"}),window.location.href="/signin"}catch(e){if(f({open:!0,message:"User already exists",severity:"error"}),i.Z.isAxiosError(e)){var t,r;console.error("Signup failed:",null===(r=e.response)||void 0===r?void 0:null===(t=r.data)||void 0===t?void 0:t.error)}}},handleCloseSnackbar=()=>{f({...p,open:!1})};return(0,t.jsxs)("section",{className:"relative",children:[(0,t.jsx)("div",{className:"max-w-6xl mx-auto px-4 sm:px-6",children:(0,t.jsxs)("div",{className:"pt-32 pb-12 md:pt-40 md:pb-20",children:[(0,t.jsx)("div",{className:"max-w-3xl mx-auto text-center pb-12 md:pb-20",children:(0,t.jsx)("h1",{className:"h1",children:"Welcome. We exist to make learning easier."})}),(0,t.jsxs)("div",{className:"max-w-sm mx-auto",children:[(0,t.jsx)("form",{onSubmit:handleSubmit,children:(0,t.jsx)("div",{className:"flex flex-wrap -mx-3",children:(0,t.jsx)("div",{className:"w-full px-3",children:(0,t.jsxs)("button",{className:"btn px-0 text-white bg-red-600 hover:bg-red-700 w-full relative flex items-center",children:[(0,t.jsx)("svg",{className:"w-4 h-4 fill-current text-white opacity-75 shrink-0 mx-4",viewBox:"0 0 16 16",xmlns:"http://www.w3.org/2000/svg",children:(0,t.jsx)("path",{d:"M7.9 7v2.4H12c-.2 1-1.2 3-4 3-2.4 0-4.3-2-4.3-4.4 0-2.4 2-4.4 4.3-4.4 1.4 0 2.3.6 2.8 1.1l1.9-1.8C11.5 1.7 9.9 1 8 1 4.1 1 1 4.1 1 8s3.1 7 7 7c4 0 6.7-2.8 6.7-6.8 0-.5 0-.8-.1-1.2H7.9z"})}),(0,t.jsx)("span",{className:"h-6 flex items-center border-r border-white border-opacity-25 mr-4","aria-hidden":"true"}),(0,t.jsx)("span",{className:"flex-auto pl-16 pr-8 -ml-16",children:"Sign up with Google"})]})})})}),(0,t.jsxs)("div",{className:"flex items-center my-6",children:[(0,t.jsx)("div",{className:"border-t border-gray-700 border-dotted grow mr-3","aria-hidden":"true"}),(0,t.jsx)("div",{className:"text-gray-400",children:"Or, register with your email"}),(0,t.jsx)("div",{className:"border-t border-gray-700 border-dotted grow ml-3","aria-hidden":"true"})]}),(0,t.jsxs)("form",{onSubmit:handleSubmit,children:[(0,t.jsx)("div",{className:"flex flex-wrap -mx-3",children:(0,t.jsxs)("div",{className:"w-full px-3 py-2",children:[(0,t.jsxs)("label",{className:"block text-gray-300 text-sm font-medium mb-1",htmlFor:"full-name",children:["First Name ",(0,t.jsx)("span",{className:"text-red-600",children:"*"})]}),(0,t.jsx)("input",{id:"full-name",type:"text",className:"form-input w-full text-gray-300",placeholder:"First name",value:e,onChange:e=>s(e.target.value),required:!0})]})}),(0,t.jsx)("div",{className:"flex flex-wrap -mx-3",children:(0,t.jsxs)("div",{className:"w-full px-3 py-2",children:[(0,t.jsxs)("label",{className:"block text-gray-300 text-sm font-medium mb-1",htmlFor:"company-name",children:["Last Name ",(0,t.jsx)("span",{className:"text-red-600",children:"*"})]}),(0,t.jsx)("input",{id:"company-name",type:"text",className:"form-input w-full text-gray-300",placeholder:"Last name",value:a,onChange:e=>r(e.target.value),required:!0})]})}),(0,t.jsx)("div",{className:"flex flex-wrap -mx-3",children:(0,t.jsxs)("div",{className:"w-full px-3 py-2",children:[(0,t.jsxs)("label",{className:"block text-gray-300 text-sm font-medium mb-1",htmlFor:"email",children:["Email Address",(0,t.jsx)("span",{className:"text-red-600",children:"*"})]}),(0,t.jsx)("input",{id:"email",type:"email",className:"form-input w-full text-gray-300",placeholder:"Your Email address",value:m,onChange:e=>u(e.target.value),required:!0})]})}),(0,t.jsx)("div",{className:"flex flex-wrap -mx-3",children:(0,t.jsxs)("div",{className:"w-full px-3 py-2",children:[(0,t.jsxs)("label",{className:"block text-gray-300 text-sm font-medium mb-1",htmlFor:"password",children:["Password ",(0,t.jsx)("span",{className:"text-red-600",children:"*"})]}),(0,t.jsx)("input",{id:"password",type:"password",className:"form-input w-full text-gray-300",placeholder:"Password (at least 10 characters)",value:x,onChange:e=>h(e.target.value),required:!0})]})}),(0,t.jsxs)("div",{className:"text-sm text-gray-500 text-center py-1",children:["I agree to be contacted by HoloLearn about this offer as per the HoloLearn ",(0,t.jsx)(l(),{href:"#",className:"underline text-gray-400 hover:text-gray-200 hover:no-underline transition duration-150 ease-in-out",children:"Privacy Policy"}),"."]}),(0,t.jsx)("div",{className:"flex flex-wrap -mx-3 mt-6",children:(0,t.jsx)("div",{className:"w-full px-3",children:(0,t.jsx)("button",{className:"btn text-white bg-purple-600 hover:bg-purple-700 w-full",children:"Sign up"})})})]}),(0,t.jsxs)("div",{className:"text-gray-400 text-center mt-6",children:["Already using HoloLearn? ",(0,t.jsx)(l(),{href:"/signin",className:"text-purple-600 hover:text-gray-200 transition duration-150 ease-in-out",children:"Sign in"})]})]})]})}),(0,t.jsx)(o.Z,{open:p.open,autoHideDuration:6e3,onClose:handleCloseSnackbar,anchorOrigin:{vertical:"bottom",horizontal:"center"},children:(0,t.jsx)(d.Z,{onClose:handleCloseSnackbar,severity:p.severity,sx:{width:"100%"},children:p.message})})]})}}},function(e){e.O(0,[816,326,117,564,971,472,744],function(){return e(e.s=3773)}),_N_E=e.O()}]);