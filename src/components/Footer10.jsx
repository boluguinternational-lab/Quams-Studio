const IG_SEEDS = ['hazelrye-ig1', 'hazelrye-ig2', 'hazelrye-ig3', 'hazelrye-ig4']

export default function Footer() {
  return (
    <footer className="bg-ink text-paper">
      <div className="max-w-6xl mx-auto px-6 py-14 flex flex-col md:flex-row md:items-center md:justify-between gap-8 text-center md:text-left">
        <div>
          <div className="font-display italic text-2xl mb-2">Hazel &amp; Rye</div>
          <p className="text-paper/60 max-w-xs mx-auto md:mx-0">
            Documentary wedding photography, based in California, traveling everywhere.
          </p>
        </div>
        <div className="flex justify-center md:justify-end gap-7">
          <a href="#" className="border-b border-paper/40 pb-0.5">
            Instagram
          </a>
          <a href="#" className="border-b border-paper/40 pb-0.5">
            Pinterest
          </a>
          <a href="#" className="border-b border-paper/40 pb-0.5">
            Email Us
          </a>
        </div>
      </div>

      <div className="max-w-xl mx-auto grid grid-cols-4">
        {IG_SEEDS.map((s) => (
          <div key={s} className="aspect-square overflow-hidden">
            <img
              src={`https://picsum.photos/seed/${s}/400/400`}
              alt="Instagram photo"
              className="w-full h-full object-cover saturate-150 contrast-125"
            />
          </div>
        ))}
      </div>

      <div className="border-t border-paper/15 py-5 text-center text-xs text-paper/50">
        © 2026 Hazel &amp; Rye Photography. All rights reserved.
      </div>
    </footer>
  )
}
