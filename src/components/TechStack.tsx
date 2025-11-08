import { Card, CardContent } from "@/components/ui/card";
import { Code2, Monitor, Server, Database, Wrench } from "lucide-react";
import {
  SiReact,
  SiNextdotjs,
  SiTypescript,
  SiTailwindcss,
  SiJavascript,
  SiHtml5,
  SiCss3,
  SiNodedotjs,
  SiExpress,
  SiFastapi,
  SiMongodb,
  SiPostgresql,
  SiPrisma,
  SiGit,
  SiFigma,
  SiPostman,
  SiGithub,
  SiVercel,
} from "react-icons/si";
import TextScramble from "./TextScramble";

export default function TechStack({ isAnimationPaused }) {
  const iconClass = "text-2xl md:text-3xl";

  return (
    <section id="techstack" className="py-20 px-6 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-blue-500/5 to-transparent" />
      <div className="container mx-auto max-w-6xl relative z-10 text-center">
        <TextScramble
          text="<techstack>"
          className="text-3xl md:text-4xl font-bold mb-12 font-mono bg-gradient-to-r from-cyan-500 to-blue-600 bg-clip-text text-transparent"
          isPaused={isAnimationPaused}
        >
          <Code2 className="w-8 h-8 inline mr-3 text-cyan-500" />
        </TextScramble>

        <div className="flex flex-col gap-4">
          {/* FRONTEND */}
          <SkillCard
            title="Frontend"
            color="cyan"
            icon={<Monitor className="text-cyan-500" />}
            skills={[
              { name: "React", icon: <SiReact className={iconClass} /> },
              { name: "Next.js", icon: <SiNextdotjs className={iconClass} /> },
              {
                name: "TypeScript",
                icon: <SiTypescript className={iconClass} />,
              },
              {
                name: "Tailwind",
                icon: <SiTailwindcss className={iconClass} />,
              },
              {
                name: "JavaScript",
                icon: <SiJavascript className={iconClass} />,
              },
              { name: "HTML", icon: <SiHtml5 className={iconClass} /> },
              { name: "CSS", icon: <SiCss3 className={iconClass} /> },
            ]}
          />

          {/* BACKEND */}
          <SkillCard
            title="Backend"
            color="blue"
            icon={<Server className="text-blue-500" />}
            skills={[
              { name: "Node.js", icon: <SiNodedotjs className={iconClass} /> },
              { name: "Express", icon: <SiExpress className={iconClass} /> },
              { name: "FastAPI", icon: <SiFastapi className={iconClass} /> },
              { name: "REST APIs", icon: <Code2 className={iconClass} /> },
            ]}
          />

          {/* DATABASE */}
          <SkillCard
            title="Database"
            color="purple"
            icon={<Database className="text-purple-500" />}
            skills={[
              { name: "MongoDB", icon: <SiMongodb className={iconClass} /> },
              {
                name: "PostgreSQL",
                icon: <SiPostgresql className={iconClass} />,
              },
              { name: "Prisma", icon: <SiPrisma className={iconClass} /> },
            ]}
          />

          {/* TOOLS */}
          <SkillCard
            title="Tools & Technologies"
            color="green"
            icon={<Wrench className="text-green-500" />}
            skills={[
              { name: "Git", icon: <SiGit className={iconClass} /> },
              { name: "GitHub", icon: <SiGithub className={iconClass} /> },
              { name: "Figma", icon: <SiFigma className={iconClass} /> },
              { name: "Postman", icon: <SiPostman className={iconClass} /> },
              { name: "Vercel", icon: <SiVercel className={iconClass} /> },
            ]}
          />
        </div>

        <p className="text-sm text-muted-foreground font-mono mt-10">
          &lt;/techstack&gt;
        </p>
      </div>
    </section>
  );
}

const colorMap = {
  cyan: {
    border: "hover:border-cyan-500/50",
    shadow: "hover:shadow-cyan-500/20",
    gradient: "from-cyan-500/10 to-cyan-400/10",
    text: "from-cyan-500 to-cyan-400",
    bgIcon: "bg-cyan-500/10 group-hover:bg-cyan-500/20",
  },
  blue: {
    border: "hover:border-blue-500/50",
    shadow: "hover:shadow-blue-500/20",
    gradient: "from-blue-500/10 to-blue-400/10",
    text: "from-blue-500 to-blue-400",
    bgIcon: "bg-blue-500/10 group-hover:bg-blue-500/20",
  },
  purple: {
    border: "hover:border-purple-500/50",
    shadow: "hover:shadow-purple-500/20",
    gradient: "from-purple-500/10 to-purple-400/10",
    text: "from-purple-500 to-purple-400",
    bgIcon: "bg-purple-500/10 group-hover:bg-purple-500/20",
  },
  green: {
    border: "hover:border-green-500/50",
    shadow: "hover:shadow-green-500/20",
    gradient: "from-green-500/10 to-green-400/10",
    text: "from-green-500 to-green-400",
    bgIcon: "bg-green-500/10 group-hover:bg-green-500/20",
  },
};

function SkillCard({ title, icon, color, skills }) {
  const c = colorMap[color] || colorMap.cyan;

  return (
    <Card
      className={`group relative bg-card border border-border/50 transition-all duration-300 overflow-hidden 
      hover:-translate-y-4 hover:-translate-x-2 hover:shadow-2xl ${c.border} ${c.shadow}`}
    >
      <div
        className={`absolute inset-0 bg-gradient-to-br ${c.gradient} opacity-0 group-hover:opacity-100 transition-all duration-300`}
      />
      <CardContent className="relative p-8">
        <div className="flex items-center gap-3 mb-6">
          <div className={`p-3 rounded-lg ${c.bgIcon} transition-colors`}>
            {icon}
          </div>
          <h3
            className={`text-2xl font-bold font-mono bg-gradient-to-r ${c.text} bg-clip-text text-transparent`}
          >
            {title}
          </h3>
        </div>

        <div className="grid grid-cols-4 gap-3">
          {skills.map(({ name, icon }) => (
            <div
              key={name}
              className="flex items-center gap-2 px-3 py-2 text-sm font-mono border border-cyan-200/20 rounded-md hover:scale-105 transition-all"
            >
              {icon}
              <span>{name}</span>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}
