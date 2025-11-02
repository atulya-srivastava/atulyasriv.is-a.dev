import { useState, useEffect, useRef } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Code2, Github, Linkedin, Mail, ExternalLink, Terminal, Braces, Box, Play, Pause, ArrowUpRight, Sparkles } from "lucide-react";
import { FaReact, FaNodeJs, FaPython, FaGitAlt, FaDatabase } from "react-icons/fa";
import { SiTypescript, SiJavascript, SiTailwindcss, SiNextdotjs, SiPostgresql, SiGraphql } from "react-icons/si";
import { TbApi } from "react-icons/tb";
import Navbar from "@/components/NavBar";
import TextScramble from "@/components/TextSramble";
import MatrixRain from "@/components/MatrixRain";


const Index = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [scrollProgress, setScrollProgress] = useState(0);
  const [isAnimationPaused, setIsAnimationPaused] = useState(false);
  const timelineRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      if (timelineRef.current) {
        const rect = timelineRef.current.getBoundingClientRect();
        const windowHeight = window.innerHeight;
        
        const startVisible = rect.top <= windowHeight;
        const endVisible = rect.bottom >= 0;
        
        if (startVisible && endVisible) {
          const visibleTop = Math.max(0, windowHeight - rect.top -400);
          const progress = Math.min(1, visibleTop / rect.height);
          setScrollProgress(progress);
        } else if (rect.bottom < 0) {
          setScrollProgress(1);
        } else {
          setScrollProgress(0);
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const skills = [
    { name: "React", icon: FaReact, color: "from-cyan-500 to-blue-500" },
    { name: "TypeScript", icon: SiTypescript, color: "from-blue-500 to-indigo-500" },
    { name: "Node.js", icon: FaNodeJs, color: "from-green-500 to-emerald-500" },
    { name: "Python", icon: FaPython, color: "from-yellow-500 to-orange-500" },
    { name: "JavaScript", icon: SiJavascript, color: "from-yellow-400 to-yellow-600" },
    { name: "Tailwind CSS", icon: SiTailwindcss, color: "from-cyan-400 to-blue-500" },
    { name: "Next.js", icon: SiNextdotjs, color: "from-gray-700 to-gray-900" },
    { name: "Git", icon: FaGitAlt, color: "from-orange-500 to-red-500" },
    { name: "MongoDB", icon: FaDatabase, color: "from-green-600 to-green-700" },
    { name: "PostgreSQL", icon: SiPostgresql, color: "from-blue-600 to-indigo-600" },
    { name: "REST APIs", icon: TbApi, color: "from-purple-500 to-pink-500" },
    { name: "GraphQL", icon: SiGraphql, color: "from-pink-500 to-purple-600" }
  ];

  const [currentPlatform, setCurrentPlatform] = useState(0);
  const platforms = [
    { name: "x.com/", url: "https://x.com/atulyasriv" },
    { name: "linkedin.com/in/", url: "https://linkedin.com/in/atulyasriv" },
    { name: "leetcode.com/", url: "https://leetcode.com/atulyasriv" },  
  ];

  useEffect(() => {
    if (isAnimationPaused) return;
    
    const interval = setInterval(() => {
      setCurrentPlatform((prev) => (prev + 1) % platforms.length);
    }, 2000);
    return () => clearInterval(interval);
  }, [isAnimationPaused, platforms.length]);

  const timeline = [
    { year: "2024", title: "Senior Developer", company: "Tech Corp", description: "Leading full-stack development projects" },
    { year: "2022", title: "Full Stack Developer", company: "StartupXYZ", description: "Built scalable web applications" },
    { year: "2020", title: "Junior Developer", company: "WebSolutions", description: "Started professional journey" }
  ];

  const projects = [
    {
      title: "E-Commerce Platform",
      description: "Full-stack e-commerce solution with payment integration, real-time inventory management, and advanced analytics dashboard.",
      tech: ["React", "Node.js", "Stripe", "Redis"],
      link: "#",
      gradient: "from-blue-600 via-cyan-500 to-teal-500"
    },
    {
      title: "Task Management App",
      description: "Collaborative task manager with real-time updates, team workspaces, and intelligent priority scheduling.",
      tech: ["Next.js", "WebSocket", "PostgreSQL", "Prisma"],
      link: "#",
      gradient: "from-cyan-500 via-blue-600 to-indigo-600"
    },
    {
      title: "Portfolio CMS",
      description: "Headless CMS for managing portfolio content with drag-and-drop builder and API-first architecture.",
      tech: ["TypeScript", "Express", "MongoDB", "GraphQL"],
      link: "#",
      gradient: "from-green-600 via-teal-500 to-cyan-600"
    },
    {
      title: "AI Chat Interface",
      description: "Modern chat interface with AI integration, context awareness, and multi-model support for enhanced conversations.",
      tech: ["React", "OpenAI API", "Tailwind", "WebSocket"],
      link: "#",
      gradient: "from-purple-600 via-indigo-600 to-blue-600"
    }
  ];

  return (
    <div className="min-h-screen bg-background text-foreground relative overflow-hidden">
      {/* Animated mesh gradient background */}
      <div className="fixed inset-0 opacity-30 pointer-events-none">
        <div 
          className="absolute inset-0 transition-all duration-1000"
          style={{
            background: `
              radial-gradient(circle 800px at ${mousePosition.x}px ${mousePosition.y}px, 
                hsl(200 80% 50% / 0.15), 
                transparent 50%),
              radial-gradient(circle 600px at ${typeof window !== 'undefined' ? window.innerWidth - mousePosition.x : 0}px ${typeof window !== 'undefined' ? window.innerHeight - mousePosition.y : 0}px, 
                hsl(280 70% 55% / 0.15), 
                transparent 50%),
              radial-gradient(circle 1000px at 50% 50%, 
                hsl(180 100% 50% / 0.08), 
                transparent)
            `
          }}
        />
      </div>

      {/* Subtle grid overlay */}
      <div className="fixed inset-0 opacity-[0.02] pointer-events-none">
        <div className="absolute inset-0" style={{
          backgroundImage: `linear-gradient(hsl(180 100% 50%) 1px, transparent 1px), linear-gradient(90deg, hsl(180 100% 50%) 1px, transparent 1px)`,
          backgroundSize: '50px 50px'
        }} />
      </div>

      {/* Navigation */}
      <Navbar/>

      {/* Hero Section */}
      <section className="min-h-screen flex items-center justify-center px-6">
        <div className=" bg-yellow-600 h-screen"><MatrixRain/></div>
        <div className="container mx-auto text-center space-y-8 animate-fade-in">
          {/* <div className="font-mono text-muted-foreground text-sm mb-4 flex items-center justify-center gap-2">
            <Code2 className="w-4 h-4 text-blue-500" />
            &lt;profile&gt;
          </div> */}
          
          <div className="pt-24 flex flex-col md:flex-row items-center justify-center gap-8">
            <div className="relative group">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500 via-cyan-500 to-purple-600 rounded-full blur-xl opacity-50 group-hover:opacity-75 transition-opacity" />
              <Avatar className="relative w-32 h-32 md:w-40 md:h-40 border-4 border-blue-500/50 shadow-2xl">
                <AvatarImage src="https://camo.githubusercontent.com/26a6a5f5a33b8a2c55e8750f33616cc45c96388e88ce74cb1c023a2cc5e0d2af/68747470733a2f2f70726f6d7074692e61692f77702d636f6e74656e742f75706c6f6164732f323032332f30372f7063626f69322e706e67" alt="Atulya Srivastava" />
                <AvatarFallback className="bg-gradient-to-br from-blue-600 to-cyan-500 text-2xl text-white">AS</AvatarFallback>
              </Avatar>
            </div>
            <div className="text-left">
              <h1 className="text-4xl md:text-7xl font-bold mb-2">
                <span className="text-foreground">Hey, I'm </span>
                <span 
                  // text="Atulya Srivastava" 
                  className="bg-gradient-to-r from-blue-500 via-cyan-500 to-purple-600 bg-clip-text text-transparent inline">Atulya Srivastava</span>
                  {/* // runOnce={true} */}
               
              </h1>
              <div className="text-xl md:text-3xl text-muted-foreground font-mono">
                <span className="text-blue-500">const</span> role = 
                <span className="text-cyan-500"> "Full Stack Developer"</span>;
              </div>
            </div>
          </div>
          
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Crafting elegant solutions through clean code and innovative design.
            Passionate about building scalable applications that make a difference.
          </p>

          <div className="flex gap-4 justify-center pt-8 flex-wrap">
            <Button className="group bg-gradient-to-r from-blue-600 to-cyan-500 hover:from-blue-700 hover:to-cyan-600 text-white border-0 shadow-lg shadow-blue-500/30">
              View Projects
              <ArrowUpRight className="w-4 h-4 ml-2 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
            </Button>
            <Button variant="outline" size="lg" className="border-blue-500/50 hover:bg-blue-500/10">
              <Mail className="w-4 h-4 mr-2" />
              Contact Me
            </Button>
          </div>

          <div className="font-mono text-muted-foreground text-sm mt-8">
            &lt;/profile&gt;
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 px-6">
        <div className="container mx-auto max-w-4xl">
          <TextScramble text="<about>" className="text-3xl md:text-4xl font-bold mb-8 font-mono bg-gradient-to-r from-blue-500 to-cyan-500 bg-clip-text text-transparent" isPaused={isAnimationPaused}>
            <Braces className="w-8 h-8 inline mr-3 text-blue-500" />
          </TextScramble>
          <Card className="bg-gradient-to-br from-card to-card/50 border-blue-500/30 shadow-xl shadow-blue-500/10 hover:shadow-2xl hover:shadow-blue-500/20 transition-all duration-500 backdrop-blur-sm">
            <CardContent className="p-8">
              <p className="text-lg text-foreground/90 leading-relaxed mb-4">
                I'm a passionate full-stack developer with a keen eye for creating seamless user experiences 
                and robust backend systems. With expertise in modern web technologies, I transform ideas into 
                functional, scalable applications.
              </p>
              <p className="text-lg text-foreground/90 leading-relaxed">
                When I'm not coding, you'll find me exploring new technologies, contributing to open-source 
                projects, or sharing knowledge with the developer community.
              </p>
            </CardContent>
          </Card>
          <p className="text-sm text-muted-foreground font-mono mt-4">&lt;/about&gt;</p>
        </div>
      </section>

      {/* Skills Section
      <section id="skills" className="py-20 px-6 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-blue-500/5 to-transparent" />
        <div className="container mx-auto max-w-6xl relative z-10">
          <TextScramble text="<skills>" className="text-3xl md:text-4xl font-bold mb-12 font-mono bg-gradient-to-r from-cyan-500 to-blue-600 bg-clip-text text-transparent" isPaused={isAnimationPaused}>
            <Code2 className="w-8 h-8 inline mr-3 text-cyan-500" />
          </TextScramble>
          <div className="relative">
            <div className={`flex ${isAnimationPaused ? '' : 'animate-marquee'}`}>
              {[...skills, ...skills].map((skill, index) => {
                const IconComponent = skill.icon;
                return (
                  <div 
                    key={index}
                    className="flex-shrink-0 mx-4"
                  >
                    <Card className="bg-card/50 backdrop-blur-sm border-border/50 hover:border-blue-500/50 transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/20 cursor-default group w-36 h-36 flex items-center justify-center">
                      <CardContent className="p-4 text-center space-y-3">
                        <div className={`bg-gradient-to-br ${skill.color} p-3 rounded-xl group-hover:scale-110 transition-transform duration-300 inline-block`}>
                          <IconComponent className="w-8 h-8 text-white" />
                        </div>
                        <p className="font-mono text-xs text-foreground font-semibold">{skill.name}</p>
                      </CardContent>
                    </Card>
                  </div>
                );
              })}
            </div>
          </div>
          <p className="text-sm text-muted-foreground font-mono mt-8">&lt;/skills&gt;</p>
        </div>
      </section> */}


{/* Skills Section */}
<section id="skills" className="py-20 px-6 relative">
  <div className="absolute inset-0 bg-gradient-to-b from-transparent via-blue-500/5 to-transparent" />
  <div className="container mx-auto max-w-6xl relative z-10">
    <TextScramble text="<skills>" className="text-3xl md:text-4xl font-bold mb-12 font-mono bg-gradient-to-r from-cyan-500 to-blue-600 bg-clip-text text-transparent" isPaused={isAnimationPaused}>
      <Code2 className="w-8 h-8 inline mr-3 text-cyan-500" />
    </TextScramble>
    
    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
      {skills.map((skill, index) => {
        const IconComponent = skill.icon;
        return (
          <Card 
            key={index}
            className="group relative bg-card/50 backdrop-blur-md border-border/50 hover:border-blue-500/50 transition-all duration-300 overflow-hidden hover:-translate-y-3 hover:shadow-2xl hover:shadow-blue-500/30"
          >
            {/* Enhanced glow effect */}
            <div className={`absolute inset-0 bg-gradient-to-br ${skill.color} opacity-0 group-hover:opacity-30 group-hover:blur-xl transition-all duration-300`} />
            
            <CardContent className="relative p-6 rounded-full flex flex-col items-center justify-center space-y-4 h-full min-h-[140px]">
              {/* Enhanced icon animation */}
              <div className="p-4 rounded-xl bg-transparent group-hover:scale-125 group-hover:-rotate-6 transition-all duration-300">
                <IconComponent 
                  className={`w-10 h-10 bg-gradient-to-br ${skill.color} bg-clip-text text-transparent transition-all duration-300 group-hover:drop-shadow-[0_2px_8px_theme(colors.blue.500)]`} 
                />
              </div>
              <p className="font-mono text-sm text-foreground font-semibold text-center group-hover:text-blue-300 transition-colors">
                {skill.name}
              </p>
            </CardContent>
          </Card>
        );
      })}
    </div>
    
    <p className="text-sm text-muted-foreground font-mono mt-8">&lt;/skills&gt;</p>
  </div>
</section>


      {/* Projects Section */}
      <section id="projects" className="py-20 px-6 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-cyan-500/5 to-transparent" />
        <div className="container mx-auto max-w-7xl relative z-10">
          <TextScramble text="<projects>" className="text-3xl md:text-4xl font-bold mb-12 font-mono bg-gradient-to-r from-cyan-500 to-blue-600 bg-clip-text text-transparent flex items-center" isPaused={isAnimationPaused}>
            <Sparkles className="w-8 h-8 mr-3 text-cyan-500" />
          </TextScramble>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <Card 
                key={index}
                className="group relative bg-card/30 backdrop-blur-sm border-border/50 hover:border-transparent transition-all duration-500 overflow-hidden"
              >
                <div className={`absolute inset-0 bg-gradient-to-r ${project.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-xl`} />
                <div className={`absolute inset-[1px] bg-gradient-to-br from-card via-card/95 to-card/90 rounded-[11px] z-10`} />
                
                <CardContent className="relative z-20 p-8 space-y-6">
                  <div className="flex items-start justify-between">
                    <div className="space-y-2 flex-1">
                      <h3 className="text-2xl font-bold text-foreground group-hover:bg-gradient-to-r group-hover:from-blue-400 group-hover:to-cyan-400 group-hover:bg-clip-text group-hover:text-transparent transition-all duration-300">
                        {project.title}
                      </h3>
                      <p className="text-muted-foreground leading-relaxed">
                        {project.description}
                      </p>
                    </div>
                    <div className={`p-3 rounded-xl bg-gradient-to-br ${project.gradient} opacity-80 group-hover:opacity-100 group-hover:scale-110 transition-all duration-300 flex-shrink-0 ml-4`}>
                      <Terminal className="w-6 h-6 text-white" />
                    </div>
                  </div>

                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((tech, i) => (
                      <span 
                        key={i}
                        className="px-3 py-1.5 bg-gradient-to-r from-blue-500/10 to-cyan-500/10 border border-blue-500/20 text-foreground text-xs font-mono rounded-lg hover:border-blue-500/50 transition-colors"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  <Button 
                    variant="ghost" 
                    className="group/btn w-full justify-between bg-gradient-to-r from-blue-500/10 to-cyan-500/10 hover:from-blue-500/20 hover:to-cyan-500/20 border border-blue-500/20 hover:border-blue-500/50"
                  >
                    <span className="font-mono">View Project</span>
                    <ArrowUpRight className="w-4 h-4 group-hover/btn:translate-x-1 group-hover/btn:-translate-y-1 transition-transform" />
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
          <p className="text-sm text-muted-foreground font-mono mt-12">&lt;/projects&gt;</p>
        </div>
      </section>

      {/* Timeline Section */}
      <section id="timeline" className="py-20 px-6 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-cyan-500/5 to-transparent" />
        <div className="container mx-auto max-w-4xl relative z-10">
          <TextScramble text="<timeline>" className="text-3xl md:text-4xl font-bold mb-12 font-mono bg-gradient-to-r from-cyan-500 to-blue-500 bg-clip-text text-transparent" isPaused={isAnimationPaused}>
            <Terminal className="w-8 h-8 inline mr-3 text-cyan-500" />
          </TextScramble>
          <div ref={timelineRef} className="space-y-8 relative">
            <div 
              className="absolute left-8 top-0 w-[3px] bg-gradient-to-b from-blue-600 via-cyan-500 to-teal-500 shadow-lg shadow-blue-500/50"
              style={{ 
                height: '100%',
                transformOrigin: 'top',
                transform: `scaleY(${scrollProgress})`,
                transition: 'transform 0.1s linear'
              }}
            />
            <div className="absolute left-8 top-0 bottom-0 w-1 bg-border/20" />
            
            {timeline.map((item, index) => (
              <div key={index} className="relative pl-20">
                <div className="absolute left-6 top-4 w-5 h-5 rounded-full bg-gradient-to-r from-blue-500 to-cyan-500 border-4 shadow-blue-500/50" />
                <Card className="bg-card/50 backdrop-blur-sm border-blue-500/30 hover:border-blue-500/50 hover:shadow-xl hover:shadow-blue-500/20 transition-all duration-500">
                  <CardContent className="p-6">
                    <div className="font-mono text-cyan-500 text-sm mb-2 font-bold">{item.year}</div>
                    <h3 className="text-xl font-bold text-foreground mb-1">{item.title}</h3>
                    <p className="text-blue-400 font-semibold mb-2">{item.company}</p>
                    <p className="text-muted-foreground">{item.description}</p>
                  </CardContent>
                </Card>
              </div>
            ))}
          </div>
          <p className="text-sm text-muted-foreground font-mono mt-8">&lt;/timeline&gt;</p>
        </div>
      </section>

  {/* Contribution Graph Section */}
      <section id="contributions" className="py-20 px-6 relative">
        <div className="container mx-auto max-w-4xl relative z-10">
          <TextScramble text="<contributions>" className="text-3xl md:text-4xl font-bold mb-12 font-mono bg-gradient-to-r from-green-500 to-cyan-500 bg-clip-text text-transparent" isPaused={isAnimationPaused}>
            <Box className="w-8 h-8 inline mr-3 text-green-500" />
          </TextScramble>
          <div className="grid md:grid-cols-2 gap-6">
            <Card className="bg-card/90 backdrop-blur-sm border-blue-500/30 hover:border-blue-500/50 transition-all duration-300 hover:shadow-xl hover:shadow-blue-500/20">
              <CardContent className="p-6 flex gap-6">
                <div className="flex-shrink-0">
                  <div className="bg-gradient-to-br from-blue-500/20 to-cyan-500/20 p-4 rounded-2xl">
                    <Github className="w-12 h-12 text-blue-400" />
                  </div>
                </div>
                <div className="flex-1 space-y-4">
                  <div>
                    <h3 className="text-xl font-bold mb-1">GitHub Contributions</h3>
                    <p className="text-muted-foreground text-sm">Contribution graph coming soon</p>
                  </div>
                  <div className="h-32 relative border-2 border-dashed border-blue-500/30 rounded-lg flex items-center justify-center text-muted-foreground text-sm bg-blue-500/5">
                    <img src="https://leetcard.jacoblin.cool/atulya-srivastava?ext=heatmap&theme=transparent&hide=ranking,total-solved-text,easy-solved-count,medium-solved-count,hard-solved-count" alt="My LeetCode Heatmap" />
                  </div>
                </div>
              </CardContent>
            </Card>
            <Card className="bg-card/90 backdrop-blur-sm border-cyan-500/30 hover:border-cyan-500/50 transition-all duration-300 hover:shadow-xl hover:shadow-cyan-500/20">
              <CardContent className="p-6 flex gap-6">
                <div className="flex-shrink-0">
                  <div className="bg-gradient-to-br from-cyan-500/20 to-blue-500/20 p-4 rounded-2xl">
                    <Code2 className="w-12 h-12 text-cyan-400" />
                  </div>
                </div>
                <div className="flex-1 space-y-4">
                  <div>
                    <h3 className="text-xl font-bold mb-1">LeetCode Progress</h3>
                    <p className="text-muted-foreground text-sm">Activity graph coming soon</p>
                  </div>
                  <div className="h-32 border-2 border-dashed border-cyan-500/30 rounded-lg flex items-center justify-center text-muted-foreground text-sm bg-cyan-500/5">
                    Graph Placeholder
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
          <p className="text-sm text-muted-foreground font-mono mt-8">&lt;/contributions&gt;</p>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className=" py-20 px-6 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-blue-500/10 to-transparent" />
        <div className="container mx-auto max-w-4xl text-center relative z-10">
          <TextScramble text="<contact>" className="text-3xl md:text-4xl font-bold mb-8 font-mono bg-gradient-to-r from-blue-500 via-cyan-500 to-teal-500 bg-clip-text text-transparent" isPaused={isAnimationPaused}>
            <Mail className="w-8 h-8 inline mr-3 text-blue-500" />
          </TextScramble>
          <p className="text-lg text-foreground/90 mb-12 max-w-2xl mx-auto">
            Let's build something amazing together. Feel free to reach out!
          </p>
          
          <div className="flex flex-col items-center gap-8 mb-12">
            <div className="relative h-12 flex items-center justify-center overflow-hidden">
              <a 
                href={platforms[currentPlatform].url}
                target="_blank"
                rel="noopener noreferrer"
                className="font-mono text-lg md:text-xl text-foreground hover:text-blue-400 transition-colors inline-flex items-center gap-0"
              >
                <span className="relative inline-block w-40 md:w-48 h-8 overflow-hidden">
                  {platforms.map((platform, index) => (
                    <span
                      key={index}
                      className={`absolute right-0 transition-all duration-500 ease-in-out whitespace-nowrap ${
                        index === currentPlatform
                          ? 'translate-y-0 opacity-100'
                          : index < currentPlatform
                          ? '-translate-y-full opacity-0'
                          : 'translate-y-full opacity-0'
                      }`}
                      style={{ top: '50%', transform: `translateY(-50%) ${index === currentPlatform ? 'translateY(0)' : index < currentPlatform ? 'translateY(-100%)' : 'translateY(100%)'}` }}
                    >
                      {platform.name}
                    </span>
                  ))}
                </span>
                <span className="text-blue-400 whitespace-nowrap">atulyasriv</span>
              </a>
            </div>
            
            <div className="flex flex-wrap justify-center gap-4">
              <Button variant="outline" size="lg" className="group border-blue-500/50 hover:bg-blue-500/10 hover:border-blue-500" asChild>
                <a href="https://github.com/atulya-srivastava" target="_blank" rel="noopener noreferrer">
                  <Github className="w-5 h-5 mr-2 group-hover:scale-110 transition-transform" />
                  GitHub
                </a>
              </Button>
              <Button variant="outline" size="lg" className="group border-cyan-500/50 hover:bg-cyan-500/10 hover:border-cyan-500" asChild>
                <a href="https://linkedin.com/in/atulyasriv" target="_blank" rel="noopener noreferrer">
                  <Linkedin className="w-5 h-5 mr-2 group-hover:scale-110 transition-transform" />
                  LinkedIn
                </a>
              </Button>
              <Button size="lg" className="group bg-gradient-to-r from-blue-600 to-cyan-500 hover:from-blue-700 hover:to-cyan-600 text-white border-0 shadow-lg shadow-blue-500/30" asChild>
                <a href="mailto:cvns.atulyasrivastava@gmail.com">
                  <Mail className="w-5 h-5 mr-2 group-hover:scale-110 transition-transform" />
                  Email
                </a>
              </Button>
            </div>
          </div>
          
          <p className="text-sm text-muted-foreground font-mono">&lt;/contact&gt;</p>
        </div>
      </section>

      {/* Animation Control Toggle */}
      <button
        onClick={() => setIsAnimationPaused(!isAnimationPaused)}
        className="fixed bottom-8 right-8 z-50 flex items-center gap-2 px-3 py-2 bg-card/80 backdrop-blur-sm border border-border rounded-lg hover:border-blue-500 transition-all duration-300 shadow-lg hover:shadow-blue-500/30 text-sm font-mono opacity-60 hover:opacity-100"
        aria-label={isAnimationPaused ? "Resume animations" : "Pause animations"}
      >
        <span className="text-muted-foreground">Animations</span>
        {isAnimationPaused ? (
          <Play className="w-4 h-4 text-blue-500" />
        ) : (
          <Pause className="w-4 h-4 text-blue-500" />
        )}
      </button>

      {/* Footer */}
      <footer className="py-8 px-6 border-t border-border/50">
        <div className="container mx-auto text-center">
          <p className="text-muted-foreground font-mono text-sm">
            &lt;footer&gt; © 2025 Atulya Srivastava. Built with React & TypeScript. &lt;/footer&gt;
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;