// import Navbar from "../components/Navbar";
// import Footer from "../components/Footer";
// import about from "../assets/zero.jpg"

// export default function Contact() {
//   return (
//     <div className="bg-gray-50 text-white min-h-screen">
//       <Navbar />

//       <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10 p-6 py-16">

//         <div>
//           <h2 className="text-3xl font-bold text-purple-700 ">Get in Touch</h2>
//           <p className="text-gray-700 mt-2">
//             For bulk orders, dealership, or distribution inquiries.
//           </p>

//           <form className="mt-6 space-y-4 max-w-md">
//             <input className="w-full text-gray-800 p-3 rounded" placeholder="Your Name" />
//             <input className="w-full text-gray-800 p-3 rounded" placeholder="Email" />
//             <textarea className="w-full text-gray-800 p-3 rounded" rows="4" placeholder="Message" />
//             <button className="bg-white text-purple-700 px-6 py-3 rounded font-semibold">
//               Send Enquiry
//             </button>
//           </form>
//         </div>

//         <div className="text-center md:text-right">
//           <img src={about} className="w-48 mx-auto md:ml-auto rounded-lg shadow" />
//           <p className="mt-4">mustexhealthcare@gmail.com</p>
//           <p>+91 98765 43210</p>
//         </div>

//       </div>

//       <Footer />
//     </div>
//   );
// }




// import Navbar from "../components/Navbar";
// import Footer from "../components/Footer";
// import { motion } from "framer-motion";
// import { Mail, Phone, User, MessageCircle } from "lucide-react";
// import about from "../assets/zero.jpg";

// export default function Contact() {
//   return (
//     <div className="min-h-screen bg-gradient-to-br from-white via-purple-50/40 to-pink-50/40">
//       <Navbar />

//       <section className="relative py-12 overflow-hidden">

//         {/* Background Glows */}
//         <div className="absolute top-0 left-0 w-72 h-72 bg-purple-300/30 blur-3xl rounded-full"></div>
//         <div className="absolute bottom-0 right-0 w-72 h-72 bg-pink-300/30 blur-[100px] rounded-full"></div>

//         <div className="relative max-w-6xl mx-auto grid md:grid-cols-2 gap-12 px-6 items-center">

//           {/* LEFT SIDE - FORM */}
//           <motion.div
//             initial={{ opacity: 0, x: -30 }}
//             whileInView={{ opacity: 1, x: 0 }}
//             transition={{ duration: 0.6 }}
//             viewport={{ once: true }}
//             className="bg-white/80 backdrop-blur-md rounded-2xl shadow-xl border border-white/60 p-10"
//           >
//             <h2 className="text-4xl font-extrabold text-gray-900">
//               Get in Touch
//             </h2>
//             <p className="text-gray-600 mt-2">
//               For bulk orders, dealership or distribution inquiries — we’re here to help.
//             </p>

//             <form className="mt-8 space-y-5">

//               {/* NAME FIELD */}
//               <div className="relative">
//                 <User className="absolute left-4 top-3.5 text-purple-500" size={20} />
//                 <input
//                   className="w-full bg-white/70 border border-purple-100 text-gray-800 pl-12 pr-4 py-3 rounded-lg shadow-sm focus:ring-2 focus:ring-purple-400 focus:outline-none transition"
//                   placeholder="Your Name"
//                 />
//               </div>

//               {/* EMAIL FIELD */}
//               <div className="relative">
//                 <Mail className="absolute left-4 top-3.5 text-purple-500" size={20} />
//                 <input
//                   className="w-full bg-white/70 border border-purple-100 text-gray-800 pl-12 pr-4 py-3 rounded-lg shadow-sm focus:ring-2 focus:ring-purple-400 focus:outline-none transition"
//                   placeholder="Email"
//                 />
//               </div>

//               {/* MESSAGE FIELD */}
//               <div className="relative">
//                 <MessageCircle className="absolute left-4 top-3.5 text-purple-500" size={20} />
//                 <textarea
//                   rows="4"
//                   className="w-full bg-white/70 border border-purple-100 text-gray-800 pl-12 pr-4 py-3 rounded-lg shadow-sm focus:ring-2 focus:ring-purple-400 focus:outline-none transition"
//                   placeholder="Message"
//                 ></textarea>
//               </div>

//               {/* BUTTON */}
//               <button
//                 className="w-full bg-gradient-to-r from-purple-600 to-pink-500 text-white font-semibold py-3 rounded-lg shadow-md hover:shadow-xl hover:opacity-90 transition"
//               >
//                 Send Enquiry
//               </button>
//             </form>
//           </motion.div>

//           {/* RIGHT SIDE - IMAGE + INFO */}
//           <motion.div
//             initial={{ opacity: 0, x: 30 }}
//             whileInView={{ opacity: 1, x: 0 }}
//             transition={{ duration: 0.6 }}
//             viewport={{ once: true }}
//             className="text-center md:text-left"
//           >
//             <div className="relative inline-block">
//               {/* Glow behind image */}
//               <div className="absolute inset-0 bg-purple-400/20 blur-2xl rounded-3xl"></div>

//               <img
//                 src={about}
//                 className="relative w-64 mx-auto rounded-2xl shadow-2xl border border-white"
//               />
//             </div>

//             <div className="mt-8 space-y-2 text-gray-700 text-lg">
//               <p className="font-semibold">mustexhealthcare@gmail.com</p>
//               <p className="font-semibold">+91 98765 43210</p>
//             </div>

