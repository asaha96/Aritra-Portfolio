import { Download, FileText, CheckCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
const Resume = () => {
  const highlights = ['Led data science workflows at NVIDIA AI Makerspace Nexus for HPC systems', 'Processed 100M+ BSMs for connected vehicle analytics and emergency response', 'Built Canvas LTI 1.3 app serving 5,000+ students with <200ms latency', 'Achieved 85% agreement with instructor grading using LLM evaluation', 'Reduced emergency decision time by ~30% through ML-driven dashboards', 'Software Engineering Intern at Siemens with full-stack development experience', 'Teaching Assistant for PSYC 3040 and Executive Director of SAILea', 'Expertise in Python, React, ML pipelines, cloud platforms, and accessibility'];

  // Google Drive embed URL for the resume
  const resumeUrl = "https://drive.google.com/uc?id=1kZSNtotDEGhUF048QgLn5tU8EM9Z2PH_&export=download";
  const resumeEmbedUrl = "https://drive.google.com/file/d/1kZSNtotDEGhUF048QgLn5tU8EM9Z2PH_/preview";
  return <section id="resume" className="section-padding">
      <div className="max-w-7xl mx-auto container-padding">
        <div className="space-y-8">
          {/* Header */}
          <div className="text-center space-y-4">
            <h2 className="text-3xl lg:text-4xl font-bold">Resume</h2>
            <div className="w-16 h-1 bg-primary rounded-full mx-auto" />
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Comprehensive overview of my experience in AI, data systems, and educational technology
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-start">
            {/* Resume Embed */}
            <div className="space-y-6">
              <div className="bg-card border border-border rounded-lg p-6 space-y-4">
                <div className="flex items-center space-x-3">
                  <FileText className="h-6 w-6 text-primary" />
                  <h3 className="text-xl font-semibold">Aritra Saha Resume</h3>
                </div>
                
                {/* PDF Embed */}
                <div className="bg-surface rounded-lg border border-border overflow-hidden">
                  <iframe src={resumeEmbedUrl} className="w-full h-[600px]" title="Aritra Saha Resume" aria-label="Aritra Saha's resume document" />
                  <div className="p-4 text-center border-t border-border">
                    <p className="text-sm text-muted-foreground">
                      Full resume with detailed experience, education, and project information
                    </p>
                  </div>
                </div>

                {/* Download Button */}
                <Button asChild className="w-full btn-hero">
                  <a href={resumeUrl} download="Aritra_Saha_Resume.pdf" aria-label="Download Aritra Saha's resume as PDF">
                    <Download className="mr-2 h-5 w-5" />
                    Download Resume
                  </a>
                </Button>
                
                <p className="text-xs text-muted-foreground text-center">
                  Optimized for ATS systems and screen readers
                </p>
              </div>
            </div>

            {/* Key Highlights */}
            <div className="space-y-6">
              <div className="space-y-4">
                <h3 className="text-xl font-semibold">Key Highlights</h3>
                <p className="text-muted-foreground">
                  Measurable outcomes and technical achievements across research, industry, and education
                </p>
              </div>

              <div className="space-y-4">
                {highlights.map((highlight, index) => <div key={index} className="flex items-start space-x-3">
                    <CheckCircle className="h-5 w-5 text-success mt-0.5 flex-shrink-0" />
                    <p className="text-muted-foreground leading-relaxed">{highlight}</p>
                  </div>)}
              </div>

              {/* Additional Info */}
              <div className="mt-8 p-4 bg-accent rounded-lg">
                <h4 className="font-semibold text-accent-foreground mb-2">Technical Skills Summary</h4>
                <div className="text-sm text-muted-foreground space-y-1">
                  <p><strong>Languages:</strong> Python, Java, JavaScript, SQL, C</p>
                  <p><strong>Frameworks:</strong> React, Node.js, TensorFlow, PyTorch</p>
                  <p><strong>Data & ML:</strong> Pandas, NumPy, Scikit-learn, OpenCV</p>
                  <p><strong>Cloud & Tools:</strong> AWS, Azure, Docker, Git, REST APIs</p>
                  <p><strong>Specialties:</strong> HCI, Educational Technology, Data Visualization</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>;
};
export default Resume;