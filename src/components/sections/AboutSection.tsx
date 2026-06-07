/**

 * AboutSection component

 */

import { motion } from 'framer-motion';

import { Card } from '../ui/Card';

import { ProfileAvatar } from '../ui/ProfileAvatar';

import { SectionHeader } from '../ui/SectionHeader';

import { RevealOnScroll } from '../ui/RevealOnScroll';

import { useSpotlight } from '../../hooks';

import { siteConfig } from '../../config';



export function AboutSection() {

  const { onMouseMove } = useSpotlight();



  return (

    <section className="section-block" id="about">

      <RevealOnScroll>

        <SectionHeader eyebrow="About" title="Engineering Philosophy" />

      </RevealOnScroll>



      <RevealOnScroll delay={0.1}>

        <Card

          variant="medium"

          gradient

          className="spotlight-card !p-6 md:!p-8"

          onMouseMove={onMouseMove}

        >

          <div className="flex flex-col sm:flex-row gap-6 md:gap-lg items-start">

            <div className="shrink-0 mx-auto sm:mx-0">

              <ProfileAvatar size="sm" />

            </div>

            <div className="flex flex-col gap-md flex-1 min-w-0">

              <div>

                <h3 className="font-headline-md text-headline-md text-on-surface">

                  {siteConfig.name}

                </h3>

                <p className="font-label-md text-brand-blue mt-1">

                  {siteConfig.title} · {siteConfig.location}

                </p>

              </div>

              <motion.p

                className="font-body-lg text-body-lg text-on-surface-variant leading-relaxed"

                initial={{ opacity: 0 }}

                whileInView={{ opacity: 1 }}

                transition={{ duration: 0.8 }}

                viewport={{ once: true, margin: '-50px' }}

              >

                I specialize in solving the difficult, invisible problems of

                Android development. While UI is important, my passion lies in

                what happens behind the screen: ensuring absolute reliability

                when network conditions fail, building bulletproof offline sync

                mechanisms, orchestrating complex background execution with

                WorkManager, and maintaining production stability for

                enterprise-scale applications. I believe that a truly great

                mobile app doesn&apos;t just look good—it works flawlessly,

                regardless of connectivity or environment.

              </motion.p>

            </div>

          </div>

        </Card>

      </RevealOnScroll>

    </section>

  );

}

