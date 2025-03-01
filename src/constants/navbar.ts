import {
  CloudIcon,
  RocketLaunchIcon,
  CodeBracketIcon,
  CpuChipIcon,
  PhotoIcon,
  CommandLineIcon,
  PuzzlePieceIcon,
} from "@heroicons/vue/24/outline";

export const navItems = [
  {
    title: "Products",
    categories: [
      {
        title: "Hosting",
        items: [
          {
            title: "Vercel Edge",
            description: "Fast global deployment",
            icon: CloudIcon,
          },
          {
            title: "Serverless Functions",
            description: "API endpoints on demand",
            icon: CpuChipIcon,
          },
        ],
      },
      {
        title: "Optimization",
        items: [
          {
            title: "Next.js",
            description: "Build optimized React apps",
            icon: RocketLaunchIcon,
          },
          {
            title: "Image Optimization",
            description: "Speed up images on the web",
            icon: PhotoIcon,
          },
        ],
      },
      {
        title: "Developer Tools",
        items: [
          {
            title: "Vercel CLI",
            description: "Deploy via command line",
            icon: CommandLineIcon,
          },
          {
            title: "Integrations",
            description: "Connect to your stack",
            icon: PuzzlePieceIcon,
          },
        ],
      },
    ],
  },
  {
    title: "Solutions",
    categories: [
      {
        title: "Use Cases",
        items: [
          {
            title: "AI Apps",
            description: "Deploy at the speed of AI",
            icon: CpuChipIcon,
          },
          {
            title: "Composable Commerce",
            description: "Power storefronts that convert",
            icon: RocketLaunchIcon,
          },
          {
            title: "Marketing Sites",
            description: "Launch campaigns fast",
            icon: CodeBracketIcon,
          },
        ],
      },
      {
        title: "Scalability",
        items: [
          {
            title: "Multi-tenant Platforms",
            description: "Scale apps with one codebase",
            icon: CloudIcon,
          },
          {
            title: "Web Apps",
            description: "Ship features, not infrastructure",
            icon: RocketLaunchIcon,
          },
        ],
      },
      {
        title: "Users",
        items: [
          {
            title: "Platform Engineers",
            description: "Automate away repetition",
            icon: CodeBracketIcon,
          },
          {
            title: "Design Engineers",
            description: "Deploy for every idea",
            icon: PhotoIcon,
          },
        ],
      },
    ],
  },
  {
    title: "Resources",
    categories: [
      {
        title: "Docs & Community",
        items: [
          {
            title: "Documentation",
            description: "Find guides and API references",
            icon: CodeBracketIcon,
          },
          {
            title: "Community",
            description: "Join our developer community",
            icon: PuzzlePieceIcon,
          },
        ],
      },
      {
        title: "Support",
        items: [
          {
            title: "Help Center",
            description: "Get support for your questions",
            icon: CloudIcon,
          },
          {
            title: "Contact Us",
            description: "Reach out to our team",
            icon: CpuChipIcon,
          },
        ],
      },
      {
        title: "More",
        items: [
          {
            title: "Blog",
            description: "Read the latest updates",
            icon: CommandLineIcon,
          },
          {
            title: "Changelog",
            description: "See what's new",
            icon: RocketLaunchIcon,
          },
        ],
      },
    ],
  },
];
