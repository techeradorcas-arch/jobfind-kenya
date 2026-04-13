"use client";

const companies = [
  { id: 1, name: "Safaricom", logo: "S", color: "bg-red-600", jobs: 45, phone: "+254 722 000000" },
  { id: 2, name: "Kenya Airways", logo: "KA", color: "bg-yellow-600", jobs: 28, phone: "+254 20 827000" },
  { id: 3, name: "Kenyatta University", logo: "KU", color: "bg-blue-600", jobs: 15, phone: "+254 20 871000" },
  { id: 4, name: "Equity Bank", logo: "EB", color: "bg-green-600", jobs: 32, phone: "+254 763 100000" },
  { id: 5, name: "Kenya Power", logo: "KP", color: "bg-yellow-700", jobs: 18, phone: "+254 20 3201000" },
  { id: 6, name: "Jumia Kenya", logo: "J", color: "bg-orange-600", jobs: 22, phone: "+254 20 6807000" },
  { id: 7, name: "TechCorp Africa", logo: "TC", color: "bg-purple-600", jobs: 12, phone: "+254 20 3752000" },
  { id: 8, name: "Nestle Kenya", logo: "N", color: "bg-blue-700", jobs: 8, phone: "+254 20 3221000" },
];

const jobs = [
  {
    id: 1,
    title: "Senior Software Engineer",
    company: "Safaricom",
    location: "Nairobi, Kenya",
    type: "Full-time",
    salary: "KSh 150k - 250k",
    posted: "2 days ago",
    tags: ["Java", "Cloud", "Microservices"],
  },
  {
    id: 2,
    title: "Customer Service Manager",
    company: "Kenya Airways",
    location: "Nairobi, Kenya",
    type: "Full-time",
    salary: "KSh 120k - 180k",
    posted: "1 day ago",
    tags: ["Management", "CRM", "Aviation"],
  },
  {
    id: 3,
    title: "Lecturer - Computer Science",
    company: "Kenyatta University",
    location: "Kenyatta, Kenya",
    type: "Full-time",
    salary: "KSh 100k - 150k",
    posted: "3 days ago",
    tags: ["Teaching", "Research", "IT"],
  },
  {
    id: 4,
    title: "Branch Manager",
    company: "Equity Bank",
    location: "Mombasa, Kenya",
    type: "Full-time",
    salary: "KSh 180k - 250k",
    posted: "5 days ago",
    tags: ["Finance", "Banking", "Management"],
  },
  {
    id: 5,
    title: "Electrical Engineer",
    company: "Kenya Power",
    location: "Nairobi, Kenya",
    type: "Full-time",
    salary: "KSh 130k - 200k",
    posted: "1 day ago",
    tags: ["Engineering", "Power", "Technical"],
  },
  {
    id: 6,
    title: "Marketing Specialist",
    company: "Jumia Kenya",
    location: "Nairobi, Kenya",
    type: "Full-time",
    salary: "KSh 80k - 120k",
    posted: "4 days ago",
    tags: ["Marketing", "E-commerce", "Digital"],
  },
  {
    id: 7,
    title: "Full Stack Developer",
    company: "TechCorp Africa",
    location: "Nairobi, Kenya",
    type: "Contract",
    salary: "KSh 100k - 180k",
    posted: "6 days ago",
    tags: ["React", "Node.js", "AWS"],
  },
  {
    id: 8,
    title: "Sales Executive",
    company: "Nestle Kenya",
    location: "Nairobi, Kenya",
    type: "Full-time",
    salary: "KSh 90k - 140k",
    posted: "2 days ago",
    tags: ["Sales", "FMCG", "Marketing"],
  },
  {
    id: 9,
    title: "Data Analyst",
    company: "Safaricom",
    location: "Nairobi, Kenya",
    type: "Full-time",
    salary: "KSh 100k - 160k",
    posted: "3 days ago",
    tags: ["Python", "SQL", "Analytics"],
  },
  {
    id: 10,
    title: "Human Resources Officer",
    company: "Equity Bank",
    location: "Nairobi, Kenya",
    type: "Full-time",
    salary: "KSh 90k - 130k",
    posted: "1 day ago",
    tags: ["HR", "Recruitment", "Training"],
  },
];

const adBanners = [
  { id: 1, name: "AdSpace1", placeholder: "Advertise Here" },
  { id: 2, name: "AdSpace2", placeholder: "Advertise Here" },
];

