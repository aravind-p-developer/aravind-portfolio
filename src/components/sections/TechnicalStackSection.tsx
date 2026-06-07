/**
 * TechnicalStackSection component
 */

import React from "react";
import { motion } from "framer-motion";
import type { LucideIcon } from "lucide-react";
import {
  Code2,
  Layers,
  Clock,
  Database,
  Box,
  Zap,
  Globe,
  GitBranch,
  Component,
  MapPin,
  Cpu,
  Wrench,
  ShieldCheck,
} from "lucide-react";

import { Card } from "../ui/Card";
import { SectionHeader } from "../ui/SectionHeader";
import { RevealOnScroll } from "../ui/RevealOnScroll";
import { useSpotlight } from "../../hooks";
import { techStackCategories } from "../../config";

const techIcons: Record<string, LucideIcon> = {
  Kotlin: Code2,
  Java: Code2,

  "Jetpack Compose": Layers,
  "XML Layouts": Layers,
  "Material Design 3": Layers,
  "Navigation Component": Layers,

  WorkManager: Clock,

  Room: Database,
  SQLite: Database,
  "Dynamic Schema Design": Database,

  Coroutines: Zap,

  Retrofit: Globe,
  "REST APIs": Globe,
  "JSON Parsing": Globe,

  Flow: GitBranch,
  StateFlow: GitBranch,
  SharedFlow: GitBranch,

  ViewModel: Component,
  LiveData: Component,
  MVVM: Component,
  "Clean Architecture": Component,
  "Repository Pattern": Component,
  "Offline-First Architecture": Component,
  "Metadata-Driven Architecture": Component,

  Hilt: Box,
  Koin: Box,

  "Location Services": MapPin,
  "Android SDK": Cpu,
  "Background Processing": Cpu,

  Crashlytics: ShieldCheck,
  FCM: ShieldCheck,
  Analytics: ShieldCheck,
  "Realtime Database": ShieldCheck,

  Git: Wrench,
  Gradle: Wrench,
  SonarQube: Wrench,
  Logcat: Wrench,
  "Android Studio Profiler": Wrench,

  Agile: ShieldCheck,
  "Code Reviews": ShieldCheck,
  "Unit Testing": ShieldCheck,
  "UI Testing": ShieldCheck,
  "ANR Investigation": ShieldCheck,
  "Root Cause Analysis": ShieldCheck,
  "CI/CD": ShieldCheck,
  // Renamed firebase entries
  "Firebase Crashlytics": ShieldCheck,
  "Firebase Analytics": ShieldCheck,
};

const CORE_COMPETENCIES = new Set([
  "Kotlin",
  "Java",
  "Jetpack Compose",
  "Android SDK",
  "Room",
]);

