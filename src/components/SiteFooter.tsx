import Link from "next/link";

const groups = [
  { title: "Jelajah", links: [["Beranda", "/"], ["Moods", "/moods"], ["Cari ayat", "/search"], ["Firman", "/read"]] },
  { title: "Tentang", links: [["Tentang Sela", "/about"], ["Cara kerja", "/how-it-works"], ["Contact", "/contact"]] },
  { title: "Legal", links: [["Privacy", "/privacy"], ["Terms", "/terms"], ["Disclaimer", "/disclaimer"], ["Copyright", "/copyright"], ["Accessibility", "/accessibility"]] },
] as const;

export function SiteFooter() {
  return (
    <footer className="mt-12 border-t border-border">
      <div className="mx-auto grid max-w-7xl gap-10 px-6 py-14 lg:grid-cols-[1.3fr_2fr] lg:px-10">
        <div>
          <Link href="/" className="font-serif text-3xl font-semibold">Sela</Link>
          <p className="mt-4 max-w-sm text-sm leading-7 text-muted">Berhenti sejenak. Kembali kepada Tuhan.</p>
          <p className="mt-8 text-xs leading-6 text-muted">© 2026 Sela. Proyek digital independen. Bukan situs resmi gereja, denominasi, yayasan, organisasi keagamaan, atau institusi Alkitab tertentu.</p>
        </div>
        <div className="grid grid-cols-2 gap-8 sm:grid-cols-3">
          {groups.map((group) => (
            <div key={group.title}>
              <p className="text-xs font-semibold uppercase tracking-[0.16em] text-foreground">{group.title}</p>
              <ul className="mt-4 space-y-3">
                {group.links.map(([label, href]) => (
                  <li key={href}><Link href={href} className="text-sm text-muted transition hover:text-foreground">{label}</Link></li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </footer>
  );
}
