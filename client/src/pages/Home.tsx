import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ChevronDown, Menu, X, Zap, Users, BookOpen, Lightbulb, BarChart3, Shield } from "lucide-react";

export default function Home() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const sections = [
    { id: "contexto", label: "Contexto", icon: BarChart3 },
    { id: "proposta", label: "Proposta", icon: Lightbulb },
    { id: "arquitetura", label: "Arquitetura", icon: BookOpen },
    { id: "personas", label: "Personas", icon: Users },
    { id: "briefing", label: "Briefing", icon: Zap },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-slate-50">
      {/* Header */}
      <header className="sticky top-0 z-50 border-b border-slate-200/50 bg-white/80 backdrop-blur-md">
        <div className="container flex items-center justify-between py-4">
          <div className="flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-gradient-to-br from-orange-500 to-orange-600">
              <Zap className="h-6 w-6 text-white" />
            </div>
            <div>
              <h1 className="text-xl font-bold text-slate-900">SharePoint Imagine</h1>
              <p className="text-xs text-slate-500">LABS Redesign Hub</p>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden gap-1 md:flex">
            {sections.map((section) => (
              <button
                key={section.id}
                onClick={() => document.getElementById(section.id)?.scrollIntoView({ behavior: "smooth" })}
                className="rounded-lg px-3 py-2 text-sm font-medium text-slate-600 transition-colors hover:bg-slate-100 hover:text-slate-900"
              >
                {section.label}
              </button>
            ))}
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? (
              <X className="h-6 w-6 text-slate-900" />
            ) : (
              <Menu className="h-6 w-6 text-slate-900" />
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="border-t border-slate-200 bg-white px-4 py-3 md:hidden">
            <nav className="flex flex-col gap-2">
              {sections.map((section) => (
                <button
                  key={section.id}
                  onClick={() => {
                    document.getElementById(section.id)?.scrollIntoView({ behavior: "smooth" });
                    setMobileMenuOpen(false);
                  }}
                  className="rounded-lg px-3 py-2 text-sm font-medium text-slate-600 transition-colors hover:bg-slate-100 hover:text-slate-900"
                >
                  {section.label}
                </button>
              ))}
            </nav>
          </div>
        )}
      </header>

      {/* Hero Section */}
      <section className="border-b border-slate-200/50 py-20">
        <div className="container">
          <div className="mx-auto max-w-3xl text-center">
            <div className="mb-6 inline-block rounded-full bg-orange-100 px-4 py-2">
              <span className="text-sm font-semibold text-orange-700">Redesign Estratégico</span>
            </div>
            <h2 className="mb-4 text-4xl font-bold tracking-tight text-slate-900 md:text-5xl">
              Transformando o SharePoint Imagine LABS
            </h2>
            <p className="mb-8 text-lg text-slate-600">
              Uma plataforma estratégica com foco em IA, metodologia ágil e experiência do usuário. Navegação simplificada, CTAs claros e comunidade engajada.
            </p>
            <div className="flex flex-col gap-3 sm:flex-row sm:justify-center">
              <Button size="lg" className="bg-orange-600 hover:bg-orange-700">
                Explorar Proposta
              </Button>
              <Button size="lg" variant="outline">
                Ver Arquitetura
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Contexto Section */}
      <section id="contexto" className="border-b border-slate-200/50 py-16">
        <div className="container">
          <h3 className="mb-2 text-sm font-semibold uppercase tracking-wider text-orange-600">
            Situação Atual
          </h3>
          <h2 className="mb-12 text-3xl font-bold text-slate-900">Contexto & Objetivo do Redesign</h2>

          <div className="grid gap-8 md:grid-cols-2">
            {/* Problemas */}
            <div>
              <h4 className="mb-4 text-lg font-semibold text-slate-900">Problemas Identificados</h4>
              <div className="space-y-3">
                {[
                  "Navegação complexa com múltiplos níveis profundos",
                  "Menu desorganizado e confuso",
                  "Falta de destaque para funcionalidades de IA",
                  "Ausência de chamadas claras à ação (CTAs)",
                ].map((problema, idx) => (
                  <div key={idx} className="flex gap-3">
                    <div className="mt-1 flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full bg-red-100">
                      <span className="text-xs font-bold text-red-600">✕</span>
                    </div>
                    <p className="text-slate-700">{problema}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Soluções */}
            <div>
              <h4 className="mb-4 text-lg font-semibold text-slate-900">Por Que Redesenhar?</h4>
              <div className="space-y-3">
                {[
                  "Simplificar navegação com estrutura intuitiva",
                  "Organizar menu com lógica clara e estratégica",
                  "Destacar IA e inovação como diferenciais",
                  "Criar caminhos claros para diferentes usuários",
                ].map((solucao, idx) => (
                  <div key={idx} className="flex gap-3">
                    <div className="mt-1 flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full bg-green-100">
                      <span className="text-xs font-bold text-green-600">✓</span>
                    </div>
                    <p className="text-slate-700">{solucao}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Proposta de Valor */}
      <section id="proposta" className="border-b border-slate-200/50 py-16">
        <div className="container">
          <h3 className="mb-2 text-sm font-semibold uppercase tracking-wider text-orange-600">
            Estratégia
          </h3>
          <h2 className="mb-12 text-3xl font-bold text-slate-900">Proposta de Valor</h2>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {[
              {
                title: "Navegação Simplificada",
                description: "6 seções principais bem definidas, reduzindo profundidade e complexidade",
                icon: "🧭",
              },
              {
                title: "Destaque em IA",
                description: "Seção dedicada com diferenciação estratégica e casos de uso práticos",
                icon: "🤖",
              },
              {
                title: "CTAs Estruturados",
                description: "Caminhos claros para diferentes tipos de usuários e necessidades",
                icon: "🎯",
              },
              {
                title: "Metodologia Ágil",
                description: "Documentação, ferramentas e guias para adoção de práticas ágeis",
                icon: "⚡",
              },
              {
                title: "Melhor Usabilidade",
                description: "Foco em acessibilidade e experiência do usuário em todas as páginas",
                icon: "♿",
              },
              {
                title: "Comunidade Engajada",
                description: "Espaço para colaboração, networking e compartilhamento de conhecimento",
                icon: "👥",
              },
            ].map((item, idx) => (
              <Card key={idx} className="border-slate-200/50 transition-all hover:shadow-lg">
                <CardHeader>
                  <div className="mb-3 text-3xl">{item.icon}</div>
                  <CardTitle className="text-lg">{item.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-slate-600">{item.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Arquitetura de Informação */}
      <section id="arquitetura" className="border-b border-slate-200/50 py-16">
        <div className="container">
          <h3 className="mb-2 text-sm font-semibold uppercase tracking-wider text-orange-600">
            Estrutura
          </h3>
          <h2 className="mb-12 text-3xl font-bold text-slate-900">Arquitetura de Informação</h2>

          <Tabs defaultValue="atual" className="w-full">
            <TabsList className="grid w-full grid-cols-2">
              <TabsTrigger value="atual">Estado Atual (AS-IS)</TabsTrigger>
              <TabsTrigger value="futuro">Estado Futuro (TO-BE)</TabsTrigger>
            </TabsList>

            <TabsContent value="atual" className="mt-8">
              <Card className="border-slate-200/50">
                <CardHeader>
                  <CardTitle>Estrutura Atual</CardTitle>
                  <CardDescription>Navegação profunda com múltiplos níveis</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="rounded-lg bg-red-50 p-4">
                      <p className="mb-2 font-semibold text-red-900">Desafios Atuais:</p>
                      <ul className="space-y-2 text-sm text-red-800">
                        <li>• 6+ níveis de profundidade em alguns caminhos</li>
                        <li>• Estrutura hierárquica complexa</li>
                        <li>• Dificuldade de navegação para usuários novos</li>
                        <li>• Falta de clareza sobre onde encontrar conteúdo</li>
                      </ul>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="futuro" className="mt-8">
              <Card className="border-slate-200/50">
                <CardHeader>
                  <CardTitle>Estrutura Proposta</CardTitle>
                  <CardDescription>Navegação simplificada com 6 seções principais</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="rounded-lg bg-green-50 p-4">
                      <p className="mb-4 font-semibold text-green-900">6 Seções Principais:</p>
                      <div className="grid gap-3 sm:grid-cols-2">
                        {["Home", "IA & Inovação", "Metodologia Ágil", "Hub de Recursos", "Comunidade", "Suporte"].map(
                          (secao, idx) => (
                            <div
                              key={idx}
                              className="flex items-center gap-2 rounded-lg bg-white p-3 text-sm font-medium text-green-900"
                            >
                              <div className="flex h-6 w-6 items-center justify-center rounded-full bg-green-200">
                                {idx + 1}
                              </div>
                              {secao}
                            </div>
                          )
                        )}
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      {/* Personas */}
      <section id="personas" className="border-b border-slate-200/50 py-16">
        <div className="container">
          <h3 className="mb-2 text-sm font-semibold uppercase tracking-wider text-orange-600">
            Usuários
          </h3>
          <h2 className="mb-12 text-3xl font-bold text-slate-900">Personas & Prioridades</h2>

          <div className="grid gap-6 md:grid-cols-2">
            {[
              {
                nome: "Gestor TI",
                descricao: "Responsável pela infraestrutura e governança",
                interesses: ["Segurança e conformidade", "Performance e escalabilidade", "Integração com sistemas"],
                prioridade: "Alta",
                cor: "blue",
              },
              {
                nome: "Desenvolvedor",
                descricao: "Implementa soluções técnicas",
                interesses: ["Documentação técnica", "APIs e integrações", "Exemplos de código"],
                prioridade: "Alta",
                cor: "purple",
              },
              {
                nome: "Equipe Editorial",
                descricao: "Cria e gerencia conteúdo",
                interesses: ["Ferramentas de criação", "Fluxo de publicação", "Templates de conteúdo"],
                prioridade: "Média",
                cor: "amber",
              },
              {
                nome: "Colaborador",
                descricao: "Usuário final que consome conteúdo",
                interesses: ["Acesso fácil a informações", "Busca eficiente", "Recomendações personalizadas"],
                prioridade: "Alta",
                cor: "green",
              },
            ].map((persona, idx) => {
              const corMap: Record<string, string> = {
                blue: "border-blue-200 bg-blue-50",
                purple: "border-purple-200 bg-purple-50",
                amber: "border-amber-200 bg-amber-50",
                green: "border-green-200 bg-green-50",
              };

              return (
                <Card key={idx} className={`border-2 ${corMap[persona.cor]}`}>
                  <CardHeader>
                    <div className="flex items-start justify-between">
                      <div>
                        <CardTitle>{persona.nome}</CardTitle>
                        <CardDescription>{persona.descricao}</CardDescription>
                      </div>
                      <span className="rounded-full bg-white px-3 py-1 text-xs font-semibold text-slate-900">
                        {persona.prioridade}
                      </span>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="mb-3 text-sm font-semibold text-slate-900">Principais Interesses:</p>
                    <ul className="space-y-2">
                      {persona.interesses.map((interesse, i) => (
                        <li key={i} className="flex items-center gap-2 text-sm text-slate-700">
                          <span className="h-1.5 w-1.5 rounded-full bg-slate-400" />
                          {interesse}
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Briefing de Páginas */}
      <section id="briefing" className="border-b border-slate-200/50 py-16">
        <div className="container">
          <h3 className="mb-2 text-sm font-semibold uppercase tracking-wider text-orange-600">
            Detalhes
          </h3>
          <h2 className="mb-12 text-3xl font-bold text-slate-900">Briefing de Páginas</h2>

          <Tabs defaultValue="home" className="w-full">
            <TabsList className="grid w-full grid-cols-2 lg:grid-cols-3">
              <TabsTrigger value="home">Home</TabsTrigger>
              <TabsTrigger value="ia">IA & Inovação</TabsTrigger>
              <TabsTrigger value="agil">Metodologia Ágil</TabsTrigger>
              <TabsTrigger value="recursos">Hub de Recursos</TabsTrigger>
              <TabsTrigger value="comunidade">Comunidade</TabsTrigger>
              <TabsTrigger value="suporte">Suporte</TabsTrigger>
            </TabsList>

            {[
              {
                id: "home",
                titulo: "Home",
                elementos: [
                  "Banner principal com proposta de valor",
                  "CTAs para seções principais",
                  "Destaque para IA e inovação",
                  "Últimas novidades e atualizações",
                  "Acesso rápido a ferramentas principais",
                ],
              },
              {
                id: "ia",
                titulo: "IA & Inovação",
                elementos: [
                  "Visão geral de ferramentas de IA",
                  "Casos de uso e exemplos práticos",
                  "Documentação técnica",
                  "Comunidade de usuários",
                  "Roadmap de novas funcionalidades",
                ],
              },
              {
                id: "agil",
                titulo: "Metodologia Ágil",
                elementos: [
                  "Princípios e práticas ágeis",
                  "Guias de implementação",
                  "Templates e ferramentas",
                  "Histórias de sucesso",
                  "Treinamentos e certificações",
                ],
              },
              {
                id: "recursos",
                titulo: "Hub de Recursos",
                elementos: [
                  "Biblioteca de documentos",
                  "Modelos e templates",
                  "Ferramentas e utilitários",
                  "Links para plataformas externas",
                  "Base de conhecimento",
                ],
              },
              {
                id: "comunidade",
                titulo: "Comunidade",
                elementos: [
                  "Fórum de discussão",
                  "Grupos de interesse",
                  "Eventos e webinars",
                  "Perfis de usuários",
                  "Colaboração e networking",
                ],
              },
              {
                id: "suporte",
                titulo: "Suporte",
                elementos: [
                  "FAQ e troubleshooting",
                  "Contato com time de suporte",
                  "Tickets de suporte",
                  "Base de conhecimento",
                  "Feedback e sugestões",
                ],
              },
            ].map((pagina) => (
              <TabsContent key={pagina.id} value={pagina.id} className="mt-8">
                <Card className="border-slate-200/50">
                  <CardHeader>
                    <CardTitle>{pagina.titulo}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-3">
                      {pagina.elementos.map((elemento, idx) => (
                        <div key={idx} className="flex gap-3 rounded-lg bg-slate-50 p-3">
                          <div className="mt-1 flex h-5 w-5 flex-shrink-0 items-center justify-center rounded-full bg-orange-100 text-xs font-bold text-orange-600">
                            {idx + 1}
                          </div>
                          <p className="text-slate-700">{elemento}</p>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>
            ))}
          </Tabs>
        </div>
      </section>

      {/* Próximos Passos */}
      <section className="py-16">
        <div className="container">
          <h3 className="mb-2 text-sm font-semibold uppercase tracking-wider text-orange-600">
            Roadmap
          </h3>
          <h2 className="mb-12 text-3xl font-bold text-slate-900">Próximos Passos</h2>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {[
              {
                fase: "Fase 2",
                titulo: "Prototipagem",
                descricao: "Criar wireframes e protótipos interativos",
                numero: "01",
              },
              {
                fase: "Fase 3",
                titulo: "Validação",
                descricao: "Apresentar e coletar feedback dos stakeholders",
                numero: "02",
              },
              {
                fase: "Fase 4",
                titulo: "Desenvolvimento",
                descricao: "Implementar no SharePoint com SPFx se necessário",
                numero: "03",
              },
              {
                fase: "Fase 5",
                titulo: "Testes & Refinamento",
                descricao: "Validar com usuários reais e fazer ajustes finais",
                numero: "04",
              },
            ].map((passo, idx) => (
              <div key={idx} className="group relative">
                <div className="absolute inset-0 rounded-lg bg-gradient-to-r from-orange-100 to-orange-50 opacity-0 transition-opacity group-hover:opacity-100" />
                <Card className="relative border-slate-200/50 transition-all group-hover:shadow-lg">
                  <CardHeader>
                    <div className="mb-3 text-3xl font-bold text-orange-200">{passo.numero}</div>
                    <CardTitle className="text-lg">{passo.titulo}</CardTitle>
                    <CardDescription>{passo.fase}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-slate-600">{passo.descricao}</p>
                  </CardContent>
                </Card>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-slate-200/50 bg-slate-900 py-12 text-slate-400">
        <div className="container">
          <div className="grid gap-8 md:grid-cols-4">
            <div>
              <h4 className="mb-4 font-semibold text-white">SharePoint Imagine LABS</h4>
              <p className="text-sm">Redesign Hub - Transformando a experiência do usuário</p>
            </div>
            <div>
              <h4 className="mb-4 font-semibold text-white">Navegação</h4>
              <ul className="space-y-2 text-sm">
                <li><a href="#contexto" className="hover:text-white transition-colors">Contexto</a></li>
                <li><a href="#proposta" className="hover:text-white transition-colors">Proposta</a></li>
                <li><a href="#arquitetura" className="hover:text-white transition-colors">Arquitetura</a></li>
              </ul>
            </div>
            <div>
              <h4 className="mb-4 font-semibold text-white">Recursos</h4>
              <ul className="space-y-2 text-sm">
                <li><a href="#personas" className="hover:text-white transition-colors">Personas</a></li>
                <li><a href="#briefing" className="hover:text-white transition-colors">Briefing</a></li>
              </ul>
            </div>
            <div>
              <h4 className="mb-4 font-semibold text-white">Contato</h4>
              <p className="text-sm">Para dúvidas ou sugestões sobre o redesign</p>
            </div>
          </div>
          <div className="mt-8 border-t border-slate-700 pt-8 text-center text-sm">
            <p>&copy; 2026 SharePoint Imagine LABS. Todos os direitos reservados.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
