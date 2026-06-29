import Link from "next/link"
import { notFound } from "next/navigation"
import { ArrowLeft } from "lucide-react"

import { FileExplorer } from "@/components/file-explorer"
import { RiskBadge } from "@/components/level-badge"
import {
  getLanguages,
  getRepository,
  getSensitiveCount,
  repositories,
} from "@/lib/repo-data"

export function generateStaticParams() {
  return repositories.map((repo) => ({ id: repo.id }))
}

export default async function RepoDetailPage({
  params,
}: {
  params: Promise<{ id: string }>
}) {
  const { id } = await params
  const repo = getRepository(id)

  if (!repo) {
    notFound()
  }

  const languages = getLanguages(repo)
  const sensitiveCount = getSensitiveCount(repo)

  const summary = [
    { label: "Total files", value: repo.files.length },
    { label: "Languages", value: languages.length },
    { label: "Sensitive files", value: sensitiveCount },
  ]

  return (
    <main className="mx-auto max-w-5xl px-6 py-12">
      <Link
        href="/"
        className="inline-flex items-center gap-1.5 text-sm text-muted-foreground transition-colors hover:text-foreground"
      >
        <ArrowLeft className="size-4" />
        Repositories
      </Link>

      <header className="mt-6 mb-8">
        <div className="flex flex-wrap items-center gap-3">
          <h1 className="text-2xl font-semibold tracking-tight text-foreground">{repo.name}</h1>
          <RiskBadge level={repo.risk} />
        </div>
        <p className="mt-1 max-w-2xl text-sm text-muted-foreground">{repo.description}</p>
      </header>

      <section className="mb-8 grid grid-cols-2 gap-px overflow-hidden rounded-lg border border-border bg-border md:grid-cols-4">
        {summary.map((item) => (
          <div key={item.label} className="bg-card p-4">
            <div className="text-2xl font-semibold tabular-nums text-foreground">{item.value}</div>
            <div className="mt-0.5 text-xs text-muted-foreground">{item.label}</div>
          </div>
        ))}
        <div className="flex flex-col justify-center bg-card p-4">
          <RiskBadge level={repo.risk} />
          <div className="mt-1.5 text-xs text-muted-foreground">Global risk</div>
        </div>
      </section>

      <FileExplorer files={repo.files} languages={languages} />
    </main>
  )
}
