import image28 from '../assets/image28.png'
import image30 from '../assets/image30.png'
import image31 from '../assets/image31.png'
import image73 from '../assets/image73.png'
import image74 from '../assets/image74.png'
import image75 from '../assets/image75.png'
import image76 from '../assets/image76.png'
import image79 from '../assets/image79.png'
import image80 from '../assets/image80.png'
import graph from '../assets/SpiderGraph.png'
import interview from "../assets/OnlineInterview.png"
import slack from "../assets/SlackConversation.png"
import hr from "../assets/04_HRChecklist.png"
import card1 from "../assets/4115.png"
import card2 from "../assets/4116.png"
import card3 from "../assets/4117.png"
import quote1 from "../assets/quote1.png"
import quote2 from "../assets/quote2.png"
import quote3 from "../assets/quote3.png"
import backgroundBlue from "../assets/BackgroundBlue.png"
import backgroundYellow from "../assets/BackgroundYellow.png"
import mathew from "../assets/mathew.png"
import rose from "../assets/rose.png"


export const data = [
  image28,
  image30,
  image31,
  image74,
  image75,
  image76,
  image79,
  image80,
  image73,
]

export const data2 = [
  {
    id: 1,
    img: graph,
    title: "Quality you can count on",
    content: <p>Our intensive screening process admits <strong>only the top 2%</strong> of STEM graduates, assessed across technical skills, soft skills, and growth mindset</p>,
    hrefLink: "",
    linkName: "why Tana",
    right: true,
    activeBtn: false,
  },
  {
    id: 2,
    img: interview,
    title: "Full control over hiring",
    content: <p>We’ll present finalists to interview and <strong>you choose exactly who to bring onboard</strong> interview and you choose exactly who to bring onboard. Talent is 100% dedicated to you and fully embedded into your team</p>,
    hrefLink: "",
    linkName: "How it works",
    right: false,
    activeBtn: false,
  },
  {
    id: 3,
    img: slack,
    title: "Hit the ground running",
    content: <p>We provide hands-on training in the fundamentals for the job & global business culture, so that your <strong>talent is ready to go on day one</strong>.</p>,
    hrefLink: "",
    linkName: "Our roles",
    right: true,
    activeBtn: false,
  },
  {
    id: 4,
    img: hr,
    title: "No admin, no stress",
    content: <p>We handle all the ins-and-outs of hiring abroad, <strong>so you can focus on building</strong></p>,
    hrefLink: "",
    linkName: "Get Started",
    right: false,
    activeBtn: true,
  }
  
]

export const cards = [
  {
    id: 1,
    img: card3,
    img2: quote1,
    content: "Adriana’s done fantastic work. She’s so proactive I just explain what we need, and she comes back with the solution.",
    managerName: "Johanna Strutzenberger",
    position: "Head of Engineering, LEVY Health",
  },
  {
    id: 2,
    img: card2,
    img2: quote2,
    content: "Adriana’s done fantastic work. She’s so proactive I just explain what we need, and she comes back with the solution.",
    managerName: "Johanna Strutzenberger",
    position: "Head of Engineering, LEVY Health",
  },
  {
    id: 3,
    img: card1,
    img2: quote3,
    content: "Adriana’s done fantastic work. She’s so proactive I just explain what we need, and she comes back with the solution.",
    managerName: "Johanna Strutzenberger",
    position: "Head of Engineering, LEVY Health",
  },
]

export const featuredProfiles = [
  {
    name: "Mathew",
    job: "QA Engineer",
    education: "BSc in Information Technology",
    companyHq: "San Francisco, USA",
    hobbies: "Music, Hiking",
    img: mathew,
    techSkills: ["Python", "Java", "C++", "JavaScript", "React", "Node.js", "HTML", "CSS", "SQL", "MongoDB", "Git", "AWS"],
    profile: "Mathew is a QA Engineer with 2 years of experience in the field. He has a BSc in Computer Science and is currently working as a QA Engineer at a startup in San Francisco. He is looking for a new challenge and is open to relocation.",
    card: backgroundBlue,
    findLink: "",
    fontColorwhite: true 
  },
  {
    name: "Rose",
    job: "Software Engineer",
    education: "BSc in Computer Science",
    companyHq: "Bangalore, India",
    hobbies: "Biking, Hiking, camping",
    img: rose,
    techSkills: ["Python", "Java", "C++", "JavaScript", "React", "Node.js", "HTML", "CSS", "SQL", "MongoDB", "Git", "AWS"],
    profile: "Rose is a Software Engineer with 2 years of experience in the field. She has a BSc in Computer Science and is currently working as a Software Engineer at a startup in Bangalore. She is looking for a new challenge and is open to relocation.",
    card: backgroundYellow,
    findLink: "",
    fontColorwhite: false
  }
]

export const devTools = [
  "HTML",
  "CSS",
  "JavaScript",
  "React",
  "Angular",
  "Vue.js",
  "Svelte",
  "Bootstrap",
  "TypeScript",
  "Sass",
  "Redux",
  "Webpack",
  "Node.js",
  "Express.js",
  "Django",
  "Flask",
  "Ruby on Rails",
  "ASP.NET",
  "Laravel (PHP)",
  "Spring Boot (Java)",
  "GraphQL",
  "RESTful APIs",
  "MySQL",
  "PostgreSQL",
  "MongoDB",
  "Redis",
  "SQLite",
  "MariaDB",
  "Oracle",
  "Microsoft SQL Server",
  "Firebase",
  "Couchbase",
  "React Native",
  "Flutter",
  "Swift (iOS)",
  "Kotlin (Android)",
  "Xamarin",
  "PhoneGap/Cordova",
  "NativeScript",
  "Ionic",
  "Docker",
  "Kubernetes",
  "Jenkins",
  "GitLab CI/CD",
  "Travis CI",
  "CircleCI",
  "Ansible",
  "Docker Compose",
  "SonarQube",
  "Gradle",
  "Apache Maven",
]
