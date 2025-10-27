"use client"

export default function About() {
  return (
    <section id="about" className="py-20 px-4 sm:px-6 lg:px-8 bg-card">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-4xl font-bold mb-12 text-balance">About Me</h2>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6 text-foreground/80">
            <p>
              I'm a passionate developer with a deep love for creating beautiful, functional web applications. With
              expertise in modern web technologies, I transform ideas into elegant digital solutions.
            </p>
            <p>
              My journey in development has taken me through various industries—from startups to established
              companies—where I've honed my skills in building scalable applications and leading technical initiatives.
            </p>
            <p>
              When I'm not coding, you'll find me exploring new technologies, contributing to open-source projects, or
              sharing knowledge with the developer community.
            </p>
          </div>

          <div className="space-y-6">
            <div className="p-6 bg-background rounded-lg border border-border hover:border-primary/50 transition-colors">
              <h3 className="font-semibold text-lg mb-2">Problem Solver</h3>
              <p className="text-foreground/70 text-sm">
                I approach challenges with analytical thinking and creative solutions, breaking down complex problems
                into manageable components.
              </p>
            </div>
            <div className="p-6 bg-background rounded-lg border border-border hover:border-primary/50 transition-colors">
              <h3 className="font-semibold text-lg mb-2">Full-Stack Developer</h3>
              <p className="text-foreground/70 text-sm">
                Proficient in both frontend and backend technologies, I build complete solutions from database to user
                interface.
              </p>
            </div>
            <div className="p-6 bg-background rounded-lg border border-border hover:border-primary/50 transition-colors">
              <h3 className="font-semibold text-lg mb-2">Continuous Learner</h3>
              <p className="text-foreground/70 text-sm">
                Always staying updated with the latest technologies and best practices in web development.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
