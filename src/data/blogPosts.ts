export interface BlogPost {
  id: string;
  title: string;
  slug: string;
  excerpt: string;
  content: string;
  date: string;
  tags: string[];
  readTime: string;
  featured?: boolean;
}

export const blogPosts: BlogPost[] = [
    {
    id: '1',
    title: 'Mastering Advanced JavaScript Concepts',
    slug: 'advanced-javascript-learning-journey',
    excerpt: 'Over the past few days, I’ve been diving into core and advanced JavaScript concepts, strengthening my understanding for building efficient and scalable applications.',
    content: `
        # Mastering Advanced JavaScript Concepts

        Over the past few days, I’ve been diving deep into some of the **core and advanced concepts of JavaScript**, strengthening my understanding for building efficient and scalable applications. 💻✨

        ## Advanced JavaScript 1
        🔹 Objects & their manipulation  
        🔹 Loops and iteration patterns  
        🔹 Hoisting and how JavaScript handles variables & functions internally  

        ## Advanced JavaScript 2
        🔹 Asynchronous JavaScript (Promises, async/await)  
        🔹 Working with APIs  
        🔹 Advanced operators and object handling techniques  

        ## Advanced JavaScript 3
        🔹 Deep dive into Objects & Collections (Map, Set, WeakMap, WeakSet)  
        🔹 Functions, closures, and execution context  

        ---

        Every session is helping me write cleaner, more optimized, and **production-ready JavaScript code**. Excited to keep exploring more advanced concepts and patterns! 🚀

        ---

        #JavaScript #WebDevelopment #LearningJourney #Coding #AsyncJS #FrontendDevelopment
        `,
        date: '2025-07-30',
        tags: ['JavaScript', 'Frontend', 'Learning'],
        readTime: '5 min read',
        featured: true
    },
    {
    id: '2',
    title: 'Hosting Django Application in IIS: Challenges and Fixes',
    slug: 'django-on-iis-wfastcgi-issues',
    excerpt: 'Deploying a Django application on IIS with WfastCGI comes with its own set of challenges. I faced issues with WfastCGI configurations and user permissions (IIS_IUSR), and here’s how I resolved them.',
    content: `
    # Hosting Django Application in IIS: Challenges and Fixes

    While most Django developers prefer Linux-based deployments with Nginx or Gunicorn, I had the opportunity to **host Django applications on IIS** using **WfastCGI**. It was a great learning experience but not without challenges.

    ## Common Issues Faced

    ### 1. WfastCGI Configuration Errors
    At times, WfastCGI failed to load the Python environment correctly. This usually happened because:
    - The path to the Python executable or virtual environment was misconfigured.
    - The handler mapping in IIS was not pointing to the correct WfastCGI handler.

    **Fix**: Double-check the \`web.config\` file to ensure the correct path to \`python.exe\` and \`wfastcgi.py\`. Restart IIS after making changes. Still not resolved ? then delete full venv and create a new one.

    ### 2. IIS_IUSR Permissions
    Some applications failed due to permission issues when IIS attempted to access files.

    **Fix**: Grant **read/execute permissions** to \`IIS_IUSR\` and \`IUSR\` accounts on the project directory and static/media folders.

    \`\`\`bash
    icacls "C:\\path\\to\\your\\project" /grant IIS_IUSR:(OI)(CI)RX
    \`\`\`

    ### 3. Static Files Handling
    Serving static files directly through IIS required additional configuration. Without it, CSS/JS wouldn’t load.

    **Fix**: Configure a **Static Content module** in IIS and point it to the Django static root.

    ## Key Takeaways

    - IIS can serve Django applications, but it requires careful configuration.
    - WfastCGI setup must point to the correct Python environment.
    - Permissions for **IIS_IUSR** are critical for smooth execution.
    - For production-grade hosting, Linux-based deployment is generally easier and more reliable, but IIS deployment is valuable when working in Windows-only enterprise environments.

    ---

    *Have you ever deployed Django on IIS? Share your challenges and fixes in the comments below.*
    `,
    date: '2024-02-10',
    tags: ['Django', 'IIS', 'Deployment'],
    readTime: '6 min read',
    featured: false
    },
  {
    id: '3',
    title: 'Mastering Golang: A Backend Developer\'s Perspective',
    slug: 'mastering-golang-backend-perspective',
    excerpt: 'Exploring the powerful features of Go that make it an excellent choice for backend development, from concurrency to performance.',
    content: `
        # Mastering Golang: A Backend Developer's Perspective

        As a full-stack developer with 5 years of experience, I've worked with various programming languages. Recently, I've been diving deep into Golang, and I'm impressed by its elegant simplicity and powerful capabilities for backend development.

        ## Why Golang?

        ### 1. Performance
        Go compiles to native machine code, offering excellent performance comparable to C/C++ while maintaining the ease of use similar to Python or JavaScript.

        ### 2. Concurrency
        Go's goroutines and channels make concurrent programming intuitive and efficient:

        \`\`\`go
        func main() {
            ch := make(chan string)
            
            go func() {
                ch <- "Hello from goroutine!"
            }()
            
            message := <-ch
            fmt.Println(message)
        }
        \`\`\`

        ### 3. Simple Syntax
        Go's syntax is clean and minimalistic, reducing cognitive load and making code more maintainable.

        ## Key Features I Love

        ### Error Handling
        Go's explicit error handling might seem verbose initially, but it leads to more robust applications:

        \`\`\`go
        func readFile(filename string) ([]byte, error) {
            data, err := ioutil.ReadFile(filename)
            if err != nil {
                return nil, fmt.Errorf("failed to read file: %w", err)
            }
            return data, nil
        }
        \`\`\`

        ### Interfaces
        Go's implicit interface implementation promotes loose coupling and better testability.

        ### Built-in Testing
        The testing package makes it easy to write unit tests:

        \`\`\`go
        func TestAdd(t *testing.T) {
            result := add(2, 3)
            if result != 5 {
                t.Errorf("Expected 5, got %d", result)
            }
        }
        \`\`\`

        ## Real-world Applications

        I've been building several projects with Go:

        1. **REST API Server** - Using Gin framework for fast HTTP routing
        2. **Microservice Architecture** - Leveraging Go's lightweight nature
        3. **CLI Tools** - Taking advantage of Go's excellent standard library
        4. **Database Integration** - Using GORM for elegant database operations

        ## Learning Resources

        - **Official Go Tour** - Interactive way to learn Go basics
        - **Effective Go** - Best practices and idioms
        - **Go by Example** - Practical examples for common tasks
        - **Building microservices with Go** - Advanced patterns and practices

        ## Conclusion

        Golang has become my go-to language for backend development. Its combination of simplicity, performance, and excellent tooling makes it perfect for building scalable web services.

        If you're a backend developer looking to expand your skillset, I highly recommend giving Go a try. The learning curve is gentle, and the productivity gains are significant.

        ---

        *What's your experience with Golang? Share your thoughts in the comments!*
    `,
    date: '2025-02-10',
    tags: ['Golang', 'Backend', 'Programming'],
    readTime: '6 min read',
    featured: true
    },
    {
        id: '4',
        title: 'Building Scalable Web Applications: Best Practices',
        slug: 'building-scalable-web-applications',
        excerpt: 'A comprehensive guide to designing and building web applications that can handle growth in users, data, and complexity.',
        content: `
        # Building Scalable Web Applications: Best Practices

        Scalability is crucial for modern web applications. As your user base grows, your application should handle increased load gracefully. Here's what I've learned about building scalable web applications.

        ## Architecture Patterns

        ### 1. Microservices
        Breaking down monolithic applications into smaller, independent services:

        - **Benefits**: Independent deployment, technology diversity, fault isolation
        - **Challenges**: Complexity, distributed system issues, data consistency

        ### 2. Event-Driven Architecture
        Using events to decouple services and enable asynchronous processing:

        \`\`\`javascript
        // Event publisher
        const eventBus = require('./eventBus');

        function createUser(userData) {
            const user = saveUser(userData);
            eventBus.publish('user.created', user);
            return user;
        }

        // Event subscriber
        eventBus.subscribe('user.created', (user) => {
            sendWelcomeEmail(user.email);
            createUserProfile(user.id);
        });
        \`\`\`

        ## Database Strategies

        ### 1. Database Sharding
        Distributing data across multiple database instances:

        - **Horizontal Partitioning**: Split tables by rows
        - **Vertical Partitioning**: Split tables by columns
        - **Functional Partitioning**: Split by feature/service

        ### 2. Read Replicas
        Offloading read operations to replica databases to reduce load on the primary database.

        ### 3. Caching Strategies
        Implementing multiple layers of caching:

        \`\`\`javascript
        // Redis caching example
        const redis = require('redis');
        const client = redis.createClient();

        async function getUser(userId) {
            // Try cache first
            const cached = await client.get(\`user:\${userId}\`);
            if (cached) {
                return JSON.parse(cached);
            }
            
            // Fallback to database
            const user = await db.users.findById(userId);
            
            // Cache for future requests
            await client.setex(\`user:\${userId}\`, 3600, JSON.stringify(user));
            
            return user;
        }
        \`\`\`

        ## Performance Optimization

        ### 1. Code Splitting
        Breaking JavaScript bundles into smaller chunks for faster loading:

        \`\`\`javascript
        // React lazy loading
        const HomePage = lazy(() => import('./pages/HomePage'));
        const AboutPage = lazy(() => import('./pages/AboutPage'));

        function App() {
            return (
                <Suspense fallback={<div>Loading...</div>}>
                    <Routes>
                        <Route path="/" element={<HomePage />} />
                        <Route path="/about" element={<AboutPage />} />
                    </Routes>
                </Suspense>
            );
        }
        \`\`\`

        ### 2. Image Optimization
        - Use modern formats (WebP, AVIF)
        - Implement lazy loading
        - Provide multiple sizes for responsive images

        ### 3. CDN Implementation
        Using Content Delivery Networks to serve static assets from locations closer to users.

        ## Monitoring and Observability

        ### 1. Application Metrics
        Track key performance indicators:
        - Response times
        - Error rates
        - Throughput
        - Resource utilization

        ### 2. Logging Strategy
        Implement structured logging for better debugging:

        \`\`\`javascript
        const logger = require('winston');

        logger.info('User login attempt', {
            userId: user.id,
            timestamp: new Date().toISOString(),
            ip: req.ip,
            userAgent: req.get('User-Agent')
        });
        \`\`\`

        ### 3. Health Checks
        Implement health check endpoints for load balancers and monitoring systems.

        ## Deployment Strategies

        ### 1. Blue-Green Deployment
        Maintaining two identical production environments for zero-downtime deployments.

        ### 2. Canary Releases
        Gradually rolling out changes to a small subset of users before full deployment.

        ### 3. Infrastructure as Code
        Using tools like Terraform or CloudFormation to manage infrastructure declaratively.

        ## Conclusion

        Building scalable web applications requires careful planning and the right architectural decisions. Focus on:

        1. **Design for failure** - Assume components will fail and plan accordingly
        2. **Monitor everything** - You can't improve what you don't measure
        3. **Start simple** - Don't over-engineer early; scale when needed
        4. **Automate ruthlessly** - Automation reduces errors and enables faster delivery

        Remember, scalability is not just about handling more users—it's also about maintaining developer productivity as your team and codebase grow.

        ---

        *What scalability challenges have you faced? Share your solutions in the comments!*
    `,
    date: '2025-02-10',
    tags: ['Scalability', 'Architecture', 'Performance'],
    readTime: '10 min read',
    featured: false
  }
];