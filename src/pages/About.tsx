import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { 
  Briefcase, 
  GraduationCap, 
  Target, 
  Code2, 
  Database, 
  Globe, 
  Smartphone,
  Server,
  GitBranch,
  Cloud
} from 'lucide-react';

const About = () => {
  const skills = [
    { category: 'Frontend', icon: Globe, items: ['React', 'TypeScript', 'Tailwind CSS', 'Next.js', 'Vue.js'] },
    { category: 'Backend', icon: Server, items: ['Node.js', 'Golang', 'Python', 'Express.js', 'FastAPI'] },
    { category: 'Database', icon: Database, items: ['PostgreSQL', 'MongoDB', 'Redis', 'MySQL', 'Prisma'] },
    { category: 'DevOps', icon: Cloud, items: ['AWS', 'Docker', 'Kubernetes', 'CI/CD', 'Terraform'] },
    { category: 'Mobile', icon: Smartphone, items: ['React Native', 'Flutter', 'PWA', 'Ionic'] },
    { category: 'Tools', icon: GitBranch, items: ['Git', 'VS Code', 'Figma', 'Postman', 'Jira'] },
  ];

  const experience = [
    {
      role: 'Senior Full-Stack Developer',
      company: 'TechCorp Private Limited',
      period: '2023 - Present',
      description: 'Leading development of scalable web applications using React, Node.js, and cloud technologies. Mentoring junior developers and driving technical decisions.',
      achievements: [
        'Increased application performance by 40% through optimization',
        'Led migration from monolith to microservices architecture',
        'Implemented CI/CD pipelines reducing deployment time by 60%'
      ]
    },
    {
      role: 'Full-Stack Developer',
      company: 'Innovation Labs',
      period: '2022 - 2023',
      description: 'Developed and maintained multiple client projects using modern web technologies. Collaborated with cross-functional teams to deliver high-quality solutions.',
      achievements: [
        'Built 5+ production applications serving 10k+ users',
        'Introduced automated testing increasing code coverage to 85%',
        'Optimized database queries improving response times by 50%'
      ]
    },
    {
      role: 'Software Developer',
      company: 'National Power Corporation (PSU)',
      period: '2019 - 2022',
      description: 'Worked on internal applications and systems for power distribution management. Gained experience in enterprise software development.',
      achievements: [
        'Modernized legacy systems improving user experience',
        'Developed reporting dashboards for management',
        'Maintained 99.9% uptime for critical applications'
      ]
    }
  ];

  const goals = [
    {
      title: 'Master Golang',
      description: 'Deepen expertise in Go for building high-performance backend services and microservices.',
      icon: Code2
    },
    {
      title: 'Open Source Contribution',
      description: 'Actively contribute to open-source projects and build tools that help the developer community.',
      icon: GitBranch
    },
    {
      title: 'Tech Leadership',
      description: 'Transition into technical leadership roles while staying hands-on with cutting-edge technologies.',
      icon: Target
    },
    {
      title: 'Knowledge Sharing',
      description: 'Continue writing technical blogs and speaking at conferences to share learnings with the community.',
      icon: GraduationCap
    }
  ];

  return (
    <div className="min-h-screen py-12">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16 animate-fade-in">
          <h1 className="text-4xl sm:text-5xl font-bold mb-6">
            About <span className="text-gradient">Me</span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            A passionate full-stack developer on a journey of continuous learning and growth in the ever-evolving tech landscape.
          </p>
        </div>

        {/* My Story */}
        <section className="mb-16">
          <Card className="card-elevated animate-fade-in">
            <CardHeader>
              <CardTitle className="text-2xl flex items-center gap-2">
                <Briefcase className="h-6 w-6 text-primary" />
                My Journey
              </CardTitle>
            </CardHeader>
            <CardContent className="prose prose-lg max-w-none">
              <p className="text-muted-foreground leading-relaxed">
                My career began in the structured environment of a Public Sector Undertaking, where I learned the fundamentals 
                of software development and gained valuable experience in enterprise systems. However, my passion for modern 
                technologies and dynamic work environments led me to make a pivotal transition to the private tech sector.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                This transition challenged me to rapidly upskill and adapt to new technologies, methodologies, and work cultures. 
                I embraced this challenge wholeheartedly, dedicating myself to mastering modern web technologies, cloud platforms, 
                and agile development practices. Today, I'm proud to be building scalable applications that impact thousands of users 
                while continuously expanding my technical expertise.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Beyond coding, I'm passionate about sharing knowledge through technical writing and mentoring fellow developers. 
                I believe that the best way to solidify your understanding is to teach others, which is why I actively contribute 
                to the developer community through blogs, open-source projects, and knowledge sharing.
              </p>
            </CardContent>
          </Card>
        </section>

        {/* Skills */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-center mb-12">Technical Skills</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {skills.map((skill, index) => (
              <Card key={skill.category} className="card-elevated animate-fade-in" style={{ animationDelay: `${index * 0.1}s` }}>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <div className="w-8 h-8 bg-primary/10 rounded-lg flex items-center justify-center">
                      <skill.icon className="h-4 w-4 text-primary" />
                    </div>
                    {skill.category}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2">
                    {skill.items.map((item) => (
                      <Badge key={item} variant="secondary" className="text-xs">
                        {item}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Experience */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-center mb-12">Professional Experience</h2>
          <div className="space-y-8">
            {experience.map((exp, index) => (
              <Card key={exp.role} className="card-elevated animate-fade-in" style={{ animationDelay: `${index * 0.1}s` }}>
                <CardHeader>
                  <div className="flex justify-between items-start">
                    <div>
                      <CardTitle className="text-xl">{exp.role}</CardTitle>
                      <CardDescription className="text-lg font-medium text-primary">
                        {exp.company}
                      </CardDescription>
                    </div>
                    <Badge variant="outline" className="text-sm">
                      {exp.period}
                    </Badge>
                  </div>
                  <p className="text-muted-foreground mt-2">{exp.description}</p>
                </CardHeader>
                <CardContent>
                  <h4 className="font-semibold mb-2">Key Achievements:</h4>
                  <ul className="space-y-1">
                    {exp.achievements.map((achievement, i) => (
                      <li key={i} className="text-muted-foreground flex items-start">
                        <span className="w-2 h-2 bg-primary rounded-full mt-2 mr-3 flex-shrink-0" />
                        {achievement}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Goals */}
        <section>
          <h2 className="text-3xl font-bold text-center mb-12">Current Goals</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {goals.map((goal, index) => (
              <Card key={goal.title} className="card-elevated animate-fade-in" style={{ animationDelay: `${index * 0.1}s` }}>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <div className="w-8 h-8 bg-accent/10 rounded-lg flex items-center justify-center">
                      <goal.icon className="h-4 w-4 text-accent" />
                    </div>
                    {goal.title}
                  </CardTitle>
                  <CardDescription className="text-base leading-relaxed">
                    {goal.description}
                  </CardDescription>
                </CardHeader>
              </Card>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
};

export default About;