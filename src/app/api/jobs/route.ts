import { NextResponse } from "next/server";

const jobList = [
  { id: 1, title: "Software Developer", category: "Internship", salary: "$2500 - $3500", location: "Chomkar Morn" },
  { id: 2, title: "Full Stack Developer", category: "Junior Level", salary: "$2500 - $3500", location: "Sen Sok" },
  { id: 3, title: "Web Developer", category: "Medium Level", salary: "$2500 - $3500", location: "Chbar Orm Pov" },
  { id: 4, title: "Front-end Developer", category: "Internship", salary: "$2500 - $3500", location: "Toul Tom Pong" },
];

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const category = searchParams.get('category');
  const filteredJobs = !category || "All"
    ? jobList
    : jobList.filter((job) => job.category === category);
  
  return NextResponse.json(filteredJobs);
}