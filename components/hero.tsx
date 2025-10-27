"use client"

import { ArrowRight } from "lucide-react"

export default function Hero() {
  return (
    <section className="min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 py-20 bg-gradient-to-br from-background via-background to-primary/5">
      <div className="max-w-4xl mx-auto text-center space-y-8">
        <div className="space-y-4">
          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-balance">
            Crafting Digital
            <span className="block bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              Experiences
            </span>
          </h1>
          <p className="text-lg sm:text-xl text-foreground/70 text-balance max-w-2xl mx-auto">
            Full-stack developer passionate about building modern, responsive web applications with clean code and
            intuitive user interfaces.
          </p>
        </div>

        <div className="flex flex-col sm:flex-row gap-4 justify-center pt-8">
          <a
            href="#projects"
            className="inline-flex items-center justify-center gap-2 px-8 py-3 bg-primary text-primary-foreground rounded-lg font-semibold hover:bg-primary/90 transition-colors"
          >
            View My Work
            <ArrowRight className="w-4 h-4" />
          </a>
          <a
            href="#contact"
            className="inline-flex items-center justify-center px-8 py-3 border border-border rounded-lg font-semibold hover:bg-secondary transition-colors"
          >
            Get In Touch
          </a>
        </div>

        {/* Scroll Indicator */}
        <div className="pt-12 animate-bounce">
          <div className="w-6 h-10 border-2 border-foreground/30 rounded-full flex items-start justify-center p-2">
            <div className="w-1 h-2 bg-foreground/50 rounded-full animate-pulse" />
          </div>
        </div>
      </div>
    </section>
  )
}