export default function Home() {
  return (
    <main className="min-h-screen bg-neutral-900">
      <header className="sticky top-0 z-50 bg-neutral-900/95 backdrop-blur border-b border-neutral-800">
        <div className="max-w-6xl mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <h1 className="text-2xl font-bold text-white">
              <span className="text-blue-500">Job</span>Find
            </h1>
            <nav className="hidden md:flex gap-6">
              <a href="#jobs" className="text-neutral-300 hover:text-white transition">Jobs</a>
              <a href="#companies" className="text-neutral-300 hover:text-white transition">Companies</a>
              <button className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg transition">
                Post a Job
              </button>
            </nav>
          </div>
        </div>
      </header>

      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Find Your Dream Job
            </h2>
            <p className="text-xl text-neutral-400">
              Discover opportunities from top companies
            </p>
          </div>

          <div className="flex flex-col md:flex-row gap-4 max-w-3xl mx-auto">
            <input
              type="text"
              placeholder="Search jobs, titles, or keywords..."
              className="flex-1 bg-neutral-800 border border-neutral-700 text-white px-4 py-3 rounded-lg focus:outline-none focus:border-blue-500"
            />
            <input
              type="text"
              placeholder="Location"
              className="md:w-48 bg-neutral-800 border border-neutral-700 text-white px-4 py-3 rounded-lg focus:outline-none focus:border-blue-500"
            />
            <button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg font-semibold transition">
              Search
            </button>
          </div>
        </div>
      </section>

      <section className="py-8 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="bg-neutral-800 rounded-lg p-4 text-center min-h-[90px] flex items-center justify-center">
            <span className="text-neutral-500">Advertisement Banner - 728x90</span>
          </div>
        </div>
      </section>

      <section id="companies" className="py-12 px-4">
        <div className="max-w-6xl mx-auto">
          <h3 className="text-2xl font-bold text-white mb-8">Top Hiring Companies in Kenya</h3>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {companies.map((company) => (
              <div
                key={company.id}
                className="bg-neutral-800 rounded-lg p-6 text-center hover:bg-neutral-750 transition cursor-pointer"
              >
                <div
                  className={`w-14 h-14 ${company.color} rounded-lg flex items-center justify-center text-white font-bold text-xl mx-auto mb-3`}
                >
                  {company.logo}
                </div>
                <h4 className="text-white font-semibold">{company.name}</h4>
                <p className="text-neutral-400 text-sm">{company.jobs} open positions</p>
                <p className="text-blue-400 text-sm mt-1">{company.phone}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-8 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="bg-neutral-800 rounded-lg p-6">
            <h4 className="text-white font-semibold mb-4 text-center">Contact Top Kenyan Companies</h4>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
              {companies.slice(0, 4).map((company) => (
                <div key={company.id} className="bg-neutral-700 rounded-lg p-4 text-center">
                  <p className="text-white font-medium">{company.name}</p>
                  <p className="text-blue-400 font-semibold">{company.phone}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-8 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="bg-neutral-800 rounded-lg p-4 text-center min-h-[250px] flex items-center justify-center">
            <span className="text-neutral-500">Advertisement Banner - 970x250</span>
          </div>
        </div>
      </section>

      <section id="jobs" className="py-12 px-4">
        <div className="max-w-6xl mx-auto">
          <h3 className="text-2xl font-bold text-white mb-8">Recent Job Openings</h3>
          <div className="space-y-4">
            {jobs.map((job) => (
              <div
                key={job.id}
                className="bg-neutral-800 rounded-lg p-6 hover:bg-neutral-750 transition cursor-pointer"
              >
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                  <div className="flex-1">
                    <h4 className="text-xl font-semibold text-white mb-1">{job.title}</h4>
                    <p className="text-neutral-400 mb-2">{job.company} · {job.location}</p>
                    <div className="flex flex-wrap gap-2">
                      {job.tags.map((tag) => (
                        <span
                          key={tag}
                          className="bg-neutral-700 text-neutral-300 px-3 py-1 rounded-full text-sm"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                  <div className="text-right">
                    <p className="text-white font-semibold mb-1">{job.salary}</p>
                    <p className="text-neutral-400 text-sm mb-3">{job.type}</p>
                    <p className="text-neutral-500 text-sm">{job.posted}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-8 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="bg-neutral-800 rounded-lg p-4 text-center min-h-[90px] flex items-center justify-center">
            <span className="text-neutral-500">Advertisement Banner - 728x90</span>
          </div>
        </div>
      </section>

      <footer className="bg-neutral-800 py-12 px-4 mt-12">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            <div>
              <h1 className="text-2xl font-bold text-white">
                <span className="text-blue-500">Job</span>Find
              </h1>
              <p className="text-neutral-400 mt-2">Find your next career move</p>
            </div>
            <div className="flex gap-6">
              <a href="#" className="text-neutral-400 hover:text-white transition">About</a>
              <a href="#" className="text-neutral-400 hover:text-white transition">Privacy</a>
              <a href="#" className="text-neutral-400 hover:text-white transition">Terms</a>
              <a href="#" className="text-neutral-400 hover:text-white transition">Contact</a>
            </div>
          </div>
          <div className="border-t border-neutral-700 mt-8 pt-8 text-center text-neutral-500">
            © 2026 JobFind. All rights reserved.
          </div>
        </div>
      </footer>
    </main>
  );
}