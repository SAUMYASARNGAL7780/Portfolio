import { Router } from "express";
import Contact from "../models/Contact.js";
import Note from "../models/Note.js";

const router = Router();

/* ---------- Profile (static resume data served from the API) ---------- */
router.get("/profile", (req, res) => {
  res.json({
    name: "Saumya Sarngal",
    tagline: "coder ✨ full-stack dev ✨ AI/ML enthusiast",
    contact: {
      github: "SAUMYASARNGAL7780",
      linkedin: "saumyasarngal123",
      email: "sarngalsaumya@gmail.com",
      phone: "7780840484",
    },
    education: [
      {
        year: "2023–2027",
        school: "National Institute of Technology, Srinagar",
        detail: "CGPA: 8.23/10",
      },
      {
        year: "2023",
        school: "Kendriya Vidyalaya No.1 Jammu (CBSE XII)",
        detail: "91%",
      },
      {
        year: "2021",
        school: "Kendriya Vidyalaya No.1 Jammu (CBSE X)",
        detail: "96%",
      },
    ],
    experience: [
      {
        role: "Registration Team Lead",
        org: "Techvaganza, NIT Srinagar",
        date: "Oct 2024",
        points: [
          "Led the registration team and managed 10,000+ participant registrations during the institute's annual technical festival.",
        ],
      },
      {
        role: "Cyber Security Intern",
        org: "C-DAC, Noida",
        date: "Jan 2025 – Mar 2025",
        points: [
          "Learned Bash scripting, simulated network topologies using Cisco Packet Tracer, and analyzed network traffic using Wireshark.",
        ],
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
  });
});

/* ---------- Contact form -> MongoDB ---------- */
router.post("/contact", async (req, res) => {
  try {
    const { name, email, message } = req.body;
    if (!name || !email || !message) {
      return res.status(400).json({ error: "name, email, and message are all required, bestie 💌" });
    }
    const saved = await Contact.create({ name, email, message });
    res.status(201).json({ success: true, id: saved._id });
  } catch (err) {
    res.status(500).json({ error: "Something went wrong saving your message." });
  }
});

/* ---------- Guestbook sticky notes -> MongoDB ---------- */
router.get("/notes", async (req, res) => {
  try {
    const notes = await Note.find().sort({ createdAt: -1 }).limit(50);
    res.json(notes);
  } catch (err) {
    res.status(500).json({ error: "Couldn't load the notes wall." });
  }
});

router.post("/notes", async (req, res) => {
  try {
    const { name, text, color } = req.body;
    if (!name || !text) {
      return res.status(400).json({ error: "Name and note text are required." });
    }
    const note = await Note.create({ name, text, color });
    res.status(201).json(note);
  } catch (err) {
    res.status(500).json({ error: "Couldn't save your note." });
  }
});

export default router;
