# Pavan Dube - Portfolio Website

A modern, fully responsive portfolio website built with React.js and Tailwind CSS, featuring smooth animations and a professional design.

## 🚀 Features

- **Fully Responsive** - Works seamlessly on mobile, tablet, and desktop
- **Smooth Animations** - Powered by Framer Motion for engaging user experience
- **Modern UI/UX** - Clean, professional design with glassmorphism effects
- **Performance Optimized** - Fast loading and smooth interactions
- **SEO Friendly** - Proper semantic HTML structure

## 🛠️ Tech Stack

- **React.js** - UI library
- **Vite** - Build tool and dev server
- **Tailwind CSS** - Utility-first CSS framework
- **Framer Motion** - Animation library
- **Lucide React** - Icon library

## 📦 Installation

1. Clone or navigate to the project directory:
```bash
cd portfolio
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

4. Open your browser and visit `http://localhost:5173`

## 🏗️ Build for Production

To create a production build:

```bash
npm run build
```

The build files will be in the `dist` directory, ready to be deployed to any static hosting service.

## 📁 Project Structure

```
portfolio/
├── src/
│   ├── components/
│   │   ├── Navbar.jsx
│   │   ├── Hero.jsx
│   │   ├── About.jsx
│   │   ├── Skills.jsx
│   │   ├── Projects.jsx
│   │   ├── Experience.jsx
│   │   ├── Contact.jsx
│   │   └── Footer.jsx
│   ├── App.jsx
│   ├── main.jsx
│   └── index.css
├── public/
├── index.html
├── tailwind.config.js
├── postcss.config.js
└── package.json
```

## 🎨 Customization

### Adding New Projects

Edit `src/components/Projects.jsx` and add a new project object to the `projects` array:

```javascript
{
  id: 4,
  name: 'Project Name',
  description: 'Project description',
  url: 'https://project-url.com',
  tech: ['React.js', 'Node.js'],
  featured: false,
  image: 'project-image-url',
}
```

### Changing Colors

Edit `tailwind.config.js` to customize the color scheme. The current theme uses blue and purple gradients.

### Updating Personal Information

Update the following files with your information:
- `src/components/Hero.jsx` - Name and role
- `src/components/About.jsx` - About section content
- `src/components/Contact.jsx` - Contact information
- `src/components/Footer.jsx` - Footer information

## 🚀 Deployment

This portfolio can be deployed to various platforms:

- **Vercel**: `vercel deploy`
- **Netlify**: Drag and drop the `dist` folder
- **GitHub Pages**: Use GitHub Actions or deploy manually
- **Any static hosting**: Upload the `dist` folder contents

## 📝 License

This project is open source and available for personal use.

---

Built with ❤️ by Pavan Dube
