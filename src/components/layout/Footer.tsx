/**
 * Footer component
 */
import { siteConfig } from '../../config';

export function Footer() {
  return (
    <footer className="bg-surface/80 backdrop-blur-md w-full py-xl border-t border-white/10 mt-auto relative z-10">
      <div className="flex flex-col md:flex-row justify-between items-center max-w-container-max mx-auto px-gutter gap-md">
        <div className="flex flex-col items-center md:items-start gap-1">
          <span className="font-label-md text-label-md text-surface-tint">
            {siteConfig.name}
          </span>
          <span className="font-label-sm text-label-sm text-on-surface-variant">
            {siteConfig.location}
          </span>
        </div>
        <span className="font-label-sm text-label-sm text-on-surface-variant">
          © {new Date().getFullYear()} Built with Precision &amp; Performance
        </span>
        <div className="flex gap-md">
          <a
            href={siteConfig.github}
            target="_blank"
            rel="noopener noreferrer"
            className="font-label-sm text-label-sm text-on-surface-variant hover:text-primary transition-colors opacity-80 hover:opacity-100"
          >
            GitHub
          </a>
          <a
            href={siteConfig.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="font-label-sm text-label-sm text-on-surface-variant hover:text-primary transition-colors opacity-80 hover:opacity-100"
          >
            LinkedIn
          </a>
          <a
            href={`mailto:${siteConfig.email}`}
            className="font-label-sm text-label-sm text-on-surface-variant hover:text-primary transition-colors opacity-80 hover:opacity-100"
          >
            Email
          </a>
          <a
            href={siteConfig.phoneHref}
            className="font-label-sm text-label-sm text-on-surface-variant hover:text-primary transition-colors opacity-80 hover:opacity-100"
          >
            Phone
          </a>
        </div>
      </div>
    </footer>
  );
}
