import Link from "next/link"
import { FileCode, Languages } from "lucide-react"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { RiskBadge } from "@/components/level-badge"
import { repositories, getLanguages } from "@/lib/repo-data"

export default function HomePage() {
  return (
    <main className="mx-auto max-w-5xl px-6 py-12">
      <header className="mb-8">
        <h1 className="text-2xl font-semibold tracking-tight text-foreground">Repositories</h1>
        <p className="mt-1 text-sm text-muted-foreground">
          {repositories.length} repositories analyzed for risk and sensitive files.
        </p>
      </header>

      <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
        {repositories.map((repo) => {
          const languages = getLanguages(repo)
          return (
            <Link key={repo.id} href={`/repos/${repo.id}`} className="group block">
              <Card className="h-full transition-colors group-hover:border-foreground/20">
                <CardHeader>
                  <div className="flex items-start justify-between gap-3">
                    <CardTitle className="text-base font-medium">{repo.name}</CardTitle>
                    <RiskBadge level={repo.risk} />
                  </div>
                  <CardDescription className="line-clamp-2">{repo.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex items-center gap-5 text-sm text-muted-foreground">
                    <span className="inline-flex items-center gap-1.5">
                      <FileCode className="size-4" />
                      {repo.files.length} files
                    </span>
                    <span className="inline-flex items-center gap-1.5">
                      <Languages className="size-4" />
                      {languages.length} languages
                    </span>
                  </div>
                </CardContent>
              </Card>
            </Link>
          )
        })}
      </div>
    </main>
  )
}
