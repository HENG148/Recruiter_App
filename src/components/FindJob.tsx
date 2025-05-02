import { LuSearch } from "react-icons/lu";
import { jobCategories, popularKeywords } from "@/data/category";
import Link from "next/link";

const FindJob: React.FC = () => {
  return (
    <section className="grid grid-cols-2 gap-5 mt-4">
      <div className="w-full">
        <p className="font-bold pb-3">Search by keywords</p>
        <div className="flex items-center relative">
          <LuSearch className="absolute left-3 text-[1.3rem] text-[#757575]" />
          <input className="border border-[#757575] hover:border-[#000] outline-[#1a5276] w-full pl-[42px] pr-[20px] py-2 rounded-[10px]"
            type="text"
            placeholder="Job Title, Industry, etc..."
          />
        </div>
        <div className="mt-8">
          <p className="font-bold pb-[21.5px]">Search by Category</p>
          <div className="grid grid-cols-2 ">
            {jobCategories.map((category, idx) => (
              <Link key={idx} href={category.href}>
                <p className="border border-[#dedfe0] h-[60px] grid items-center pl-[1.3rem] hover:bg-[#dedfe0] transition-all duration-100">{category.name}</p>
              </Link>
            ))}
          </div>
        </div>
      </div>

      <div>
        <p className="font-bold mb-3">Popular Keywords</p>
        <div className="grid grid-cols-2 ">
          {popularKeywords.map((keyword, idx) => (
            <Link key={idx} href={keyword.href}>
              <p className="border border-[#dedfe0] h-[60px] grid items-center pl-[1.3rem] hover:bg-[#dedfe0] transition-all duration-100">{keyword.name}</p>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}
export default FindJob;


// import Link from 'next/link';
// import React from 'react'
// import { LuSearch } from "react-icons/lu";

// const FindJob = () => {
//   return (
//     <section className='grid grid-cols-2 gap-5 mt-4'>
//       <div className='w-full'>
//         <p className='font-bold pb-3'>Search by keywords</p>
//         <div className='flex items-center'>
//           <LuSearch className='absolute ml-3 text-[1.3rem] text-[#757575]'/>
//           <input className='border-[1px] border-[#757575] hover:border-[#000] outline-1 outline-[#1a5276] w-full pl-[42px] pr-[20px] py-2 rounded-[10px]'
//             type='text'
//             placeholder='Job Title, Industry, etc...'
//           />
//         </div>
//         <div className='mt-8'>
//           <p className='font-bold pb-[21.5px]'>Search by Category</p>
//           <div className='flex w-full'>
//             <div className='ybv'>
//               <Link href="/job">
//                 <p>Communication</p>
//               </Link>
//               <Link href="/data-science">
//                 <p>Data Science</p>
//               </Link>
//               <Link href="/digital-marketing">
//                 <p>Digital Marketing</p>
//               </Link>
//               <Link href="/hr">
//                 <p>Human Resource</p>
//               </Link>
//               <Link href="/network">
//                 <p>Network Engineering</p>
//               </Link>
//             </div>
//             <div className='ybv'>
//               <Link href="/cyber-security">
//                 <p>Cyber Security</p>
//               </Link>
//               <Link href="/database">
//                 <p>Database</p>
//               </Link>
//               <Link href="/engineering">
//                 <p>Engineering</p>
//               </Link>
//               <Link href="/mobile-application-develop">
//                 <p>Mobile Application Development</p>
//               </Link>
//               <Link href="/others">
//                 <p>Others</p>
//               </Link>
//             </div>
//           </div>
//         </div>
//       </div>

//       <div>
//         <p className='font-bold mb-3'>Popular keywords</p>
//         <div>
//           <div className='flex w-full'>
//             <div className='ybv'>
//               <Link href="/its">
//                 <p>Information Technology Support</p>
//               </Link>
//               <Link href="/php">
//                 <p>PHP</p>
//               </Link>
//               <Link href="/java">
//                 <p>Java</p>
//               </Link>
//               <Link href="/object-c">
//                 <p>Objective-C</p>
//               </Link>
//               <Link href="/video">
//                 <p>Video Editor</p>
//               </Link>
//               <Link href="/ios-dev">
//                 <p>IOS Developer Dev</p>
//               </Link>
//               <Link href="/ai">
//                 <p>Artificial Intelligence AI</p>
//               </Link>
//             </div>
//             <div className='ybv'>
//               <Link href="/user-interface">
//                 <p>User Interface</p>
//               </Link>
//               <Link href="/c-program">
//                 <p>C Program</p>
//               </Link>
//               <Link href="/web">
//                 <p>Web</p>
//               </Link>
//               <Link href="/design">
//                 <p>Design</p>
//               </Link>
//               <Link href="/react-native">
//                 <p>React Native</p>
//               </Link>
//               <Link href="/andriod-dev">
//                 <p>Android Dev</p>
//               </Link>
//               <Link href="/system-engineer">
//                 <p>System Engineer</p>
//               </Link>
//             </div>
//           </div>
//         </div>
//       </div>
//     </section>
//   )
// }

// export default FindJob