export function TechnicalStackSection() {
  const { onMouseMove } = useSpotlight();

  const handleMouseEnter = (e: React.MouseEvent<HTMLDivElement>) => {
    const container = e.currentTarget.querySelector('.scroll-container');
    const text = e.currentTarget.querySelector('.scroll-text');
    if (!container || !text) return;
    const overflow = text.scrollWidth - container.clientWidth;
    if (overflow > 0) {
      const speed = 25; // px/s
      const duration = overflow / speed;
      (text as HTMLElement).style.transition = `transform ${duration}s linear`;
      (text as HTMLElement).style.transform = `translateX(-${overflow}px)`;
    }
  };

  const handleMouseLeave = (e: React.MouseEvent<HTMLDivElement>) => {
    const text = e.currentTarget.querySelector('.scroll-text');
    if (text) {
      (text as HTMLElement).style.transition = 'transform 0.3s ease-out';
      (text as HTMLElement).style.transform = 'translateX(0px)';
    }
  };

  return (
    <section className="section-block" id="stack">
      <RevealOnScroll>
        <SectionHeader eyebrow="Expertise" title="Technical Stack" />
      </RevealOnScroll>

      <div className="flex flex-col gap-6">
        {techStackCategories.map((category, categoryIndex) => {
          const coreItems = category.items.filter((item) => CORE_COMPETENCIES.has(item));
          const secondaryItems = category.items.filter((item) => !CORE_COMPETENCIES.has(item));

          return (
            <RevealOnScroll key={category.id} delay={categoryIndex * 0.05}>
              <div className="tech-category-panel">
                <div className="flex items-center gap-3 mb-4">
                  <div className="gradient-accent" />
                  <h3 className="font-label-md text-label-md text-on-surface uppercase tracking-wider">
                    {category.label}
                  </h3>
                </div>

                {coreItems.length > 0 && (
                  <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3 md:gap-4">
                    {coreItems.map((techName, index) => {
                      const Icon = techIcons[techName] ?? Code2;

                      return (
                        <motion.div
                          key={techName}
                          initial={{ opacity: 0, y: 12 }}
                          whileInView={{ opacity: 1, y: 0 }}
                          transition={{
                            duration: 0.4,
                            delay: index * 0.05,
                            ease: [0.16, 1, 0.3, 1],
                          }}
                          viewport={{ once: true, margin: "-40px" }}
                          whileHover={{ y: -4, scale: 1.03 }}
                          onMouseEnter={handleMouseEnter}
                          onMouseLeave={handleMouseLeave}
                        >
                          <Card
                            className="!p-4 flex flex-col items-center justify-center gap-2.5 h-full spotlight-card cursor-default group overflow-hidden"
                            onMouseMove={onMouseMove}
                          >
                            <div className="p-2.5 rounded-lg bg-brand-blue/10 text-brand-blue border border-brand-blue/15 group-hover:bg-brand-blue/20 group-hover:shadow-[0_0_15px_rgba(59,130,246,0.2)] transition-all duration-300">
                              <Icon size={22} />
                            </div>

                            <div className="scroll-container overflow-hidden w-full text-center">
                              <span className="scroll-text font-label-md text-on-surface text-xs sm:text-sm whitespace-nowrap inline-block transition-transform duration-300">
                                {techName}
                              </span>
                            </div>
                          </Card>
                        </motion.div>
                      );
                    })}
                  </div>
                )}

                {coreItems.length > 0 && secondaryItems.length > 0 && (
                  <div className="text-[10px] font-label-sm uppercase tracking-wider text-on-surface-variant/50 mb-2 mt-4">
                    Libraries & Supporting Stack
                  </div>
                )}

                {secondaryItems.length > 0 && (
                  <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-2">
                    {secondaryItems.map((techName, index) => {
                      return (
                        <motion.div
                          key={techName}
                          initial={{ opacity: 0, y: 8 }}
                          whileInView={{ opacity: 1, y: 0 }}
                          transition={{
                            duration: 0.3,
                            delay: index * 0.02,
                            ease: [0.16, 1, 0.3, 1],
                          }}
                          viewport={{ once: true, margin: "-20px" }}
                          className="flex items-center gap-2 px-3 py-2 rounded-lg bg-surface-container/20 border border-brand-border hover:border-brand-blue/30 hover:bg-brand-blue/5 hover:text-on-surface text-on-surface-variant transition-all duration-300 cursor-default group overflow-hidden"
                          onMouseEnter={handleMouseEnter}
                          onMouseLeave={handleMouseLeave}
                        >
                          <div className="w-1.5 h-1.5 rounded-full bg-brand-blue/30 group-hover:bg-brand-blue group-hover:shadow-[0_0_8px_rgba(59,130,246,0.8)] transition-all duration-300 shrink-0" />
                          <div className="scroll-container overflow-hidden flex-1 w-full">
                            <span
                              className="scroll-text font-label-sm text-xs sm:text-sm whitespace-nowrap inline-block transition-transform duration-300"
                              title={techName}
                            >
                              {techName}
                            </span>
                          </div>
                        </motion.div>
                      );
                    })}
                  </div>
                )}
              </div>
            </RevealOnScroll>
          );
        })}
      </div>
    </section>
  );
}
