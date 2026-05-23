export const projects = [
  {
    title: 'Portfolio Website',
    bullets: [
      "Designed and developed a responsive personal portfolio website using React and Tailwind CSS.",
      "Customized SEO and OpenGraph metadata with react-helmet-async for improved search visibility and link previews.",
      "Deployed the site using Vite build tools and version-controlled via Git/GitHub for continuous iteration."
    ],
    links: {
      code: "https://github.com/Airemz/portfolio_website",
      demo: null,
    },
    tags: ["React", "Vite", "Tailwind CSS", "JavaScript", "Node.js"],
  },
  {
    title: "Startup Website Mockup",
    bullets: [
      "Designed and implemented a multi-page mock website for a gaming startup concept with responsive layouts using Bootstrap 5 components (carousel, cards) and custom CSS to deliver a polished, modern UI across screen sizes.",
      "Applied accessibility best practices (semantic HTML, ARIA labels) to improve usability and inclusivity."
    ],
    links: {
      code: "https://github.com/Airemz/Startup-Website",
      demo: "https://airemz.github.io/Startup-Website/"
    },
    tags: ["HTML", "CSS", "Bootstrap", "Accessibility"],
  },
  {
    title: "Real-Time Operating System (RTOS)",
    bullets: [
      "Developed a lightweight RTOS in C/ARM Assembly for STM32 Cortex-M4, supporting multitasking, preemptive EDF scheduling, dynamic memory allocation, and task management APIs (osKernelInit, osCreateTask, osYield).",
      "Implemented a custom heap allocator and low-level context switching routines using PendSV interrupts."
    ],
    links: {
      code: null,
      demo: null,
    },
    tags: ["ARM Assembly", "C"],
  },
  {
    title: "GPS Navigation System",
    bullets: [
      "Implemented a weighted graph library in C++ to model road networks, supporting vertex insertion and removal.",
      "Built a Dijkstra-based shortest path algorithm with priority queues and hash maps to compute efficient routes."
    ],
    links: {
      code: "https://github.com/Airemz/GPS-system",
      demo: null,
    },
    tags: ["C++"],
  },
  {
    title: "Matrix-Vector Multiplication (MVM) Engine",
    bullets: [
      "Designed and implemented a parameterized MVM accelerator in SystemVerilog with support for parallelized dot-product lanes.",
      "Optimized DSP usage by time-multiplexing multipliers (4 DSPs per lane vs. 8), doubling the number of lanes achievable under hardware constraints.",
      "Explored trade-offs in throughput vs. latency by pipelining multipliers and accumulation stages.",
      "Validated functionality using Verilator testbenches and synthesized to FPGA with timing/resource utilization analysis.",
      "Collaborated with a partner to debug datapath/control logic and document design choices for reproducibility."
    ],
    links: {
      code: "https://github.com/Airemz/matrix-vector-multiplication-engine",
      demo: null,
    },
    tags: ["SystemVerilog, FPGA (Xilinx Vivado)"],
  },
  {
    title: "Blackjack-Game",
    bullets: [
      "Co-created a playable Blackjack game with an interactive GUI built in Python using Tkinter.",
      "Implemented game logic including betting system, dealer AI, win/lose states, and balance tracking.",
      "Designed event-driven interface with buttons, labels, and card images for an engaging user experience.",
      "Practiced collaborative development by building the project with a partner for a class assignment."
    ],
    links: {
      code: "https://github.com/Airemz/Blackjack-Game",
      demo: null,
    },
    tags: ["Python", "Tkinter", "OOP", "Game Dev"],
  },
];


