import { About, Blog, Gallery, Home, Newsletter, Person, Social, Work } from "@/types";
import { Line, Row, Text } from "@once-ui-system/core";

const person: Person = {
  firstName: "Jesse",
  lastName: "Rost",
  name: `Jesse Rost`,
  role: "Computer Engineer",
  avatar: "/images/avatar.jpg",
  email: "example@gmail.com", 
  location: "America/Chicago", // Keeps the TypeScript compiler and world clock happy!
  languages: ["English"], 
  locale: "en", 
};

const newsletter: Newsletter = {
  display: false, 
  title: <>Subscribe to {person.firstName}'s Newsletter</>,
  description: <>My weekly updates about computer engineering and hardware layout</>,
};

const social: Social = [
  {
    name: "GitHub",
    icon: "github",
    link: "https://github.com/jesse-rost/my-portfolio",
    essential: true,
  },
  {
    name: "LinkedIn",
    icon: "linkedin",
    link: "https://www.linkedin.com/in/jesse-rost", 
    essential: true,
  },
  {
    name: "Email",
    icon: "email",
    link: `mailto:${person.email}`,
    essential: true,
  },
];

const home: Home = {
  path: "/",
  image: "/images/og/home.jpg",
  label: "Home",
  title: `${person.name}'s Portfolio`,
  description: `Portfolio website showcasing my work as a ${person.role}`,
  headline: <>Building the intersection of hardware and software</>,
  featured: {
    display: false, 
    title: (
      <Row gap="12" vertical="center">
        <strong className="ml-4">Featured</strong>{" "}
        <Line background="brand-alpha-strong" vert height="20" />
        <Text marginRight="4" onBackground="brand-medium">
          Latest Project
        </Text>
      </Row>
    ),
    href: "/work",
  },
  subline: (
    <>
      I'm {person.firstName}, a {person.role.toLowerCase()} focused on digital logic design, 
      embedded systems, and firmware development. Welcome to my technical portfolio.
    </>
  ),
};

const about: About = {
  path: "/about",
  label: "Background", 
  title: `Background – ${person.name}`,
  description: `Meet ${person.name}, ${person.role} from Menomonee Falls, WI`,
  tableOfContent: {
    display: true,
    subItems: false,
  },
  avatar: {
    display: true,
  },
  calendar: {
    display: false, 
    link: "https://cal.com",
  },
  intro: {
    display: true,
    title: "Introduction",
    description: (
      <>
        Jesse is a Menomonee Falls, Wisconsin-based computer engineer with a passion for solving low-level 
        hardware and software complexities. From programming embedded systems architectures to modeling 
        digital circuits, their work bridges structural logic with functional software solutions.
      </>
    ),
  },
  work: {
    display: true, 
    title: "Work Experience", 
    experiences: [
      {
        company: "Engineering Projects & Research",
        timeframe: "2024 - Present",
        role: "Computer Engineering Student / Developer",
        achievements: [
          <>
            Designed, simulated, and verified custom processors and digital logic architectures 
            using design suites like Quartus Prime.
          </>,
          <>
            Programmed and debugged low-level microprocessor instructions and machine code using 
            assembly simulators like CPULator.
          </>,
        ],
        images: [],
      },
    ],
  },
  studies: {
    display: true, 
    title: "Studies",
    institutions: [
      {
        name: "Your University Name Here",
        description: <>B.S. in Computer Engineering.</>,
      },
    ],
  },
  technical: {
    display: true, 
    title: "Technical skills",
    skills: [
      {
        title: "Hardware Design & Simulation",
        description: (
          <>Experienced in writing HDL (VHDL/Verilog) and compiling designs within Quartus Prime frameworks.</>
        ),
        tags: [
          { name: "Quartus", icon: "linkedin" }, 
          { name: "VHDL/Verilog", icon: "github" }
        ],
        images: [],
      },
      {
        title: "Embedded Systems & Low-Level Programming",
        description: (
          <>Writing highly optimized systems software using Assembly, C, and machine architecture code natively simulated inside CPULator environments.</>
        ),
        tags: [
          { name: "C / C++", icon: "github" }, 
          { name: "Assembly", icon: "linkedin" },
        ],
        images: [],
      },
    ],
  },
};

const blog: Blog = {
  path: "/blog",
  label: "Blog",
  title: "Blog",
  description: "Blog updates",
};

const gallery: Gallery = {
  path: "/gallery",
  label: "Gallery",
  title: "Gallery",
  description: "Gallery showcase",
};

const work: Work = {
  path: "/work",
  label: "Projects", 
  title: `Projects – ${person.name}`,
  description: `Engineering and development projects by ${person.name}`,
};

export { person, social, newsletter, home, about, blog, gallery, work };
