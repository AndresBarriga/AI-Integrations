import React from "react";
import { RiAiGenerate } from 'react-icons/ri';
import { motion } from "framer-motion";
import ai from "../Images/AI Text Generation.png"

function Home(){
    return (
        <div className='bg-hsl-240-33-98 mx-auto w-5/6 '>
        <motion.section
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ ease: 'easeInOut', duration: 0.9, delay: 0.2 }}
            className="flex flex-col sm:justify-between items-center sm:flex-row mt-12 md:mt-2 "
        >
            <div className="w-full mx-[15px] md:w-1/3 md:mx-[20px] text-left ">
                <motion.h1
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{
                        ease: 'easeInOut',
                        duration: 0.9,
                        delay: 0.1,
                    }}
                    className="font-general-semibold text-2xl mx-7 lg:text-3xl xl:text-4xl text-center sm:text-left text-ternary-dark "
                >
                     Unlock the <span className='text-indigo-500 text-general-bold'>power</span> of <span className='text-indigo-500 text-general-bold'> AI Generated </span> content
                </motion.h1>
                <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{
                        ease: 'easeInOut',
                        duration: 0.9,
                        delay: 0.2,
                    }}
                    className="mx-7 font-general-medium mt-4 text-base md:text-lg lg:text-xl xl:text-2xl text-center sm:text-left leading-normal text-gray-500"
                >
                    Enhancing your content<span className='text-indigo-500 text-general-bold'> effortlessly </span> with <span className='text-indigo-500 text-general-bold'>AI. </span> The sinergy of <span className='text-indigo-500 text-bold'>Quality and Efficiency  </span> that <span className='text-indigo-500 text-bold'>users love.</span>
                </motion.p>
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{
                        ease: 'easeInOut',
                        duration: 0.9,
                        delay: 0.3,
                    }}
                    className="flex justify-center sm:block"
                >
                     <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{
                        ease: 'easeInOut',
                        duration: 0.9,
                        delay: 0.2,
                    }}
                    className="mx-7 font-general-medium mt-8 text-base md:text-lg lg:text-xl xl:text-2xl text-center sm:text-left leading-normal text-gray-700"
                >
                    Try the different use cases yourself:
                </motion.p>
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{
                        ease: 'easeInOut',
                        duration: 0.9,
                        delay: 0.3,
                    }}
                    className="flex justify-center sm:block"
                ></motion.div>
                    <a
  href="/CoverLetterWriter"
  className="mx-7 font-general-medium text-sm flex justify-center items-center w-36 pl-5 pr-2 md:pl-0 md:pr-0 sm:w-48 mt-6 mb-6 sm:mb-0 md:text-lg border border-indigo-200 py-2.5 sm:py-3 shadow-lg rounded-lg bg-indigo-50 focus:ring-1 focus:ring-indigo-900 hover:bg-indigo-500 text-gray-500 hover:text-white duration-500"
  aria-label="Cover Letter AI"
>
  
  <span className="text-xs sm:text-lg font-general-medium duration-100">
    Cover Letter
  </span>
  <RiAiGenerate className="sm:ml-2 sm:mr-3 h-5 w-5 sm:w-6 sm:h-6 duration-100"></RiAiGenerate>
  </a>
  <a
  href="/MeetingNotesWriter"
  className="mx-7 font-general-medium text-sm flex justify-center items-center w-36 pl-5 pr-2 md:pl-0 md:pr-0 sm:w-48 mt-6 mb-6 sm:mb-0 md:text-lg border border-indigo-200 py-2.5 sm:py-3 shadow-lg rounded-lg bg-indigo-50 focus:ring-1 focus:ring-indigo-900 hover:bg-indigo-500 text-gray-500 hover:text-white duration-500"
  aria-label="Meeting Notes AI"
>
  
  <span className="text-xs sm:text-lg font-general-medium duration-100">
    Meeting Notes
  </span>
  
  <RiAiGenerate className="	self-end sm:ml-2 sm:mr-3 h-5 w-5 sm:w-6 sm:h-6 duration-100"></RiAiGenerate>
</a>
<a
  href="/code/automatic-comments"
  className="mx-7 font-general-medium text-sm flex justify-center items-center w-36 pl-5 pr-2 md:pl-0 md:pr-0 sm:w-48 mt-6 mb-6 sm:mb-0 md:text-lg border border-indigo-200 py-2.5 sm:py-3 shadow-lg rounded-lg bg-indigo-50 focus:ring-1 focus:ring-indigo-900 hover:bg-indigo-500 text-gray-500 hover:text-white duration-500"
  aria-label="Code Commenting AI"
>
  
  <span className="text-xs ml-4 sm:text-lg font-general-medium duration-100">
    Code Commenting
  </span>
  
  <RiAiGenerate className="	self-end sm:ml-2 sm:mr-3 h-5 w-5 sm:w-6 sm:h-6 duration-100"></RiAiGenerate>
</a>
<a
  href="/code/automatic-tests"
  className="mx-7 font-general-medium text-sm flex justify-center items-center w-36 pl-5 pr-2 md:pl-0 md:pr-0 sm:w-48 mt-6 mb-6 sm:mb-0 md:text-lg border border-indigo-200 py-2.5 sm:py-3 shadow-lg rounded-lg bg-indigo-50 focus:ring-1 focus:ring-indigo-900 hover:bg-indigo-500 text-gray-500 hover:text-white duration-500"
  aria-label="Automatic tests AI"
>
  
  <span className="text-xs ml-4 sm:text-lg font-general-medium duration-100">
    Automatic Test Cases
  </span>
  
  <RiAiGenerate className="	self-end sm:ml-2 sm:mr-3 h-5 w-5 sm:w-6 sm:h-6 duration-100"></RiAiGenerate>
</a>
                </motion.div>
            </div>
            <motion.div
                initial={{ opacity: 0, y: -180 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ ease: 'easeInOut', duration: 0.9, delay: 0.2 }}
                className="w-full sm:w-2/3 text-right float-right mt-8 sm:mt-0"
            >
                <img
                    src={ai}
                    alt="AI text generation"
                />
            </motion.div>
        </motion.section>
        </div>
    );
};

export default Home;