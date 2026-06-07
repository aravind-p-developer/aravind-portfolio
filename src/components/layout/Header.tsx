/**
 * Header component with navigation
 */
import { cn } from '../../utils';
import { useActiveSection } from '../../hooks';
import { siteConfig } from '../../config';

const NAVBAR_HEIGHT = 64; // px — matches h-16

/** Scroll to a section id while compensating for the fixed navbar height */
function scrollToSection(id: string) {
  const el = document.getElementById(id);
  if (!el) return;
  const top = el.getBoundingClientRect().top + window.scrollY - NAVBAR_HEIGHT;
  window.scrollTo({ top, behavior: 'smooth' });
}

// Order matches the vertical layout in App.tsx
const navigationLinks = [
  { label: 'About',      href: '#about',      id: 'about'      },
  { label: 'Experience', href: '#experience', id: 'experience' },
  { label: 'Impact',     href: '#impact',     id: 'impact'     },
  { label: 'Projects',   href: '#projects',   id: 'projects'   },
  { label: 'Stack',      href: '#stack',      id: 'stack'      },
  { label: 'Education',  href: '#education',  id: 'education'  },
  { label: 'Contact',    href: '#contact',    id: 'contact'    },
];

export function Header() {
  const activeSection = useActiveSection({
    sectionIds: navigationLinks.map((link) => link.id),
  });

  return (
    <header className="bg-surface/70 backdrop-blur-xl fixed top-0 w-full border-b border-white/5 shadow-2xl z-50 transition-all duration-300">
      <nav className="flex justify-between items-center max-w-container-max mx-auto px-gutter h-16">
        <a
          href="#hero"
          onClick={(e) => { e.preventDefault(); scrollToSection('hero'); }}
          className="flex items-center gap-sm group"
        >
          <div className="h-8 w-8 rounded-lg bg-brand-blue/20 group-hover:scale-105 group-hover:shadow-[0_0_12px_rgba(59,130,246,0.3)] transition-all duration-300 flex items-center justify-center border border-brand-blue/20">
            <span className="text-brand-blue font-bold text-sm">&lt;/&gt;</span>
          </div>
          <span className="font-label-md text-label-md tracking-tighter text-primary group-hover:text-white transition-colors hidden sm:inline">
            {siteConfig.name}
          </span>
        </a>

        <div className="hidden lg:flex gap-lg">
          {navigationLinks.map((link) => (
            <a
              key={link.id}
              href={link.href}
              onClick={(e) => { e.preventDefault(); scrollToSection(link.id); }}
              className={cn(
                "nav-link text-on-surface-variant hover:text-on-surface transition-colors font-label-md text-label-md",
                activeSection === link.id && "active",
              )}
            >
              {link.label}
            </a>
          ))}
        </div>

        <a
          href="#contact"
          onClick={(e) => { e.preventDefault(); scrollToSection('contact'); }}
          className="bg-brand-blue hover:bg-blue-500 text-white font-label-md text-label-md px-md py-sm rounded-lg transition-all duration-300"
        >
          Hire Me
        </a>
      </nav>
    </header>
  );
}
