/**

 * ImpactMetricsSection component

 */

import { motion } from 'framer-motion';

import {

  Building2,

  Users,

  Globe,

  Activity,

  Clock,

  ShieldCheck,

} from 'lucide-react';

import { Card } from '../ui/Card';

import { Counter } from '../ui/Counter';

import { SectionHeader } from '../ui/SectionHeader';

import { RevealOnScroll } from '../ui/RevealOnScroll';

import { useSpotlight } from '../../hooks';

import { impactMetrics } from '../../config';



const metricIcons = [Building2, Users, Globe, Activity, Clock, ShieldCheck];



export function ImpactMetricsSection() {

  const { onMouseMove } = useSpotlight();



  return (

    <section className="section-block" id="impact">

      <RevealOnScroll>

        <SectionHeader eyebrow="Scale" title="Engineering Impact" />

      </RevealOnScroll>



      <div className="grid grid-cols-2 sm:grid-cols-3 xl:grid-cols-6 gap-md">

        {impactMetrics.map((metric, index) => {

          const Icon = metricIcons[index];

          return (

            <RevealOnScroll key={metric.label} delay={index * 0.1}>

              <motion.div

                className="h-full"

                whileHover={{ y: -6 }}

                transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}

              >

                <Card

                  className="flex flex-col gap-md spotlight-card hover-scale h-full !p-6"

                  onMouseMove={onMouseMove}

                >

                  <motion.div

                    className="text-brand-blue p-2.5 w-fit rounded-lg bg-brand-blue/10 border border-brand-blue/15"

                    initial={{ scale: 0.8, opacity: 0 }}

                    whileInView={{ scale: 1, opacity: 1 }}

                    transition={{ duration: 0.5, delay: index * 0.1 + 0.2 }}

                    viewport={{ once: true }}

                  >

                    <Icon size={28} />

                  </motion.div>

                  <Counter

                    value={metric.value}

                    suffix={metric.suffix}

                    variant="impact"

                    formatThousands={metric.formatThousands}

                  />

                  <p className="font-label-md text-label-md text-on-surface-variant">

                    {metric.label}

                  </p>

                </Card>

              </motion.div>

            </RevealOnScroll>

          );

        })}

      </div>

    </section>

  );

}

