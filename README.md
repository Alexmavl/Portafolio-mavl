# 🌟 Portafolio Profesional — Marvin Alexander Vásquez López

Este proyecto fue desarrollado con **Vite + React** y está diseñado para presentar mi portafolio profesional de forma moderna, interactiva y completamente responsivo, con animaciones fluidas y efectos visuales premium.

🚀 **[🌐 VER PORTAFOLIO EN VIVO](https://marvinvasquezdev.netlify.app)** 

![Portafolio Preview](https://img.shields.io/badge/Status-Live-brightgreen) ![React](https://img.shields.io/badge/React-18+-blue) ![Vite](https://img.shields.io/badge/Vite-5+-646CFF) ![Tailwind](https://img.shields.io/badge/Tailwind-3+-38BDF8)

## 🚀 Stack Tecnológico

### Frontend Core
- **⚡ Vite 5+** – Build tool ultrarrápido con HMR instantáneo
- **⚛️ React 18+** – Biblioteca principal con hooks modernos
- **📘 TypeScript** – Tipado estático para mejor desarrollo
- **🎨 Tailwind CSS 3+** – Framework CSS utility-first con configuración personalizada

### Librerías Especializadas
- **✨ Framer Motion** – Animaciones avanzadas y transiciones fluidas
- **🎯 React Icons** – Iconografía vectorial (FaLinkedin, FaGithub, FaCode, etc.)
- **🌈 Gradient Animations** – Gradientes animados y efectos glassmorphism
- **📱 Responsive Design** – Mobile-first approach con breakpoints optimizados

### Efectos Visuales Implementados
- **🔮 Glassmorphism** – Efectos de cristal con `backdrop-blur-md`
- **💫 Parallax Scrolling** – Desplazamiento suave entre secciones
- **🎪 Micro-interactions** – Hover effects y animaciones de estado
- **⚡ Lazy Loading** – Carga optimizada de componentes
- **🌊 Fluid Animations** – Transiciones con spring physics

### Herramientas de Desarrollo
- **🔧 ESLint** – Linting y calidad de código
- **🎯 Hot Module Replacement** – Desarrollo en tiempo real
- **📦 Tree Shaking** – Optimización automática de bundles
- **🌐 Git & GitHub** – Control de versiones
- **🚀 Netlify** – CI/CD automático y despliegue

## ✨ Características Destacadas

- 🎯 **Diseño Premium**: Interface moderna con efectos glassmorphism y gradientes animados
- ⚡ **Performance Superior**: Carga en <2s gracias a Vite y optimizaciones
- 📱 **Mobile-First**: Completamente responsivo desde 320px hasta 4K
- 🎪 **Animaciones Fluidas**: Transiciones con Framer Motion y spring physics  
- 🔮 **Efectos Visuales**: Auras animadas, blur effects y micro-interactions
- ♿ **Accesibilidad**: Navegación por teclado y screen readers
- 🌙 **Experiencia Inmersiva**: Scroll suave y lazy loading inteligente
- 🚀 **Auto-Deploy**: CI/CD automático con cada push

## 📋 Requisitos del Sistema

```bash
Node.js: >= 18.0.0 (recomendado LTS)
npm: >= 8.0.0
Git: >= 2.25.0
```

**Navegadores soportados:**
- Chrome 90+, Firefox 88+, Safari 14+, Edge 90+

## 🛠️ Instalación y Configuración

### 1️⃣ Clonar el Repositorio

```bash
git clone https://github.com/Alexmavl/Portafolio-mavl.git
cd Portafolio-mavl
```

### 2️⃣ Instalar Dependencias

```terminal
# Instalar todas las dependencias
npm install

```

### 3️⃣ Ejecutar en Desarrollo

```terminal
npm run dev
```

🌟 **El proyecto estará disponible en:** `http://localhost:5173`

> 💡 **Hot Reload activado** - Los cambios se reflejan instantáneamente

 4️⃣ 

## 🌐 Despliegue en Netlify

**🔗 Sitio en producción:** [marvinvasquezdev.netlify.app](https://marvinvasquezdev.netlify.app)


### Para tu propio deployment:

1. **📤 Fork el repositorio**
2. **🔗 Conectar con Netlify** → [netlify.com](https://netlify.com)
3. **⚙️ Build settings:**
   - Build command: `npm run build`
   - Publish directory: `dist`
4. **🚀 Deploy automático** con cada push a `main`

## 📁 Arquitectura del Proyecto


## 🎨 Configuración de Tailwind CSS

```javascript
// tailwind.config.js
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        inter: ['Inter', 'sans-serif'],
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic': 'conic-gradient(var(--tw-gradient-stops))',
      },
      animation: {
        'fade-in': 'fadeIn 1s ease-out forwards',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: 0 },
          '100%': { opacity: 1 },
        },
      },
    },
  },
  plugins: [],
}
```

## ✨ Animaciones con Framer Motion

### Ejemplo de implementación del Hero:

```tsx
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      duration: 0.6,
      staggerChildren: 0.2,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { duration: 0.9, ease: "easeOut" }
  },
};
```

### Efectos visuales únicos:
- 🔮 **Aura animada** en foto de perfil
- ⚡ **Glassmorphism** con `backdrop-blur-md`
- 🌊 **Spring physics** en interacciones
- 💫 **Staggered animations** en elementos

## 👨‍💻 Sobre el Desarrollador

**Marvin Alexander Vásquez López**
- 🎓 **Estudiante de Ingeniería en Sistemas**
- 💼 **Desarrollador Junior Full Stack**
- 🌍 **Ubicación:** Guazacapán, Santa Rosa, Guatemala
- 📧 **Email:** marvinv708@gmail.com

### 🔗 Enlaces Profesionales:
- 🌐 **Portafolio:** [marvinvasquezdev.netlify.app](https://marvinvasquezdev.netlify.app)
- 💼 **LinkedIn:** [linkedin.com/in/marvin-vasquez-27557397](https://www.linkedin.com/in/marvin-vasquez-27557397/)
- 🐱 **GitHub:** [@Alexmavl](https://github.com/Alexmavl)
- 📘 **Facebook:** [facebook.com/alexito.vasquez1](https://www.facebook.com/alexito.vasquez1/)

### 🛠️ Especialidades Técnicas:
- **Frontend:** React, TypeScript, Tailwind CSS
- **Herramientas:** Git, Visual Studio, VS Code

## 🎯 Funcionalidades del Portafolio

### 🏠 Sección Hero
- Presentación personal con foto animada
- Enlaces a redes sociales con hover effects
- Call-to-action con scroll suave
- Información de contacto interactiva

### 📋 Sobre Mí
- Historia profesional y académica
- Skills técnicos con progress bars animados
- Experiencia en gestión empresarial


### 📞 Contacto
- Formulario funcional de contacto
- Integración con servicios de email
- Información de ubicación

## 📊 Métricas de Performance

```
🚀 Lighthouse Score:
┌─────────────────┬───────┐
│ Performance     │  95+  │
│ Accessibility   │  100  │
│ Best Practices  │  95+  │
│ SEO            │  100  │
└─────────────────┴───────┘

⚡ Core Web Vitals:
• LCP: < 1.5s
• FID: < 100ms  
• CLS: < 0.1
```

### 📝 Guías de contribución:
- Usa commits descriptivos con emojis
- Mantén el estilo de código consistente
- Incluye tests si es necesario
- Actualiza documentación si aplica

## 📞 Soporte y Contacto

¿Preguntas, sugerencias o colaboraciones?
- 📧 **Email:** [marvinv708@gmail.com](mailto:marvinv708@gmail.com)
- 🌐 **Portafolio:** [Contacto directo](https://marvinvasquezdev.netlify.app)


## 🔄 Estado del Proyecto

- ✅ **En desarrollo activo**
- 🚀 **Deployed en Netlify**
- 🔄 **Actualizaciones **
- 📈 **Optimización continua**

---

<div align="center">

⭐ **¡Si te gusta este proyecto, dale una estrella!** ⭐


*Desarrollado con ❤️ y mucho ☕ por **Marvin Vásquez** en Guatemala* 🇬🇹

</div>
