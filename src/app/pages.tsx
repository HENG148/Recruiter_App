import ExpertList from "@/components/ExpertList";
import InfoSlider from "@/components/slider/Slider";
import Link from "next/link";
import { Select, SelectTrigger, SelectValue, SelectContent, SelectLabel, SelectItem } from "@/components/ui/select";
import Category from "@/components/Category";
import JobList from "@/components/JobList";
import Image from "next/image";
import Breadcrumbs from "@/components/Breadcrumbs";

export default function Home() {
  return (
    <>
      <main>
        <div className="w-auto font-accent mx-[19rem] mt-7">
          <div className="justify-items-center grid grid-cols-1 gap-y-6 md:grid-cols-1">
            <div className="">
              <InfoSlider title="News Slider" />
            </div>

            <div className="">
              <Link href='/' className="text-default font-medium text-[19px] border-[1px] border-[#149ac5] px-12 py-3 rounded-[10px] hover:bg-accent-HOVER">
                Create your Professional CV now!
              </Link>
            </div>
          </div>

          <div className="mt-6 pb-5 border-[2px] shadow-[0px_0px_6px_#dedede] border-[#dedede] justify-items-center rounded-[9px] bg-[#fff]">
            <div className="w-[80rem] ml-8 py-4">
              <ExpertList  className=""/>
            </div>

            <div className="w-auto justify-items-center">
              <input type="text"
                placeholder="Search ......"
                className="w-[77.9rem] h-10 text-[17px] px-8 o"
              />
            </div>

            <div className="mt-4">
              <Category />
            </div>
          </div>

          {/* JOB PAGE */}
          <div className="mt-6">
            <div>
              <p className="font-semibold text-2xl">Job</p>
              <JobList />
            </div>
          </div>

          <div className="justify-items-center grid gap-y-1">
            <h3 className="text-[1.8rem] font-bold pb-3">Feature On</h3>
            <div className="poi"></div>
            <p className="pt-3">Astro HR is delighted to be covered by various Media. Our team adheres to six original core values.</p>
            <h4 className=" w-[60%] ml-[1.5rem]">(Teamwork, High Ambition, Strong Confident, Be the only ONE, Working Hard, and PDCA Quality Cycle)</h4>
            <p className="justify-items-center">to ensure we deliver what we promise to ourselves and our customers.</p>
          </div>
        </div>
      </main>
    </>
  )
}