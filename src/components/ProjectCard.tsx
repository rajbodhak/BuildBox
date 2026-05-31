import type { Project } from '../types'

interface Props {
    project: Project
}

export default function ProjectCard({ project }: Props) {
    const { name, icon, tag, featured } = project
    const isApi = tag === 'api'

    return (
        <div
            className={`flex flex-col gap-1.5 p-4 rounded-xl border cursor-pointer transition-colors
        ${featured
                    ? 'border-[var(--accent-border)] hover:bg-[var(--accent-bg)]'
                    : 'border-[var(--border)] hover:border-[var(--accent-border)] hover:bg-[var(--accent-bg)]'
                }`}
        >
            <span className="text-lg leading-none mb-0.5" aria-hidden="true">{icon}</span>

            <span className="text-sm font-semibold text-[var(--text-h)]">
                {name}{featured && <span className="text-[var(--accent)] text-[11px]"> ★</span>}
            </span>

            <span
                className={`font-mono text-[10px] self-start px-1.5 py-0.5 rounded border
          ${isApi
                        ? 'text-[var(--accent)] border-[var(--accent-border)] bg-[var(--accent-bg)]'
                        : 'text-[var(--text)] border-[var(--border)] bg-[var(--code-bg)]'
                    }`}
            >
                {tag}
            </span>
        </div>
    )
}