"use client";

const companies = [
  { id: 1, name: "TechCorp", logo: "TC", color: "bg-blue-600", jobs: 23 },
  { id: 2, name: "InnovateLabs", logo: "IL", color: "bg-purple-600", jobs: 15 },
  { id: 3, name: "DataDriven", logo: "DD", color: "bg-green-600", jobs: 18 },
  { id: 4, name: "CloudSync", logo: "CS", color: "bg-orange-600", jobs: 12 },
  { id: 5, name: "AIWorks", logo: "AW", color: "bg-pink-600", jobs: 20 },
  { id: 6, name: "ByteForce", logo: "BF", color: "bg-cyan-600", jobs: 9 },
];

const jobs = [
  {
    id: 1,
    title: "Senior Frontend Developer",
    company: "TechCorp",
    location: "San Francisco, CA",
    type: "Full-time",
    salary: "$120k - $160k",
    posted: "2 days ago",
    tags: ["React", "TypeScript", "Next.js"],
  },
  {
    id: 2,
    title: "Backend Engineer",
    company: "InnovateLabs",
    location: "Remote",
    type: "Full-time",
    salary: "$110k - $150k",
    posted: "1 day ago",
    tags: ["Node.js", "Python", "AWS"],
  },
  {
    id: 3,
    title: "Data Scientist",
    company: "DataDriven",
    location: "New York, NY",
    type: "Full-time",
    salary: "$130k - $180k",
    posted: "3 days ago",
    tags: ["Python", "ML", "TensorFlow"],
  },
  {
    id: 4,
    title: "DevOps Engineer",
    company: "CloudSync",
    location: "Austin, TX",
    type: "Full-time",
    salary: "$100k - $140k",
    posted: "5 days ago",
    tags: ["Docker", "Kubernetes", "CI/CD"],
  },
  {
    id: 5,
    title: "Machine Learning Engineer",
    company: "AIWorks",
    location: "Seattle, WA",
    type: "Full-time",
    salary: "$140k - $200k",
    posted: "1 day ago",
    tags: ["PyTorch", "Python", "AI"],
  },
  {
    id: 6,
    title: "Full Stack Developer",
    company: "ByteForce",
    location: "Remote",
    type: "Contract",
    salary: "$80k - $120k",
    posted: "4 days ago",
    tags: ["React", "Node.js", "MongoDB"],
  },
  {
    id: 7,
    title: "iOS Developer",
    company: "TechCorp",
    location: "Los Angeles, CA",
    type: "Full-time",
    salary: "$110k - $145k",
    posted: "6 days ago",
    tags: ["Swift", "iOS", "Objective-C"],
  },
  {
    id: 8,
    title: "Cloud Architect",
    company: "CloudSync",
    location: "Chicago, IL",
    type: "Full-time",
    salary: "$150k - $190k",
    posted: "2 days ago",
    tags: ["AWS", "Azure", "Terraform"],
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
          <h3 className="text-2xl font-bold text-white mb-8">Top Hiring Companies</h3>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
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
              </div>
            ))}
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