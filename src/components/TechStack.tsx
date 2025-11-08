import { Card, CardContent } from "@/components/ui/card";
import { Code2, Monitor, Server, Database, Wrench } from "lucide-react";
import { SiReact, SiNextdotjs, SiTypescript, SiTailwindcss, SiJavascript, SiHtml5, SiCss3,
         SiNodedotjs, SiExpress, SiPython, SiFastapi, SiGraphql,
         SiMongodb, SiPostgresql, SiMysql, SiRedis, SiFirebase, SiPrisma,
         SiGit, SiDocker, SiVercel, SiFigma, SiPostman, SiGithub, } from "react-icons/si";
import TextScramble from "./TextSramble";

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

        <div className="flex flex-col gap-2">
          {/* --- FRONTEND --- */}
          <SkillCard
            title="Frontend"
            icon={<Monitor className="text-cyan-500" />}
            color="cyan"
            skills={[
              { name: "React", icon: <SiReact className={iconClass} /> },
              { name: "Next.js", icon: <SiNextdotjs className={iconClass} /> },
              { name: "TypeScript", icon: <SiTypescript className={iconClass} /> },
              { name: "Tailwind", icon: <SiTailwindcss className={iconClass} /> },
              { name: "JavaScript", icon: <SiJavascript className={iconClass} /> },
              { name: "HTML/CSS", icon: <SiHtml5 className={iconClass} /> },
            ]}
          />

          {/* --- BACKEND --- */}
          <SkillCard
            title="Backend"
            icon={<Server className="text-blue-500" />}
            color="blue"
            skills={[
              { name: "Node.js", icon: <SiNodedotjs className={iconClass} /> },
              { name: "Express", icon: <SiExpress className={iconClass} /> },
              { name: "FastAPI", icon: <SiFastapi className={iconClass} /> },
              { name: "REST APIs", icon: <SiExpress className={iconClass} /> },
            ]}
          />

          {/* --- DATABASE --- */}
          <SkillCard
            title="Database"
            icon={<Database className="text-purple-500" />}
            color="purple"
            skills={[
              { name: "MongoDB", icon: <SiMongodb className={iconClass} /> },
              { name: "PostgreSQL", icon: <SiPostgresql className={iconClass} /> },
            //   { name: "MySQL", icon: <SiMysql className={iconClass} /> },
            //   { name: "Redis", icon: <SiRedis className={iconClass} /> },
            //   { name: "Firebase", icon: <SiFirebase className={iconClass} /> },
              { name: "Prisma", icon: <SiPrisma className={iconClass} /> },
            ]}
          />

          <SkillCard
            title="Tools and Technologies"
            icon={<Wrench className="text-green-500" />}
            color="green"
            skills={[
              { name: "Git", icon: <SiGit className={iconClass} /> },
                // { name: "Docker", icon: <SiDocker className={iconClass} /> },
                // { name: "VS Code", icon: <SiVisualstudiocode className={iconClass} /> },
                { name: "Figma", icon: <SiFigma className={iconClass} /> },
                { name: "Postman", icon: <SiPostman className={iconClass} /> },
                { name: "GitHub", icon: <SiGithub className={iconClass} /> },
                { name: "Vercel", icon: <SiVercel className={iconClass} /> },
            ]}
          />
        </div>

        <p className="text-sm text-muted-foreground font-mono mt-10">&lt;/skills&gt;</p>
      </div>
    </section>
  );
}

function SkillCard({ title, icon, color, skills }) {
  return (
    <Card
      className={`group relative bg-transparent/20 backdrop-blur-md border-border/50 hover:border-${color}-500/50 transition-all duration-300 overflow-hidden hover:-translate-y-4 hover:-translate-x-2 hover:shadow-2xl hover:shadow-${color}-500/20`}
    >
      <div className={`absolute inset-0 bg-gradient-to-br from-${color}-500/10 to-${color}-400/10 opacity-0 group-hover:opacity-100 transition-all duration-300`} />
      <CardContent className="relative p-8">
        <div className="flex items-center gap-3 mb-6">
          <div className={`p-3 rounded-lg bg-${color}-500/10 group-hover:bg-${color}-500/20 transition-colors`}>
            {icon}
          </div>
          <h3
            className={`text-2xl font-bold font-mono bg-gradient-to-r from-${color}-500 to-${color}-400 bg-clip-text text-transparent`}
          >
            {title}
          </h3>
        </div>
        <div className="grid grid-cols-4 gap-3">
          {skills.map(({ name, icon }) => (
            <div
              key={name}
              className="flex items-center gap-2 px-3 py-2 text-sm font-mono bg-opacity-10 rounded-md border border-opacity-20 hover:bg-opacity-20 hover:scale-105 transition-all duration-300"
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
