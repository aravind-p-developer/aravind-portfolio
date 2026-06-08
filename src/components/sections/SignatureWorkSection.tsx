/**

 * SignatureWorkSection component

 */

import { motion } from 'framer-motion';

import {

  Database,

  Clock,

  MapPin,

  Shield,

  Settings,

  Film,

  BookOpen,

} from 'lucide-react';

import { Card } from '../ui/Card';

import { SectionHeader } from '../ui/SectionHeader';

import { RevealOnScroll } from '../ui/RevealOnScroll';

import { useSpotlight } from '../../hooks';



interface CaseStudy {

  icon: React.ReactNode;

  title: string;

  description: string;

  delay: number;

}



const caseStudies: CaseStudy[] = [

  {

    icon: <BookOpen size={32} />,

    title: 'Android Developer Knowledge Hub',

    description:

      'Architected and published a 10-phase open-source Android learning platform mapping core OS internals, multi-threading architectures, and senior-level debugging paradigms.',

    delay: 0,

  },

  {

    icon: <Database size={32} />,

    title: 'Offline-First Architecture',

    description:

      'Designed robust local-first data synchronization layers using Room and structured conflict resolution strategies to ensure seamless operation in low-connectivity environments.',

    delay: 0.1,

  },

  {

    icon: <Clock size={32} />,

    title: 'WorkManager Migration',

    description:

      'Led complex migrations from deprecated background execution models to WorkManager, guaranteeing reliable, battery-efficient task execution for critical enterprise data processing.',

    delay: 0.2,

  },

  {

    icon: <MapPin size={32} />,

    title: 'Location Intelligence',

    description:

      'Implemented precise, battery-optimized location tracking and geofencing systems for field-force management, balancing accuracy with device resource constraints.',

    delay: 0.3,

  },

  {

    icon: <Shield size={32} />,

    title: 'Production Stability',

    description:

      'Established crash monitoring, memory leak detection, and automated testing pipelines to improve stability across diverse Android device ecosystems.',

    delay: 0.4,

  },

  {

    icon: <Settings size={32} />,

    title: 'Metadata-Driven Platform',

    description:

      'Architected runtime-configurable platform capabilities — dynamic forms, validation frameworks, business rules engines, and schema-less data models — all driven by server-side metadata, eliminating app releases for configuration changes.',

    delay: 0.5,

  },

  {

    icon: <Film size={32} />,

    title: 'Media Compression Pipeline',

    description:

      'Engineered a custom offline image and video compression pipeline using Kotlin Coroutines and native Android Media APIs, reducing upload payload sizes significantly without any third-party compression dependencies.',

    delay: 0.6,

  },

];



export function SignatureWorkSection() {

  const { onMouseMove } = useSpotlight();



  return (

    <section className="section-block" id="projects">

      <RevealOnScroll>

        <SectionHeader eyebrow="Case Studies" title="Signature Engineering Work" />

      </RevealOnScroll>



      <div className="grid grid-cols-1 md:grid-cols-2 gap-md">

        {caseStudies.map((study) => (

          <RevealOnScroll key={study.title} delay={study.delay}>

            <motion.div

              whileHover={{ y: -6 }}

              transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}

              className="h-full"

            >

              <Card

                className="flex flex-col gap-sm case-study-card spotlight-card hover-scale h-full !p-6"

                onMouseMove={onMouseMove}

              >

                <motion.div

                  className="flex items-center gap-3 mb-2"

                  initial={{ opacity: 0, y: 10 }}

                  whileInView={{ opacity: 1, y: 0 }}

                  transition={{ duration: 0.5, delay: study.delay + 0.1 }}

                  viewport={{ once: true }}

                >

                  <div className="p-2.5 rounded-lg bg-brand-blue/10 text-brand-blue border border-brand-blue/15">

                    {study.icon}

                  </div>

                  <h3 className="font-headline-md text-headline-md text-on-surface">

                    {study.title}

                  </h3>

                </motion.div>

                <motion.p

                  className="font-body-md text-on-surface-variant leading-relaxed"

                  initial={{ opacity: 0 }}

                  whileInView={{ opacity: 1 }}

                  transition={{ duration: 0.6, delay: study.delay + 0.2 }}

                  viewport={{ once: true }}

                >

                  {study.description}

                </motion.p>

              </Card>

            </motion.div>

          </RevealOnScroll>

        ))}

      </div>

    </section>

  );

}

