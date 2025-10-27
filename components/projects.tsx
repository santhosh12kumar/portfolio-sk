"use client"

import { ExternalLink, Github } from "lucide-react"

export default function Projects() {
  const projects = [
    {
      title: "E-Commerce Platform",
      description:
        "Full-stack e-commerce solution with real-time inventory management, payment processing, and admin dashboard.",
      tags: ["React", "Node.js", "PostgreSQL", "Stripe"],
      link: "#",
      github: "#",
      image: "/ecommerce-dashboard.png",
    },
    {
      title: "Task Management App",
      description:
        "Collaborative task management tool with real-time updates, team collaboration features, and advanced filtering.",
      tags: ["Next.js", "TypeScript", "Supabase", "Tailwind"],
      link: "#",
      github: "#",
      image: "/task-management-app.png",
    },
    {
      title: "Analytics Dashboard",
      description: "Data visualization dashboard with interactive charts, real-time metrics, and customizable reports.",
      tags: ["React", "D3.js", "Python", "AWS"],
      link: "#",
      github: "#",
      image: "/analytics-dashboard-charts.png",
    },
    {
      title: "Social Media Feed",
      description: "Modern social platform with infinite scroll, real-time notifications, and user interactions.",
      tags: ["Next.js", "MongoDB", "Socket.io", "Redis"],
      link: "#",
      github: "#",
      image: "/social-media-feed-interface.jpg",
    },
  ]

  return (
    <section id="projects" className="py-20 px-4 sm:px-6 lg:px-8 bg-card">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold mb-12 text-balance">Featured Projects</h2>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project) => (
            <div
              key={project.title}
              className="group bg-background rounded-lg border border-border overflow-hidden hover:border-primary/50 transition-all hover:shadow-xl"
            >
              <div className="relative h-48 overflow-hidden bg-muted">
                <img
                  src={project.image || "/placeholder.svg"}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>

              <div className="p-6 space-y-4">
                <h3 className="text-xl font-semibold text-foreground">{project.title}</h3>
                <p className="text-foreground/70 text-sm leading-relaxed">{project.description}</p>

                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span key={tag} className="px-3 py-1 bg-primary/10 text-primary text-xs font-medium rounded-full">
                      {tag}
                    </span>
                  ))}
                </div>

                <div className="flex gap-3 pt-4">
                  <a
                    href={project.link}
                    className="inline-flex items-center gap-2 text-primary hover:text-accent transition-colors text-sm font-medium"
                  >
                    View Project
                    <ExternalLink className="w-4 h-4" />
                  </a>
                  <a
                    href={project.github}
                    className="inline-flex items-center gap-2 text-foreground/60 hover:text-foreground transition-colors text-sm font-medium"
                  >
                    Code
                    <Github className="w-4 h-4" />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