//             <div className="mt-6">
//               <a
//                 href="mailto:mustexhealthcare@gmail.com"
//                 className="text-purple-600 underline hover:text-purple-800"
//               >
//                 Send Email →
//               </a>
//             </div>
//           </motion.div>

//         </div>
//       </section>

//       <Footer />
//     </div>
//   );
// }



import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { motion } from "framer-motion";
import { Mail, Phone, User, MessageCircle, MapPin } from "lucide-react";
import about from "../assets/zero.jpg";

export default function Contact() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-white via-purple-50/40 to-pink-50/40">
      <Navbar />

      <section className="relative py-10 overflow-hidden">

        {/* Background Glows */}
        <div className="absolute top-0 left-0 w-72 h-72 bg-purple-300/30 blur-3xl rounded-full"></div>
        <div className="absolute bottom-0 right-0 w-72 h-72 bg-pink-300/30 blur-[110px] rounded-full"></div>

        <div className="relative max-w-6xl mx-auto grid md:grid-cols-2 gap-12 px-6 items-start">

          {/* LEFT SIDE - FORM */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="bg-white/80 backdrop-blur-md rounded-2xl shadow-xl border border-white/60 p-10"
          >
            <h2 className="text-4xl font-extrabold text-gray-900">
              Get in Touch
            </h2>
            <p className="text-gray-600 mt-2">
              For bulk orders, dealership or distribution inquiries — we’re here to help.
            </p>

            <form className="mt-8 space-y-9">

              {/* NAME */}
              <div className="relative">
                <User className="absolute left-4 top-3.5 text-purple-500" size={20} />
                <input
                  className="w-full bg-white/70 border border-purple-100 text-gray-800 pl-12 pr-4 py-3 rounded-lg shadow-sm focus:ring-2 focus:ring-purple-400 focus:outline-none transition"
                  placeholder="Your Name"
                />
              </div>

              {/* EMAIL */}
              <div className="relative">
                <Mail className="absolute left-4 top-3.5 text-purple-500" size={20} />
                <input
                  className="w-full bg-white/70 border border-purple-100 text-gray-800 pl-12 pr-4 py-3 rounded-lg shadow-sm focus:ring-2 focus:ring-purple-400 focus:outline-none transition"
                  placeholder="Email"
                />
              </div>

              {/* MESSAGE */}
              <div className="relative">
                <MessageCircle className="absolute left-4 top-3.5 text-purple-500" size={20} />
                <textarea
                  rows="4"
                  className="w-full bg-white/70 border border-purple-100 text-gray-800 pl-12 pr-4 py-3 rounded-lg shadow-sm focus:ring-2 focus:ring-purple-400 focus:outline-none transition"
                  placeholder="Message"
                ></textarea>
              </div>

              {/* SEND BUTTON */}
              <button
                className="w-full bg-gradient-to-r from-purple-600 to-pink-500 text-white font-semibold py-4 rounded-lg shadow-md hover:shadow-xl hover:opacity-90 transition"
              >
                Send Enquiry
              </button>
            </form>
          </motion.div>

          {/* RIGHT SIDE - IMAGE + INFO */}
       {/* RIGHT SIDE - IMAGE + INFO */}
<motion.div
  initial={{ opacity: 0, x: 30 }}
  whileInView={{ opacity: 1, x: 0 }}
  transition={{ duration: 0.6 }}
  viewport={{ once: true }}
  className="w-full flex flex-col gap-8"
>
  {/* IMAGE BLOCK */}
  <div className="relative w-full">
    {/* Soft Glow */}
    <div className="absolute inset-0 bg-purple-300/20 blur-2xl rounded-3xl"></div>

    <img
      src={about}
      className="relative w-full h-64 md:h-72 object-fit rounded-2xl shadow-2xl border border-white"
      alt="Contact Visual"
    />
  </div>

  {/* CONTACT CARD */}
  <div className="bg-white/80 backdrop-blur-md rounded-2xl shadow-xl border border-white/60 p-8 w-full">
    {/* Address */}
    <div className="flex items-start gap-4 mb-6">
      <MapPin size={28} className="text-purple-600 mt-1" />
      <p className="text-gray-700 leading-relaxed text-lg">
        <span className="font-bold text-gray-900 text-xl">MusTex Healthcare</span><br />
        KHASRA No. 9G-2, KHAJURI-KHURD,<br />
        NEW BYPASS SQUARE, Raisen Road,<br />
        BHOPAL - 462022
      </p>
    </div>

    {/* Phone */}
    <div className="flex items-center gap-4 mb-5">
      <Phone size={26} className="text-purple-600" />
      <p className="text-gray-800 font-semibold text-lg">
        Helpline: +91 9753552090
      </p>
    </div>

    {/* Email */}
    <div className="flex items-center gap-4">
      <Mail size={26} className="text-purple-600" />
      <p className="text-gray-800 font-semibold text-lg">
        mustexhealthcare@gmail.com
      </p>
    </div>
  </div>

  {/* EMAIL LINK */}
  <div className="text-left">
    <a
      href="mailto:mustexhealthcare@gmail.com"
      className="text-purple-600 text-lg underline hover:text-purple-800 transition"
    >
      Send Email →
    </a>
  </div>
</motion.div>

        </div>
      </section>

      <Footer />
    </div>
  );
}
