import { useEffect, useRef, useState } from "react";
import { Brain, BarChart3, Database, Cpu, Code, Cloud } from "lucide-react";

const skillCategories = [
  {
    title: "Machine Learning",
    icon: Brain,
    skills: [
      { name: "TensorFlow/Keras", level: 95 },
      { name: "PyTorch", level: 90 },
      { name: "Scikit-learn", level: 92 },
      { name: "XGBoost/LightGBM", level: 88 },
    ],
  },
  {
    title: "Deep Learning",
    icon: Cpu,
    skills: [
      { name: "Neural Networks", level: 93 },
      { name: "Computer Vision", level: 88 },
      { name: "NLP/Transformers", level: 85 },
      { name: "GANs & VAEs", level: 80 },
    ],
  },
  {
    title: "Data Science",
    icon: BarChart3,
    skills: [
      { name: "Python/NumPy", level: 95 },
      { name: "Pandas/Polars", level: 90 },
      { name: "Statistical Analysis", level: 87 },
      { name: "Feature Engineering", level: 92 },
    ],
  },
  {
    title: "MLOps & Cloud",
    icon: Cloud,
    skills: [
      { name: "MLflow/Weights & Biases", level: 85 },
      { name: "AWS/GCP", level: 82 },
      { name: "Docker/Kubernetes", level: 80 },
      { name: "CI/CD for ML", level: 78 },
    ],
  },
];

function SkillBar({ skill, inView }: { skill: { name: string; level: number }; inView: boolean }) {
  return (
    <div className="mb-4">
      <div className="flex justify-between mb-2">
        <span className="font-medium">{skill.name}</span>
        <span className="text-muted-foreground">{skill.level}%</span>
      </div>
      <div className="skill-progress">
        <div
          className="skill-progress-fill"
          style={{
            width: inView ? `${skill.level}%` : "0%",
            transitionDelay: `${Math.random() * 0.5}s`,
          }}
        />
      </div>
    </div>
  );
}

export function Skills() {
  const sectionRef = useRef<HTMLElement>(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
        }
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section id="skills" ref={sectionRef} className="py-20">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16 fade-in">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              My <span className="text-gradient">Skills</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              A comprehensive AI/ML toolkit I use to build intelligent systems and extract insights from data
            </p>
          </div>

          {/* Skills Grid */}
          <div className="grid md:grid-cols-2 gap-8">
            {skillCategories.map((category, categoryIndex) => (
              <div key={categoryIndex} className="card-hover p-8 slide-up">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-12 h-12 bg-hero-gradient rounded-lg flex items-center justify-center">
                    <category.icon className="h-6 w-6 text-white" />
                  </div>
                  <h3 className="text-2xl font-semibold">{category.title}</h3>
                </div>
                <div className="space-y-4">
                  {category.skills.map((skill, skillIndex) => (
                    <SkillBar key={skillIndex} skill={skill} inView={inView} />
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* Additional Skills */}
          <div className="mt-16 text-center fade-in">
            <h3 className="text-2xl font-semibold mb-8">Also Experienced With</h3>
            <div className="flex flex-wrap justify-center gap-4">
              {[
                "Hugging Face",
                "OpenAI API",
                "LangChain",
                "Apache Spark",
                "Jupyter/Colab",
                "Git/DVC",
                "Streamlit/Gradio",
                "FastAPI/Flask",
                "SQL/NoSQL",
                "Time Series Analysis",
                "A/B Testing",
                "Model Interpretability",
              ].map((skill, index) => (
                <span
                  key={index}
                  className="px-4 py-2 bg-muted rounded-full text-muted-foreground hover:bg-accent hover:text-accent-foreground transition-colors duration-200"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}