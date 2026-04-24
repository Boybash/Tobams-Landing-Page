Tobams Group - Tech Talent & Consultancy Platform
A responsive, high-performance web application built for Tobams Group, an innovative consultancy firm focused on tech talent development in Africa. This project bridges the gap between UI/UX design and functional business requirements for fintech, PropTech, and e-commerce logic.

🚀 Features
Responsive Navigation: A mobile-first navbar with a functional hamburger menu and desktop dropdowns.

Dynamic Testimonials: A custom pagination system (1 item per page) allowing users to cycle through client feedback seamlessly.

Corporate MDP Section: A dedicated Management Development Program section designed with high-impact visuals and balanced text layouts.

Modern Footer: A multi-section, responsive footer including CTA sections, site links, and office locations (UK & Nigeria).

Optimized Performance: Built with Next.js using optimized fonts (Nunito & Nunito Sans) and images for fast load times.

🛠️ Tech Stack
Framework: Next.js (App Router)

Styling: Tailwind CSS v4

Icons & Images: Next/Image for optimized lazy loading.

State Management: React Hooks (useState) for UI interactivity.

📁 Project Structure
Plaintext
├── app/
│ ├── layout.tsx # Global fonts (Nunito), metadata, and root structure
│ ├── page.tsx # Landing page assembly
│ └── globals.css # Tailwind v4 configuration and global variables
├── components/
│ ├── layout/
│ │ ├── navbar.tsx # Responsive navigation logic
│ │ └── footer.tsx # Comprehensive site footer
│ ├── sections/ <-- New Folder
│ │ ├── hero.tsx
│ │ ├── consultant.tsx
│ │ ├── introduction.tsx
│ │ ├── management.tsx
│ │ ├── program.tsx
│ │ └── transformation-hub.tsx
│ ├── ui/
│ │ └── button.tsx # Reusable UI button component
└── public/ # Optimized brand assets and icons

⚙️ Installation
Clone the repository:
Bash
git clone https://github.com/your-username/tobams-group.git

Install dependencies:
Bash
npm install

Run the development server:
Bash
npm run dev

Build for production:
Bash
npm run build

🎨 Design Implementation Notes
Color Palette: Primarily uses deep plum (#571244), vibrant red (#EF4353), and dark charcoal (#11040E) for a professional corporate look.

Typography: Implemented Nunito for headings and Nunito Sans for body text to ensure readability and modern aesthetics.

Accessibility: Focus on semantic HTML and responsive layouts that adapt from mobile (375px) to ultra-wide (1440px+).

This is the figma design: https://www.figma.com/design/wuqCLkK1feTgB6xxSRRwZu/Frontend-Intern-Assessment?node-id=0-1&p=f&t=qxnAKp4Ael8QtLYz-0

This is the Website Link: https://tobamslanding.netlify.app/

About the Developer
Bashir Toheeb Ibidapo Frontend Developer with a background in Philosophy, specializing in building accessible, mobile-first web applications using the React ecosystem.
