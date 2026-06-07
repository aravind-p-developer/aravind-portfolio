/**
 * SectionHeader — consistent section typography hierarchy
 */
interface SectionHeaderProps {
  eyebrow: string;
  title: string;
  align?: 'left' | 'center';
}

export function SectionHeader({
  eyebrow,
  title,
  align = 'left',
}: SectionHeaderProps) {
  return (
    <div
      className={`section-header ${align === 'center' ? 'text-center' : ''}`}
    >
      <p className="section-eyebrow">{eyebrow}</p>
      <h2 className="section-title">{title}</h2>
    </div>
  );
}
