import type { ReactElement } from "react";
import {
  CodeIcon,
  DatabaseIcon,
  TasksIcon,
} from "./components/Icons";
import { FaLinkedin, FaFacebook, FaGithub, FaWhatsapp, FaReact, FaNodeJs, FaDatabase } from "react-icons/fa";
import { SiSharp, SiDotnet, SiJavascript, SiTypescript, SiTailwindcss, SiMysql } from "react-icons/si";

export interface Project {
  id: string;
  titulo: string;
  subtitulo: string;
  descripcion: string;
  tecnologias: string[];
  icono: ReactElement;
  imagen: string;
  color: string;
  github?: string;
  deploy?: string;
}

export const proyectos: Project[] = [
  {
    id: "porta-tareas",
    titulo: "Portafolio Tareas",
    subtitulo: "TypeScript - Tareas",
    descripcion: `Recopilación de tareas de la Clase Desarrollo Web.`,
    tecnologias: ["React", "TypeScript", "Tailwindcss"],
    icono: <CodeIcon />,
    imagen: "/proyectos/PortaTareas.png",
    color: "from-purple-500 to-pink-500",
    github: "https://github.com/Alexmavl/Portafolio-Tareas",
    deploy: "https://portafolio-tareas.vercel.app",
  },
  {
    id: "poke-api",
    titulo: "API Pokemón",
    subtitulo: "C# - Consumo de API",
    descripcion: `Aplicación que consume la API de Pokemón para mostrar información detallada de diferentes pokemones con interfaz moderna y responsiva.`,
    tecnologias: ["React", "TypeScript", "Tailwindcss"],
    icono: <CodeIcon />,
    imagen: "/proyectos/poke-api.png",
    color: "from-purple-500 to-pink-500",
    github: "https://github.com/Alexmavl/poke-api",
  },
  {
    id: "metodos-numericos",
    titulo: "Métodos Numéricos",
    subtitulo: "C# - Equipo de desarrollo",
    descripcion: `Resuelve métodos como Newton-Raphson, Secante, Müller y Gauss Jordan. Inicio de sesión con contraseñas encriptadas y menús interactivos.`,
    tecnologias: ["C#", "Encriptación", "UI/UX"],
    icono: <CodeIcon />,
    imagen: "/proyectos/metodos-numericos.png",
    color: "from-purple-500 to-pink-500",
    github: "https://github.com/Alexmavl/Proyecto-de-M-todos-Numericos-",
  },
  {
    id: "sistema-juridico",
    titulo: "Sistema Jurídico",
    subtitulo: "MVC - .NET Framework",
    descripcion: `Aplicación MVC para gestionar clientes y casos legales. CRUD completo con base de datos en SQL Server y panel administrativo.`,
    tecnologias: ["C#", ".NET MVC", "SQL Server"],
    icono: <DatabaseIcon />,
    imagen: "/proyectos/sistema-juridico.png",
    color: "from-blue-500 to-cyan-500",
    github: "https://github.com/Alexmavl/SistemaGabinete",
  },
  {
    id: "gestor-tareas",
    titulo: "Gestor de Tareas",
    subtitulo: ".NET Core 9 - Kanban",
    descripcion: `Tablero Kanban para organizar tareas, arrastrarlas entre estados y asignarlas a diferentes usuarios. Gestión completa de usuarios y proyectos.`,
    tecnologias: [".NET Core 9", "SQL Server", "Kanban"],
    icono: <TasksIcon />,
    imagen: "/proyectos/gestor-tareas.png",
    color: "from-green-500 to-teal-500",
    github: "https://github.com/Alexmavl/APITareas",
  },
];

export const navItems = [
  { label: "Inicio", href: "#inicio" },
  { label: "Sobre Mí", href: "#sobre-mi" },
  { label: "Proyectos", href: "#proyectos" },
  { label: "Contacto", href: "#contacto" },
];

export const socialLinks = [
  {
    name: "LinkedIn",
    icon: <FaLinkedin />,
    url: "https://www.linkedin.com/in/marvin-vasquez-27557397/",
    color: "#0077B5",
    hoverColor: "#005582",
    bgGradient: "from-blue-600 to-blue-700"
  },
  {
    name: "Facebook",
    icon: <FaFacebook />,
    url: "https://www.facebook.com/alexito.vasquez1/",
    color: "#1877F2",
    hoverColor: "#166FE5",
    bgGradient: "from-blue-500 to-blue-600"
  },
  {
    name: "GitHub",
    icon: <FaGithub />,
    url: "https://github.com/Alexmavl",
    color: "#333",
    hoverColor: "#24292e",
    bgGradient: "from-gray-700 to-gray-800"
  },
  {
    name: "WhatsApp",
    icon: <FaWhatsapp />,
    url: "https://wa.me/50233585075?text=Hola%20Marvin%2C%20vi%20tu%20portafolio%20y%20me%20gustaría%20contactarte.",
    color: "#25D366",
    hoverColor: "#128C7E",
    bgGradient: "from-green-500 to-green-600"
  }
];

export const techStack = [
  {
    name: "C#",
    icon: <SiSharp />,
    color: "text-purple-400",
    borderColor: "hover:border-purple-400/50"
  },
  {
    name: ".NET",
    icon: <SiDotnet />,
    color: "text-blue-300",
    borderColor: "hover:border-blue-300/50"
  },
  {
    name: "JavaScript",
    icon: <SiJavascript />,
    color: "text-yellow-400",
    borderColor: "hover:border-yellow-400/50"
  },
  {
    name: "TypeScript",
    icon: <SiTypescript />,
    color: "text-blue-400",
    borderColor: "hover:border-blue-400/50"
  },
  {
    name: "React",
    icon: <FaReact />,
    color: "text-cyan-400",
    borderColor: "hover:border-cyan-400/50"
  },
  {
    name: "Tailwind",
    icon: <SiTailwindcss />,
    color: "text-sky-400",
    borderColor: "hover:border-sky-400/50"
  },
  {
    name: "Node.js",
    icon: <FaNodeJs />,
    color: "text-green-500",
    borderColor: "hover:border-green-500/50"
  },
  {
    name: "SQL Server",
    icon: <FaDatabase />,
    color: "text-red-400",
    borderColor: "hover:border-red-400/50"
  },
  {
    name: "MySQL",
    icon: <SiMysql />,
    color: "text-teal-400",
    borderColor: "hover:border-teal-400/50"
  }
];
