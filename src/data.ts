export const PROFILE = {
  name: "Wilson Salomão",
  role: "Full Stack & DevOps Developer",
  bio: "Construo soluções modernas e escaláveis para resolver problemas reais — do backend à infraestrutura na nuvem. Gosto de unir código limpo, automação e performance. Minha base principal é Elixir, Node.js e Python, mas me divirto em várias áreas, incluindo DevOps e cloud.",
  email: "wilsonsalomao733@gmail.com",
  github: "https://github.com/Wilson-Salomao733",
  linkedin: "https://www.linkedin.com/in/wilson-g-salom%C3%A3o-227133285",
  cv: "/WilsonSalomao-CV.pdf",
};

const devicon = (path: string) =>
  `https://cdn.jsdelivr.net/gh/devicons/devicon/icons/${path}`;

export const TECHS: { name: string; icon: string }[] = [
  { name: "Elixir", icon: devicon("elixir/elixir-original.svg") },
  { name: "Phoenix", icon: devicon("phoenix/phoenix-original.svg") },
  { name: "Node.js", icon: devicon("nodejs/nodejs-original.svg") },
  { name: "Python", icon: devicon("python/python-original.svg") },
  { name: "TypeScript", icon: devicon("typescript/typescript-original.svg") },
  { name: "React", icon: devicon("react/react-original.svg") },
  { name: "Angular", icon: devicon("angular/angular-original.svg") },
  { name: "Tailwind", icon: devicon("tailwindcss/tailwindcss-original.svg") },
  { name: "AWS", icon: devicon("amazonwebservices/amazonwebservices-original-wordmark.svg") },
  { name: "GCP", icon: devicon("googlecloud/googlecloud-original.svg") },
  { name: "Terraform", icon: devicon("terraform/terraform-original.svg") },
  { name: "Docker", icon: devicon("docker/docker-original.svg") },
  { name: "Kubernetes", icon: devicon("kubernetes/kubernetes-plain.svg") },
  { name: "PostgreSQL", icon: devicon("postgresql/postgresql-original.svg") },
  { name: "MySQL", icon: devicon("mysql/mysql-original.svg") },
  { name: "Redis", icon: devicon("redis/redis-original.svg") },
  { name: "GraphQL", icon: devicon("graphql/graphql-plain.svg") },
  { name: "Linux", icon: devicon("linux/linux-original.svg") },
];

export const EXPERIENCES: {
  role: string;
  company: string;
  period: string;
  location: string;
  bullets: string[];
}[] = [
  {
    role: "Desenvolvedor Full Stack Júnior",
    company: "Árvore de Livros",
    period: "Jan 2025 — Atual",
    location: "Remoto",
    bullets: [
      "Desenvolvimento de novas features no backend (Elixir e Node.js) e frontend (React e TypeScript).",
      "Construção e manutenção de APIs RESTful e GraphQL, integrando serviços externos.",
      "Contribuição em decisões técnicas e melhorias de arquitetura.",
      "Práticas de DevOps: pipelines de CI/CD com GitHub Actions, deploys com Docker e Kubernetes, e serviços AWS (EC2, S3, RDS, CloudFront).",
    ],
  },
  {
    role: "Estagiário de Tecnologia (Jovem Aprendiz)",
    company: "Árvore de Livros",
    period: "Jan 2024 — Jan 2025",
    location: "Remoto",
    bullets: [
      "Suporte técnico via help desk e resolução de chamados.",
      "Desenvolvimento de features básicas em Elixir com acompanhamento do time.",
      "Criação de dashboards internos para monitorar métricas operacionais.",
      "Implementação de pequenas automações de rotina.",
    ],
  },
];

export const PROJECTS: {
  title: string;
  description: string;
  tags: string[];
  link: string;
  emoji: string;
}[] = [
  {
    title: "Bico",
    emoji: "📍",
    description:
      "Plataforma full stack (web + mobile + API geolocalizada) que conecta clientes a prestadores de serviços por proximidade, com chat, avaliações e pagamentos integrados (PIX/Asaas).",
    tags: ["Elixir/Phoenix", "React", "React Native", "PostgreSQL", "Docker"],
    link: "https://github.com/Bico-App",
  },
  {
    title: "VestibuQuiz",
    emoji: "🎓",
    description:
      "Plataforma de quiz para reforço de estudos pré-vestibular, adotada como ferramenta educacional oficial pela Prefeitura de Mongaguá e premiada pela câmara municipal.",
    tags: ["Full Stack", "Educação", "Web"],
    link: "https://github.com/Wilson-Salomao733",
  },
  {
    title: "terraform-infra",
    emoji: "☁️",
    description:
      "Infraestrutura como código com Terraform para provisionamento automatizado de recursos em nuvem.",
    tags: ["Terraform", "IaC", "Cloud"],
    link: "https://github.com/Wilson-Salomao733/terraform-infra",
  },
];
