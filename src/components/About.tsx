import { Brain, Database, BarChart3, Cpu } from "lucide-react";

const stats = [
  { icon: Brain, value: "25+", label: "ML Models Deployed" },
  { icon: Database, value: "100TB+", label: "Data Processed" },
  { icon: BarChart3, value: "95%+", label: "Model Accuracy" },
  { icon: Cpu, value: "4+", label: "Years in AI/ML" },
];

export function About() {
  return (
    <section id="about" className="py-20 bg-muted/30">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16 fade-in">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              About <span className="text-gradient">Me</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              I'm a passionate AI/ML engineer who transforms complex data into intelligent solutions. 
              With expertise in machine learning, deep learning, and data science, I build systems that learn and adapt.
            </p>
          </div>

          {/* Content Grid */}
          <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
            {/* Story */}
            <div className="slide-up">
              <h3 className="text-2xl font-semibold mb-6">My Journey</h3>
              <div className="space-y-4 text-muted-foreground">
                <p>
                  My journey into AI/ML started 3 months ago when I discovered the incredible potential of 
                  machine learning to solve real-world problems. What began as fascination with neural networks 
                  quickly evolved into expertise in building production-ready AI systems.
                </p>
                <p>
                  I specialize in deep learning, computer vision, and NLP using TensorFlow, PyTorch, and 
                  modern MLOps practices. From research to deployment, I ensure models are robust, 
                  scalable, and deliver measurable business value.
                </p>
                <p>
                  When I'm not training models, you'll find me exploring cutting-edge research papers, 
                  contributing to open-source ML projects, or experimenting with the latest AI architectures 
                  over a good cup of coffee.
                </p>
              </div>
            </div>

            {/* Values */}
            <div className="slide-up">
              <h3 className="text-2xl font-semibold mb-6">What I Value</h3>
              <div className="space-y-6">
                <div className="flex gap-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Brain className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2">AI Research</h4>
                    <p className="text-muted-foreground">
                      Constantly exploring cutting-edge research and implementing novel AI architectures.
                    </p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Database className="h-6 w-6 text-accent" />
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2">Data-Driven</h4>
                    <p className="text-muted-foreground">
                      Making decisions based on rigorous data analysis and statistical validation.
                    </p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Cpu className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2">Performance</h4>
                    <p className="text-muted-foreground">
                      Optimizing models for production with focus on efficiency and scalability.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center card-hover p-6 fade-in">
                <div className="w-16 h-16 bg-hero-gradient rounded-full flex items-center justify-center mx-auto mb-4">
                  <stat.icon className="h-8 w-8 text-white" />
                </div>
                <div className="text-3xl font-bold text-gradient mb-2">{stat.value}</div>
                <div className="text-muted-foreground font-medium">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
