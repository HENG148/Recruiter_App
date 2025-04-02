'use client'

import { Select, SelectTrigger, SelectValue, SelectContent, SelectLabel, SelectItem, SelectGroup } from "@/components/ui/select";
import { useTranslations } from "next-intl";
import { IoLocationSharp } from "react-icons/io5";

const Category = () => {
  const t =  useTranslations('category');
  return (
    <>
      <div className='flex gap-[1.5rem]'>
        <Select>
          <SelectTrigger className="w-[18.4rem] text-[15px] py-5 border-[1px] border-[#adacac] qq">
            <div className="flex items-center gap-3">
              <IoLocationSharp className="text-[17px]" />
              <SelectValue placeholder={t("industry")} />
            </div>
          </SelectTrigger>
          <SelectContent>
            <SelectGroup className="max-h-screen overflow-y-scroll-[#000]">
              <SelectLabel>Industry Unlimited</SelectLabel>
              <SelectItem value="Banking">Banking & Finance</SelectItem>
              <SelectItem value="E-commerce">E-Commerce</SelectItem>
              <SelectItem value="funding">Funding & Finance</SelectItem>
              <SelectItem value="health-person">Health/Person Care</SelectItem>
              <SelectItem value="Hotel">Hotel/Hospitality</SelectItem>
              <SelectItem value="Information">Information Technology</SelectItem>
              <SelectItem value="Manufacturing">Manufacturing</SelectItem>
              <SelectItem value="others">Others</SelectItem>
              <SelectItem value="recruit">Recruiting Services</SelectItem>
              <SelectItem value="smart-ticketing">Smart Ticketing Solution</SelectItem>
              <SelectItem value="software-company">Software Company</SelectItem>
              <SelectItem value="tech-solution">Tech-Solution</SelectItem>
            </SelectGroup>
          </SelectContent>
        </Select>

        <Select>
          <SelectTrigger className="w-[18.4rem] text-[15px] py-5 border-[1px] border-[#adacac] qq">
            <SelectValue placeholder="Cateogry Unlimited" />
          </SelectTrigger>
          <SelectContent>
            <SelectGroup className="max-h-screen overflow-y-scroll-[#000]">
              <SelectLabel>Category Unlimited</SelectLabel>
              <SelectItem value="ai">Artificial Intelligence</SelectItem>
              <SelectItem value="communication">Communication</SelectItem>
              <SelectItem value="data-science">Data Science</SelectItem>
              <SelectItem value="database">Database</SelectItem>
              <SelectItem value="design">Design</SelectItem>
              <SelectItem value="engineering">Engineering</SelectItem>
              <SelectItem value="human-resource">Human Resource</SelectItem>
              <SelectItem value="mobile-app">Mobile Application Development</SelectItem>
              <SelectItem value="network-eng">Network Engineering</SelectItem>
              <SelectItem value="other">Other</SelectItem>
              <SelectItem value="project-management">Project Management</SelectItem>
              <SelectItem value="quality-assurance">Quality Assurance</SelectItem>
              <SelectItem value="sale-consultant">Sale Consultant</SelectItem>
              <SelectItem value="software-development">Software Developmet</SelectItem>
              <SelectItem value="system-development">System Development</SelectItem>
              <SelectItem value="web-development">Web Development</SelectItem>
              <SelectItem value="web">Web3</SelectItem>
            </SelectGroup>
          </SelectContent>
        </Select>

        <Select>
          <SelectTrigger className="w-[18.4rem] text-[15px] py-5 border-[1px] border-[#adacac] qq">
            <SelectValue placeholder="Type Unlimited" />
          </SelectTrigger>
          <SelectContent>
            <SelectGroup className="max-h-screen overflow-y-scroll-[#000]">
              <SelectLabel>Types Unlimited</SelectLabel>
              <SelectItem value="full-time">Full Time</SelectItem>
              <SelectItem value="part-time">Part Time</SelectItem>
            </SelectGroup>
          </SelectContent>
        </Select>

        <Select>
          <SelectTrigger className="w-[18.4rem] text-[15px] py-5 border-[1px] border-[#adacac] qq">
            <div className="flex items-center gap-3">
              <IoLocationSharp className="text-[17px]" />
              <SelectValue placeholder="Location Unlimited" />
            </div>
          </SelectTrigger>
          <SelectContent>
            <SelectGroup className="max-h-screen overflow-y-scroll-[#000]">
              <SelectLabel>Location Unlimited</SelectLabel>
              <SelectItem value="Banking">Phnom Penh</SelectItem>
              <SelectItem value="kps">Preah Sihanouk</SelectItem>
            </SelectGroup>
          </SelectContent>
        </Select>
      </div>
    </>
  )
}

export default Category
