// import { GoogleTagManager } from "@next/third-parties/google";
import { Inter } from "next/font/google";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Footer from "./components/footer";
import ScrollToTop from "./components/helper/scroll-to-top";
import Navbar from "./components/navbar";
import "./css/card.scss";
import "./css/globals.scss";
const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Portfolio of Akhilesh S - Associate Machine Learning Engineer",
  description:
    "This is the portfolio of Akhilesh S. An Associate Machine Learning Engineer at Unwita Insights, specializing in Retrieval-Augmented Generation (RAG), NLP chatbots, scalable backend systems, and AI model deployment. I’ve optimized AI-powered chatbots, built high-performance APIs handling 1M+ daily requests, and deployed ML models with improved speed and accuracy. Previously, I enhanced medical transcription with Whisper-AI, developed AI-driven disease detection, and built intelligent automation systems in agriculture and market analytics. Passionate about bridging AI with real-world impact, I thrive at the intersection of innovation and scalability.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ToastContainer />
        <main className="min-h-screen relative mx-auto px-6 sm:px-12 lg:max-w-[70rem] xl:max-w-[76rem] 2xl:max-w-[92rem] text-white">
          <Navbar />
          {children}
          <ScrollToTop />
        </main>
        <Footer />
      </body>
      {/* <GoogleTagManager gtmId={process.env.NEXT_PUBLIC_GTM} /> */}
    </html>
  );
}
