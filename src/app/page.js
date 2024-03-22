"use client"

import { motion } from 'framer-motion'

import Scene from '@/components/Scene.jsx'
import Hero from '@/components/Hero.jsx'
import OutboundContent from '@/components/OutboundContent.jsx'
import BuzzWords from '@/components/BuzzWords.jsx'


export default function Home() {
  return (
    <main>
      <div className='page-content'>
        <Hero />
        <motion.div
          className='main-content rich-text'>
          <div className="main-content-inner">
            <h1>Hi there, I'm Christian</h1>
            <p>
              Full-stack developer from Denmark, with a focus on creative frontend. <br />
              I love to create beautiful and functional websites, and I'm passionate about creating
              creative frontend and animations, music(listening and playing), and much more.
              <br />
              Collaboration and knowledge sharing is key to me, and I'm always looking for new opportunities to learn and grow.
            </p>
            <p>
              Over the years I've worked with a vast variety of technologies, and helped out a brunch of brands on the way. 
              <br /><br />
              A selected few of those brands:
            </p>
            <ul className="projects-list">
              <li className="project">
                <a
                  target="_blank"
                  href="https://implementconsultinggroup.com/"
                  className="link -external"
                  rel="noopener noreferrer">Implement Consulting Group</a>
              </li>
              <li className="project">
                <a
                  target="_blank"
                  href="https://oneandonlymusicals.dk/"
                  className="link -external"
                  rel="noopener noreferrer">One and Only Musicals</a>
              </li>
              <li className="project">
                <a
                  target="_blank"
                  href="https://www.wsa.com"
                  className="link -external"
                  rel="noopener noreferrer">wsa.com</a>
              </li>
              <li className="project">
                <a
                  target="_blank"
                  href="https://polyfon.dk/"
                  className="link -external"
                  rel="noopener noreferrer">Polyfon</a>
              </li>
              <li className="project">
                <a
                  target="_blank"
                  href="https://boconcept.com/"
                  className="link -external"
                  rel="noopener noreferrer">BoConcept</a>
              </li>
              <li className="project">
                <a
                  target="_blank"
                  href="https://ganni.com/"
                  className="link -external"
                  rel="noopener noreferrer">
                    Ganni Space
                  </a>
                <br />
                <a target="_blank" href="https://www.deptagency.com/en-dk/case/ganni-space-unique-showrooms-for-each-collection/" className="link -external -indent" rel="noopener noreferrer">
                  Ganni Space case description (by Dept)
                </a>
              </li>
              <li className="project">
                Pandora's product launch sites
              </li>
              <li className="project">
                <a
                  target="_blank"
                  href="https://muuto.com/"
                  className="link -external"
                  rel="noopener noreferrer">Muuto</a>
              </li>
              <li className="project">
                <a
                  target="_blank"
                  href="https://magasin.dk/"
                  className="link -external"
                  rel="noopener noreferrer">Magasin</a>
              </li>
              <li className="project">
                <a
                  target="_blank"
                  href="https://scandlines.dk/"
                  className="link -external"
                  rel="noopener noreferrer">Scandlines</a>
              </li>
              <li className="project">
                <a
                  target="_blank"
                  href="https://tryg.dk/"
                  className="link -external"
                  rel="noopener noreferrer">Tryg</a>
              </li>
              <li className="project">
                <a
                  target="_blank"
                  href="https://planday.com/"
                  className="link -external"
                  rel="noopener noreferrer">Planday</a>
              </li>
            </ul>

            <BuzzWords />

            <p>
              My setup:
            </p>
            <ul className='-bullets'>
              <li>MacBook (M1 and above)</li>
              <li>
                VS Code
                <ul className='-bullets'>
                  <li>Light theme.......</li>
                  <li>GitHub CoPilot(Tried Tabnine, but no)</li>
                  <li>ESLint</li>
                  <li>Prettier</li>
                  <li>GitLens</li>
                  <li>Import cost</li>
                  <li>Todo tree</li>
                  <li>Bookmarks</li>
                  <li>Turbo Console Log</li>
                  <li>... and a bunch of other extensions</li>
                </ul>
              </li>
              <li>iTerm 2 (w. ZSH(w. z, and a shitload of custom aliases and utilities))</li>
              <li>Chrome fanboy</li>
              <li>Trello</li>
              <li>I love my Git GUI, GitTower. But move over, "here's Johnny" aka. GitButler..</li>
            </ul>

            <p>
              My future should have more of these ingredients: 
            </p>
            <ul className='-bullets'>
              <li>GSAP</li>
              <li>Nuxt</li>
              <li>Three and R3F</li>
              <li>NextJS</li>
              <li>Framer motion</li>
              <li>Blender/Cinema4D/Houdini</li>
              <li>WebXR</li>
              <li>WebGPU</li>
            </ul>
          </div>
        </motion.div>
        
        <OutboundContent />
        
      </div>
      <div className='gl-scene'>
        {/* <Scene /> */}
      </div>
    </main>
  )
}
