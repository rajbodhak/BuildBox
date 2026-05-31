export default function Navbar() {
    return (
        <nav className="flex items-center justify-between px-6 py-5 border-b border-[var(--border)]">
            <div className="flex items-center gap-2 font-bold text-lg tracking-tight text-[var(--text-h)]">
                <span className="w-2 h-2 rounded-full bg-[var(--accent)]" />
                BuildBox
            </div>

            <div className="flex gap-6">
                <a href="#projects" className="font-mono text-sm text-[var(--text)] hover:text-[var(--accent)] transition-colors">
                    Projects
                </a>
                <a href="#contribute" className="font-mono text-sm text-[var(--text)] hover:text-[var(--accent)] transition-colors hidden sm:block">
                    How to contribute
                </a>
                <a
                    href="https://github.com"
                    target="_blank"
                    rel="noreferrer"
                    className="font-mono text-sm text-[var(--text)] hover:text-[var(--accent)] transition-colors"
                >
                    GitHub ↗
                </a>
            </div>
        </nav>
    )
}