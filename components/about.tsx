"use client"

export default function About() {
  return (
    <section id="about" className="py-20 px-4 sm:px-6 lg:px-8 bg-card">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-4xl font-bold mb-12 text-balance">About Me</h2>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6 text-foreground/80">
            <p>
              I’m an AI/ML and Python Developer specializing in OCR, Document Automation, and GenAI-based applications.
              I love solving real-world problems by building intelligent systems that extract insights, automate workflows, and enhance decision-making.
            </p>
            <p>
              My experience spans building scalable backends, OCR pipelines, GenAI chatbots, and fraud-detection systems using technologies like Python,
              FastAPI, LangChain, PaddleOCR, OpenCV, NLP, and Machine Learning. I love engineering solutions that are clean, efficient, and production-ready.
            </p>
            <p>
              Beyond coding, I’m constantly learning, tinkering with new tools, and sharing what I discover with the developer community. Curiosity drives me, 
              challenges inspire me, and building impactful products is what keeps me motivated every day
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
              <h3 className="font-semibold text-lg mb-2">AI/ML Developer</h3>
              <p className="text-foreground/70 text-sm">
                Experienced in developing end-to-end AI and machine learning solutions using Python, from data preprocessing
                and model training to deployment and integration with applications. Skilled in building scalable, efficient,
                and production-ready ML pipelines.
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
