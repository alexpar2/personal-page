export const profile = {
  name: 'Alejandro Pérez Argüello',
  role: 'Data Scientist and Computer Engineer',
  intro:
    "Hello! I'm Alex, a passionate data scientist and computer engineer with a strong background in full-stack development, AI, and data engineering. I have experience working in the cybersecurity industry and a proven track record of developing innovative solutions to complex problems. I'm always eager to learn new technologies and take on challenging projects that allow me to grow both personally and professionally.",
};

export const projects = [
  {
    title: 'News Analyzer',
    subtitle: "Bachelor's Final Thesis · Jun. 2025",
    description:
      'Dockerized web application that extracts data from Reddit (PRAW) and the Google News API and performs topic, sentiment and disinformation analysis using a naive Bayes classifier and zero-shot LLMs (GPT-4 API).',
    youtubeId: 'wjrkNxGkhR4',
  },
  {
    title: 'WhatsApp Analyzer',
    subtitle: 'Personal project · Jul. 2025',
    description:
      'A tool that transforms a WhatsApp chat export into an interactive visualization that tracks all types of statistics about the users and their conversations. Built with Python (Pandas/NLTK), it generates interactive HTML reports. Currently working on turning it into a mobile app.',
    image: {
      src: '/whatsapp-analyzer.webp',
      alt: 'WhatsApp Analyzer report showing message statistics and charts per chat participant',
      width: 1200,
      height: 508,
    },
  },
];

export const experience = [
  {
    title: 'Software Engineering + Data Engineering Intern',
    org: 'Constella Intelligence',
    orgUrl: 'https://www.linkedin.com/company/constella/',
    place: 'Granada, Spain',
    dates: 'Oct. 2024 – May 2025',
    points: [
      "Worked on a Docker multi-container proprietary web tool (Vue) which implemented and supervised an Apache Airflow ETL pipeline that processes the world's largest breach data lake.",
      'Developed Python data mining scripts for multi-format leaks from the deep web (RegEx, pandas).',
    ],
  },
];

export const education = [
  {
    title: 'Master in Data Science and Computer Engineering',
    org: 'University of Granada',
    dates: 'Expected Jun. 2026',
    points: ['Thesis (ongoing): textual and contextual credibility analysis in Reddit using Machine Learning.'],
  },
  {
    title: 'B.S. in Computer Science, Software Engineering and Information Systems',
    org: 'University of Granada',
    dates: 'Jun. 2025',
    points: ['Study abroad: University of Hradec Králové, Czech Republic (Erasmus+), awarded prize for excellence during internationalization.'],
  },
];

export const skills = [
  {
    title: 'AI and Data Science',
    lead: "Master's degree in Data Science and Computer Engineering:",
    points: [
      'Fluent in state of the art data analysis techniques and tools. Experience with a wide variety of datasets (image, text, genomic, time series).',
      'Advanced knowledge of natural language processing and machine learning applied to social media data.',
      'Experience with deep learning frameworks such as TensorFlow and PyTorch.',
    ],
  },
  {
    title: 'Full-stack development',
    lead: 'Worked on several web applications at personal, academic and professional level, including:',
    points: [
      'Full-stack development for Constella Intelligence (a cybersecurity firm that manages the biggest data lake of compromised assets in the world) using Vue and Apache Airflow.',
      'Several web applications with layered architecture using the HTML, CSS, JS, PHP and SQL stack.',
      'Final degree project: web application for online data analysis using Python (FastAPI), JavaScript (React) and MongoDB.',
    ],
  },
  {
    title: 'Data engineering',
    lead: 'Experience in ETL and data pipeline development:',
    points: [
      'Real experience developing Python preprocessing scripts for damaged or faulty CSV, JSON and SQL files.',
      'Experience with data warehousing and business intelligence tools.',
      'Personally passionate about data visualization.',
    ],
  },
];

export const techStack = [
  { title: 'Programming languages', items: ['Python', 'R', 'C++', 'Java', 'Bash scripting'] },
  { title: 'Databases', items: ['SQL', 'Oracle', 'MongoDB'] },
  {
    title: 'Frameworks & libraries',
    items: ['Agentic programming', 'scikit-learn', 'XGBoost', 'PyTorch', 'NumPy', 'pandas', 'Matplotlib', 'React', 'Flask', 'FastAPI', 'Node.js'],
  },
  { title: 'Others', items: ['Git & GitHub', 'Docker', 'Linux', 'Gephi'] },
];

export const languages = ['Spanish: native', 'English: Cambridge C1', 'French: DELF B1', 'Japanese: basic'];

export const links = [
  { label: 'GitHub', href: 'https://github.com/alexpar2/', icon: 'github', variant: 'outline-light', external: true },
  { label: 'LinkedIn', href: 'https://www.linkedin.com/in/alejandro-perez-arguello-1a614b9b/', icon: 'linkedin', variant: 'outline-light', external: true },
  { label: 'View CV (PDF)', href: '/documents/Resume_2026.pdf', icon: 'file-earmark-pdf', variant: 'outline-warning', external: true },
  { label: 'Email', href: 'mailto:alex.prza@gmail.com', icon: 'envelope', variant: 'outline-danger' },
  { label: 'Telegram', href: 'https://t.me/frycat', icon: 'telegram', variant: 'outline-info', external: true },
];

export const sourceUrl = 'https://github.com/alexpar2/personal-page';
