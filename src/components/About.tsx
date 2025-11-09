import React from 'react'
import TextScramble from './TextScramble'
import { Braces } from 'lucide-react'
import { Card, CardContent } from './ui/card'

function About({isAnimationPaused}) {
  return (
     <section id="about" className="py-20 px-6">
        <div className="container mx-auto max-w-4xl">
          <TextScramble
            text="<about>"
            className="text-3xl md:text-4xl font-bold mb-8 font-mono bg-gradient-to-r from-blue-500 to-cyan-500 bg-clip-text text-transparent"
            isPaused={isAnimationPaused}
          >
            <Braces className="w-8 h-8 inline mr-3 text-blue-500" />
          </TextScramble>
          <Card className="bg-gradient-to-br from-card to-card/50 border-blue-500/30 shadow-xl shadow-blue-500/10 hover:shadow-2xl hover:shadow-blue-500/20 transition-all duration-500 backdrop-blur-sm">
            <CardContent className="p-8">
              <p className="text-lg text-foreground/90 leading-relaxed mb-4">
                I'm a passionate full-stack developer with a keen eye for
                creating seamless user experiences and robust backend systems.
                With expertise in modern web technologies, I transform ideas
                into functional, scalable applications.
              </p>
              <p className="text-lg text-foreground/90 leading-relaxed">
                When I'm not coding, you'll find me exploring new technologies,
                contributing to open-source projects, or sharing knowledge with
                the developer community.
              </p>
            </CardContent>
          </Card>
          <p className="text-sm text-muted-foreground font-mono mt-4">
            &lt;/about&gt;
          </p>
        </div>
      </section>
  )
}

export default About