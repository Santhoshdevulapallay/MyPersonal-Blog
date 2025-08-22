import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { 
  Briefcase, 
  GraduationCap, 
  Target, 
  Code2, 
  Database, 
  Globe, 
  Server,
  GitBranch,
  Cloud
} from 'lucide-react';

const About = () => {
  const skills = [
    { category: 'Frontend', icon: Globe, items: ['React', 'Angular' ,'Javascript', 'TypeScript', 'Tailwind CSS'] },
    { category: 'Backend', icon: Server, items: ['Node.js','Django', 'Python'] },
    { category: 'Database', icon: Database, items: ['PostgreSQL', 'MongoDB', 'Redis', 'MySQL'] },
    { category: 'DevOps', icon: Cloud, items: ['Docker', 'Kubernetes', 'CI/CD'] },
    { category: 'Tools', icon: GitBranch, items: ['Grafana','Git', 'VS Code', 'Figma', 'Postman', 'Jira'] },
  ];

  const experience = [
    {
      role: 'Deputy Manager',
      company: 'Grid Controller of India Ltd (PSU)',
      period: '2019 - Present',
      description: 'Contributing to the design and development of enterprise-level applications that support power system operations and internal organizational processes.',
      achievements: [
        'Developed the **Meter Data Application** to process and analyze high-frequency data (every 15 minutes) from ~2000 meters across the Southern region, ensuring scalability and reliability',
        'Built the **Pool Accounts Application** for managing large-scale financial disbursals from central pools to end users with accuracy and transparency',
        'Designed and deployed multiple **HR-related applications** to streamline internal workflows and employee services',
        'Improved usability, performance, and maintainability across applications through modern front-end development practices'
      ]
    },

   {
      role: 'GATE Aspirant',
      company: 'Self-Preparation',
      period: '2017 - 2018',
      description: 'Dedicated one year to preparing for the Graduate Aptitude Test in Engineering (GATE), which helped me strengthen my fundamentals and problem-solving skills.',
      achievements: [
        'Successfully cleared GATE 2017 and secured admission into IIT Hyderabad (M.Tech)',
        'Developed strong analytical and time management skills',
        'Built a resilient mindset through consistent effort and self-study'
      ]
    },
    {
      role: 'B.E. in Computer Science',
      company: 'MVSR Engineering College, Hyderabad',
      period: '2012 - 2016',
      description: 'Completed undergraduate studies in Computer Science, building a strong foundation in programming, data structures, and software development.',
      achievements: [
        'Developed academic projects including Fuzzy Series Implementation',
        'Participated in paper presentations during annual college fests',
        'Gained hands-on experience through coursework and team projects'
      ]
    }
  ];

  const goals = [
    {
      title: 'Redux & State Management',
      description: 'Master efficient state management in React applications using Redux, ensuring predictable data flow, scalability, and maintainable code.',
      icon: Code2
    } ,
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
           ✨ A passionate front-end developer on a journey of continuous learning and growth in the ever-evolving tech landscape.
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
               📌 2016 – Graduated from <b>MVSR Engineering College, Hyderabad</b> in CSE.
              </p>
              <p className="text-muted-foreground leading-relaxed">
              📌 2017 – Dedicated a year to preparation, successfully cleared GATE, and secured admission into IIT Hyderabad (M.Tech).
              </p>           
              <p className="text-muted-foreground leading-relaxed">
                📌 2018 – During my first semester at IIT Hyderabad, I cleared GATE again, achieving a higher score (AIR 260) that opened opportunities with Public Sector Undertakings (PSUs).
              </p>
              <p className="text-muted-foreground leading-relaxed">
                📌 2019 – Joined Grid Controller of India Ltd (PSU) as an Assistant Manager. With my IT background and a strong passion for software development, I upskilled myself in Full-Stack Web Development and began contributing to building scalable web applications within the organization.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                📌 2019 – Present – Working at Grid Controller of India Ltd, where I have been contributing to the design and development of scalable web applications, building innovative solutions, and enhancing my expertise as a Full-Stack Developer.
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

        {/* Experiences */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-center mb-12">My Experiences</h2>
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