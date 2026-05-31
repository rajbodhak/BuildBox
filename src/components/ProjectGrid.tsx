import { useState } from 'react'
import { projects, FILTERS } from '../data/projects'
import type { FilterType } from '../types'
import ProjectCard from './ProjectCard'

export default function ProjectGrid() {
    const [active, setActive] = useState<FilterType>('all')

    const filtered =
        active === 'all' ? projects : projects.filter((p) => p.cat === active)

    return (
        <section id="projects" className="px-6 py-10 border-b border-[var(--border)]">

            <div className="flex items-baseline justify-between mb-6">
                <h2 className="text-xl font-bold tracking-tight text-[var(--text-h)]">
                    Project index
                </h2>
                <span className="font-mono text-xs text-[var(--text)]">
                    {filtered.length} projects
                </span>
            </div>

            {/* Filters */}
            <div className="flex gap-2 flex-wrap mb-5" role="group" aria-label="Filter projects">
                {FILTERS.map((f) => (
                    <button
                        key={f.value}
                        onClick={() => setActive(f.value)}
                        aria-pressed={active === f.value}
                        className={`font-mono text-[11px] px-3 py-1 rounded-full border transition-colors
              ${active === f.value
                                ? 'border-[var(--accent)] text-[var(--accent)] bg-[var(--accent-bg)]'
                                : 'border-[var(--border)] text-[var(--text)] hover:border-[var(--accent)] hover:text-[var(--accent)] hover:bg-[var(--accent-bg)]'
                            }`}
                    >
                        {f.label}
                    </button>
                ))}
            </div>

            {/* Grid */}
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3">
                {filtered.map((p) => (
                    <ProjectCard key={p.name} project={p} />
                ))}
            </div>

        </section>
    )
}