"use client";

import { useState } from "react";

const companies = [
  { id: 1, name: "Safaricom", logo: "S", color: "bg-red-600", jobs: 45, phone: "+254 722 000000", requirements: "Degree in IT/Computer Science, 3+ years experience, Strong analytical skills, Communication skills", location: "Nairobi, Kenya", image: "https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=400&h=300&fit=crop" },
  { id: 2, name: "Kenya Airways", logo: "KA", color: "bg-yellow-600", jobs: 28, phone: "+254 20 827000", requirements: "Degree in Business/Aviation, Customer service experience, Leadership skills, Problem-solving abilities", location: "Nairobi, Kenya", image: "https://images.unsplash.com/photo-1436491865332-7a61a109cc05?w=400&h=300&fit=crop" },
  { id: 3, name: "Kenyatta University", logo: "KU", color: "bg-blue-600", jobs: 15, phone: "+254 20 871000", requirements: "PhD/MSc in relevant field, Teaching experience, Research publications, Academic qualifications", location: "Kenyatta, Kenya", image: "https://images.unsplash.com/photo-1562774053-701939374585?w=400&h=300&fit=crop" },
  { id: 4, name: "Equity Bank", logo: "EB", color: "bg-green-600", jobs: 32, phone: "+254 763 100000", requirements: "Degree in Finance/Banking, CRM experience, Sales skills, Customer relations", location: "Nairobi, Kenya", image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=400&h=300&fit=crop" },
  { id: 5, name: "Kenya Power", logo: "KP", color: "bg-yellow-700", jobs: 18, phone: "+254 20 3201000", requirements: "Degree in Electrical Engineering, Technical certification, Problem-solving skills, Safety awareness", location: "Nairobi, Kenya", image: "https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?w=400&h=300&fit=crop" },
  { id: 6, name: "Jumia Kenya", logo: "J", color: "bg-orange-600", jobs: 22, phone: "+254 20 6807000", requirements: "Degree in Marketing/Business, Digital marketing skills, E-commerce knowledge, Communication skills", location: "Nairobi, Kenya", image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=400&h=300&fit=crop" },
  { id: 7, name: "TechCorp Africa", logo: "TC", color: "bg-purple-600", jobs: 12, phone: "+254 20 3752000", requirements: "Degree in Computer Science, Full-stack development skills, Cloud knowledge, Teamwork", location: "Mombasa, Kenya", image: "https://images.unsplash.com/photo-1497366216548-37526070297c?w=400&h=300&fit=crop" },
  { id: 8, name: "Nestle Kenya", logo: "N", color: "bg-blue-700", jobs: 8, phone: "+254 20 3221000", requirements: "Degree in Sales/Marketing, FMCG experience, Negotiation skills, Driving license", location: "Nairobi, Kenya", image: "https://images.unsplash.com/photo-1554469384-e58fac16e23a?w=400&h=300&fit=crop" },
];

const jobs = [
  { id: 1, title: "Senior Software Engineer", company: "Safaricom", location: "Nairobi, Kenya", type: "Full-time", salary: "KSh 150k - 250k", posted: "2 days ago", tags: ["Java", "Cloud", "Microservices"] },
  { id: 2, title: "Customer Service Manager", company: "Kenya Airways", location: "Nairobi, Kenya", type: "Full-time", salary: "KSh 120k - 180k", posted: "1 day ago", tags: ["Management", "CRM", "Aviation"] },
  { id: 3, title: "Lecturer - Computer Science", company: "Kenyatta University", location: "Kenyatta, Kenya", type: "Full-time", salary: "KSh 100k - 150k", posted: "3 days ago", tags: ["Teaching", "Research", "IT"] },
  { id: 4, title: "Branch Manager", company: "Equity Bank", location: "Mombasa, Kenya", type: "Full-time", salary: "KSh 180k - 250k", posted: "5 days ago", tags: ["Finance", "Banking", "Management"] },
  { id: 5, title: "Electrical Engineer", company: "Kenya Power", location: "Nairobi, Kenya", type: "Full-time", salary: "KSh 130k - 200k", posted: "1 day ago", tags: ["Engineering", "Power", "Technical"] },
  { id: 6, title: "Marketing Specialist", company: "Jumia Kenya", location: "Nairobi, Kenya", type: "Full-time", salary: "KSh 80k - 120k", posted: "4 days ago", tags: ["Marketing", "E-commerce", "Digital"] },
  { id: 7, title: "Full Stack Developer", company: "TechCorp Africa", location: "Mombasa, Kenya", type: "Contract", salary: "KSh 100k - 180k", posted: "6 days ago", tags: ["React", "Node.js", "AWS"] },
  { id: 8, title: "Sales Executive", company: "Nestle Kenya", location: "Nairobi, Kenya", type: "Full-time", salary: "KSh 90k - 140k", posted: "2 days ago", tags: ["Sales", "FMCG", "Marketing"] },
  { id: 9, title: "Data Analyst", company: "Safaricom", location: "Nairobi, Kenya", type: "Full-time", salary: "KSh 100k - 160k", posted: "3 days ago", tags: ["Python", "SQL", "Analytics"] },
  { id: 10, title: "Human Resources Officer", company: "Equity Bank", location: "Nairobi, Kenya", type: "Full-time", salary: "KSh 90k - 130k", posted: "1 day ago", tags: ["HR", "Recruitment", "Training"] },
];

export default function Home() {
  const [selectedCompany, setSelectedCompany] = useState<number | null>(null);
  const [activeTab, setActiveTab] = useState<"jobs" | "companies" | "cv">("jobs");
  const [cvData, setCvData] = useState({
    firstName: "", lastName: "", email: "", phone: "", jobTitle: "", summary: "", skills: "", experience: "", education: ""
  });

  const handleExportCV = () => {
    const cvContent = `${cvData.firstName} ${cvData.lastName}
Email: ${cvData.email} | Phone: ${cvData.phone}
Job Title: ${cvData.jobTitle}

SUMMARY
${cvData.summary}

SKILLS
${cvData.skills}

WORK EXPERIENCE
${cvData.experience}

EDUCATION
${cvData.education}`.trim();
    const blob = new Blob([cvContent], { type: "text/plain" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = `${cvData.firstName || "My"}_CV.txt`;
    a.click();
    URL.revokeObjectURL(url);
  };

  const selectedCompanyData = companies.find(c => c.id === selectedCompany);

  return (
    <main className="min-h-screen bg-neutral-900">
      <header className="sticky top-0 z-50 bg-neutral-900/95 backdrop-blur border-b border-neutral-800">
        <div className="max-w-6xl mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <h1 className="text-2xl font-bold text-white"><span className="text-blue-500">Job</span>Find</h1>
            <nav className="hidden md:flex gap-6">
              <button onClick={() => setActiveTab("jobs")} className={`${activeTab === "jobs" ? "text-blue-500" : "text-neutral-300"} hover:text-white transition`}>Jobs</button>
              <button onClick={() => setActiveTab("companies")} className={`${activeTab === "companies" ? "text-blue-500" : "text-neutral-300"} hover:text-white transition`}>Companies</button>
              <button onClick={() => setActiveTab("cv")} className={`${activeTab === "cv" ? "text-blue-500" : "text-neutral-300"} hover:text-white transition`}>Export CV</button>
              <button className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg transition">Post a Job</button>
            </nav>
          </div>
        </div>
      </header>

      {activeTab === "jobs" && (
        <>
          <section className="py-16 px-4">
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-12">
                <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">Find Your Dream Job</h2>
                <p className="text-xl text-neutral-400">Discover opportunities from top companies in Kenya</p>
              </div>
              <div className="flex flex-col md:flex-row gap-4 max-w-3xl mx-auto">
                <input type="text" placeholder="Search jobs, titles, or keywords..." className="flex-1 bg-neutral-800 border border-neutral-700 text-white px-4 py-3 rounded-lg focus:outline-none focus:border-blue-500" />
                <input type="text" placeholder="Location" className="md:w-48 bg-neutral-800 border border-neutral-700 text-white px-4 py-3 rounded-lg focus:outline-none focus:border-blue-500" />
                <button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg font-semibold transition">Search</button>
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
                  <div key={job.id} className="bg-neutral-800 rounded-lg p-6 hover:bg-neutral-750 transition cursor-pointer">
                    <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                      <div className="flex-1">
                        <h4 className="text-xl font-semibold text-white mb-1">{job.title}</h4>
                        <p className="text-neutral-400 mb-2">{job.company} · {job.location}</p>
                        <div className="flex flex-wrap gap-2">
                          {job.tags.map((tag) => (
                            <span key={tag} className="bg-neutral-700 text-neutral-300 px-3 py-1 rounded-full text-sm">{tag}</span>
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
        </>
      )}

      {activeTab === "companies" && (
        <section id="companies" className="py-12 px-4">
          <div className="max-w-6xl mx-auto">
            <h3 className="text-2xl font-bold text-white mb-8">Top Hiring Companies in Kenya</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {companies.map((company) => (
                <div key={company.id} onClick={() => setSelectedCompany(company.id)} className="bg-neutral-800 rounded-lg overflow-hidden hover:bg-neutral-750 transition cursor-pointer border-2 border-transparent hover:border-blue-500">
                  <div className="h-40 overflow-hidden">
                    <img src={company.image} alt={company.name} className="w-full h-full object-cover" />
                  </div>
                  <div className="p-4">
                    <div className="flex items-center gap-3 mb-2">
                      <div className={`w-10 h-10 ${company.color} rounded-lg flex items-center justify-center text-white font-bold`}>{company.logo}</div>
                      <div>
                        <h4 className="text-white font-semibold">{company.name}</h4>
                        <p className="text-neutral-400 text-sm flex items-center gap-1"><span>📍</span> {company.location}</p>
                      </div>
                    </div>
                    <p className="text-neutral-400 text-sm">{company.jobs} open positions</p>
                    <p className="text-blue-400 text-sm">{company.phone}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {activeTab === "cv" && (
        <section className="py-12 px-4">
          <div className="max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold text-white mb-2 text-center">Export Your CV</h3>
            <p className="text-neutral-400 mb-8 text-center">Create and download your professional CV</p>
            <div className="bg-neutral-800 rounded-lg p-6 space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="text-white text-sm mb-1 block">First Name</label>
                  <input type="text" placeholder="John" value={cvData.firstName} onChange={(e) => setCvData({...cvData, firstName: e.target.value})} className="w-full bg-neutral-700 border border-neutral-600 text-white px-4 py-2 rounded-lg focus:outline-none focus:border-blue-500" />
                </div>
                <div>
                  <label className="text-white text-sm mb-1 block">Last Name</label>
                  <input type="text" placeholder="Doe" value={cvData.lastName} onChange={(e) => setCvData({...cvData, lastName: e.target.value})} className="w-full bg-neutral-700 border border-neutral-600 text-white px-4 py-2 rounded-lg focus:outline-none focus:border-blue-500" />
                </div>
              </div>
              <div>
                <label className="text-white text-sm mb-1 block">Email</label>
                <input type="email" placeholder="john.doe@email.com" value={cvData.email} onChange={(e) => setCvData({...cvData, email: e.target.value})} className="w-full bg-neutral-700 border border-neutral-600 text-white px-4 py-2 rounded-lg focus:outline-none focus:border-blue-500" />
              </div>
              <div>
                <label className="text-white text-sm mb-1 block">Phone</label>
                <input type="tel" placeholder="+254 700 000000" value={cvData.phone} onChange={(e) => setCvData({...cvData, phone: e.target.value})} className="w-full bg-neutral-700 border border-neutral-600 text-white px-4 py-2 rounded-lg focus:outline-none focus:border-blue-500" />
              </div>
              <div>
                <label className="text-white text-sm mb-1 block">Job Title</label>
                <input type="text" placeholder="Software Engineer" value={cvData.jobTitle} onChange={(e) => setCvData({...cvData, jobTitle: e.target.value})} className="w-full bg-neutral-700 border border-neutral-600 text-white px-4 py-2 rounded-lg focus:outline-none focus:border-blue-500" />
              </div>
              <div>
                <label className="text-white text-sm mb-1 block">Summary</label>
                <textarea placeholder="Brief summary of your professional background..." rows={3} value={cvData.summary} onChange={(e) => setCvData({...cvData, summary: e.target.value})} className="w-full bg-neutral-700 border border-neutral-600 text-white px-4 py-2 rounded-lg focus:outline-none focus:border-blue-500" />
              </div>
              <div>
                <label className="text-white text-sm mb-1 block">Skills (comma separated)</label>
                <input type="text" placeholder="JavaScript, React, Node.js, Python" value={cvData.skills} onChange={(e) => setCvData({...cvData, skills: e.target.value})} className="w-full bg-neutral-700 border border-neutral-600 text-white px-4 py-2 rounded-lg focus:outline-none focus:border-blue-500" />
              </div>
              <div>
                <label className="text-white text-sm mb-1 block">Work Experience</label>
                <textarea placeholder="Company Name - Role - Duration" rows={3} value={cvData.experience} onChange={(e) => setCvData({...cvData, experience: e.target.value})} className="w-full bg-neutral-700 border border-neutral-600 text-white px-4 py-2 rounded-lg focus:outline-none focus:border-blue-500" />
              </div>
              <div>
                <label className="text-white text-sm mb-1 block">Education</label>
                <textarea placeholder="University Name - Degree - Year" rows={3} value={cvData.education} onChange={(e) => setCvData({...cvData, education: e.target.value})} className="w-full bg-neutral-700 border border-neutral-600 text-white px-4 py-2 rounded-lg focus:outline-none focus:border-blue-500" />
              </div>
              <button onClick={handleExportCV} className="w-full bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg font-semibold transition">Download CV</button>
            </div>
          </div>
        </section>
      )}

      {selectedCompany && selectedCompanyData && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          <div className="absolute inset-0 bg-black/70" onClick={() => setSelectedCompany(null)} />
          <div className="relative bg-neutral-800 rounded-xl p-6 max-w-lg w-full">
            <button onClick={() => setSelectedCompany(null)} className="absolute top-4 right-4 text-neutral-400 hover:text-white text-xl">✕</button>
            <div className="h-40 overflow-hidden rounded-lg mb-4">
              <img src={selectedCompanyData.image} alt={selectedCompanyData.name} className="w-full h-full object-cover" />
            </div>
            <div className="flex items-center gap-3 mb-4">
              <div className={`w-12 h-12 ${selectedCompanyData.color} rounded-lg flex items-center justify-center text-white font-bold text-xl`}>{selectedCompanyData.logo}</div>
              <div>
                <h3 className="text-2xl font-bold text-white">{selectedCompanyData.name}</h3>
                <p className="text-neutral-400 text-sm flex items-center gap-1"><span>📍</span> {selectedCompanyData.location}</p>
              </div>
            </div>
            <p className="text-blue-400 font-semibold mb-4">{selectedCompanyData.phone}</p>
            <div className="bg-neutral-700 rounded-lg p-4 mb-4">
              <h4 className="text-white font-semibold mb-3">Requirements</h4>
              <p className="text-neutral-300 text-sm">{selectedCompanyData.requirements}</p>
            </div>
            <p className="text-neutral-400 text-sm text-center">{selectedCompanyData.jobs} open positions</p>
          </div>
        </div>
      )}

      <footer className="bg-neutral-800 py-12 px-4 mt-12">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            <div>
              <h1 className="text-2xl font-bold text-white"><span className="text-blue-500">Job</span>Find</h1>
              <p className="text-neutral-400 mt-2">Find your next career move in Kenya</p>
            </div>
            <div className="flex gap-6">
              <a href="#" className="text-neutral-400 hover:text-white transition">About</a>
              <a href="#" className="text-neutral-400 hover:text-white transition">Privacy</a>
              <a href="#" className="text-neutral-400 hover:text-white transition">Terms</a>
              <a href="#" className="text-neutral-400 hover:text-white transition">Contact</a>
            </div>
          </div>
          <div className="border-t border-neutral-700 mt-8 pt-8 text-center text-neutral-500">© 2026 JobFind. All rights reserved.</div>
        </div>
      </footer>
    </main>
  );
}