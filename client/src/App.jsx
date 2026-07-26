import { useEffect, useState } from "react";
import Navbar from "./components/Navbar.jsx";
import Hero from "./components/Hero.jsx";
import About from "./components/About.jsx";
import Experience from "./components/Experience.jsx";
import Skills from "./components/Skills.jsx";
import Achievements from "./components/Achievements.jsx";
import Guestbook from "./components/Guestbook.jsx";
import Contact from "./components/Contact.jsx";
import Footer from "./components/Footer.jsx";

// Fallback data mirrors /api/profile in case the backend isn't running yet.
const FALLBACK_PROFILE = {
  name: "Saumya Sarngal",
  tagline: "coder ✨ full-stack dev ✨ AI/ML enthusiast",
  contact: {
    github: "SAUMYASARNGAL7780",
    linkedin: "saumyasarngal123",
    email: "sarngalsaumya@gmail.com",
    phone: "7780840484",
  },
  education: [
    { year: "2023–2027", school: "National Institute of Technology, Srinagar", detail: "CGPA: 8.23/10" },
    { year: "2023", school: "Kendriya Vidyalaya No.1 Jammu (CBSE XII)", detail: "91%" },
    { year: "2021", school: "Kendriya Vidyalaya No.1 Jammu (CBSE X)", detail: "96%" },
  ],
  experience: [
    {
      role: "Registration Team Lead",
      org: "Techvaganza, NIT Srinagar",
      date: "Oct 2024",
      points: ["Led the registration team and managed 10,000+ participant registrations during the institute's annual technical festival."],
    },
    {
      role: "Cyber Security Intern",
      org: "C-DAC, Noida",
      date: "Jan 2025 – Mar 2025",
      points: ["Learned Bash scripting, simulated network topologies using Cisco Packet Tracer, and analyzed network traffic using Wireshark."],
    },
    {
      role: "AI/ML Intern",
      org: "DIAT, Pune",
      date: "Dec 2025 – Jan 2026",
      points: [
        "Developed an AI-powered avatar of Dr. B. R. Ambedkar using Retrieval-Augmented Generation (RAG).",
        "Built backend pipelines using FastAPI, LangChain, vector databases, embeddings, and semantic retrieval.",
        "Developed document ingestion, chunking, REST APIs, and retrieval workflows as part of a 15-member research team.",
      ],
    },
  ],
  skills: {
    "Programming Languages": ["C", "C++", "Java", "Python", "JavaScript"],
    "Web Technologies": ["HTML5", "CSS3", "React.js", "Node.js", "Express.js", "Bootstrap"],
    Databases: ["MySQL", "MongoDB"],
    "Frameworks & Libraries": ["Pandas", "NumPy", "Matplotlib"],
    "Core CS": ["Data Structures & Algorithms", "DBMS", "Operating Systems", "Computer Networks", "OOP", "AI"],
    "Developer Tools": ["Git", "GitHub", "VS Code", "Postman"],
    Concepts: ["REST APIs", "JWT Authentication", "CRUD Operations"],
  },
  achievements: [
    "NCC Cadet with active participation in drills and camps.",
    "Represented at National Level in Yoga and Regional Level in Youth Parliament.",
  ],
};

export default function App() {
  const [profile, setProfile] = useState(FALLBACK_PROFILE);

  useEffect(() => {
    fetch("/api/profile")
      .then((res) => (res.ok ? res.json() : Promise.reject()))
      .then((data) => setProfile(data))
      .catch(() => {
        // backend not reachable yet — fallback data already in state
      });
  }, []);

  return (
    <div className="min-h-screen">
      <Navbar name={profile.name} />
      <Hero profile={profile} />
      <About education={profile.education} />
      <Experience experience={profile.experience} />
      <Skills skills={profile.skills} />
      <Achievements achievements={profile.achievements} />
      <Guestbook />
      <Contact contact={profile.contact} />
      <Footer name={profile.name} />
    </div>
  );
}
