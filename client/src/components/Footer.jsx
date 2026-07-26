export default function Footer({ name }) {
  return (
    <footer className="text-center py-10 font-body text-sm text-ink/60">
      <p>
        made with 🩷 by {name || "Saumya Sarngal"} · {new Date().getFullYear()}
      </p>
    </footer>
  );
}
