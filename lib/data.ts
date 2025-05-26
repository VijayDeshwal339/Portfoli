import { 
  Profile, 
  Experience, 
  Education, 
  Skill, 
  Interest, 
  Project 
} from '@/types/profile';

export const profileData: Profile = {
  name: 'Vijay Deshwal',
  title: 'Full Stack Developer',
  bio: 'Passionate developer with 1+ years of experience building modern web applications. I enjoy solving complex problems and creating intuitive user experiences.',
  avatarUrl: 'https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=800',
  location: 'New Delhi, IN',
  email: 'Deshwalamit339@gmail.com',
  phone: '9818019146',
  resumeUrl: 'https://drive.google.com/file/d/1DjTj8kBLfESVCpWs_hXctns8jIvOD_x3/view?usp=drivesdk',
  socialLinks: [
    {
      name: 'GitHub',
      url: 'https://github.com/VijayDeshwal339',
      icon: 'github',
    },
    {
      name: 'LinkedIn',
      url: 'https://www.linkedin.com/in/vijay-deshwal-87a8351a9/',
      icon: 'linkedin',
    },
    {
      name: 'Twitter',
      url: 'https://twitter.com',
      icon: 'twitter',
    },
  ],
};

export const experienceData: Experience[] = [
 {
  id: '1',
  title: 'MERN Stack Developer',
  company: 'Spirale Infosoft',
  location: 'Noida, India',
  startDate: '2023-01',
  endDate: '2024-01',
  description: 'Worked on full-stack web applications using ReactJS, Node.js, Express.js, and MongoDB.',
  highlights: [
    'Built responsive front-end interfaces using ReactJS and Tailwind CSS',
    'Implemented RESTful APIs and integrated them with the front-end',
    'Worked on authentication, form validation, and image/file uploads',
    'Collaborated with designers and backend team to ensure smooth feature delivery',
    'Gained hands-on experience in Redux Toolkit, JWT, and MongoDB queries'
  ],
}
];

export const educationData: Education[] = [
  {
    id: '1',
    degree: 'Bachelor of Technology',
    field: 'Electronics & Communication',
    institution: 'Ambedkar Institute of Advanced Communication Technologies and Research',
    location: 'New Delhi, IN',
    startDate: '2019-08',
    endDate: '2022-08',
    gpa: '8.3/1.0',
    description: 'Specialized in Human-Computer Interaction and Web Technologies',
  },
  {
    id: '2',
    degree: 'Diploma',
    field: 'Digital Electronics',
    institution: 'Ambedkar Institute of Technology',
    location: 'New Delhi, IN',
    startDate: '2016-08',
    endDate: '2029-07',
    gpa: '6.8/10',
    description: 'Minor in Digital Arts. Dean\'s List all semesters.',
  },
];

export const skillsData: Skill[] = [
  { name: 'JavaScript', category: 'technical', proficiency: 95 },
  { name: 'TypeScript', category: 'technical', proficiency: 80 },
  { name: 'React', category: 'technical', proficiency: 100 },
  { name: 'Next.js', category: 'technical', proficiency: 80 },
  { name: 'Node.js', category: 'technical', proficiency: 85 },
  { name: 'Express.js', category: 'technical', proficiency: 90 },
  { name: 'MongoDb', category: 'technical', proficiency: 85 },
  { name: 'HTML/CSS', category: 'technical', proficiency: 95 },
  { name: 'Tailwind CSS', category: 'technical', proficiency: 100 },
  { name: 'Bootstrap', category: 'technical', proficiency: 90 },
  { name: 'Material Ui', category: 'technical', proficiency: 100 },
  { name: 'Problem Solving', category: 'soft', proficiency: 90 },
  { name: 'Team Leadership', category: 'soft', proficiency: 85 },
  { name: 'Communication', category: 'soft', proficiency: 90 },
  { name: 'English', category: 'language', proficiency: 100 },
  { name: 'Hindi', category: 'language', proficiency: 100 },
];

export const interestsData: Interest[] = [
  {
    name: 'Gaming',
    icon: 'gamepad',
    description: 'Passionate about online gaming and exploring virtual worlds',
  },
  {
    name: 'Cricket',
    icon: 'trophy',
    description: 'Playing and watching cricket, following international tournaments',
  },
  {
    name: 'Travelling',
    icon: 'plane',
    description: 'Exploring new places, experiencing different cultures and cuisines',
  },
  {
    name: 'Music',
    icon: 'music',
    description: 'Listening to various genres and discovering new artists',
  },
];

export const projectsData: Project[] = [
  {
    name: 'Prime Cut',
    description: 'A modern web application for a premium barbershop, featuring online booking and service management.',
    technologies: ['React.js', 'Tailwind CSS', 'TypeScript', 'Framer Motion'],
    githubUrl: 'https://github.com/VijayDeshwal339/PrimeCut.git',
    liveUrl: 'https://prime-cut.vercel.app/',
    image: 'https://images.pexels.com/photos/1813272/pexels-photo-1813272.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
  },
  {
    name: 'Career Infotech',
    description: 'An educational platform providing career guidance and technology courses.',
    technologies: ['React.js', 'Tailwind CSS', 'TypeScript'],
    githubUrl: 'https://github.com/VijayDeshwal339/Career-Infotech.git',
    liveUrl: 'https://career-infotech.vercel.app/',
    image: 'https://images.pexels.com/photos/3183150/pexels-photo-3183150.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
  },
  {
    name: 'CarWash',
    description: 'A car wash service booking platform with real-time scheduling and service tracking.',
    technologies: ['React.js', 'Material UI'],
    githubUrl: 'https://github.com/VijayDeshwal339/carwashfrontend.git',
    liveUrl: 'https://carwashfrontend.vercel.app/',
    image: 'https://images.pexels.com/photos/372810/pexels-photo-372810.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
  },
];