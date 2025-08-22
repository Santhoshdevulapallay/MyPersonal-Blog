import { Link } from 'react-router-dom';
import { ArrowRight, Code, BookOpen, User } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import heroBg from '@/assets/hero-bg.jpg';
import { blogPosts } from '@/data/blogPosts';

const Home = () => {
  const featuredPosts = blogPosts.filter(post => post.featured).slice(0, 2);

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: `url(${heroBg})` }}
        />
        <div className="absolute inset-0 bg-gradient-hero" />
        
        <div className="relative z-10 max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <div className="animate-fade-in-up">
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold mb-6">
              <span className="text-gradient">Santhosh D</span>
            </h1>
            <p className="text-xl sm:text-2xl text-foreground mb-8 max-w-3xl mx-auto">
              Full-Stack Developer | Tech Enthusiast | Lifelong Learner
            </p>
            <p className="text-lg text-foreground/90 mb-12 max-w-2xl mx-auto leading-relaxed">
              I'm a full-stack developer with 5 years of experience, passionate about building scalable web applications, 
              exploring new technologies, and sharing my journey through blogs.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Link to="/blog">
                <Button className="btn-hero group">
                  Read My Blog
                  <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </Button>
              </Link>
              <Link to="/about">
                <Button variant="outline" className="btn-outline-hero">
                  About Me
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Intro Section */}
      <section className="section-padding bg-gradient-subtle">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="card-elevated animate-fade-in">
              <CardHeader>
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                  <Code className="h-6 w-6 text-primary" />
                </div>
                <CardTitle>Full-Stack Development</CardTitle>
                <CardDescription>
                  Building end-to-end web applications with modern technologies and best practices.
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="card-elevated animate-fade-in" style={{ animationDelay: '0.1s' }}>
              <CardHeader>
                <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center mb-4">
                  <BookOpen className="h-6 w-6 text-accent" />
                </div>
                <CardTitle>Knowledge Sharing</CardTitle>
                <CardDescription>
                  Writing about my experiences, learnings, and insights in the tech industry.
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="card-elevated animate-fade-in" style={{ animationDelay: '0.2s' }}>
              <CardHeader>
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                  <User className="h-6 w-6 text-primary" />
                </div>
                <CardTitle>Career Growth</CardTitle>
                <CardDescription>
                  Transitioning from PSU to private tech, mastering new technologies, and building expertise.
                </CardDescription>
              </CardHeader>
            </Card>
          </div>
        </div>
      </section>

      {/* Featured Posts Section */}
      <section className="section-padding">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">Featured Articles</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Explore my latest thoughts on technology, career development, and software engineering.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
            {featuredPosts.map((post, index) => (
              <Card key={post.id} className="card-elevated animate-fade-in" style={{ animationDelay: `${index * 0.1}s` }}>
                <CardHeader>
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-sm text-muted-foreground">{post.date}</span>
                    <span className="text-sm text-muted-foreground">{post.readTime}</span>
                  </div>
                  <CardTitle className="text-xl mb-2">{post.title}</CardTitle>
                  <CardDescription className="text-base leading-relaxed">
                    {post.excerpt}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex items-center justify-between">
                    <div className="flex flex-wrap gap-2">
                      {post.tags.slice(0, 2).map((tag) => (
                        <span
                          key={tag}
                          className="px-2 py-1 text-xs bg-primary/10 text-primary rounded-full"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                    <Link
                      to={`/blog/${post.slug}`}
                      className="text-primary hover:text-accent transition-colors duration-200 font-medium group"
                    >
                      Read More
                      <ArrowRight className="ml-1 h-4 w-4 inline group-hover:translate-x-1 transition-transform" />
                    </Link>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center">
            <Link to="/blog">
              <Button variant="outline" size="lg" className="btn-outline-hero">
                View All Posts
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;