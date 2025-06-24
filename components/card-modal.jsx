"use client"

import { useState, useEffect } from "react"
import {
  X,
  Github,
  ExternalLink,
  Mail,
  Phone,
  MapPin,
  Calendar,
  Award,
  Users,
  TrendingUp,
  Code,
  Palette,
  Smartphone,
  Globe,
  Music,
  Quote,
  Heart,
  Building,
  Target,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"

export function CardModal({ card, onClose }) {
  const [isVisible, setIsVisible] = useState(false)
  const [selectedFilter, setSelectedFilter] = useState("all")

  useEffect(() => {
    setIsVisible(true)
  }, [])

  // Tech Stack Data
  const techStack = [
    // Frontend
    { name: "HTML", icon: "🌐", category: "frontend", color: "from-orange-500 to-red-500", },
    { name: "CSS", icon: "🎨", category: "frontend", color: "from-blue-500 to-cyan-500" },
    { name: "JavaScript", icon: "⚡", category: "frontend", color: "from-yellow-400 to-yellow-600" },
    { name: "React", icon: "⚛️", category: "frontend", color: "from-blue-400 to-cyan-400" },
    // { name: "Redux", icon: "🔄", category: "frontend", color: "from-purple-500 to-purple-700", level: 85 },
    { name: "Next.js", icon: "▲", category: "frontend", color: "from-gray-700 to-gray-900" },
    // { name: "TypeScript", icon: "📘", category: "frontend", color: "from-blue-600 to-blue-800", level: 88 },
    { name: "Tailwind CSS", icon: "💨", category: "frontend", color: "from-teal-400 to-cyan-500" },

    // Backend
    { name: "Node.js", icon: "🟢", category: "backend", color: "from-green-500 to-green-700" },
    { name: "Express", icon: "🚀", category: "backend", color: "from-gray-600 to-gray-800"},
    { name: "Python", icon: "🐍", category: "backend", color: "from-yellow-500 to-blue-500" },
    { name: "Socket.io", icon: "🔌", category: "backend", color: "from-green-400 to-blue-500" },
    // { name: "GraphQL", icon: "📊", category: "backend", color: "from-pink-500 to-purple-600", level: 75 },

    // Database
    { name: "MongoDB", icon: "🍃", category: "database", color: "from-green-600 to-green-800" },
    { name: "Firebase", icon: "🐘", category: "database", color: "from-blue-600 to-indigo-700" },
    // { name: "MySQL", icon: "🗄️", category: "database", color: "from-blue-500 to-blue-700", level: 80 },
    // { name: "Prisma", icon: "⚡", category: "database", color: "from-indigo-500 to-purple-600", level: 85 },
    // { name: "Redis", icon: "🔴", category: "database", color: "from-red-500 to-red-700", level: 78 },

    // DevOps
    // { name: "Docker", icon: "🐳", category: "devops", color: "from-blue-500 to-blue-700", level: 80 },
    { name: "AWS", icon: "☁️", category: "devops", color: "from-orange-400 to-yellow-500" },
    // { name: "Nginx", icon: "🌐", category: "devops", color: "from-green-600 to-green-800", level: 70 },
    { name: "Git", icon: "📚", category: "devops", color: "from-orange-500 to-red-600" },
    { name: "GitHub Actions", icon: "⚙️", category: "devops", color: "from-gray-700 to-gray-900" },

    // Tools
    { name: "VS Code", icon: "💻", category: "tools", color: "from-blue-500 to-blue-700" },
    // { name: "Figma", icon: "🎨", category: "tools", color: "from-purple-500 to-pink-500", level: 85 },
    // { name: "Postman", icon: "📮", category: "tools", color: "from-orange-500 to-red-500", level: 88 },
    // { name: "Jest", icon: "🧪", category: "tools", color: "from-red-600 to-pink-600", level: 80 },
  ]

  const filterCategories = [
    { id: "all", label: "All Technologies" },
    { id: "frontend", label: "Frontend" },
    { id: "backend", label: "Backend" },
    { id: "database", label: "Database" },
    { id: "devops", label: "DevOps" },
    { id: "tools", label: "Tools" },
  ]

  const filteredTech =
    selectedFilter === "all" ? techStack : techStack.filter((tech) => tech.category === selectedFilter)

  const getModalContent = () => {
    switch (card.type) {
      case "about":
        return (
          <div className="space-y-6">
            <div className="text-center">
              <div className="w-32 h-32 mx-auto mb-6 rounded-3xl overflow-hidden border-4 border-white/20">
                <img
                  src="/aditya2.jpg?height=150&width=150"
                  alt="John Doe"
                  className="w-full h-full object-cover"
                />
              </div>
              <h2 className="text-3xl font-bold text-white mb-2">Aditya Sharma</h2>
              <p className="text-cyan-400 text-lg mb-4">Full Stack Developer</p>
              <div className="flex items-center justify-center space-x-4 text-sm text-gray-400 mb-6">
                <div className="flex items-center">
                  <MapPin className="w-4 h-4 mr-1" />
                  Chandigarh, INDIA
                </div>
                <div className="flex items-center">
                  <Calendar className="w-4 h-4 mr-1" />
                  Student
                </div>
              </div>
            </div>

            <div className="bg-white/5 rounded-2xl p-6">
              <h3 className="text-xl font-bold text-white mb-4">About Me</h3>
              <p className="text-gray-300 leading-relaxed mb-4">
                I'm a passionate Full-Stack web developer with a strong focus on frontend technologies,
                currently pursuing my degree while actively building real-world digital products. 
                With hands-on experience in React.js, Tailwind CSS, and JavaScript, I’ve developed clean, responsive, and user-friendly interfaces that are not just functional but also visually polished.
              </p>
              <p className="text-gray-300 leading-relaxed mb-4">
                I specialize in modern JavaScript frameworks, cloud architecture, and creating seamless user
                experiences. My approach combines technical expertise with creative problem-solving to deliver solutions
                that not only work flawlessly but also delight users.
              </p>
              <p className="text-gray-300 leading-relaxed mb-4">
                When I'm not coding, you'll find me exploring new technologies, contributing to open-source projects, or
                sharing knowledge with the developer community through blogs and mentoring.
              </p>
              <p className="text-gray-300 leading-relaxed">
                I’m deeply passionate about translating ideas into scalable applications, and I bring reliability, creativity, and a strong sense of ownership to every project I take on. 
                If you’re looking for someone who can understand your vision and turn it into a high-quality, launch-ready product — let’s connect.
              </p>
            </div>

            <div className="grid grid-cols-3 gap-4">
              <div className="bg-white/5 rounded-2xl p-4 text-center">
                <Award className="w-8 h-8 text-yellow-400 mx-auto mb-2" />
                <div className="text-2xl font-bold text-white">5</div>
                <div className="text-sm text-gray-400">Awards</div>
              </div>
              {/* <div className="bg-white/5 rounded-2xl p-4 text-center">
                <Users className="w-8 h-8 text-blue-400 mx-auto mb-2" />
                <div className="text-2xl font-bold text-white">25+</div>
                <div className="text-sm text-gray-400">Happy Clients</div>
              </div> */}
              <div className="bg-white/5 rounded-2xl p-4 text-center">
                <TrendingUp className="w-8 h-8 text-green-400 mx-auto mb-2" />
                <div className="text-2xl font-bold text-white">5+</div>
                <div className="text-sm text-gray-400">Projects</div>
              </div>
            </div>
          </div>
        )

      case "skills":
        return (
          <div className="space-y-6">
            <div className="text-center">
              <h2 className="text-3xl font-bold bg-gradient-to-r from-green-400 to-cyan-400 bg-clip-text text-transparent mb-4">
                Tech Stack & Skills
              </h2>
              <p className="text-gray-400">A collection of technologies I've worked with throughout my journey</p>
            </div>

            {/* Filter Tabs */}
            <div className="flex flex-wrap justify-center gap-2 mb-8">
              {filterCategories.map((category) => (
                <button
                  key={category.id}
                  onClick={() => setSelectedFilter(category.id)}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                    selectedFilter === category.id
                      ? "bg-gradient-to-r from-green-500 to-cyan-500 text-white"
                      : "bg-white/10 text-gray-400 hover:bg-white/20 hover:text-white"
                  }`}
                >
                  {category.label}
                </button>
              ))}
            </div>

            {/* Tech Grid */}
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
              {filteredTech.map((tech, index) => (
                <div
                  key={index}
                  className="bg-white/5 border border-white/10 rounded-2xl p-4 hover:bg-white/10 hover:border-white/20 transition-all duration-300 group"
                >
                  <div className="text-center">
                    <div
                      className={`w-12 h-12 mx-auto mb-3 bg-gradient-to-r ${tech.color} rounded-xl flex items-center justify-center text-2xl group-hover:scale-110 transition-transform duration-300`}
                    >
                      {tech.icon}
                    </div>
                    <h3 className="text-white font-medium">{tech.name}</h3>
                  </div>
                </div>
              ))}
            </div>


            {/* Experience Summary */}
            <div className="bg-white/5 rounded-2xl p-6">
              <h3 className="text-xl font-bold text-white mb-4">Experience Summary</h3>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h4 className="text-lg font-semibold text-green-400 mb-3">Frontend Expertise</h4>
                  <p className="text-gray-300 text-sm leading-relaxed">
                    Frontend developer crafting interactive, elegant, and high-performance web experiences using React, Next.js, Tailwind CSS, and motion-driven design principles.
                  </p>
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-blue-400 mb-3">Backend Proficiency</h4>
                  <p className="text-gray-300 text-sm leading-relaxed">
                    Backend developer with a focus on building scalable APIs, robust server-side logic, and secure data flow using Node.js, Express, and MongoDB.
                  </p>
                </div>
              </div>
            </div>
          </div>
        )

      case "projects":
        return (
          <div className="space-y-6">
            <div className="text-center">
              <h2 className="text-3xl font-bold text-white mb-4">Featured Projects</h2>
              <p className="text-gray-400">A showcase of my recent work and the impact they've made</p>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              {[
                {
                  name: "Virtual Group Study Platform",
                  description:
                    "A full-stack AI-powered virtual group study platform featuring real-time quiz generation using Gemini API, personalized progress tracking, secure JWT-based authentication with OTP and email verification, and seamless integration with MongoDB for user and performance data management.",
                  image: "/edusphere.png?height=10&width=20",
                  technologies: ["Node.js", "Javascript", "Flask", "PyTorch", "Judge0 API", "Socket.IO", "WebRTC", "MongoDB","HTML", "CSS", "Monaco Editor","JWT"],
                  status: "Beta",
                  users: "Live",
                  github: "https://github.com/vaibhav-katyal/EduSphere",
                  live: "https://edu-sphere-steel.vercel.app/dashboard.html",
                },
                {
                  name: "PoolMate",
                  description:
                    "PoolMate is a smart roommate and flatmate finder designed for students and professionals. Users can discover ideal matches based on budget, location, and lifestyle preferences with ease.",
                  image: "/poolmate.png?height=200&width=300",
                  technologies: ["Javascript", "OAuth", "Socket.IO","Cloudinary" ,"Express.js","MongoDB","OpenStreetMap", "Node.js","HTML5"],
                  status: "Live",
                  users: "Live",
                  github: "https://github.com/vaibhav-katyal/poolmate",
                  live: "https://poolmate.onrender.com/",
                },
                {
                  name: "Unibux",
                  description: "UniBux is a centralized event management platform built for college clubs and student societies. From creating and managing events to tracking participation, it streamlines the entire campus activity lifecycle.",
                  image: "/unibux.png?height=200&width=300",
                  technologies: ["HTML","CSS","Javascript","Node.js", "Express.js" , "MongoDB", "Node Mailer","Cloudinary","Chart.js" ],
                  status: "Live",
                  users: "Live",
                  github: "https://github.com/adityasharma0903/ExpenseTracker",
                  live: "https://unibux.vercel.app/",
                },
                {
                  name: "Revoliq",
                  description: "A cross-platform mobile application built with React Native for iOS and Android.",
                  image: "/revoliq.png?height=200&width=300",
                  technologies: ["HTML","CSS","Javascript","Node.js", "Express.js" , "MongoDB","Cloudinary","HTML5-qrcode", "JWT/Session","Chart.js" ],
                  status: "Live",
                  users: "Live",
                  github: "https://github.com/adityasharma0903/ExpenseTracker",
                  live: "https://revoliq.vercel.app/",
                },
                {
                  name: "NyayGPT",
                  description:
                    "An AI-powered content creation platform that helps marketers and writers generate high-quality content.",
                  image: "/nyaygpt.jpg?height=200&width=300",
                  technologies: ["Whisper", "LangChain", "Mistral 7B", "OPEN AI", "FAISS","Google TTS", "Google Translate", "React","Tailwind css", "Node.js","Hugging Face", "Omnidin.io", "Pinecone"],
                  status: "Live",
                  users: "Live",
                  github: "https://github.com/adityasharma0903/Nyay-GPT",
                  live: "https://nyaygpt.vercel.app/",
                },

              ].map((project, index) => (
                <div key={index} className="bg-white/5 rounded-2xl p-6 hover:bg-white/10 transition-all duration-300">
                  <div className="mb-4">
                    <img
                      src={project.image || "/placeholder.svg"}
                      alt={project.name}
                      className="w-full h-40 object-cover rounded-xl"
                    />
                  </div>
                  <div className="flex justify-between items-start mb-3">
                    <h3 className="text-xl font-bold text-white">{project.name}</h3>
                    <span
                      className={`text-xs px-2 py-1 rounded-full ${
                        project.status === "Live"
                          ? "bg-green-500/20 text-green-400"
                          : project.status === "Beta"
                            ? "bg-yellow-500/20 text-yellow-400"
                            : "bg-blue-500/20 text-blue-400"
                      }`}
                    >
                      {project.status}
                    </span>
                  </div>
                  <p className="text-gray-300 text-sm mb-4">{project.description}</p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.technologies.map((tech, techIndex) => (
                      <span key={techIndex} className="text-xs px-2 py-1 bg-white/10 text-gray-300 rounded-full">
                        {tech}
                      </span>
                    ))}
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-gray-400">{project.users} users</span>
                    <div className="flex gap-2">
                      <Button size="sm" className="bg-blue-600 hover:bg-blue-700" asChild>
                        <a href={project.live} target="_blank" rel="noopener noreferrer">
                          <ExternalLink className="w-3 h-3 mr-1" />
                          Live
                        </a>
                      </Button>
                      <Button
                        size="sm"
                        variant="outline"
                        className="border-white/20 text-white hover:bg-white/10"
                        asChild
                      >
                        <a href={project.github} target="_blank" rel="noopener noreferrer">
                          <Github className="w-3 h-3" />
                        </a>
                      </Button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )

      case "experience":
        return (
          <div className="space-y-6">
            <div className="text-center">
              <h2 className="text-3xl font-bold text-white mb-4">Achievements 🥇</h2>
              <p className="text-gray-400">My professional journey and the impact I've made at each step</p>
            </div>

            <div className="space-y-6">
              {[
                {
                  title: "🏅 Best First Year Innovator Award – BharatTech 2.0 Hackathon",
                  company: "Hackathon",
                  location: "SVIET",
                  period: "2024",
                  type: "Live",
                  
                  description: "A real-time virtual group study platform for students. Users can join topic-based study rooms, communicate through chat, access curated resources, and build a learning network in one place.",
                  achievements: [
                    "Real-time chat system for topic-specific discussions",
                    "Friend system for building study connections",
                    "Centralized academic resources (notes, videos, links)",
                    "Personalized dashboard to track sessions and friends",
                  ],
                  technologies: ["Node.js", "Javascript", "Flask", "PyTorch", "Judge0 API", "Socket.IO", "WebRTC", "MongoDB","HTML", "CSS", "Monaco Editor","JWT"],
                },
                {
                  title: "🏆 Top MongoDB Project – Hack-N-Win 2.0",
                  company: "Hackathon",
                  location: "CGC Jhanjheri",
                  period: "2024",
                  type: "Full-time",
                  description: "Contributed to a competitive hackathon focused on real-world MongoDB applications, leading the backend module of a collaborative project",
                  achievements: [
                    "Designed and optimized MongoDB queries for high-performance data retrieval",
                    "Ranked in Top 7 Projects among 100+ participants",
                    "Integrated MongoDB with Node.js and Express for robust API performance",
                    "Collaborated in a cross-functional team using Git workflows",
                  ],
                  technologies: ["React", "Express.js", "MongoDB", "Socket.io", "JWT"],
                },
                {
                  title: "🏆 Top 20 Projects – Techabhivyakti 3.0",
                  company: "Technical Event",
                  location: "Chitkara University, Rajpura",
                  period: "2024",
                  type: "Full-time",
                  description: "UniBux – An all-in-one campus event management system. Designed for students and college clubs to create, manage, and participate in events with digital ticketing and automated reminders.",
                  achievements: [
                    "Event registration & digital pass generation",
                    "Admin dashboard for organizers",
                    "Event calendar with live countdown",
                    "Certificate & participation record tracker",
                  ],
                  technologies: ["HTML","CSS","Javascript","Node.js", "Express.js" , "MongoDB", "Node Mailer","Cloudinary","Chart.js" ],
                },
                {
                  title: "🚀 Top 7 Finalist – Emergence 25 (Startup Event)",
                  company: "Startup Event",
                  location: "Chitkara University, Himachal",
                  period: "2024",
                  type: "Full-time",
                  description: "Pitched an early-stage startup idea with a working MVP in a judged event focused on innovation and scalability.",
                  achievements: [
                    "Presented a business model and technical demo to a jury panel",
                    "Selected among Top 7 Finalists",
                    "alidated product-market fit through primary user feedback",
                    "Contributed to UI/UX, backend, and business deck preparation",
                  ],
                  technologies: ["HTML","CSS","Javascript","Node.js", "Express.js" , "MongoDB","Cloudinary","HTML5-qrcode", "JWT/Session","Chart.js" ],
                },
                {
                  title: "🥇 Winner – Technovision 4.0",
                  company: "Technical Hackathon",
                  location: "Chitkara University, Himachal",
                  period: "2024",
                  type: "Full-time",
                  description: "voice-controlled smart wheelchair. Designed to empower mobility-impaired users through speech recognition.",
                  achievements: [
                    "Real-time voice command integration (forward, back, stop)",
                    "Emergency voice trigger for alerts",
                    "Ultra-sonic obstacle detection for safety",
                    "Wireless control panel for manual override",
                  ],
                  technologies: ["C++", "SASS", "Webpack", "Figma","Arduino Mega", "24V Battery", "Ultrasonic Sensor", "24V Motors", "Motor driver", "Bluetooth Module"],
                },
              ].map((job, index) => (
                <div key={index} className="bg-white/5 rounded-2xl p-6 hover:bg-white/10 transition-all duration-300">
                  <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-4">
                    <div>
                      <h3 className="text-2xl font-bold text-white mb-2">{job.title}</h3>
                      <div className="flex items-center text-blue-400 font-semibold mb-2">
                        <Building className="w-4 h-4 mr-2" />
                        {job.company}
                      </div>
                      <div className="flex flex-wrap gap-4 text-sm text-gray-400 mb-4">
                        <div className="flex items-center">
                          <Calendar className="w-4 h-4 mr-1" />
                          {job.period}
                        </div>
                        <div className="flex items-center">
                          <MapPin className="w-4 h-4 mr-1" />
                          {job.location}
                        </div>
                        <span className="px-2 py-1 bg-green-100/10 text-green-400 rounded-full text-xs font-medium">
                          {job.type}
                        </span>
                      </div>
                    </div>
                  </div>

                  <p className="text-gray-300 mb-6 leading-relaxed">{job.description}</p>

                  <div className="mb-6">
                    <h4 className="font-semibold text-white mb-3">Key Achievements:</h4>
                    <ul className="space-y-2">
                      {job.achievements.map((achievement, achievementIndex) => (
                        <li key={achievementIndex} className="flex items-start">
                          <div className="w-2 h-2 bg-blue-400 rounded-full mt-2 mr-3 flex-shrink-0" />
                          <span className="text-gray-300">{achievement}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div>
                    <h4 className="font-semibold text-white mb-3">Technologies Used:</h4>
                    <div className="flex flex-wrap gap-2">
                      {job.technologies.map((tech, techIndex) => (
                        <span
                          key={techIndex}
                          className="px-3 py-1 bg-white/10 text-gray-300 text-sm rounded-full font-medium"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )

      case "contact":
        return (
          <div className="space-y-6">
            <div className="text-center">
              <h2 className="text-3xl font-bold text-white mb-4">Get In Touch</h2>
              <p className="text-gray-400">Ready to build something amazing together?</p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              <div className="space-y-6">
                {[
                  { icon: Mail, label: "Email", value: "adityasharma08093@gmail.com", href: "mailto:adityasharma08093@gmail.com" },
                  { icon: Phone, label: "Phone", value: "+91 77430 62799", href: "tel:+91 77430 62799" },
                  { icon: MapPin, label: "Location", value: "Chandigarh , India", href: "#" },
                ].map((contact, index) => (
                  <a
                    key={index}
                    href={contact.href}
                    className="flex items-center p-4 bg-white/5 rounded-2xl hover:bg-white/10 transition-all duration-300"
                  >
                    <div className="w-12 h-12 bg-gradient-to-r from-pink-500 to-red-500 rounded-xl flex items-center justify-center mr-4">
                      <contact.icon className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <div className="font-semibold text-white">{contact.label}</div>
                      <div className="text-gray-400">{contact.value}</div>
                    </div>
                  </a>
                ))}
              </div>

              <div className="bg-white/5 rounded-2xl p-6">
                <h3 className="text-xl font-bold text-white mb-4">Send Message</h3>
                <form
  action="https://formsubmit.co/adityasharma08093@gmail.com"
  method="POST"
  className="space-y-4"
>
  {/* Required hidden fields */}
  <input type="hidden" name="_captcha" value="false" />
  <input type="hidden" name="_template" value="box" />
  <input type="hidden" name="_next" value="https://adityasharma1.vercel.app/" />

  {/* Required name attributes! */}
  <Input
    name="name"
    required
    placeholder="Your Name"
    className="bg-white/10 border-white/20 text-white placeholder:text-gray-400"
  />
  <Input
    type="email"
    name="email"
    required
    placeholder="Your Email"
    className="bg-white/10 border-white/20 text-white placeholder:text-gray-400"
  />
  <Textarea
    name="message"
    required
    placeholder="Your Message"
    rows={4}
    className="bg-white/10 border-white/20 text-white placeholder:text-gray-400 resize-none"
  />
  <Button
    type="submit"
    className="w-full bg-gradient-to-r from-pink-600 to-red-600 hover:from-pink-700 hover:to-red-700"
  >
    Send Message
  </Button>
</form>

              </div>
            </div>
          </div>
        )

      case "services":
        return (
          <div className="space-y-6">
            <div className="text-center">
              <h2 className="text-3xl font-bold text-white mb-4">My Services</h2>
              <p className="text-gray-400">What I can do for you</p>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              {[
                {
                  icon: Code,
                  title: "Web Development",
                  description:
                    "Full-stack web applications using modern technologies like React, Node.js, and cloud services.",
                  features: ["Responsive Design", "API Development", "Database Design", "Performance Optimization"],
                },
                {
                  icon: Smartphone,
                  title: "Mobile Development",
                  description: "Cross-platform mobile applications using React Native and Flutter.",
                  features: ["iOS & Android", "Native Performance", "Push Notifications", "App Store Deployment"],
                },
                {
                  icon: Palette,
                  title: "UI/UX Design",
                  description: "Beautiful and intuitive user interfaces that provide excellent user experiences.",
                  features: ["User Research", "Wireframing", "Prototyping", "Design Systems"],
                },
                {
                  icon: Globe,
                  title: "SEO & Marketing",
                  description: "Search engine optimization and digital marketing to grow your online presence.",
                  features: ["Technical SEO", "Content Strategy", "Analytics", "Performance Tracking"],
                },
              ].map((service, index) => (
                <div key={index} className="bg-white/5 rounded-2xl p-6 hover:bg-white/10 transition-all duration-300">
                  <div className="w-12 h-12 bg-gradient-to-r from-emerald-500 to-cyan-500 rounded-xl flex items-center justify-center mb-4">
                    <service.icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-3">{service.title}</h3>
                  <p className="text-gray-300 mb-4">{service.description}</p>
                  <ul className="space-y-2">
                    {service.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-sm text-gray-400">
                        <div className="w-1.5 h-1.5 bg-emerald-400 rounded-full mr-2"></div>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        )

          case "music":
              const [selectedCert, setSelectedCert] = useState(null)

              const certificates = [
                {
                  title: "Winner of technovision",
                  platform: "Chitkara University , Rajpura",
                  date: "23-May-2025",
                  image: "/technovision.png",
                },
                {
                  title: "BharatTech 2.0 Hackathon",
                  platform: "SVIET",
                  date: "08-Feb-2025",
                  image: "/SVIET.png",
                },
                {
                  title: "Top 20 MongoDB Projects",
                  platform: "CGC Jhanjheri",
                  date: "01-March-2025",
                  image: "/jhanjheri.png",
                },
                {
                  title: "Top 20 teams selected",
                  platform: "Chitkara University , Rajpura",
                  date: "15-April-2025",
                  image: "/tech.png",
                },
                {
                  title: "Top 7 Finalists",
                  platform: "Chitaka University , Himachal",
                  date: "01-March-2025",
                  image: "/ceedchitkara.png",
                },
                {
                  title: "Participation",
                  platform: "Chitaka University , Himachal",
                  date: "March 2025",
                  image: "/Symphosium.png",
                },
              ]
                useEffect(() => {
                if (selectedCert) {
                  window.scrollTo({ top: 0, behavior: "smooth" })
                  document.body.style.overflow = "hidden"
                } else {
                  document.body.style.overflow = "auto"
                }
              }, [selectedCert])
              return (
                
                <div className="space-y-6 relative">
                  <div className="text-center">
                    <h2 className="text-3xl font-bold text-white mb-4">My Certificates</h2>
                    <p className="text-gray-400">Proof of skills, hard work, and dedication 🎓</p>
                  </div>

                  <div className="grid md:grid-cols-2 gap-6">
                    {certificates.map((cert, i) => (
                      <div
                        key={i}
                        className="bg-white/5 border border-white/10 rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition duration-300 cursor-pointer"
                        onClick={() => setSelectedCert(cert)}
                      >
                        <img
                          src={cert.image}
                          alt={cert.title}
                          className="w-full h-48 object-cover border-b border-white/10"
                        />
                        <div className="p-4">
                          <h3 className="text-lg font-bold text-white">{cert.title}</h3>
                          <p className="text-sm text-gray-400">{cert.platform}</p>
                          <p className="text-xs text-gray-500 mt-1">{cert.date}</p>
                        </div>
                      </div>
                    ))}
                  </div>

                  {selectedCert && (
                    <div className="fixed inset-0 z-50 bg-black/70 backdrop-blur-sm flex items-center justify-center p-4">
                      <div className="bg-white/10 border border-white/20 rounded-xl max-w-3xl w-full relative overflow-hidden">
                        <button
              className="absolute top-4 right-4 bg-white hover:bg-gray-200 text-black rounded-full p-1 shadow"
              onClick={() => setSelectedCert(null)}
            >
              <X className="w-5 h-5" />
            </button>
              <img src={selectedCert.image} alt={selectedCert.title} className="w-full max-h-[70vh] object-contain" />
              <div className="p-4">
                <h3 className="text-xl font-bold text-white">{selectedCert.title}</h3>
                <p className="text-sm text-gray-400">{selectedCert.platform}</p>
                <p className="text-xs text-gray-500">{selectedCert.date}</p>
              </div>      
                </div>
              </div>
              )}
          </div>
              )

      case "stats":
        return (
          <div className="space-y-6">
            <div className="text-center">
              <h2 className="text-3xl font-bold text-white mb-4">My Statistics</h2>
              <p className="text-gray-400">Numbers that tell my story</p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                {
                  icon: TrendingUp,
                  label: "Projects Completed",
                  value: "5+",
                  color: "text-green-400",
                  description: "Successful deliveries",
                },
                // {
                //   icon: Users,
                //   label: "Happy Clients",
                //   value: "25+",
                //   color: "text-blue-400",
                //   description: "Satisfied customers",
                // },
                {
                  icon: Award,
                  label: "Awards Won",
                  value: "5",
                  color: "text-yellow-400",
                  description: "Recognition received",
                },
                {
                  icon: Code,
                  label: "Lines of Code",
                  value: "100K+",
                  color: "text-purple-400",
                  description: "Code written",
                },
                {
                  icon: Target,
                  label: "Success Rate",
                  value: "98%",
                  color: "text-red-400",
                  description: "Project success",
                },
                {
                  icon: Calendar,
                  label: "Years Experience",
                  value: "1+",
                  color: "text-cyan-400",
                  description: "Professional journey",
                },
              ].map((stat, index) => (
                <div
                  key={index}
                  className="bg-white/5 rounded-2xl p-6 text-center hover:bg-white/10 transition-all duration-300"
                >
                  <div
                    className={`w-16 h-16 mx-auto mb-4 ${stat.color} bg-white/10 rounded-2xl flex items-center justify-center`}
                  >
                    <stat.icon className="w-8 h-8" />
                  </div>
                  <div className="text-3xl font-bold text-white mb-2">{stat.value}</div>
                  <div className="text-lg font-semibold text-gray-300 mb-1">{stat.label}</div>
                  <div className="text-sm text-gray-400">{stat.description}</div>
                </div>
              ))}
            </div>

            {/* <div className="bg-white/5 rounded-2xl p-6">
              <h3 className="text-xl font-bold text-white mb-4">Achievement Timeline</h3>
              <div className="space-y-4">
                {[
                  { year: "2024", achievement: "Reached 50+ completed projects milestone" },
                  { year: "2023", achievement: "Won 'Best Developer' award at TechCorp" },
                  { year: "2022", achievement: "Promoted to Senior Full Stack Developer" },
                  { year: "2021", achievement: "Led first major project with 10K+ users" },
                  { year: "2020", achievement: "Joined startup as Full Stack Developer" },
                  { year: "2019", achievement: "Started professional development career" },
                ].map((item, index) => (
                  <div key={index} className="flex items-center">
                    <div className="w-16 text-cyan-400 font-bold text-sm">{item.year}</div>
                    <div className="w-2 h-2 bg-cyan-400 rounded-full mx-4"></div>
                    <div className="text-gray-300">{item.achievement}</div>
                  </div>
                ))}
              </div>
            </div> */}
          </div>
        )

      case "quote":
        return (
          <div className="space-y-6">
            <div className="text-center">
              <h2 className="text-3xl font-bold text-white mb-4">My Philosophy</h2>
              <p className="text-gray-400">Words that guide my work and life</p>
            </div>

            <div className="space-y-6">
              {[
                {
                  quote: "Code is poetry written in the language of logic.",
                  author: "My coding philosophy",
                  context: "This reflects my belief that programming is both an art and a science.",
                },
                {
                  quote: "The best code is not just functional, but beautiful and maintainable.",
                  author: "On clean code",
                  context: "Quality over quantity has always been my approach to development.",
                },
                {
                  quote: "Every bug is an opportunity to learn something new.",
                  author: "On problem solving",
                  context: "I see challenges as stepping stones to growth and improvement.",
                },
                {
                  quote: "Great software is built by people who care deeply about the craft.",
                  author: "On craftsmanship",
                  context: "Passion and attention to detail make all the difference.",
                },
              ].map((item, index) => (
                <div key={index} className="bg-white/5 rounded-2xl p-6 hover:bg-white/10 transition-all duration-300">
                  <div className="flex items-start">
                    <Quote className="w-8 h-8 text-gray-400 mr-4 mt-1 flex-shrink-0" />
                    <div className="flex-1">
                      <p className="text-white font-medium text-lg leading-relaxed mb-4">"{item.quote}"</p>
                      <div className="flex items-center justify-between">
                        <p className="text-gray-400 text-sm">- {item.author}</p>
                        <Heart className="w-4 h-4 text-red-400" />
                      </div>
                      <p className="text-gray-500 text-sm mt-2 italic">{item.context}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="bg-gradient-to-r from-purple-500/10 to-cyan-500/10 rounded-2xl p-6 border border-purple-500/20">
              <h3 className="text-xl font-bold text-white mb-4">Core Values</h3>
              <div className="grid md:grid-cols-2 gap-4">
                {[
                  { value: "Innovation", description: "Always seeking new and better ways to solve problems" },
                  { value: "Quality", description: "Never compromising on the standard of work delivered" },
                  { value: "Learning", description: "Continuously growing and adapting to new technologies" },
                  { value: "Collaboration", description: "Believing that great things are built together" },
                ].map((item, index) => (
                  <div key={index} className="flex items-start">
                    <div className="w-2 h-2 bg-purple-400 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                    <div>
                      <div className="text-white font-semibold">{item.value}</div>
                      <div className="text-gray-400 text-sm">{item.description}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )

      default:
        return (
          <div className="text-center py-12">
            <h2 className="text-2xl font-bold text-white mb-4">Content Coming Soon</h2>
            <p className="text-gray-400">This section is under development. Check back soon!</p>
          </div>
        )
    }
  }

  return (
    <div
      className={`fixed inset-0 z-50 flex items-center justify-center p-4 transition-all duration-500 ${
        isVisible ? "opacity-100" : "opacity-0"
      }`}
    >
      <div className="absolute inset-0 bg-black/80 backdrop-blur-sm" onClick={onClose} />

      <div
        className={`relative max-w-6xl w-full max-h-[90vh] overflow-y-auto bg-black/40 backdrop-blur-xl border border-white/20 rounded-3xl shadow-2xl transition-all duration-500 ${
          isVisible ? "scale-100 translate-y-0" : "scale-95 translate-y-10"
        }`}
      >
        <div className="sticky top-0 bg-black/60 backdrop-blur-xl border-b border-white/10 p-6 flex justify-between items-center">
          <h2 className="text-2xl font-bold text-white">{card.title}</h2>
          <Button
            variant="ghost"
            size="icon"
            onClick={onClose}
            className="text-gray-400 hover:text-white hover:bg-white/10 rounded-xl"
          >
            <X className="w-6 h-6" />
          </Button>
        </div>

        <div className="p-6">{getModalContent()}</div>
      </div>
    </div>
  )
}
