import { PersonalInfo, Project, Skill } from '../types';

export const personalInfo: PersonalInfo = {
  name: "Eymen Ali Şahin",
  title: "Full Stack Geliştirici",
  email: "eymensahin167@gmail.com",
  secondaryEmail: "eyshnsoftware@gmail.com",
  phone: "+90 XXX XXX XX XX",
  location: "İstanbul, Türkiye",
  bio: "Modern web teknolojilerinde uzmanlığa sahip tutkulu bir full-stack geliştiriciyim. Yenilikçi çözümler üretmeyi ve yeni teknolojiler öğrenmeyi seviyorum.",
  linkedin: "https://www.linkedin.com/in/eymen-ali-%C5%9Fahin/",
  instagram: "https://www.instagram.com/_eymns_/"
};

export const skills: Skill[] = [
  { name: "React", level: 90, category: "frontend" },
  { name: "TypeScript", level: 85, category: "frontend" },
  { name: "Next.js", level: 80, category: "frontend" },
  { name: "Node.js", level: 85, category: "backend" },
  { name: "Python", level: 75, category: "backend" },
  { name: "PostgreSQL", level: 80, category: "backend" },
  { name: "Docker", level: 70, category: "tools" },
  { name: "AWS", level: 65, category: "tools" },
  { name: "Figma", level: 75, category: "design" },
  { name: "Arduino", level: 85, category: "tools" },
  { name: "C++", level: 75, category: "backend" },
  { name: "IoT", level: 80, category: "tools" },
];

export const projects: Project[] = [
  {
    id: 1,
    title: "E-Ticaret Platformu",
    description: "React ve Node.js ile oluşturulmuş modern e-ticaret platformu",
    technologies: ["React", "Node.js", "PostgreSQL", "Stripe"],
    image: "https://images.pexels.com/photos/230544/pexels-photo-230544.jpeg?auto=compress&cs=tinysrgb&w=600",
    liveUrl: "https://example.com",
    githubUrl: "https://github.com/yourusername/project"
  },
  {
    id: 2,
    title: "Görev Yönetim Uygulaması",
    description: "Gerçek zamanlı güncellemelerle işbirlikçi görev yönetim uygulaması",
    technologies: ["Next.js", "TypeScript", "Prisma", "Socket.io"],
    image: "https://images.pexels.com/photos/3183153/pexels-photo-3183153.jpeg?auto=compress&cs=tinysrgb&w=600",
    liveUrl: "https://example.com",
    githubUrl: "https://github.com/yourusername/project"
  },
  {
    id: 3,
    title: "Yapay Zeka Sohbet Uygulaması",
    description: "Modern arayüze sahip yapay zeka destekli akıllı sohbet uygulaması",
    technologies: ["React", "Python", "FastAPI", "OpenAI"],
    image: "https://images.pexels.com/photos/8386440/pexels-photo-8386440.jpeg?auto=compress&cs=tinysrgb&w=600",
    liveUrl: "https://example.com",
    githubUrl: "https://github.com/yourusername/project"
  },
  {
    id: 4,
    title: "Akıllı Ev Otomasyonu",
    description: "Sensörler ve uzaktan kontrol yetenekleriyle Arduino tabanlı akıllı ev sistemi",
    technologies: ["Arduino", "C++", "IoT", "Sensörler"],
    image: "https://images.pexels.com/photos/106399/pexels-photo-106399.jpeg?auto=compress&cs=tinysrgb&w=600",
    liveUrl: "https://example.com/smart-home",
    githubUrl: "https://github.com/yourusername/smart-home"
  },
  {
    id: 5,
    title: "Hava Durumu İzleme İstasyonu",
    description: "Çevresel verileri toplayan ve gösteren Arduino hava durumu istasyonu",
    technologies: ["Arduino", "Sensörler", "Veri Görselleştirme", "C++"],
    image: "https://images.pexels.com/photos/1118873/pexels-photo-1118873.jpeg?auto=compress&cs=tinysrgb&w=600",
    liveUrl: "https://example.com/weather-station",
    githubUrl: "https://github.com/yourusername/weather-station"
  }
];