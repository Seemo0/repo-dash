"use client"

import { useMemo, useState } from "react"
import { Search } from "lucide-react"

import { Input } from "@/components/ui/input"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"
import { CriticalityBadge } from "@/components/level-badge"
import { cn } from "@/lib/utils"
import type { Criticality, RepoFile } from "@/lib/repo-data"

const CRITICALITIES: Criticality[] = ["low", "medium", "high", "critical"]

export function FileExplorer({
  files,
  languages,
}: {
  files: RepoFile[]
  languages: string[]
}) {
  const [query, setQuery] = useState("")
  const [language, setLanguage] = useState("all")
  const [criticality, setCriticality] = useState("all")

  const filtered = useMemo(() => {
    return files.filter((file) => {
      const matchesQuery = file.name.toLowerCase().includes(query.trim().toLowerCase())
      const matchesLanguage = language === "all" || file.language === language
      const matchesCriticality = criticality === "all" || file.criticality === criticality
      return matchesQuery && matchesLanguage && matchesCriticality
    })
  }, [files, query, language, criticality])

  return (
    <div className="space-y-4">
      <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
        <div className="relative flex-1">
          <Search className="pointer-events-none absolute left-2.5 top-1/2 size-4 -translate-y-1/2 text-muted-foreground" />
          <Input
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Filter files by name..."
            className="pl-8"
            aria-label="Filter files by name"
          />
        </div>

        <Select
          value={language}
          onValueChange={(value) => setLanguage(value ?? "all")}
        >
          <SelectTrigger className="w-full sm:w-44" aria-label="Filter by language">
            <SelectValue placeholder="All languages" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="all">All languages</SelectItem>
            {languages.map((lang) => (
              <SelectItem key={lang} value={lang}>
                {lang}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>

        <Select
          value={criticality}
          onValueChange={(value) => setCriticality(value ?? "all")}
        >
          <SelectTrigger className="w-full sm:w-44" aria-label="Filter by criticality">
            <SelectValue placeholder="All criticality" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="all">All criticality</SelectItem>
            {CRITICALITIES.map((level) => (
              <SelectItem key={level} value={level} className="capitalize">
                {level}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>

      <div className="overflow-hidden rounded-lg border border-border">
        <Table>
          <TableHeader>
            <TableRow className="bg-muted/50">
              <TableHead>Name</TableHead>
              <TableHead>Path</TableHead>
              <TableHead>Language</TableHead>
              <TableHead>Type</TableHead>
              <TableHead className="text-right">Size</TableHead>
              <TableHead>Criticality</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {filtered.length === 0 ? (
              <TableRow>
                <TableCell colSpan={6} className="h-24 text-center text-sm text-muted-foreground">
                  No files match your filters.
                </TableCell>
              </TableRow>
            ) : (
              filtered.map((file) => {
                const isCritical = file.criticality === "critical"
                return (
                  <TableRow
                    key={file.path}
                    className={cn(isCritical && "border-l-2 border-l-red-400 bg-red-50/40")}
                  >
                    <TableCell className="font-medium text-foreground">{file.name}</TableCell>
                    <TableCell className="font-mono text-xs text-muted-foreground">{file.path}</TableCell>
                    <TableCell className="text-muted-foreground">{file.language}</TableCell>
                    <TableCell className="text-muted-foreground">{file.type}</TableCell>
                    <TableCell className="text-right tabular-nums text-muted-foreground">{file.size}</TableCell>
                    <TableCell>
                      <CriticalityBadge level={file.criticality} />
                    </TableCell>
                  </TableRow>
                )
              })
            )}
          </TableBody>
        </Table>
      </div>

      <p className="text-xs text-muted-foreground">
        Showing {filtered.length} of {files.length} files
      </p>
    </div>
  )
}
