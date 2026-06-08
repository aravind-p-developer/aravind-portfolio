/**
 * Site-wide content and contact configuration
 */

export const siteConfig = {
  name: 'Aravind Puranam',
  title: 'Android Developer & Open Source Creator',
  tagline: 'Building scalable enterprise mobile platforms & leading the Android Developer Knowledge Hub',
  email: 'vnaravindganesh.p@gmail.com',
  phone: '+91 8247000457',
  phoneHref: 'tel:+918247000457',
  location: 'Hyderabad, India',
  linkedin: 'https://www.linkedin.com/in/aravind-puranam-9a9a241b5/',
  github: 'https://github.com/aravind-p-developer',
  githubUsername: 'aravind-p-developer',
  description:
    'Android Developer specializing in enterprise SaaS, offline-first architecture, WorkManager, and scalable mobile platforms. Based in Hyderabad, India.',
} as const;

export interface ImpactMetricItem {
  value: number;
  suffix: string;
  label: string;
  formatThousands?: boolean;
}

/** Impact metrics — aligned with resume */
export const impactMetrics: ImpactMetricItem[] = [
  { value: 150, suffix: '+', label: 'Enterprise Clients' },
  { value: 50000, suffix: '+', label: 'Users', formatThousands: true },
  { value: 10, suffix: '+', label: 'Countries' },
  { value: 2, suffix: 'M+', label: 'Daily Activities' },
  { value: 12, suffix: '+', label: 'WorkManager Migrations' },
  { value: 150, suffix: '+', label: 'Crash & ANR Investigations' },
];

/** @deprecated Use impactMetrics */
export const heroMetrics = impactMetrics;

export interface EducationItem {
  degree: string;
  field: string;
  institution: string;
  location: string;
  cgpa: string;
  cgpaMax: string;
  level: 'Postgraduate' | 'Undergraduate';
}

/** Education — aligned with resume */
export const educationItems: EducationItem[] = [
  {
    degree: 'Master of Computer Applications',
    field: 'MCA',
    institution: "Aurora's PG College",
    location: 'Hyderabad, India',
    cgpa: '8.1',
    cgpaMax: '10',
    level: 'Postgraduate',
  },
  {
    degree: 'Bachelor of Science — Computer Science',
    field: 'B.Sc. CS',
    institution: 'Jahnavi Degree College',
    location: 'Hyderabad, India',
    cgpa: '8.6',
    cgpaMax: '10',
    level: 'Undergraduate',
  },
];

export const techStackCategories = [
  {
    id: "languages",
    label: "Languages",
    items: ["Kotlin", "Java"],
  },

  {
    id: "android",
    label: "Android Core",
    items: [
      "Jetpack Compose",
      "Android SDK",
      "Room",
      "WorkManager",
      "XML Layouts",
      "Navigation Component",
      "ViewModel",
      "LiveData",
      "StateFlow",
      "SharedFlow",
      "Material Design 3",
    ],
  },

  {
    id: "architecture",
    label: "Architecture & Patterns",
    items: [
      "MVVM",
      "Clean Architecture",
      "Repository Pattern",
      "Offline-First Architecture",
      "Metadata-Driven Architecture",
    ],
  },

  {
    id: "networking",
    label: "Networking, Async & DI",
    items: [
      "Retrofit",
      "Coroutines",
      "REST APIs",
      "JSON Parsing",
      "Hilt",
      "Koin",
      "Background Processing",
      "Location Services",
    ],
  },

  {
    id: "tools",
    label: "Tools & Practices",
    items: [
      "Firebase Crashlytics",
      "FCM",
      "Firebase Analytics",
      "Realtime Database",
      "Android Studio Profiler",
      "Git",
      "Gradle",
      "SonarQube",
      "Unit Testing",
      "UI Testing",
      "CI/CD",
      "Agile",
    ],
  },
] as const;
