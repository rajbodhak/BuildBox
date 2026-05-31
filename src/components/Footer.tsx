export default function Footer() {
    return (
        <footer className="flex items-center justify-between flex-wrap gap-4 px-6 py-6">
            <p className="font-mono text-xs text-[var(--text)]">
                BuildBox — open to <span className="text-[var(--accent)]">everyone</span>
            </p>
            <div className="flex gap-4">
                <a href="#" className="font-mono text-[11px] text-[var(--text)] hover:text-[var(--accent)] transition-colors">README</a>
                <a href="#" className="font-mono text-[11px] text-[var(--text)] hover:text-[var(--accent)] transition-colors">Contributing guide</a>
                <a
                    href="https://github.com"
                    target="_blank"
                    rel="noreferrer"
                    className="font-mono text-[11px] text-[var(--text)] hover:text-[var(--accent)] transition-colors"
                >
                    GitHub
                </a>
            </div>
        </footer>
    )
}