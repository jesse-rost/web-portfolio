import { About, Blog, Gallery, Home, Newsletter, Person, Social, Work } from "@/types";
import { Line, Row, Text } from "@once-ui-system/core";

const person: Person = {
  firstName: "Jesse",
  lastName: "Rost",
  name: `Jesse Rost`,
  role: "Firmware Engineering Intern",
  avatar: "", 
  email: "example@gmail.com", 
  location: "America/Chicago", 
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
  headline: <>Designing hardware and systems for next-generation computing</>,
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
      I'm {person.firstName}, a Computer Engineering student at MSOE focused on digital logic design,
      processor architecture, FPGA development, and hardware-software systems.
    </>
  ),
};

const about: About = {
  path: "/about",
  label: "About & Experience", 
  title: `Background – ${person.name}`,
  description: `Meet ${person.name}, ${person.role} from Menomonee Falls, WI`,
  tableOfContent: {
    display: true,
    subItems: false,
  },
  avatar: {
    display: false, 
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
        I am a Computer Engineering student at the Milwaukee School of Engineering with professional experience in embedded systems and a strong interest in digital hardware design, processor architecture, FPGA development, and computer architecture. As a Firmware Engineering Intern at Brady Corporation, I work at the hardware/software interface while developing the low-level systems that enable embedded devices. My long-term goal is to design the hardware that powers modern computing systems.
        <br /><br />
        My primary interests include processor architecture, digital logic design, FPGA development, ASIC design, computer architecture, and high-performance computing. I enjoy designing systems where hardware and software interact closely, from RTL implementation through low-level software.
        <br /><br />
        Additionally, I completed an IT internship at Newline Technology, where I diagnosed and repaired Chromebooks, performed PCB soldering/desoldering, installed cameras, ran cabling and wire termination, and provisioned computers and technology for larger organizations.
        <br /><br />
        I aspire to work as a hardware design engineer developing next-generation processors, accelerators, and digital systems that push the boundaries of computing performance. I am always looking for opportunities to expand my technical knowledge and apply it to meaningful engineering challenges.
      </>
    ),
  },
  work: {
    display: true, 
    title: "Work Experience", 
    experiences: [
      {
        company: "Brady Corporation",
        timeframe: "May 2026 - Present",
        role: "Firmware Engineering Intern",
        achievements: [
          <>
            Develop embedded systems software and firmware solutions, optimizing operations right at the hardware layer.
          </>,
          <>
            Collaborate with cross-functional engineering teams to design, debug, and implement stable microarchitectural controls.
          </>
        ],
        images: [],
      },
      {
        company: "Newline Technology",
        timeframe: "Jun 2025 - May 2026",
        role: "IT Technician (Internship)",
        achievements: [
          <>
            Diagnosed and repaired Chromebook hardware and software issues, improving device uptime for on-site deployments.
          </>,
          <>
            Executed PCB soldering and desoldering tasks, ensuring high-quality repairs and efficient turnaround times.
          </>,
          <>
            Performed camera installation projects, cable runs, and wire termination for surveillance and AV systems.
          </>,
          <>
            Set up computers and technology systems for larger organizations and supported PDK/lock procedures.
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
        name: "Milwaukee School of Engineering (MSOE)",
        description: <>B.S. in Computer Engineering | Minor in Electrical Engineering</>,
      },
    ],
  },
  technical: {
    display: true, 
    title: "Technical skills",
    skills: [
      {
        title: "Hardware Design",
        description: (
          <>Experienced in digital logic implementation, RTL-oriented design work, and processor architecture concepts using HDL-based workflows and hardware simulation tools.</>
        ),
        tags: [
          { name: "VHDL" },
          { name: "Intel Quartus" },
          { name: "FPGA Development" },
          { name: "Digital Logic Design" },
          { name: "Processor Architecture" },
          { name: "Computer Architecture" },
          { name: "Finite State Machines" },
          { name: "RTL Design" }
        ],
        images: [],
      },
      {
        title: "Programming & Low-Level Systems",
        description: (
          <>Comfortable working across low-level software and hardware-adjacent development, from embedded firmware to assembly and system-level code.</>
        ),
        tags: [
          { name: "C" },
          { name: "ARMv7" },
          { name: "Embedded C" },
          { name: "Python" },
          { name: "Java" }
        ],
        images: [],
      },
      {
        title: "Embedded Systems & Hardware Debugging",
        description: (
          <>Hands-on experience working close to the hardware through embedded software development, firmware debugging, and hardware bring-up support.</>
        ),
        tags: [
          { name: "Firmware Development" },
          { name: "Hardware Debugging" },
          { name: "PCB Soldering" },
          { name: "Oscilloscopes" },
          { name: "Logic Analyzers" }
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
  images: [], 
};

const work: Work = {
  path: "/work",
  label: "Projects", 
  title: `Projects – ${person.name}`,
  description: `Engineering and development projects by ${person.name}`,
};

export { person, social, newsletter, home, about, blog, gallery, work };
