import { useState } from "react";
import { ExternalLink, Github, Filter } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

const projects = [
  {
    id: 1,
    title: "Medical Image Classification",
    description: "A deep learning CNN model for medical image analysis, achieving 94% accuracy in detecting pneumonia from chest X-rays using transfer learning with ResNet-50.",
    image: "https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=600&h=400&fit=crop",
    category: "Computer Vision",
    technologies: ["PyTorch", "OpenCV", "FastAPI", "Docker"],
    demoUrl: "https://medical-ai-demo.com",
    githubUrl: "https://github.com/HarishSidagam8",
  },
  {
    id: 2,
    title: "Sentiment Analysis Engine",
    description: "Real-time sentiment analysis system processing 10K+ social media posts per minute using BERT transformers and Kafka streaming architecture.",
    image: "https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=600&h=400&fit=crop",
    category: "NLP",
    technologies: ["Transformers", "Apache Kafka", "Redis", "PostgreSQL"],
    demoUrl: "https://sentiment-engine-demo.com",
    githubUrl: "https://github.com/HarishSidagam8",
  },
  {
    id: 3,
    title: "Financial Forecasting Model",
    description: "LSTM-based time series forecasting system for stock price prediction with 87% directional accuracy and automated trading signal generation.",
    image: "https://images.unsplash.com/photo-1642790106117-e829e14a795f?w=600&h=400&fit=crop",
    category: "Time Series",
    technologies: ["TensorFlow", "Pandas", "Alpha Vantage API", "Streamlit"],
    demoUrl: "https://finance-forecast-demo.com",
    githubUrl: "https://github.com/HarishSidagam8",
  },
  {
    id: 4,
    title: "Recommendation System",
    description: "Hybrid collaborative filtering and content-based recommendation engine serving 1M+ users with sub-100ms response times and A/B tested improvements.",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&h=400&fit=crop",
    category: "Data Science",
    technologies: ["Scikit-learn", "Apache Spark", "MLflow", "Kubernetes"],
    demoUrl: "https://recommendation-demo.com",
    githubUrl: "https://github.com/HarishSidagam8",
  },
  {
    id: 5,
    title: "Object Detection System",
    description: "Real-time multi-class object detection using YOLOv8 for autonomous vehicle perception, deployed on edge devices with 30fps processing speed.",
    image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600&h=400&fit=crop",
    category: "Computer Vision",
    technologies: ["YOLOv8", "TensorRT", "ROS2", "NVIDIA Jetson"],
    demoUrl: "https://object-detection-demo.com",
    githubUrl: "https://github.com/HarishSidagam8",
  },
  {
    id: 6,
    title: "Anomaly Detection Pipeline",
    description: "Unsupervised machine learning pipeline for fraud detection in financial transactions using isolation forests and autoencoders with 99.2% precision.",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=400&fit=crop",
    category: "Data Science",
    technologies: ["Scikit-learn", "Keras", "Apache Airflow", "Elasticsearch"],
    demoUrl: "https://anomaly-detection-demo.com",
    githubUrl: "https://github.com/HarishSidagam8",
  },
];

const categories = ["All", "Computer Vision", "NLP", "Data Science", "Time Series"];

export function Projects() {
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredProjects = activeCategory === "All" 
    ? projects 
    : projects.filter(project => project.category === activeCategory);

  return (
    <section id="projects" className="py-20 bg-muted/30">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16 fade-in">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              My <span className="text-gradient">Projects</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              A showcase of my recent work and creative solutions across different technologies and platforms
            </p>
          </div>

          {/* Filter Buttons */}
          <div className="flex flex-wrap justify-center gap-4 mb-12 fade-in">
            {categories.map((category) => (
              <Button
                key={category}
                variant={activeCategory === category ? "default" : "outline"}
                onClick={() => setActiveCategory(category)}
                className={`px-6 py-2 rounded-full transition-all duration-300 ${
                  activeCategory === category
                    ? "bg-hero-gradient text-white shadow-hero-glow"
                    : "hover:bg-accent/20"
                }`}
              >
                <Filter className="h-4 w-4 mr-2" />
                {category}
              </Button>
            ))}
          </div>

          {/* Projects Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((project, index) => (
              <div key={project.id} className="card-hover overflow-hidden group slide-up">
                {/* Project Image */}
                <div className="relative overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-4">
                    <Button
                      size="sm"
                      className="bg-white/20 backdrop-blur-sm hover:bg-white/30"
                      asChild
                    >
                      <a href={project.demoUrl} target="_blank" rel="noopener noreferrer">
                        <ExternalLink className="h-4 w-4" />
                      </a>
                    </Button>
                    <Button
                      size="sm" 
                      className="bg-white/20 backdrop-blur-sm hover:bg-white/30"
                      asChild
                    >
                      <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                        <Github className="h-4 w-4" />
                      </a>
                    </Button>
                  </div>
                </div>

                {/* Project Content */}
                <div className="p-6">
                  <div className="flex items-center justify-between mb-3">
                    <h3 className="text-xl font-semibold">{project.title}</h3>
                    <Badge variant="secondary" className="text-xs">
                      {project.category}
                    </Badge>
                  </div>
                  <p className="text-muted-foreground mb-4 text-sm leading-relaxed">
                    {project.description}
                  </p>
                  
                  {/* Technologies */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="px-2 py-1 bg-muted rounded text-xs text-muted-foreground"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* Project Links */}
                  <div className="flex gap-2">
                    <Button size="sm" variant="outline" className="flex-1" asChild>
                      <a href={project.demoUrl} target="_blank" rel="noopener noreferrer">
                        <ExternalLink className="h-4 w-4 mr-2" />
                        Demo
                      </a>
                    </Button>
                    <Button size="sm" variant="outline" className="flex-1" asChild>
                      <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                        <Github className="h-4 w-4 mr-2" />
                        Code
                      </a>
                    </Button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* CTA */}
          <div className="text-center mt-16 fade-in">
            <p className="text-muted-foreground mb-6">
              Interested in seeing more of my work or discussing a project?
            </p>
            <Button
              size="lg"
              className="btn-hero"
              onClick={() => {
                const contactElement = document.querySelector("#contact");
                if (contactElement) {
                  contactElement.scrollIntoView({ behavior: "smooth" });
                }
              }}
            >
              Let's Work Together
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
