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

const companyAds = [
  { id: 1, company: "Safaricom", title: "Hiring Now! Join Kenya's Leading Telecom", description: "We are looking for talented professionals. Apply now!", cta: "Apply Now", color: "bg-red-600", phone: "+254 722 000000" },
  { id: 2, company: "Equity Bank", title: "Grow Your Career in Banking", description: "Join Kenya's fastest growing bank. Competitive benefits!", cta: "Apply Now", color: "bg-green-600", phone: "+254 763 100000" },
  { id: 3, company: "Kenya Airways", title: "Sky is Not the Limit - Join Us!", description: "Experience the world. Build your career with us.", cta: "Apply Now", color: "bg-yellow-600", phone: "+254 20 827000" },
  { id: 4, company: "Kenya Power", title: "Powering Kenya's Future", description: "Be part of the energy revolution. Engineering jobs available!", cta: "Apply Now", color: "bg-yellow-700", phone: "+254 20 3201000" },
];

const companyNews = [
  { id: 1, company: "Safaricom", title: "Safaricom Announces 500 New Jobs in 2026", description: "Kenya's leading telecom company plans to hire 500 new employees across various departments including IT, Customer Service, and Engineering.", date: "April 10, 2026", category: "Expansion", image: "https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=400&h=300&fit=crop" },
  { id: 2, company: "Equity Bank", title: "Equity Bank Launches New Digital Banking Platform", description: "Equity Bank has unveiled a new mobile banking app, creating 50 new jobs in technology and customer support.", date: "April 8, 2026", category: "Innovation", image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=400&h=300&fit=crop" },
  { id: 3, company: "Kenya Airways", title: "Kenya Airways Expands Routes to Europe", description: "New flights to Paris and London mean 200 new positions for pilots, cabin crew, and ground staff.", date: "April 5, 2026", category: "Expansion", image: "https://images.unsplash.com/photo-1436491865332-7a61a109cc05?w=400&h=300&fit=crop" },
  { id: 4, company: "Kenya Power", title: "Kenya Power Grid Expansion Project", description: "Government-backed project to connect 500,000 new households creates 300 engineering and technical jobs.", date: "April 3, 2026", category: "Infrastructure", image: "https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?w=400&h=300&fit=crop" },
  { id: 5, company: "Kenyatta University", title: "Kenyatta University Opens New Tech Hub", description: "New innovation center to train 1000 students annually in software development and data science.", date: "April 1, 2026", category: "Education", image: "https://images.unsplash.com/photo-1562774053-701939374585?w=400&h=300&fit=crop" },
  { id: 6, company: "Jumia Kenya", title: "Jumia Kenya Reports Record Growth in 2026", description: "E-commerce giant sees 40% growth, planning to hire 150 more delivery and operations staff.", date: "March 28, 2026", category: "Growth", image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=400&h=300&fit=crop" },
  { id: 7, company: "Nestle Kenya", title: "Nestle Kenya Invests KSh 2B in Local Production", description: "New manufacturing facility in Nairobi to create 200 jobs in production and logistics.", date: "March 25, 2026", category: "Investment", image: "https://images.unsplash.com/photo-1554469384-e58fac16e23a?w=400&h=300&fit=crop" },
  { id: 8, company: "TechCorp Africa", title: "TechCorp Africa Launches AI Division", description: "New artificial intelligence research division in Mombasa seeking 50 machine learning engineers.", date: "March 20, 2026", category: "Innovation", image: "https://images.unsplash.com/photo-1497366216548-37526070297c?w=400&h=300&fit=crop" },
];

const scholarshipVideos = [
  { id: 1, name: "Amina Omar", scholarship: "Kenya Government Scholarship", university: "University of Nairobi", testimonial: "This scholarship changed my life. I'm now pursuing my dream of becoming a doctor.", video: "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?w=600&h=400&fit=crop", year: "2024" },
  { id: 2, name: "John Mwangi", scholarship: "Commonwealth Scholarship", university: "University of Cambridge", testimonial: "From a small village in Kisumu to Cambridge - this scholarship made it possible.", video: "https://images.unsplash.com/photo-1524178232363-1fb2b075b655?w=600&h=400&fit=crop", year: "2023" },
  { id: 3, name: "Sarah Nekesa", scholarship: "USAID Scholarship", university: "MIT", testimonial: "The USAID scholarship gave me wings to fly. Now I'm working on AI research.", video: "https://images.unsplash.com/photo-1569982175971-d92b01cf8694?w=600&h=400&fit=crop", year: "2024" },
  { id: 4, name: "Peter Otieno", scholarship: "EU Scholarship", university: "University of Amsterdam", testimonial: "Studying in Europe was my dream. Thanks to EU Scholarship, I'm here!", video: "https://images.unsplash.com/photo-1554151228-14d9def656e4?w=600&h=400&fit=crop", year: "2023" },
  { id: 5, name: "Grace Atieno", scholarship: "Safaricom Foundation", university: "Kenyatta University", testimonial: "As a first-generation college student, this scholarship was my gateway.", video: "https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=600&h=400&fit=crop", year: "2024" },
  { id: 6, name: "David Kimani", scholarship: "China Government Scholarship", university: "Peking University", testimonial: "Learning Mandarin and studying at Peking University has been incredible.", video: "https://images.unsplash.com/photo-1580392278097-f4d7b0f3d9c6?w=600&h=400&fit=crop", year: "2023" },
];

const scholarships = [
  { id: 1, name: "Kenya Government Scholarship", provider: "Government of Kenya", location: "Kenya", level: "Undergraduate", amount: "KSh 500,000", deadline: "May 30, 2026", field: "All Fields", eligibility: "KCSE Grade B+ and above", description: "Full scholarship for Kenyan students pursuing undergraduate studies in local universities.", image: "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?w=400&h=300&fit=crop" },
  { id: 2, name: "Commonwealth Scholarship", provider: "Commonwealth", location: "UK, Australia, Canada", level: "Masters/PhD", amount: "Full Tuition + Living", deadline: "June 15, 2026", field: "All Fields", eligibility: "First Class Honors", description: "Fully funded scholarship for students from Commonwealth countries to pursue postgraduate studies.", image: "https://images.unsplash.com/photo-1524178232363-1fb2b075b655?w=400&h=300&fit=crop" },
  { id: 3, name: "USAID Scholarship", provider: "USAID", location: "United States", level: "Undergraduate", amount: "$25,000/year", deadline: "April 30, 2026", field: "STEM", eligibility: "Academic Excellence", description: "Scholarship for students pursuing Science, Technology, Engineering, and Mathematics.", image: "https://images.unsplash.com/photo-1569982175971-d92b01cf8694?w=400&h=300&fit=crop" },
  { id: 4, name: "EU Scholarship", provider: "European Union", location: "Europe", level: "Masters", amount: "€25,000", deadline: "July 1, 2026", field: "Any", eligibility: "Bachelor's Degree", description: "Erasmus+ scholarship for Master's students to study in European universities.", image: "https://images.unsplash.com/photo-1554151228-14d9def656e4?w=400&h=300&fit=crop" },
  { id: 5, name: "Safaricom Foundation Scholarship", provider: "Safaricom", location: "Kenya", level: "Undergraduate", amount: "KSh 300,000", deadline: "May 15, 2026", field: "IT & Engineering", eligibility: "Financial Need + Good Grades", description: "Scholarship for bright students from underprivileged backgrounds in IT and Engineering.", image: "https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=400&h=300&fit=crop" },
  { id: 6, name: "JKUAT Merit Scholarship", provider: "JKUAT", location: "Kenya", level: "Undergraduate", amount: "Full Tuition", deadline: "June 1, 2026", field: "Engineering", eligibility: "KCSE A- and above", description: "Merit-based scholarship for top-performing students in Engineering courses.", image: "https://images.unsplash.com/photo-1562774053-701939374585?w=400&h=300&fit=crop" },
  { id: 7, name: "Australia Awards Scholarship", provider: "Australian Government", location: "Australia", level: "Masters/PhD", amount: "Full Scholarship", deadline: "June 30, 2026", field: "Any", eligibility: "Working Experience", description: "Australia Awards scholarships for students from developing countries.", image: "https://images.unsplash.com/photo-1507504031990-8a45cf3b2fad?w=400&h=300&fit=crop" },
  { id: 8, name: "China Government Scholarship", provider: "China Scholarship Council", location: "China", level: "Any", amount: "Full Tuition + Stipend", deadline: "April 30, 2026", field: "Any", eligibility: "Academic Excellence", description: "Bilateral scholarship program for international students to study in China.", image: "https://images.unsplash.com/photo-1580392278097-f4d7b0f3d9c6?w=400&h=300&fit=crop" },
  { id: 9, name: "Equity Group Foundation", provider: "Equity Bank", location: "Kenya", level: "Undergraduate", amount: "KSh 250,000", deadline: "May 20, 2026", field: "Business/Finance", eligibility: "Vulnerable Students", description: "Scholarship for orphaned and vulnerable students in Kenya.", image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=400&h=300&fit=crop" },
  { id: 10, name: "Kenyatta University Sports Scholarship", provider: "Kenyatta University", location: "Kenya", level: "Undergraduate", amount: "Half Tuition", deadline: "May 31, 2026", field: "Any", eligibility: "Sports Excellence", description: "Sports scholarship for talented athletes to pursue their education.", image: "https://images.unsplash.com/photo-1562774053-701939374585?w=400&h=300&fit=crop" },
];

export default function Home() {
  const [selectedCompany, setSelectedCompany] = useState<number | null>(null);
  const [activeTab, setActiveTab] = useState<"jobs" | "companies" | "cv" | "cvbuilder" | "cvwriter" | "news" | "scholarships" | "advertise">("jobs");
  const [cvData, setCvData] = useState({
    firstName: "", lastName: "", email: "", phone: "", jobTitle: "", summary: "", skills: "", experience: "", education: ""
  });
  const [selectedScholarship, setSelectedScholarship] = useState<number | null>(null);
  const [cvBuilderData, setCvBuilderData] = useState({
    fullName: "", email: "", phone: "", address: "", linkedin: "", portfolio: "",
    objective: "", skills: "", workHistory: "", education: "", certifications: "", languages: "", refs: ""
  });
  const [selectedTemplate, setSelectedTemplate] = useState("modern");
  const [cvWriterData, setCvWriterData] = useState({
    fullName: "", email: "", phone: "", address: "", jobTitle: "", summary: "", skills: "", experience: "", education: "", languages: "", refs: ""
  });
  const [aiPrompt, setAiPrompt] = useState("");
  const [isGenerating, setIsGenerating] = useState(false);
  const [adData, setAdData] = useState({ companyName: "", contactPerson: "", email: "", phone: "", message: "" });

  const handleExportCV = () => {
    alert("CV download: KSh 10\n\nDownload your professional CV for just KSh 10 via M-Pesa to +254 726 038 754");
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

  const generateAICV = () => {
    if (!aiPrompt.trim()) return;
    setIsGenerating(true);
    setTimeout(() => {
      const generatedContent = `PROFESSIONAL CV - Generated by AI

Name: ${cvWriterData.fullName || "Your Name"}
Email: ${cvWriterData.email || "email@example.com"}
Phone: ${cvWriterData.phone || "+254 XXX XXX XXX"}
Address: ${cvWriterData.address || "Kenya"}

JOB TITLE
${cvWriterData.jobTitle || aiPrompt}

PROFESSIONAL SUMMARY
${cvWriterData.summary || `Dynamic and results-driven professional with expertise in ${aiPrompt}. Proven track record of delivering exceptional results. Passionate about driving growth and innovation.`}

KEY SKILLS
${cvWriterData.skills || "• Communication Skills\n• Problem Solving\n• Team Leadership\n• Time Management\n• Technical Expertise"}

WORK EXPERIENCE
${cvWriterData.experience || "• Professional role in relevant field\n• Demonstrated success in key responsibilities\n• Leadership and team collaboration\n• Project management experience"}

EDUCATION
${cvWriterData.education || "• Relevant academic qualification\n• Continuous professional development"}

LANGUAGES
${cvWriterData.languages || "• English (Fluent)\n• Swahili (Native)"}

REFERENCES
${cvWriterData.refs || "Available upon request"}

---
Generated by JobFind AI CV Writer
Date: ${new Date().toLocaleDateString()}
      `.trim();
      
      setCvWriterData(prev => ({
        ...prev,
        summary: prev.summary || generatedContent.split("PROFESSIONAL SUMMARY")[1]?.split("KEY SKILLS")[0]?.trim() || "",
        skills: prev.skills || "Communication, Problem Solving, Leadership",
        experience: prev.experience || "Professional experience in relevant field"
      }));
      setIsGenerating(false);
      alert("AI has generated CV suggestions! Review and edit them below, then save your CV.");
    }, 2000);
  };

  const saveCV = () => {
    alert("CV download: KSh 10\n\nDownload your professional CV for just KSh 10 via M-Pesa to +254 726 038 754");
    const cvContent = `CV - ${cvWriterData.fullName || "My CV"}

PERSONAL DETAILS
Name: ${cvWriterData.fullName}
Email: ${cvWriterData.email}
Phone: ${cvWriterData.phone}
Address: ${cvWriterData.address}

JOB TITLE
${cvWriterData.jobTitle}

PROFESSIONAL SUMMARY
${cvWriterData.summary}

KEY SKILLS
${cvWriterData.skills}

WORK EXPERIENCE
${cvWriterData.experience}

EDUCATION
${cvWriterData.education}

LANGUAGES
${cvWriterData.languages}

REFERENCES
${cvWriterData.refs}

---
Generated by JobFind CV Writer
Date: ${new Date().toLocaleDateString()}
    `.trim();
    
    const blob = new Blob([cvContent], { type: "text/plain" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = `${cvWriterData.fullName.replace(/\s+/g, "_") || "My"}_CV.txt`;
    a.click();
    URL.revokeObjectURL(url);
  };

  const saveCVBuilder = () => {
    alert("CV download: KSh 10\n\nDownload your professional CV for just KSh 10 via M-Pesa to +254 726 038 754");
    const cvContent = `
${cvBuilderData.fullName.toUpperCase()}
${cvBuilderData.email} | ${cvBuilderData.phone}
${cvBuilderData.address}
${cvBuilderData.linkedin ? `LinkedIn: ${cvBuilderData.linkedin}` : ""}
${cvBuilderData.portfolio ? `Portfolio: ${cvBuilderData.portfolio}` : ""}

OBJECTIVE
${cvBuilderData.objective}

SKILLS
${cvBuilderData.skills}

WORK EXPERIENCE
${cvBuilderData.workHistory}

EDUCATION
${cvBuilderData.education}

${cvBuilderData.certifications ? `CERTIFICATIONS\n${cvBuilderData.certifications}` : ""}

${cvBuilderData.languages ? `LANGUAGES\n${cvBuilderData.languages}` : ""}

${cvBuilderData.refs ? `REFERENCES\n${cvBuilderData.refs}` : ""}

---
Created with JobFind CV Builder
Date: ${new Date().toLocaleDateString()}
    `.trim();
    
    const blob = new Blob([cvContent], { type: "text/plain" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = `${cvBuilderData.fullName.replace(/\s+/g, "_") || "CV"}_Builder.txt`;
    a.click();
    URL.revokeObjectURL(url);
  };

  const shareCVBuilderToCompany = (companyName: string, companyPhone: string) => {
    alert("Send Application: KSh 100\n\nSend your CV to " + companyName + " for just KSh 100 via M-Pesa to +254 726 038 754\n\nCompany Contact: " + companyPhone);
    const cvContent = `APPLICATION FOR ${companyName.toUpperCase()}

PERSONAL DETAILS
Name: ${cvBuilderData.fullName}
Email: ${cvBuilderData.email}
Phone: ${cvBuilderData.phone}
Address: ${cvBuilderData.address}
LinkedIn: ${cvBuilderData.linkedin}
Portfolio: ${cvBuilderData.portfolio}

OBJECTIVE
${cvBuilderData.objective}

SKILLS
${cvBuilderData.skills}

WORK EXPERIENCE
${cvBuilderData.workHistory}

EDUCATION
${cvBuilderData.education}

CERTIFICATIONS
${cvBuilderData.certifications}

LANGUAGES
${cvBuilderData.languages}

REFERENCES
${cvBuilderData.refs}

---
Apply via JobFind CV Builder
Company Contact: ${companyPhone}
Date: ${new Date().toLocaleDateString()}
    `.trim();
    
    const blob = new Blob([cvContent], { type: "text/plain" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = `Application_${companyName.replace(/\s+/g, "_")}.txt`;
    a.click();
    URL.revokeObjectURL(url);
    alert(`Application submitted to ${companyName}!\nContact: ${companyPhone}`);
  };

  const selectedCompanyData = companies.find(c => c.id === selectedCompany);

  return (
    <main className="min-h-screen bg-neutral-900 pb-20">
      <header className="sticky top-0 z-50 bg-neutral-900/95 backdrop-blur border-b border-neutral-800">
        <div className="max-w-6xl mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 bg-green-600 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-xl">🇰🇪</span>
              </div>
              <div>
                <h1 className="text-2xl font-bold text-white"><span className="text-blue-500">Job</span>Find Kenya</h1>
                <p className="text-green-500 text-xs">Government Verified Portal</p>
              </div>
            </div>
            <nav className="hidden md:flex gap-6">
              <button onClick={() => setActiveTab("jobs")} className={`${activeTab === "jobs" ? "text-blue-500" : "text-neutral-300"} hover:text-white transition`}>Jobs</button>
              <button onClick={() => setActiveTab("news")} className={`${activeTab === "news" ? "text-blue-500" : "text-neutral-300"} hover:text-white transition`}>News</button>
              <button onClick={() => setActiveTab("scholarships")} className={`${activeTab === "scholarships" ? "text-blue-500" : "text-neutral-300"} hover:text-white transition`}>Scholarships</button>
              <button onClick={() => setActiveTab("companies")} className={`${activeTab === "companies" ? "text-blue-500" : "text-neutral-300"} hover:text-white transition`}>Companies</button>
              <button onClick={() => setActiveTab("cvbuilder")} className={`${activeTab === "cvbuilder" ? "text-blue-500" : "text-neutral-300"} hover:text-white transition`}>CV Builder</button>
              <button onClick={() => setActiveTab("cv")} className={`${activeTab === "cv" ? "text-blue-500" : "text-neutral-300"} hover:text-white transition`}>Export CV</button>
              <button onClick={() => setActiveTab("cvwriter")} className={`${activeTab === "cvwriter" ? "text-blue-500" : "text-neutral-300"} hover:text-white transition`}>CV Writer AI</button>
              <button onClick={() => setActiveTab("advertise")} className={`${activeTab === "advertise" ? "text-blue-500" : "text-neutral-300"} hover:text-white transition`}>Advertise</button>
              <button className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg transition">Post a Job</button>
            </nav>
          </div>
        </div>
      </header>

      <div className="bg-green-700 py-2 px-4">
        <div className="max-w-6xl mx-auto flex items-center justify-center gap-4 text-sm">
          <button 
            onClick={() => {
              window.scrollTo({ top: 0, behavior: 'smooth' });
              setActiveTab("jobs");
            }}
            className="bg-white text-green-700 px-3 py-1 rounded font-semibold hover:bg-gray-100 transition flex items-center gap-1"
          >
            <span>↑</span>
          </button>
          <span className="text-white">🇰🇪 Republic of Kenya</span>
          <span className="text-white/60">|</span>
          <span className="text-white">Ministry of Labour and Social Protection</span>
          <span className="text-white/60">|</span>
          <span className="text-white">Verified Employment Portal</span>
        </div>
      </div>

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

              <div className="flex flex-wrap items-center justify-center gap-6 mt-8 text-sm">
                <div className="flex items-center gap-2 text-green-400">
                  <span className="text-xl">✓</span>
                  <span>Government Verified</span>
                </div>
                <div className="flex items-center gap-2 text-green-400">
                  <span className="text-xl">✓</span>
                  <span>Secure & Trusted</span>
                </div>
                <div className="flex items-center gap-2 text-green-400">
                  <span className="text-xl">✓</span>
                  <span>Free for Job Seekers</span>
                </div>
                <div className="flex items-center gap-2 text-green-400">
                  <span className="text-xl">✓</span>
                  <span>10,000+ Jobs Listed</span>
                </div>
              </div>
            </div>
          </section>

          <section className="py-8 px-4">
            <div className="max-w-6xl mx-auto">
              <div className="flex items-center justify-between mb-4">
                <h4 className="text-yellow-500 text-lg font-bold">🎓 Scholarships Available</h4>
                <button onClick={() => setActiveTab("scholarships")} className="text-blue-400 hover:text-blue-300 text-sm">View All →</button>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {scholarships.slice(0, 6).map((scholarship) => (
                  <div key={scholarship.id} className="bg-neutral-800 rounded-lg p-4 hover:bg-neutral-750 transition cursor-pointer border-2 border-transparent hover:border-yellow-500">
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-yellow-400 text-xs font-semibold">{scholarship.provider}</span>
                      <span className="text-neutral-500 text-xs">{scholarship.deadline}</span>
                    </div>
                    <h5 className="text-white font-semibold mb-1">{scholarship.name}</h5>
                    <p className="text-neutral-400 text-sm mb-2">{scholarship.location}</p>
                    <div className="flex items-center justify-between">
                      <span className="text-green-400 font-bold text-sm">{scholarship.amount}</span>
                      <span className="text-blue-400 text-xs">{scholarship.level}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>

          <section className="py-8 px-4">
            <div className="max-w-6xl mx-auto">
              <h4 className="text-neutral-500 text-sm mb-4">Sponsored</h4>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {companyAds.slice(0, 2).map((ad) => (
                  <div key={ad.id} className={`${ad.color} rounded-lg p-6 cursor-pointer hover:opacity-90 transition`}>
                    <p className="text-white/80 text-sm font-medium mb-1">Sponsored Ad</p>
                    <h4 className="text-white text-xl font-bold mb-2">{ad.title}</h4>
                    <p className="text-white/80 text-sm mb-3">{ad.description}</p>
                    <p className="text-white font-semibold">{ad.phone}</p>
                  </div>
                ))}
              </div>
            </div>
          </section>

          <section className="py-8 px-4">
            <div className="max-w-6xl mx-auto">
              <h4 className="text-neutral-500 text-sm mb-4">Featured Companies</h4>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {companyAds.slice(2, 4).map((ad) => (
                  <div key={ad.id} className={`${ad.color} rounded-lg p-6 cursor-pointer hover:opacity-90 transition`}>
                    <p className="text-white/80 text-sm font-medium mb-1">Featured</p>
                    <h4 className="text-white text-xl font-bold mb-2">{ad.title}</h4>
                    <p className="text-white/80 text-sm mb-3">{ad.description}</p>
                    <p className="text-white font-semibold">{ad.phone}</p>
                  </div>
                ))}
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

      {activeTab === "news" && (
        <section className="py-12 px-4">
          <div className="max-w-6xl mx-auto">
            <h3 className="text-2xl font-bold text-white mb-2 text-center">Company News & Progress</h3>
            <p className="text-neutral-400 mb-8 text-center">Latest updates from top Kenyan companies</p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {companyNews.map((news) => (
                <div key={news.id} className="bg-neutral-800 rounded-lg overflow-hidden hover:bg-neutral-750 transition cursor-pointer">
                  <div className="h-40 overflow-hidden">
                    <img src={news.image} alt={news.title} className="w-full h-full object-cover" />
                  </div>
                  <div className="p-4">
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-blue-400 text-sm font-semibold">{news.company}</span>
                      <span className="text-neutral-500 text-xs">{news.date}</span>
                    </div>
                    <span className="bg-green-600 text-white text-xs px-2 py-1 rounded mb-2 inline-block">{news.category}</span>
                    <h4 className="text-white font-semibold mb-2">{news.title}</h4>
                    <p className="text-neutral-400 text-sm">{news.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {activeTab === "scholarships" && (
        <section className="py-12 px-4">
          <div className="max-w-6xl mx-auto">
            <h3 className="text-2xl font-bold text-white mb-2 text-center">Scholarships for Students</h3>
            <p className="text-neutral-400 mb-8 text-center">Find fully funded scholarships to study in Kenya and abroad</p>

            <div className="bg-neutral-800 rounded-xl p-6 mb-12">
              <h4 className="text-xl font-bold text-white mb-4 text-center">🎓 Student Success Stories</h4>
              <p className="text-neutral-400 mb-6 text-center">Watch how scholarship recipients achieved their dreams</p>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {scholarshipVideos.map((video) => (
                  <div key={video.id} className="bg-neutral-700 rounded-lg overflow-hidden hover:bg-neutral-600 transition cursor-pointer">
                    <div className="relative h-40">
                      <img src={video.video} alt={video.name} className="w-full h-full object-cover" />
                      <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
                        <span className="text-4xl">▶️</span>
                      </div>
                    </div>
                    <div className="p-4">
                      <p className="text-white font-semibold">{video.name}</p>
                      <p className="text-green-400 text-sm">{video.scholarship}</p>
                      <p className="text-neutral-400 text-xs mb-2">{video.university} • {video.year}</p>
                      <p className="text-neutral-300 text-sm italic">"{video.testimonial}"</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {scholarships.map((scholarship) => (
                <div 
                  key={scholarship.id} 
                  onClick={() => setSelectedScholarship(scholarship.id)}
                  className="bg-neutral-800 rounded-lg overflow-hidden hover:bg-neutral-750 transition cursor-pointer border-2 border-transparent hover:border-green-500"
                >
                  <div className="h-40 overflow-hidden">
                    <img src={scholarship.image} alt={scholarship.name} className="w-full h-full object-cover" />
                  </div>
                  <div className="p-4">
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-green-400 text-sm font-semibold">{scholarship.provider}</span>
                      <span className="text-neutral-500 text-xs">{scholarship.deadline}</span>
                    </div>
                    <h4 className="text-white font-semibold mb-2">{scholarship.name}</h4>
                    <p className="text-neutral-400 text-sm mb-2">{scholarship.description}</p>
                    <div className="flex flex-wrap gap-2 mb-2">
                      <span className="bg-blue-600 text-white text-xs px-2 py-1 rounded">{scholarship.level}</span>
                      <span className="bg-purple-600 text-white text-xs px-2 py-1 rounded">{scholarship.location}</span>
                    </div>
                    <p className="text-green-400 font-bold">{scholarship.amount}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {selectedScholarship && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          <div className="absolute inset-0 bg-black/70" onClick={() => setSelectedScholarship(null)} />
          <div className="relative bg-neutral-800 rounded-xl p-6 max-w-lg w-full max-h-[90vh] overflow-y-auto">
            <button onClick={() => setSelectedScholarship(null)} className="absolute top-4 right-4 text-neutral-400 hover:text-white text-xl">✕</button>
            {(() => {
              const scholarship = scholarships.find(s => s.id === selectedScholarship);
              return (
                <>
                  <div className="h-40 overflow-hidden rounded-lg mb-4">
                    <img src={scholarship?.image} alt={scholarship?.name} className="w-full h-full object-cover" />
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-2">{scholarship?.name}</h3>
                  <p className="text-green-400 font-semibold mb-4">{scholarship?.provider}</p>
                  
                  <div className="bg-neutral-700 rounded-lg p-4 mb-4">
                    <h4 className="text-white font-semibold mb-3">Scholarship Details</h4>
                    <p className="text-neutral-300 text-sm mb-2"><strong>Location:</strong> {scholarship?.location}</p>
                    <p className="text-neutral-300 text-sm mb-2"><strong>Level:</strong> {scholarship?.level}</p>
                    <p className="text-neutral-300 text-sm mb-2"><strong>Amount:</strong> {scholarship?.amount}</p>
                    <p className="text-neutral-300 text-sm mb-2"><strong>Deadline:</strong> {scholarship?.deadline}</p>
                    <p className="text-neutral-300 text-sm mb-2"><strong>Field:</strong> {scholarship?.field}</p>
                    <p className="text-neutral-300 text-sm"><strong>Eligibility:</strong> {scholarship?.eligibility}</p>
                  </div>
                  
                  <div className="bg-neutral-700 rounded-lg p-4 mb-4">
                    <h4 className="text-white font-semibold mb-2">Description</h4>
                    <p className="text-neutral-300 text-sm">{scholarship?.description}</p>
                  </div>
                  
                  <p className="text-yellow-400 text-sm text-center mb-4">Application Fee: KSh 100 via M-Pesa to +254 726 038 754</p>
                  
                  <div className="flex flex-col gap-3">
                    {(() => {
                      const scholarship = scholarships.find(s => s.id === selectedScholarship);
                      const applicationText = `SCHOLARSHIP APPLICATION
Name: ${cvData.firstName} ${cvData.lastName}
Email: ${cvData.email}
Phone: ${cvData.phone}

Scholarship: ${scholarship?.name}
Provider: ${scholarship?.provider}

SUMMARY
${cvData.summary}

EDUCATION
${cvData.education}

SKILLS
${cvData.skills}

EXPERIENCE
${cvData.experience}

Applied via JobFind Kenya`;
                      return (
                        <>
                          <button onClick={() => {
                            navigator.clipboard.writeText(applicationText);
                            alert("Application copied to clipboard! Paste it in an email to apply.");
                          }} className="w-full bg-green-600 hover:bg-green-700 text-white px-8 py-3 rounded-lg font-semibold transition">
                            Copy Application
                          </button>
                          <button onClick={() => {
                            const subject = encodeURIComponent(`Scholarship Application: ${scholarship?.name}`);
                            const body = encodeURIComponent(applicationText);
                            window.open(`mailto:?subject=${subject}&body=${body}`, '_blank');
                          }} className="w-full bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg font-semibold transition">
                            Apply via Email
                          </button>
                        </>
                      );
                    })()}
                  </div>
                </>
              );
            })()}
          </div>
        </div>
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

      {activeTab === "cvbuilder" && (
        <section className="py-12 px-4">
          <div className="max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold text-white mb-2 text-center">CV Builder</h3>
            <p className="text-neutral-400 mb-8 text-center">Build a professional CV with multiple templates</p>
            
            <div className="flex gap-4 mb-6 justify-center">
              {["modern", "classic", "creative"].map((template) => (
                <button
                  key={template}
                  onClick={() => setSelectedTemplate(template)}
                  className={`px-4 py-2 rounded-lg font-semibold capitalize ${selectedTemplate === template ? "bg-blue-600 text-white" : "bg-neutral-700 text-neutral-300 hover:bg-neutral-600"}`}
                >
                  {template}
                </button>
              ))}
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-neutral-800 rounded-lg p-6 space-y-4">
                <h4 className="text-white font-semibold text-lg">Personal Information</h4>
                <div>
                  <label className="text-neutral-400 text-sm mb-1 block">Full Name</label>
                  <input type="text" placeholder="John Doe" value={cvBuilderData.fullName} onChange={(e) => setCvBuilderData({...cvBuilderData, fullName: e.target.value})} className="w-full bg-neutral-700 border border-neutral-600 text-white px-4 py-2 rounded-lg focus:outline-none focus:border-blue-500" />
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="text-neutral-400 text-sm mb-1 block">Email</label>
                    <input type="email" placeholder="john@email.com" value={cvBuilderData.email} onChange={(e) => setCvBuilderData({...cvBuilderData, email: e.target.value})} className="w-full bg-neutral-700 border border-neutral-600 text-white px-4 py-2 rounded-lg focus:outline-none focus:border-blue-500" />
                  </div>
                  <div>
                    <label className="text-neutral-400 text-sm mb-1 block">Phone</label>
                    <input type="tel" placeholder="+254 700 000000" value={cvBuilderData.phone} onChange={(e) => setCvBuilderData({...cvBuilderData, phone: e.target.value})} className="w-full bg-neutral-700 border border-neutral-600 text-white px-4 py-2 rounded-lg focus:outline-none focus:border-blue-500" />
                  </div>
                </div>
                <div>
                  <label className="text-neutral-400 text-sm mb-1 block">Address</label>
                  <input type="text" placeholder="Nairobi, Kenya" value={cvBuilderData.address} onChange={(e) => setCvBuilderData({...cvBuilderData, address: e.target.value})} className="w-full bg-neutral-700 border border-neutral-600 text-white px-4 py-2 rounded-lg focus:outline-none focus:border-blue-500" />
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="text-neutral-400 text-sm mb-1 block">LinkedIn</label>
                    <input type="text" placeholder="linkedin.com/in/johndoe" value={cvBuilderData.linkedin} onChange={(e) => setCvBuilderData({...cvBuilderData, linkedin: e.target.value})} className="w-full bg-neutral-700 border border-neutral-600 text-white px-4 py-2 rounded-lg focus:outline-none focus:border-blue-500" />
                  </div>
                  <div>
                    <label className="text-neutral-400 text-sm mb-1 block">Portfolio</label>
                    <input type="text" placeholder="johndoe.com" value={cvBuilderData.portfolio} onChange={(e) => setCvBuilderData({...cvBuilderData, portfolio: e.target.value})} className="w-full bg-neutral-700 border border-neutral-600 text-white px-4 py-2 rounded-lg focus:outline-none focus:border-blue-500" />
                  </div>
                </div>
                <div>
                  <label className="text-neutral-400 text-sm mb-1 block">Career Objective</label>
                  <textarea placeholder="A dedicated professional seeking..." rows={2} value={cvBuilderData.objective} onChange={(e) => setCvBuilderData({...cvBuilderData, objective: e.target.value})} className="w-full bg-neutral-700 border border-neutral-600 text-white px-4 py-2 rounded-lg focus:outline-none focus:border-blue-500" />
                </div>
                <div>
                  <label className="text-neutral-400 text-sm mb-1 block">Skills (comma separated)</label>
                  <textarea placeholder="JavaScript, React, Node.js, Python..." rows={2} value={cvBuilderData.skills} onChange={(e) => setCvBuilderData({...cvBuilderData, skills: e.target.value})} className="w-full bg-neutral-700 border border-neutral-600 text-white px-4 py-2 rounded-lg focus:outline-none focus:border-blue-500" />
                </div>
                <div>
                  <label className="text-neutral-400 text-sm mb-1 block">Work Experience</label>
                  <textarea placeholder="Company Name - Role - Duration&#10;Company Name - Role - Duration" rows={4} value={cvBuilderData.workHistory} onChange={(e) => setCvBuilderData({...cvBuilderData, workHistory: e.target.value})} className="w-full bg-neutral-700 border border-neutral-600 text-white px-4 py-2 rounded-lg focus:outline-none focus:border-blue-500" />
                </div>
                <div>
                  <label className="text-neutral-400 text-sm mb-1 block">Education</label>
                  <textarea placeholder="University - Degree - Year" rows={3} value={cvBuilderData.education} onChange={(e) => setCvBuilderData({...cvBuilderData, education: e.target.value})} className="w-full bg-neutral-700 border border-neutral-600 text-white px-4 py-2 rounded-lg focus:outline-none focus:border-blue-500" />
                </div>
                <div>
                  <label className="text-neutral-400 text-sm mb-1 block">Certifications</label>
                  <textarea placeholder="AWS Certified, Google Analytics..." rows={2} value={cvBuilderData.certifications} onChange={(e) => setCvBuilderData({...cvBuilderData, certifications: e.target.value})} className="w-full bg-neutral-700 border border-neutral-600 text-white px-4 py-2 rounded-lg focus:outline-none focus:border-blue-500" />
                </div>
                <div>
                  <label className="text-neutral-400 text-sm mb-1 block">Languages</label>
                  <input type="text" placeholder="English, Swahili" value={cvBuilderData.languages} onChange={(e) => setCvBuilderData({...cvBuilderData, languages: e.target.value})} className="w-full bg-neutral-700 border border-neutral-600 text-white px-4 py-2 rounded-lg focus:outline-none focus:border-blue-500" />
                </div>
                <div>
                  <label className="text-neutral-400 text-sm mb-1 block">References</label>
                  <textarea placeholder="Reference name - Position - Contact" rows={2} value={cvBuilderData.refs} onChange={(e) => setCvBuilderData({...cvBuilderData, refs: e.target.value})} className="w-full bg-neutral-700 border border-neutral-600 text-white px-4 py-2 rounded-lg focus:outline-none focus:border-blue-500" />
                </div>
              </div>

              <div className="space-y-4">
                <div className="bg-green-600 rounded-lg p-6">
                  <h4 className="text-white font-semibold text-lg mb-4">Save Your CV</h4>
                  <button onClick={saveCVBuilder} className="w-full bg-white text-green-600 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition mb-3">
                    Download CV
                  </button>
                  <p className="text-white/80 text-sm">Download your CV as a file</p>
                </div>

                <div className="bg-neutral-800 rounded-lg p-6">
                  <h4 className="text-white font-semibold text-lg mb-4">Apply to Companies</h4>
                  <p className="text-neutral-400 text-sm mb-4">Submit your CV directly to companies</p>
                  <div className="space-y-3">
                    {companies.map((company) => (
                      <button 
                        key={company.id}
                        onClick={() => shareCVBuilderToCompany(company.name, company.phone)}
                        className="w-full bg-blue-600 hover:bg-blue-700 text-white px-4 py-3 rounded-lg font-semibold transition flex items-center justify-between"
                      >
                        <span>{company.name}</span>
                        <span className="text-xs opacity-80">Apply</span>
                      </button>
                    ))}
                  </div>
                </div>
              </div>
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

      {activeTab === "cvwriter" && (
        <section className="py-12 px-4">
          <div className="max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold text-white mb-2 text-center">AI CV Writer</h3>
            <p className="text-neutral-400 mb-8 text-center">Let AI help you create a professional CV</p>
            
            <div className="bg-neutral-800 rounded-lg p-6 mb-8">
              <label className="text-white text-sm mb-2 block">Describe your skills, experience, and job target</label>
              <div className="flex gap-4">
                <textarea 
                  value={aiPrompt} 
                  onChange={(e) => setAiPrompt(e.target.value)}
                  placeholder="E.g., I am a software engineer with 5 years experience in React, Node.js, and Python. Looking for a senior role in a tech company..."
                  className="flex-1 bg-neutral-700 border border-neutral-600 text-white px-4 py-3 rounded-lg focus:outline-none focus:border-blue-500 h-24 resize-none"
                />
                <button 
                  onClick={generateAICV}
                  disabled={isGenerating}
                  className="bg-purple-600 hover:bg-purple-700 text-white px-6 py-3 rounded-lg font-semibold transition disabled:opacity-50"
                >
                  {isGenerating ? "Generating..." : "Generate with AI"}
                </button>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-neutral-800 rounded-lg p-6 space-y-4">
                <h4 className="text-white font-semibold text-lg">Your CV Details</h4>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="text-neutral-400 text-sm mb-1 block">Full Name</label>
                    <input type="text" placeholder="John Doe" value={cvWriterData.fullName} onChange={(e) => setCvWriterData({...cvWriterData, fullName: e.target.value})} className="w-full bg-neutral-700 border border-neutral-600 text-white px-4 py-2 rounded-lg focus:outline-none focus:border-blue-500" />
                  </div>
                  <div>
                    <label className="text-neutral-400 text-sm mb-1 block">Email</label>
                    <input type="email" placeholder="john@email.com" value={cvWriterData.email} onChange={(e) => setCvWriterData({...cvWriterData, email: e.target.value})} className="w-full bg-neutral-700 border border-neutral-600 text-white px-4 py-2 rounded-lg focus:outline-none focus:border-blue-500" />
                  </div>
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="text-neutral-400 text-sm mb-1 block">Phone</label>
                    <input type="tel" placeholder="+254 700 000000" value={cvWriterData.phone} onChange={(e) => setCvWriterData({...cvWriterData, phone: e.target.value})} className="w-full bg-neutral-700 border border-neutral-600 text-white px-4 py-2 rounded-lg focus:outline-none focus:border-blue-500" />
                  </div>
                  <div>
                    <label className="text-neutral-400 text-sm mb-1 block">Address</label>
                    <input type="text" placeholder="Nairobi, Kenya" value={cvWriterData.address} onChange={(e) => setCvWriterData({...cvWriterData, address: e.target.value})} className="w-full bg-neutral-700 border border-neutral-600 text-white px-4 py-2 rounded-lg focus:outline-none focus:border-blue-500" />
                  </div>
                </div>
                <div>
                  <label className="text-neutral-400 text-sm mb-1 block">Job Title</label>
                  <input type="text" placeholder="Software Engineer" value={cvWriterData.jobTitle} onChange={(e) => setCvWriterData({...cvWriterData, jobTitle: e.target.value})} className="w-full bg-neutral-700 border border-neutral-600 text-white px-4 py-2 rounded-lg focus:outline-none focus:border-blue-500" />
                </div>
                <div>
                  <label className="text-neutral-400 text-sm mb-1 block">Professional Summary</label>
                  <textarea placeholder="Brief summary about yourself..." rows={3} value={cvWriterData.summary} onChange={(e) => setCvWriterData({...cvWriterData, summary: e.target.value})} className="w-full bg-neutral-700 border border-neutral-600 text-white px-4 py-2 rounded-lg focus:outline-none focus:border-blue-500" />
                </div>
                <div>
                  <label className="text-neutral-400 text-sm mb-1 block">Skills</label>
                  <textarea placeholder="List your skills..." rows={2} value={cvWriterData.skills} onChange={(e) => setCvWriterData({...cvWriterData, skills: e.target.value})} className="w-full bg-neutral-700 border border-neutral-600 text-white px-4 py-2 rounded-lg focus:outline-none focus:border-blue-500" />
                </div>
                <div>
                  <label className="text-neutral-400 text-sm mb-1 block">Work Experience</label>
                  <textarea placeholder="Your work experience..." rows={3} value={cvWriterData.experience} onChange={(e) => setCvWriterData({...cvWriterData, experience: e.target.value})} className="w-full bg-neutral-700 border border-neutral-600 text-white px-4 py-2 rounded-lg focus:outline-none focus:border-blue-500" />
                </div>
                <div>
                  <label className="text-neutral-400 text-sm mb-1 block">Education</label>
                  <textarea placeholder="Your education..." rows={2} value={cvWriterData.education} onChange={(e) => setCvWriterData({...cvWriterData, education: e.target.value})} className="w-full bg-neutral-700 border border-neutral-600 text-white px-4 py-2 rounded-lg focus:outline-none focus:border-blue-500" />
                </div>
                <div>
                  <label className="text-neutral-400 text-sm mb-1 block">Languages</label>
                  <input type="text" placeholder="English, Swahili" value={cvWriterData.languages} onChange={(e) => setCvWriterData({...cvWriterData, languages: e.target.value})} className="w-full bg-neutral-700 border border-neutral-600 text-white px-4 py-2 rounded-lg focus:outline-none focus:border-blue-500" />
                </div>
                <div>
                  <label className="text-neutral-400 text-sm mb-1 block">References</label>
                  <textarea placeholder="Reference contacts..." rows={2} value={cvWriterData.refs} onChange={(e) => setCvWriterData({...cvWriterData, refs: e.target.value})} className="w-full bg-neutral-700 border border-neutral-600 text-white px-4 py-2 rounded-lg focus:outline-none focus:border-blue-500" />
                </div>
              </div>

              <div className="space-y-4">
                <div className="bg-green-600 rounded-lg p-6">
                  <h4 className="text-white font-semibold text-lg mb-4">Save & Share Your CV</h4>
                  <button onClick={saveCV} className="w-full bg-white text-green-600 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition mb-3">
                    Save CV
                  </button>
                  <p className="text-white/80 text-sm">Download your CV as a file</p>
                </div>

                <div className="bg-neutral-800 rounded-lg p-6">
                  <h4 className="text-white font-semibold text-lg mb-4">Share to Companies</h4>
                  <p className="text-neutral-400 text-sm mb-4">Apply directly to companies with your CV</p>
                  <div className="space-y-3">
                    {companies.map((company) => (
                      <button 
                        key={company.id}
                        onClick={() => shareCVBuilderToCompany(company.name, company.phone)}
                        className="w-full bg-blue-600 hover:bg-blue-700 text-white px-4 py-3 rounded-lg font-semibold transition flex items-center justify-between"
                      >
                        <span>{company.name}</span>
                        <span className="text-xs opacity-80">Apply</span>
                      </button>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      )}

      {activeTab === "advertise" && (
        <section className="py-12 px-4">
          <div className="max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold text-white mb-2 text-center">Advertise With Us</h3>
            <p className="text-neutral-400 mb-8 text-center">Reach thousands of job seekers in Kenya. Promote your company!</p>
            
            <div className="bg-neutral-800 rounded-lg p-6 space-y-4 mb-8">
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="text-white text-sm mb-1 block">Company Name</label>
                  <input type="text" placeholder="Your Company" value={adData.companyName} onChange={(e) => setAdData({...adData, companyName: e.target.value})} className="w-full bg-neutral-700 border border-neutral-600 text-white px-4 py-2 rounded-lg focus:outline-none focus:border-blue-500" />
                </div>
                <div>
                  <label className="text-white text-sm mb-1 block">Contact Person</label>
                  <input type="text" placeholder="John Doe" value={adData.contactPerson} onChange={(e) => setAdData({...adData, contactPerson: e.target.value})} className="w-full bg-neutral-700 border border-neutral-600 text-white px-4 py-2 rounded-lg focus:outline-none focus:border-blue-500" />
                </div>
              </div>
              <div>
                <label className="text-white text-sm mb-1 block">Email</label>
                <input type="email" placeholder="company@email.com" value={adData.email} onChange={(e) => setAdData({...adData, email: e.target.value})} className="w-full bg-neutral-700 border border-neutral-600 text-white px-4 py-2 rounded-lg focus:outline-none focus:border-blue-500" />
              </div>
              <div>
                <label className="text-white text-sm mb-1 block">Phone</label>
                <input type="tel" placeholder="+254 700 000000" value={adData.phone} onChange={(e) => setAdData({...adData, phone: e.target.value})} className="w-full bg-neutral-700 border border-neutral-600 text-white px-4 py-2 rounded-lg focus:outline-none focus:border-blue-500" />
              </div>
              <div>
                <label className="text-white text-sm mb-1 block">Message</label>
                <textarea placeholder="Tell us about your advertising needs..." rows={4} value={adData.message} onChange={(e) => setAdData({...adData, message: e.target.value})} className="w-full bg-neutral-700 border border-neutral-600 text-white px-4 py-2 rounded-lg focus:outline-none focus:border-blue-500" />
              </div>
              <button className="w-full bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg font-semibold transition">Submit Inquiry</button>
            </div>

            <div className="bg-green-600 rounded-lg p-6 text-center">
              <h4 className="text-white text-xl font-bold mb-2">Support JobFind!</h4>
              <p className="text-white/80 mb-4">Help us keep this service free for job seekers</p>
              <p className="text-white font-semibold mb-2">Donate via M-Pesa</p>
              <p className="text-white text-2xl font-bold">KSh 1000</p>
              <p className="text-white/80 text-sm mt-2">Send to: +254 726 038 754</p>
            </div>
          </div>
        </section>
      )}

      {selectedCompany && selectedCompanyData && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          <div className="absolute inset-0 bg-black/70" onClick={() => setSelectedCompany(null)} />
          <div className="relative bg-neutral-800 rounded-xl p-6 max-w-lg w-full max-h-[90vh] overflow-y-auto">
            <div className="flex items-center gap-3 absolute top-4 right-4">
              <button onClick={() => setActiveTab("companies")} className="text-blue-400 hover:text-blue-300 text-sm">Our Partners</button>
              <button onClick={() => setSelectedCompany(null)} className="text-neutral-400 hover:text-white text-xl">✕</button>
            </div>
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
            <p className="text-neutral-400 text-sm text-center mb-4">{selectedCompanyData.jobs} open positions</p>
            <p className="text-neutral-400 text-sm text-center mb-4">{selectedCompanyData.jobs} open positions</p>
            <div className="space-y-3">
              <p className="text-white font-semibold text-center">Apply with your CV</p>
              <button onClick={() => { 
                const companyName = selectedCompanyData.name;
                const newCvContent = `Application for ${companyName}
Email: ${cvData.email} | Phone: ${cvData.phone}
Job Title: ${cvData.jobTitle}

SUMMARY
${cvData.summary}

SKILLS
${cvData.skills}

WORK EXPERIENCE
${cvData.experience}

EDUCATION
${cvData.education}

---
Applied to: ${companyName}
Location: ${selectedCompanyData.location}
Phone: ${selectedCompanyData.phone}
                `.trim();
                const blob = new Blob([newCvContent], { type: "text/plain" });
                const url = URL.createObjectURL(blob);
                const a = document.createElement("a");
                a.href = url;
                a.download = `CV_${companyName.replace(/\s+/g, "_")}.txt`;
                a.click();
                URL.revokeObjectURL(url);
              }} className="w-full bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg font-semibold transition">
                Apply with your CV
              </button>
              <p className="text-neutral-500 text-xs text-center">Download your CV with application to {selectedCompanyData.name}</p>
            </div>
          </div>
      </div>
      )}

      <div className="fixed right-0 top-1/2 -translate-y-1/2 bg-neutral-800 rounded-l-lg p-2 z-40 flex flex-col gap-2">
        <span className="text-white text-xs text-center pb-2">Quick Access</span>
        <button onClick={() => setActiveTab("news")} className="bg-green-600 p-3 rounded-full hover:bg-green-700 transition" title="News">
          <span className="text-white">📰</span>
        </button>
        <button onClick={() => setActiveTab("scholarships")} className="bg-yellow-600 p-3 rounded-full hover:bg-yellow-700 transition" title="Scholarships">
          <span className="text-white">🎓</span>
        </button>
        <button onClick={() => setActiveTab("cvbuilder")} className="bg-blue-600 p-3 rounded-full hover:bg-blue-700 transition" title="CV Builder">
          <span className="text-white">📝</span>
        </button>
        <button onClick={() => setActiveTab("cv")} className="bg-neutral-700 p-3 rounded-full hover:bg-neutral-600 transition" title="Export CV">
          <span className="text-white">📄</span>
        </button>
        <button onClick={() => setActiveTab("cvwriter")} className="bg-purple-600 p-3 rounded-full hover:bg-purple-700 transition" title="AI Writer">
          <span className="text-white">🤖</span>
        </button>
      </div>

      </main>
  );
}