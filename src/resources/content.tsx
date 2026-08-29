import { About, Blog, Gallery, Newsletter, Person, Social, Work } from "@/types";
import { Text } from "@once-ui-system/core";

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

const about: About = {
  path: "/",
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
    description: [
      <Text key="p1" as="p" variant="body-default-l">
        I am a Computer Engineering student at the Milwaukee School of Engineering with professional experience in embedded systems and a strong interest in digital hardware design, processor architecture, FPGA development, and computer architecture. As a Firmware Engineering Intern at Brady Corporation, I work at the hardware/software interface while developing the low-level systems that enable embedded devices. My long-term goal is to design the hardware that powers modern computing systems.
      </Text>,
      <Text key="p2" as="p" variant="body-default-l">
        My primary interests include processor architecture, digital logic design, FPGA development, ASIC design, computer architecture, and high-performance computing. I enjoy designing systems where hardware and software interact closely, from RTL implementation through low-level software.
      </Text>,
      <Text key="p3" as="p" variant="body-default-l">
        I aspire to work as a hardware design engineer developing next-generation processors, accelerators, and digital systems that push the boundaries of computing performance. I am always looking for opportunities to expand my technical knowledge and apply it to meaningful engineering challenges.
      </Text>,
    ],
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
            Built an automated print-timing validation system that captures printhead control signals and checks the timing of every printed line, replacing manual visual review that missed sub-visual defects entirely.
          </>,
          <>
            Cut analyzer hardware cost over 100x by replacing a $500+ commercial logic analyzer with a $4 Raspberry Pi Pico, and re-architected capture around offline post-processing to reliably sample sub-microsecond pulses.
          </>,
          <>
            Integrated the timing analyzer into the nightly test pipeline, surfacing timing regressions to developers same-day instead of months later.
          </>,
          <>
            Built a multi-agent Python pipeline for automated bug triage that routes tickets, drafts candidate patches, and validates each against the test suite before opening a pull request.
          </>,
          <>
            Designed the triage pipeline to flag unverifiable patches, such as missing test harnesses or hardware-dependent behavior, rather than report false coverage; validated end to end on real production tickets.
          </>,
          <>
            Gained hands-on experience with Agile/Scrum workflows, using Azure DevOps and Git for sprint planning, work item tracking, and version control.
          </>,
          <>
            Automated both tools through Azure DevOps pipelines, using Python, YAML, and Pluma, our Lua-based test automation framework.
          </>,
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
          { name: "C++" },
          { name: "ARMv7" },
          { name: "RISC-V Assembly" },
          { name: "Embedded C" },
          { name: "Python" },
          { name: "Java" },
          { name: "YAML" }
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

export { person, social, newsletter, about, blog, gallery, work };
