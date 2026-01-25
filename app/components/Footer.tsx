export default function Footer() {
    return (
        <footer className="py-8 bg-slate-950 border-t border-white/5 text-center">
            <p className="text-slate-500 text-sm">
                &copy; {new Date().getFullYear()} Neverfade. Semua hak dilindungi.
            </p>
        </footer>
    );
}
