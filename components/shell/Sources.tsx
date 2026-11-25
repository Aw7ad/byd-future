import { ExternalLink } from "lucide-react";
import { sources } from "@/lib/content";

export function Sources() {
  return (
    <div className="border-t border-white/10 pt-8">
      <p className="text-[10px] font-bold uppercase tracking-[0.24em] text-byd-red">Sources & credits</p>
      <ul className="mt-5 grid gap-3 text-xs text-white/55 sm:grid-cols-2">
        {sources.map((source) => (
          <li key={source.id}>
            <a
              href={source.url}
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-start gap-2 transition-colors hover:text-white"
            >
              <ExternalLink size={13} className="mt-0.5 shrink-0 text-byd-red" />
              <span>
                <span className="underline decoration-white/20 underline-offset-4 group-hover:decoration-byd-red">
                  {source.label}
                </span>
                <span className="mt-0.5 block text-white/35">{source.note}</span>
              </span>
            </a>
          </li>
        ))}
      </ul>
      <p className="mt-6 max-w-3xl text-[11px] leading-relaxed text-white/35">
        Vehicle photography and the BYD wordmark are used for this academic presentation. Image authors, licences and
        source pages are listed in <code className="text-white/60">public/images/ATTRIBUTION.md</code>. Figures describe
        BYD as a company; the project targets shown in the Control section are illustrative and are not official BYD
        targets. The organizational chart is a proposed structure for this case study, not BYD&apos;s official chart.
      </p>
    </div>
  );
}
