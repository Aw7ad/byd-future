import { Reveal } from "./Reveal";

type SectionHeadingProps = {
  number: string;
  label: string;
  title: string;
  lede?: string;
};

export function SectionHeading({ number, label, title, lede }: SectionHeadingProps) {
  return (
    <Reveal>
      <div className="flex items-center gap-3">
        <span className="eyebrow">
          {number} / {label}
        </span>
        <span className="h-px w-12 bg-byd-red/70" aria-hidden />
      </div>
      <h2 className="display mt-5 max-w-4xl text-[clamp(2.1rem,5.6vw,4.2rem)]">{title}</h2>
      {lede && <p className="prose-copy mt-6 max-w-2xl">{lede}</p>}
      <div className="red-rule mt-8" aria-hidden />
    </Reveal>
  );
}
