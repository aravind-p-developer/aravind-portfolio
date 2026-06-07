/**
 * EducationSection component
 */

import { motion } from 'framer-motion';

import { GraduationCap, MapPin, Award } from 'lucide-react';

import { Card } from '../ui/Card';

import { SectionHeader } from '../ui/SectionHeader';

import { RevealOnScroll } from '../ui/RevealOnScroll';

import { useSpotlight } from '../../hooks';

import { educationItems } from '../../config';



export function EducationSection() {

  const { onMouseMove } = useSpotlight();



  return (

    <section className="section-block" id="education">

      <RevealOnScroll>

        <SectionHeader eyebrow="Education" title="Academic Background" />

      </RevealOnScroll>



      <div className="grid grid-cols-1 md:grid-cols-2 gap-md">

        {educationItems.map((edu, index) => (

          <RevealOnScroll key={edu.degree} delay={index * 0.1}>

            <motion.div

              whileHover={{ y: -6 }}

              transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}

              className="h-full"

            >

              <Card

                className="flex flex-col gap-4 spotlight-card hover-scale h-full !p-6"

                onMouseMove={onMouseMove}

              >

                {/* Header row */}

                <div className="flex items-start gap-4">

                  <div className="p-3 rounded-xl bg-brand-blue/10 text-brand-blue border border-brand-blue/15 shrink-0">

                    <GraduationCap size={24} />

                  </div>

                  <div className="flex-1 min-w-0">

                    <div className="flex flex-wrap items-center gap-2 mb-1">

                      <span className="inline-flex items-center font-label-sm text-label-sm text-brand-blue bg-brand-blue/10 border border-brand-blue/20 rounded-full px-2.5 py-0.5 tracking-wide">

                        {edu.level}

                      </span>

                    </div>

                    <h3 className="font-headline-md text-headline-md text-white leading-snug">

                      {edu.field}

                    </h3>

                    <p className="font-body-md text-on-surface-variant mt-0.5">

                      {edu.degree}

                    </p>

                  </div>

                </div>

                {/* Institution */}

                <div className="flex flex-col gap-2 pl-1">

                  <div className="flex items-center gap-2 text-on-surface-variant">

                    <MapPin size={14} className="text-brand-blue shrink-0" />

                    <span className="font-label-sm text-label-sm">

                      {edu.institution} · {edu.location}

                    </span>

                  </div>

                  {/* CGPA */}

                  <motion.div

                    className="flex items-center gap-2"

                    initial={{ opacity: 0, x: -8 }}

                    whileInView={{ opacity: 1, x: 0 }}

                    transition={{ duration: 0.5, delay: index * 0.1 + 0.2 }}

                    viewport={{ once: true }}

                  >

                    <Award size={14} className="text-brand-blue shrink-0" />

                    <span className="font-label-sm text-label-sm text-on-surface-variant">

                      CGPA:{' '}

                      <span className="text-brand-blue font-semibold">

                        {edu.cgpa}

                      </span>

                      <span className="text-on-surface-variant">

                        {' '}/ {edu.cgpaMax}

                      </span>

                    </span>

                  </motion.div>

                </div>

              </Card>

            </motion.div>

          </RevealOnScroll>

        ))}

      </div>

    </section>

  );

}
