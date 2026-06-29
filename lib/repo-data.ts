export type RiskLevel = "low" | "medium" | "high"
export type Criticality = "low" | "medium" | "high" | "critical"

export type RepoFile = {
  name: string
  path: string
  language: string
  type: string
  size: string
  criticality: Criticality
}

export type Repository = {
  id: string
  name: string
  description: string
  risk: RiskLevel
  files: RepoFile[]
}

export const repositories: Repository[] = [
  {
    id: "portfolio-v2",
    name: "Portfolio-v2",
    description: "Personal portfolio site built with Next.js and TypeScript.",
    risk: "low",
    files: [
      { name: "page.tsx", path: "src/app/page.tsx", language: "TypeScript", type: "Page", size: "4.1 KB", criticality: "low" },
      { name: "layout.tsx", path: "src/app/layout.tsx", language: "TypeScript", type: "Layout", size: "2.3 KB", criticality: "low" },
      { name: "contact/page.tsx", path: "src/app/contact/page.tsx", language: "TypeScript", type: "Page", size: "3.8 KB", criticality: "low" },
      { name: "route.ts", path: "src/app/api/send/route.ts", language: "TypeScript", type: "API", size: "2.6 KB", criticality: "high" },
      { name: "HomeContent.tsx", path: "src/components/HomeContent.tsx", language: "TypeScript", type: "Component", size: "5.4 KB", criticality: "low" },
      { name: "Nav.tsx", path: "src/components/Nav.tsx", language: "TypeScript", type: "Component", size: "2.9 KB", criticality: "low" },
      { name: "Footer.tsx", path: "src/components/Footer.tsx", language: "TypeScript", type: "Component", size: "1.7 KB", criticality: "low" },
      { name: "RepoItem.tsx", path: "src/components/RepoItem.tsx", language: "TypeScript", type: "Component", size: "2.1 KB", criticality: "low" },
      { name: "next.config.js", path: "next.config.js", language: "JavaScript", type: "Config", size: "0.8 KB", criticality: "low" },
      { name: "README.md", path: "README.md", language: "Markdown", type: "Docs", size: "1.5 KB", criticality: "low" },
    ],
  },
  {
    id: "ai-ideas",
    name: "AI-ideas",
    description: "Tool to get brief knowledge about a language or framework using AI.",
    risk: "high",
    files: [
      { name: "page.tsx", path: "app/page.tsx", language: "TypeScript", type: "Page", size: "5.2 KB", criticality: "low" },
      { name: "layout.tsx", path: "app/layout.tsx", language: "TypeScript", type: "Layout", size: "1.9 KB", criticality: "low" },
      { name: "generate.ts", path: "pages/api/generate.ts", language: "TypeScript", type: "API", size: "3.4 KB", criticality: "critical" },
      { name: "OpenAiStream.ts", path: "utils/OpenAiStream.ts", language: "TypeScript", type: "Source", size: "2.8 KB", criticality: "critical" },
      { name: "Navbar.tsx", path: "components/Navbar.tsx", language: "TypeScript", type: "Component", size: "2.2 KB", criticality: "low" },
      { name: "Footer.tsx", path: "components/Footer.tsx", language: "TypeScript", type: "Component", size: "1.4 KB", criticality: "low" },
      { name: "next.config.js", path: "next.config.js", language: "JavaScript", type: "Config", size: "0.6 KB", criticality: "medium" },
      { name: "package.json", path: "package.json", language: "JSON", type: "Config", size: "1.1 KB", criticality: "low" },
      { name: "tsconfig.json", path: "tsconfig.json", language: "JSON", type: "Config", size: "0.9 KB", criticality: "low" },
      { name: "README.md", path: "README.md", language: "Markdown", type: "Docs", size: "2.0 KB", criticality: "low" },
    ],
  },
  {
    id: "mern-socialmedia-app",
    name: "Mern-socialMedia-App",
    description: "Full stack social media application with React and Node.js.",
    risk: "high",
    files: [
      { name: "auth.js", path: "server/controllers/auth.js", language: "JavaScript", type: "Source", size: "4.8 KB", criticality: "critical" },
      { name: "auth.js", path: "server/middleware/auth.js", language: "JavaScript", type: "Source", size: "2.1 KB", criticality: "critical" },
      { name: "User.js", path: "server/models/User.js", language: "JavaScript", type: "Schema", size: "1.9 KB", criticality: "high" },
      { name: "Post.js", path: "server/models/Post.js", language: "JavaScript", type: "Schema", size: "1.6 KB", criticality: "medium" },
      { name: "auth.js", path: "server/routes/auth.js", language: "JavaScript", type: "API", size: "1.4 KB", criticality: "high" },
      { name: "Form.jsx", path: "client/src/pages/loginPage/Form.jsx", language: "JavaScript", type: "Component", size: "3.7 KB", criticality: "medium" },
      { name: "Profile.jsx", path: "client/src/pages/profilePage/Profile.jsx", language: "JavaScript", type: "Component", size: "4.2 KB", criticality: "medium" },
      { name: "index.js", path: "server/index.js", language: "JavaScript", type: "Source", size: "2.5 KB", criticality: "medium" },
      { name: "index.js", path: "client/src/state/index.js", language: "JavaScript", type: "Source", size: "3.1 KB", criticality: "medium" },
      { name: "README.md", path: "README.md", language: "Markdown", type: "Docs", size: "2.3 KB", criticality: "low" },
    ],
  },
  {
    id: "barber-app",
    name: "barber-app",
    description: "Barber shop booking application with Next.js and Drizzle ORM.",
    risk: "medium",
    files: [
      { name: "route.ts", path: "app/api/book-appointment/route.ts", language: "TypeScript", type: "API", size: "3.2 KB", criticality: "high" },
      { name: "schema.ts", path: "db/schema.ts", language: "TypeScript", type: "Schema", size: "2.4 KB", criticality: "high" },
      { name: "index.ts", path: "db/index.ts", language: "TypeScript", type: "Source", size: "1.3 KB", criticality: "high" },
      { name: "BookingForm.tsx", path: "components/BookingForm.tsx", language: "TypeScript", type: "Component", size: "5.6 KB", criticality: "medium" },
      { name: "page.tsx", path: "app/page.tsx", language: "TypeScript", type: "Page", size: "2.8 KB", criticality: "low" },
      { name: "data.ts", path: "data/data.ts", language: "TypeScript", type: "Source", size: "1.5 KB", criticality: "low" },
      { name: "drizzle.config.ts", path: "drizzle.config.ts", language: "TypeScript", type: "Config", size: "0.7 KB", criticality: "medium" },
      { name: "0000_youthful_synch.sql", path: "drizzle/0000_youthful_synch.sql", language: "SQL", type: "Schema", size: "1.8 KB", criticality: "medium" },
      { name: "form.tsx", path: "components/ui/form.tsx", language: "TypeScript", type: "Component", size: "3.9 KB", criticality: "low" },
      { name: "README.md", path: "README.md", language: "Markdown", type: "Docs", size: "1.2 KB", criticality: "low" },
    ],
  },
]

export function getRepository(id: string) {
  return repositories.find((repo) => repo.id === id)
}

export function getLanguages(repo: Repository) {
  return Array.from(new Set(repo.files.map((file) => file.language))).sort()
}

export function getSensitiveCount(repo: Repository) {
  return repo.files.filter(
    (file) => file.criticality === "critical" || file.type === "Secret",
  ).length
}
