import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import {
  Sun,
  Leaf,
  Wallet,
  Droplets,
  Wrench,
  Home,
  Building2,
  Factory,
  Phone,
  MapPin,
  Clock,
  Menu as MenuIcon,
  X,
  ChevronDown,
  Star,
  MessageCircle,
  ShieldCheck,
  BadgeCheck,
  TrendingUp,
  Award,
  Sparkles,
  Send,
  Instagram,
  Facebook,
  Mail,
  ArrowRight,
} from "lucide-react";
import heroImg from "@/assets/hero-solar.jpg";
import aboutImg from "@/assets/about-solar.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Hydrosol Hydrolar Rio das Ostras | Aquecimento Solar Premium" },
      {
        name: "description",
        content:
          "Aquecimento solar residencial, comercial e industrial em Rio das Ostras. Economize até 80% na conta de luz com instalação certificada Hydrosol Hydrolar.",
      },
      { property: "og:title", content: "Hydrosol Hydrolar | Aquecimento Solar em Rio das Ostras" },
      {
        property: "og:description",
        content:
          "Sustentabilidade, economia e conforto com sistemas solares de alto padrão. Solicite seu orçamento.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: LandingPage,
});

const NAV = [
  { label: "Início", href: "#inicio" },
  { label: "Sobre", href: "#sobre" },
  { label: "Produtos", href: "#produtos" },
  { label: "Serviços", href: "#servicos" },
  { label: "Depoimentos", href: "#depoimentos" },
  { label: "Contato", href: "#contato" },
];

function Logo({ dark = false }: { dark?: boolean }) {
  return (
    <a href="#inicio" className="flex items-center gap-2.5 shrink-0">
      <div className="relative grid place-items-center h-11 w-11 rounded-2xl bg-gradient-to-br from-[var(--brand-navy-deep)] to-[var(--brand-blue)] shadow-soft">
        <Sun className="h-5 w-5 text-[var(--brand-orange)] absolute -top-1 -right-1" strokeWidth={2.5} />
        <Droplets className="h-5 w-5 text-white" strokeWidth={2.5} />
      </div>
      <div className="leading-tight">
        <div className={`font-extrabold tracking-tight text-[15px] ${dark ? "text-white" : "text-[var(--brand-navy-deep)]"}`}>
          Hydrosol <span className="text-[var(--brand-orange)]">Hydrolar</span>
        </div>
        <div className={`text-[10px] uppercase tracking-[0.15em] ${dark ? "text-white/60" : "text-muted-foreground"}`}>
          Rio das Ostras
        </div>
      </div>
    </a>
  );
}

function TopBar() {
  return (
    <div className="hidden md:block bg-[var(--brand-navy-deep)] text-white/90 text-xs">
      <div className="mx-auto max-w-7xl px-6 py-2.5 flex items-center justify-between gap-6">
        <div className="flex items-center gap-6">
          <span className="flex items-center gap-2"><MapPin className="h-3.5 w-3.5 text-[var(--brand-orange)]" /> Av. Beira Mar, 1200 — Rio das Ostras, RJ</span>
          <span className="flex items-center gap-2"><Phone className="h-3.5 w-3.5 text-[var(--brand-orange)]" /> (22) 99999-0000</span>
        </div>
        <span className="flex items-center gap-2"><Clock className="h-3.5 w-3.5 text-[var(--brand-orange)]" /> Seg — Sex · 08h às 18h · Sáb 08h às 12h</span>
      </div>
    </div>
  );
}

function Header() {
  const [open, setOpen] = useState(false);
  return (
    <>
      <TopBar />
      <header className="sticky top-0 z-40 glass border-b border-black/5">
        <div className="mx-auto max-w-7xl px-6 py-3.5 grid grid-cols-[minmax(0,1fr)_auto] items-center gap-4 lg:flex lg:justify-between">
          <Logo />
          <nav className="hidden lg:flex items-center gap-8">
            {NAV.map((n) => (
              <a
                key={n.href}
                href={n.href}
                className="text-sm font-medium text-foreground/80 hover:text-[var(--brand-blue)] transition-colors"
              >
                {n.label}
              </a>
            ))}
          </nav>
          <div className="hidden lg:flex items-center gap-3">
            <a
              href="#orcamento"
              className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-[var(--brand-orange)] to-[var(--brand-orange-soft)] px-5 py-2.5 text-sm font-semibold text-white shadow-soft hover:shadow-elegant transition-all"
            >
              Solicitar Orçamento <ArrowRight className="h-4 w-4" />
            </a>
          </div>
          <button onClick={() => setOpen(!open)} className="lg:hidden p-2 rounded-lg hover:bg-black/5" aria-label="Menu">
            {open ? <X className="h-5 w-5" /> : <MenuIcon className="h-5 w-5" />}
          </button>
        </div>
        {open && (
          <div className="lg:hidden border-t border-black/5 bg-white">
            <nav className="flex flex-col p-4 gap-1">
              {NAV.map((n) => (
                <a key={n.href} href={n.href} onClick={() => setOpen(false)} className="px-3 py-2.5 rounded-lg text-sm font-medium hover:bg-secondary">
                  {n.label}
                </a>
              ))}
              <a href="#orcamento" onClick={() => setOpen(false)} className="mt-2 text-center rounded-full bg-[var(--brand-orange)] px-5 py-3 text-sm font-semibold text-white">
                Solicitar Orçamento
              </a>
            </nav>
          </div>
        )}
      </header>
    </>
  );
}

function QuoteCard() {
  return (
    <form
      id="orcamento"
      onSubmit={(e) => {
        e.preventDefault();
      }}
      className="w-full max-w-md rounded-3xl bg-white/95 backdrop-blur-xl p-7 shadow-elegant border border-white/60"
    >
      <div className="flex items-center gap-2 mb-1">
        <Sparkles className="h-4 w-4 text-[var(--brand-orange)]" />
        <span className="text-xs font-semibold uppercase tracking-widest text-[var(--brand-blue)]">Orçamento sem compromisso</span>
      </div>
      <h3 className="text-2xl font-bold text-[var(--brand-navy-deep)] leading-tight">Receba sua proposta em até 24h</h3>
      <p className="text-sm text-muted-foreground mt-1.5">Preencha e nossa equipe entrará em contato.</p>

      <div className="mt-5 space-y-3">
        <input required placeholder="Nome completo" className="w-full h-12 rounded-xl border border-border bg-white px-4 text-sm outline-none focus:border-[var(--brand-blue)] focus:ring-4 focus:ring-[var(--brand-blue)]/10 transition" />
        <input required placeholder="Telefone / WhatsApp" className="w-full h-12 rounded-xl border border-border bg-white px-4 text-sm outline-none focus:border-[var(--brand-blue)] focus:ring-4 focus:ring-[var(--brand-blue)]/10 transition" />
        <input required type="email" placeholder="E-mail" className="w-full h-12 rounded-xl border border-border bg-white px-4 text-sm outline-none focus:border-[var(--brand-blue)] focus:ring-4 focus:ring-[var(--brand-blue)]/10 transition" />
        <div className="relative">
          <select className="w-full h-12 rounded-xl border border-border bg-white px-4 pr-10 text-sm outline-none focus:border-[var(--brand-blue)] focus:ring-4 focus:ring-[var(--brand-blue)]/10 transition appearance-none">
            <option>Tipo de imóvel</option>
            <option>Residencial</option>
            <option>Comercial</option>
            <option>Industrial</option>
            <option>Condomínio</option>
          </select>
          <ChevronDown className="h-4 w-4 absolute right-4 top-1/2 -translate-y-1/2 text-muted-foreground pointer-events-none" />
        </div>
        <button className="w-full h-12 rounded-xl bg-gradient-to-r from-[var(--brand-navy-deep)] to-[var(--brand-blue)] text-white text-sm font-semibold shadow-soft hover:shadow-elegant transition-all inline-flex items-center justify-center gap-2">
          Enviar solicitação <Send className="h-4 w-4" />
        </button>
        <p className="text-[11px] text-center text-muted-foreground">Seus dados estão seguros e não serão compartilhados.</p>
      </div>
    </form>
  );
}

function Hero() {
  return (
    <section id="inicio" className="relative overflow-hidden">
      <div className="absolute inset-0">
        <img src={heroImg} alt="Sistema de aquecimento solar em residência com vista para Rio das Ostras" className="h-full w-full object-cover" width={1920} height={1280} />
        <div className="absolute inset-0 bg-gradient-to-br from-[var(--brand-navy-deep)]/90 via-[var(--brand-navy-deep)]/70 to-[var(--brand-blue)]/50" />
        <div className="absolute inset-0 bg-gradient-to-t from-[var(--brand-navy-deep)]/60 to-transparent" />
      </div>

      <div className="relative mx-auto max-w-7xl px-6 pt-16 pb-24 lg:pt-24 lg:pb-32 grid lg:grid-cols-[1.15fr_1fr] gap-12 items-center">
        <div className="text-white">
          <span className="inline-flex items-center gap-2 rounded-full glass-dark px-4 py-1.5 text-xs font-medium">
            <Sparkles className="h-3.5 w-3.5 text-[var(--brand-orange)]" />
            Mais de 10 anos aquecendo Rio das Ostras
          </span>
          <h1 className="mt-6 text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-extrabold tracking-tight leading-[1.05]">
            Sustentabilidade,<br />
            <span className="bg-gradient-to-r from-white to-[var(--brand-orange-soft)] bg-clip-text text-transparent">Economia</span> e Conforto
          </h1>
          <p className="mt-6 text-lg text-white/85 max-w-xl leading-relaxed">
            Soluções completas em aquecimento solar para residências, empresas e indústrias. Reduza até 80% da sua conta de energia com tecnologia certificada.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <a href="#orcamento" className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-[var(--brand-orange)] to-[var(--brand-orange-soft)] px-7 py-3.5 text-sm font-semibold text-white shadow-elegant hover:scale-[1.02] transition-transform">
              Solicitar Orçamento <ArrowRight className="h-4 w-4" />
            </a>
            <a href="https://wa.me/5522999990000" className="inline-flex items-center gap-2 rounded-full bg-[var(--brand-whatsapp)] px-7 py-3.5 text-sm font-semibold text-white shadow-soft hover:brightness-110 transition">
              <MessageCircle className="h-4 w-4" /> Falar no WhatsApp
            </a>
          </div>

          <div className="mt-10 grid grid-cols-3 gap-6 max-w-lg">
            {[
              { n: "+500", l: "Clientes" },
              { n: "+800", l: "Sistemas" },
              { n: "4,5★", l: "no Google" },
            ].map((s) => (
              <div key={s.l}>
                <div className="text-2xl lg:text-3xl font-extrabold">{s.n}</div>
                <div className="text-xs text-white/70 mt-0.5">{s.l}</div>
              </div>
            ))}
          </div>
        </div>

        <div className="lg:justify-self-end w-full flex justify-center">
          <QuoteCard />
        </div>
      </div>
    </section>
  );
}

function Diferenciais() {
  const items = [
    { icon: Leaf, title: "Energia Renovável", desc: "Aproveitamento inteligente da energia do sol." },
    { icon: Wallet, title: "Economia na Conta", desc: "Redução expressiva no consumo elétrico." },
    { icon: Droplets, title: "Água Quente Sempre", desc: "Disponibilidade contínua o ano inteiro." },
    { icon: Wrench, title: "Instalação Especializada", desc: "Equipe técnica própria e certificada." },
  ];
  return (
    <section className="py-20 lg:py-24 bg-white">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {items.map((it) => (
            <div key={it.title} className="group rounded-2xl bg-white border border-border p-6 shadow-soft hover:shadow-elegant hover:-translate-y-1 transition-all">
              <div className="grid place-items-center h-12 w-12 rounded-xl bg-gradient-to-br from-[var(--brand-blue)]/10 to-[var(--brand-orange)]/10 text-[var(--brand-navy-deep)]">
                <it.icon className="h-6 w-6" />
              </div>
              <h3 className="mt-4 font-semibold text-[var(--brand-navy-deep)]">{it.title}</h3>
              <p className="mt-1.5 text-sm text-muted-foreground leading-relaxed">{it.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Produtos() {
  const items = [
    { icon: Home, title: "Residencial", desc: "Sistemas dimensionados para o conforto da sua família, com estética discreta e alta eficiência." },
    { icon: Building2, title: "Comercial", desc: "Redução de custos operacionais em hotéis, pousadas, restaurantes e centros esportivos." },
    { icon: Factory, title: "Industrial", desc: "Projetos de grande porte com engenharia dedicada e integração ao processo produtivo." },
    { icon: Wrench, title: "Assistência Técnica", desc: "Manutenção preventiva, corretiva e troca de peças para qualquer marca de sistema solar." },
  ];
  return (
    <section id="produtos" className="py-20 lg:py-28 bg-secondary/50">
      <div className="mx-auto max-w-7xl px-6">
        <div className="max-w-2xl">
          <span className="text-xs font-semibold uppercase tracking-[0.2em] text-[var(--brand-blue)]">Nossas soluções</span>
          <h2 className="mt-3 text-3xl lg:text-5xl font-extrabold tracking-tight text-[var(--brand-navy-deep)]">Aquecimento solar para cada necessidade</h2>
          <p className="mt-4 text-muted-foreground text-lg">Projeto, instalação e manutenção com curadoria técnica em cada etapa.</p>
        </div>

        <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {items.map((it, i) => (
            <div key={it.title} className="relative rounded-3xl bg-white p-7 shadow-soft hover:shadow-elegant transition-all border border-border overflow-hidden">
              <div className="absolute -right-8 -top-8 h-32 w-32 rounded-full bg-gradient-to-br from-[var(--brand-blue)]/10 to-transparent" />
              <div className="relative">
                <div className="grid place-items-center h-14 w-14 rounded-2xl bg-gradient-to-br from-[var(--brand-navy-deep)] to-[var(--brand-blue)] text-white shadow-soft">
                  <it.icon className="h-6 w-6" />
                </div>
                <div className="mt-6 flex items-center gap-2 text-[10px] font-semibold text-[var(--brand-orange)]">
                  0{i + 1} · CATEGORIA
                </div>
                <h3 className="mt-1 text-xl font-bold text-[var(--brand-navy-deep)]">{it.title}</h3>
                <p className="mt-2.5 text-sm text-muted-foreground leading-relaxed">{it.desc}</p>
                <a href="#orcamento" className="mt-5 inline-flex items-center gap-1.5 text-sm font-semibold text-[var(--brand-blue)] hover:gap-2.5 transition-all">
                  Saber mais <ArrowRight className="h-3.5 w-3.5" />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Sobre() {
  return (
    <section id="sobre" className="py-20 lg:py-28 bg-white">
      <div className="mx-auto max-w-7xl px-6 grid lg:grid-cols-2 gap-14 items-center">
        <div className="relative">
          <div className="relative rounded-[2rem] overflow-hidden shadow-elegant aspect-[4/5]">
            <img src={aboutImg} alt="Sistema de aquecimento solar instalado" className="h-full w-full object-cover" loading="lazy" width={1200} height={1200} />
            <div className="absolute inset-0 bg-gradient-to-t from-[var(--brand-navy-deep)]/40 to-transparent" />
          </div>
          <div className="absolute -bottom-6 -left-6 sm:-left-10 max-w-xs rounded-2xl bg-white p-5 shadow-elegant border border-border">
            <div className="flex items-center gap-3">
              <div className="grid place-items-center h-11 w-11 rounded-full bg-gradient-to-br from-[var(--brand-orange)] to-[var(--brand-orange-soft)] text-white shadow-soft">
                <Sparkles className="h-5 w-5" />
              </div>
              <div>
                <div className="text-[10px] font-semibold uppercase tracking-widest text-[var(--brand-orange)]">Orgulho</div>
                <div className="text-sm font-bold text-[var(--brand-navy-deep)] leading-tight">Empresa liderada por empreendedoras</div>
              </div>
            </div>
          </div>
          <div className="hidden sm:block absolute -top-6 -right-6 rounded-2xl bg-[var(--brand-navy-deep)] text-white p-5 shadow-elegant">
            <div className="text-3xl font-extrabold">+10</div>
            <div className="text-[11px] uppercase tracking-widest text-white/70">Anos de mercado</div>
          </div>
        </div>

        <div>
          <span className="text-xs font-semibold uppercase tracking-[0.2em] text-[var(--brand-blue)]">Sobre a empresa</span>
          <h2 className="mt-3 text-3xl lg:text-5xl font-extrabold tracking-tight text-[var(--brand-navy-deep)] leading-[1.1]">
            Referência em Aquecimento Solar em Rio das Ostras
          </h2>
          <p className="mt-5 text-muted-foreground text-lg leading-relaxed">
            Há mais de uma década a Hydrosol Hydrolar oferece soluções completas de aquecimento solar, unindo engenharia de precisão a um atendimento humano e personalizado. Nossa missão é levar economia real e conforto duradouro para cada projeto.
          </p>
          <p className="mt-4 text-muted-foreground leading-relaxed">
            Trabalhamos com equipamentos certificados, garantia estendida e uma equipe técnica própria — do dimensionamento à manutenção. Um compromisso claro com sustentabilidade, qualidade e resultado.
          </p>

          <div className="mt-8 grid grid-cols-2 gap-4">
            {[
              { icon: BadgeCheck, t: "Equipamentos certificados" },
              { icon: ShieldCheck, t: "Garantia estendida" },
              { icon: Wrench, t: "Equipe técnica própria" },
              { icon: Leaf, t: "Compromisso sustentável" },
            ].map((f) => (
              <div key={f.t} className="flex items-center gap-3 rounded-xl bg-secondary/60 p-3.5">
                <f.icon className="h-5 w-5 text-[var(--brand-blue)] shrink-0" />
                <span className="text-sm font-medium text-[var(--brand-navy-deep)]">{f.t}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function Numeros() {
  const stats = [
    { n: "+500", l: "Clientes atendidos", icon: TrendingUp },
    { n: "+800", l: "Sistemas instalados", icon: Sun },
    { n: "+10", l: "Anos de experiência", icon: Award },
    { n: "4,5★", l: "Avaliação Google", icon: Star },
  ];
  return (
    <section className="py-16 lg:py-20 bg-gradient-to-br from-[var(--brand-navy-deep)] to-[var(--brand-blue)] relative overflow-hidden">
      <div className="absolute inset-0 opacity-20" style={{ backgroundImage: "radial-gradient(circle at 20% 20%, white 1px, transparent 1px)", backgroundSize: "40px 40px" }} />
      <div className="relative mx-auto max-w-7xl px-6 grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((s) => (
          <div key={s.l} className="glass-dark rounded-2xl p-6 text-white">
            <s.icon className="h-6 w-6 text-[var(--brand-orange)]" />
            <div className="mt-4 text-4xl lg:text-5xl font-extrabold tracking-tight">{s.n}</div>
            <div className="mt-1 text-sm text-white/75">{s.l}</div>
          </div>
        ))}
      </div>
    </section>
  );
}

function Beneficios() {
  const items = [
    { t: "Redução de até 80%", d: "na sua conta de energia elétrica mensal." },
    { t: "Valorização do imóvel", d: "propriedades sustentáveis valem mais no mercado." },
    { t: "Equipamentos certificados", d: "somente marcas homologadas pelo INMETRO." },
    { t: "Garantia estendida", d: "cobertura completa em peças e instalação." },
    { t: "Suporte técnico ágil", d: "atendimento pós-venda dedicado e rápido." },
    { t: "Instalação limpa", d: "obra organizada, sem transtornos para você." },
  ];
  return (
    <section id="servicos" className="py-20 lg:py-28 bg-secondary/40">
      <div className="mx-auto max-w-7xl px-6">
        <div className="max-w-2xl mx-auto text-center">
          <span className="text-xs font-semibold uppercase tracking-[0.2em] text-[var(--brand-blue)]">Por que Hydrosol</span>
          <h2 className="mt-3 text-3xl lg:text-5xl font-extrabold tracking-tight text-[var(--brand-navy-deep)]">Benefícios que fazem diferença</h2>
          <p className="mt-4 text-muted-foreground text-lg">Cada instalação é um passo em direção a um futuro mais sustentável e econômico.</p>
        </div>

        <div className="mt-14 grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          {items.map((b, i) => (
            <div key={b.t} className="rounded-2xl bg-white p-6 border border-border shadow-soft hover:shadow-elegant transition-all">
              <div className="flex items-start gap-4">
                <div className="grid place-items-center h-10 w-10 rounded-xl bg-gradient-to-br from-[var(--brand-orange)] to-[var(--brand-orange-soft)] text-white font-bold text-sm shrink-0">
                  0{i + 1}
                </div>
                <div>
                  <h3 className="font-bold text-[var(--brand-navy-deep)]">{b.t}</h3>
                  <p className="mt-1 text-sm text-muted-foreground leading-relaxed">{b.d}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Depoimentos() {
  const items = [
    {
      name: "Mariana Costa",
      role: "Residencial · Costa Azul",
      text: "Instalação impecável e uma equipe extremamente atenciosa. Já sentimos a economia no primeiro mês.",
      initials: "MC",
    },
    {
      name: "Ricardo Almeida",
      role: "Comercial · Pousada Mar Aberto",
      text: "Reduziu drasticamente o custo de operação da pousada. Suporte pós-venda é diferenciado.",
      initials: "RA",
    },
    {
      name: "Juliana Ferreira",
      role: "Residencial · Extensão do Bosque",
      text: "Profissionais dedicadas, projeto sob medida e um resultado estético lindo. Recomendo demais.",
      initials: "JF",
    },
  ];
  return (
    <section id="depoimentos" className="py-20 lg:py-28 bg-white">
      <div className="mx-auto max-w-7xl px-6">
        <div className="max-w-2xl">
          <span className="text-xs font-semibold uppercase tracking-[0.2em] text-[var(--brand-blue)]">Depoimentos</span>
          <h2 className="mt-3 text-3xl lg:text-5xl font-extrabold tracking-tight text-[var(--brand-navy-deep)]">Clientes que já economizam com o sol</h2>
        </div>

        <div className="mt-12 grid md:grid-cols-3 gap-6">
          {items.map((it) => (
            <div key={it.name} className="rounded-3xl bg-gradient-to-br from-white to-secondary/50 p-7 border border-border shadow-soft hover:shadow-elegant transition-all">
              <div className="flex gap-0.5 text-[var(--brand-orange)]">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} className="h-4 w-4 fill-current" />
                ))}
              </div>
              <p className="mt-4 text-[var(--brand-navy-deep)] leading-relaxed">"{it.text}"</p>
              <div className="mt-6 flex items-center gap-3 pt-5 border-t border-border">
                <div className="grid place-items-center h-12 w-12 rounded-full bg-gradient-to-br from-[var(--brand-navy-deep)] to-[var(--brand-blue)] text-white font-bold shrink-0">
                  {it.initials}
                </div>
                <div className="min-w-0">
                  <div className="font-semibold text-[var(--brand-navy-deep)] truncate">{it.name}</div>
                  <div className="text-xs text-muted-foreground truncate">{it.role}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function FAQ() {
  const items = [
    { q: "Quanto tempo dura a instalação?", a: "Em geral, uma instalação residencial completa é finalizada entre 1 e 2 dias úteis, com equipe própria e obra organizada." },
    { q: "Qual é a economia real na conta de luz?", a: "Nossos clientes registram redução média entre 60% e 80% no consumo elétrico associado ao aquecimento de água." },
    { q: "Vocês atendem toda a região de Rio das Ostras?", a: "Sim. Atendemos Rio das Ostras, Macaé, Casimiro de Abreu e cidades vizinhas da Região dos Lagos." },
    { q: "Qual a garantia dos equipamentos?", a: "Trabalhamos apenas com marcas certificadas pelo INMETRO, com garantia de fábrica e cobertura estendida da instalação." },
    { q: "Funciona em dias nublados?", a: "Sim. O sistema é dimensionado com reservatório térmico e apoio elétrico automático para dias de baixa incidência solar." },
  ];
  const [open, setOpen] = useState<number | null>(0);
  return (
    <section className="py-20 lg:py-28 bg-secondary/40">
      <div className="mx-auto max-w-3xl px-6">
        <div className="text-center">
          <span className="text-xs font-semibold uppercase tracking-[0.2em] text-[var(--brand-blue)]">FAQ</span>
          <h2 className="mt-3 text-3xl lg:text-5xl font-extrabold tracking-tight text-[var(--brand-navy-deep)]">Perguntas frequentes</h2>
        </div>
        <div className="mt-12 space-y-3">
          {items.map((it, i) => {
            const isOpen = open === i;
            return (
              <div key={it.q} className="rounded-2xl bg-white border border-border shadow-soft overflow-hidden">
                <button
                  onClick={() => setOpen(isOpen ? null : i)}
                  className="w-full flex items-center justify-between gap-4 p-5 text-left"
                >
                  <span className="font-semibold text-[var(--brand-navy-deep)]">{it.q}</span>
                  <ChevronDown className={`h-5 w-5 text-[var(--brand-blue)] shrink-0 transition-transform ${isOpen ? "rotate-180" : ""}`} />
                </button>
                {isOpen && (
                  <div className="px-5 pb-5 -mt-1 text-sm text-muted-foreground leading-relaxed">{it.a}</div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer id="contato" className="bg-[var(--brand-navy-deep)] text-white/80 relative overflow-hidden">
      <div className="absolute inset-0 opacity-10" style={{ backgroundImage: "radial-gradient(circle at 80% 20%, var(--brand-orange) 1px, transparent 1px)", backgroundSize: "50px 50px" }} />
      <div className="relative mx-auto max-w-7xl px-6 py-16 grid lg:grid-cols-4 gap-10">
        <div className="lg:col-span-1">
          <Logo dark />
          <p className="mt-5 text-sm leading-relaxed text-white/70">
            Especialistas em aquecimento solar em Rio das Ostras. Sustentabilidade e economia para sua casa ou negócio.
          </p>
          <div className="mt-5 flex gap-2.5">
            <a href="#" className="grid place-items-center h-10 w-10 rounded-full glass-dark hover:bg-[var(--brand-orange)] transition-colors">
              <Instagram className="h-4 w-4 text-white" />
            </a>
            <a href="#" className="grid place-items-center h-10 w-10 rounded-full glass-dark hover:bg-[var(--brand-orange)] transition-colors">
              <Facebook className="h-4 w-4 text-white" />
            </a>
            <a href="https://wa.me/5522999990000" className="grid place-items-center h-10 w-10 rounded-full glass-dark hover:bg-[var(--brand-whatsapp)] transition-colors">
              <MessageCircle className="h-4 w-4 text-white" />
            </a>
          </div>
        </div>

        <div>
          <h4 className="text-white font-semibold mb-4">Contato</h4>
          <ul className="space-y-3 text-sm">
            <li className="flex items-start gap-2.5"><Phone className="h-4 w-4 mt-0.5 text-[var(--brand-orange)]" /> (22) 99999-0000</li>
            <li className="flex items-start gap-2.5"><MessageCircle className="h-4 w-4 mt-0.5 text-[var(--brand-orange)]" /> WhatsApp direto</li>
            <li className="flex items-start gap-2.5"><Mail className="h-4 w-4 mt-0.5 text-[var(--brand-orange)]" /> contato@hydrosol.com.br</li>
            <li className="flex items-start gap-2.5"><MapPin className="h-4 w-4 mt-0.5 text-[var(--brand-orange)]" /> Av. Beira Mar, 1200<br />Rio das Ostras — RJ</li>
          </ul>
        </div>

        <div>
          <h4 className="text-white font-semibold mb-4">Links rápidos</h4>
          <ul className="space-y-2.5 text-sm">
            {NAV.map((n) => (
              <li key={n.href}><a href={n.href} className="hover:text-[var(--brand-orange)] transition-colors">{n.label}</a></li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="text-white font-semibold mb-4">Nossa localização</h4>
          <div className="rounded-2xl overflow-hidden border border-white/10 aspect-[4/3]">
            <iframe
              title="Mapa Hydrosol"
              src="https://www.google.com/maps?q=Rio+das+Ostras,+RJ&output=embed"
              className="w-full h-full grayscale contrast-125 opacity-90"
              loading="lazy"
            />
          </div>
        </div>
      </div>

      <div className="relative border-t border-white/10">
        <div className="mx-auto max-w-7xl px-6 py-6 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-white/50">
          <span>© {new Date().getFullYear()} Hydrosol Hydrolar. Todos os direitos reservados.</span>
          <span>CNPJ 00.000.000/0001-00 · Rio das Ostras / RJ</span>
        </div>
      </div>
    </footer>
  );
}

function WhatsAppFloat() {
  return (
    <a
      href="https://wa.me/5522999990000"
      aria-label="Falar no WhatsApp"
      className="fixed bottom-6 right-6 z-50 grid place-items-center h-14 w-14 rounded-full bg-[var(--brand-whatsapp)] text-white shadow-elegant hover:scale-105 transition-transform"
    >
      <MessageCircle className="h-6 w-6" />
      <span className="absolute inset-0 rounded-full bg-[var(--brand-whatsapp)] animate-ping opacity-40" />
    </a>
  );
}

function LandingPage() {
  return (
    <div className="bg-background text-foreground min-h-screen">
      <Header />
      <main>
        <Hero />
        <Diferenciais />
        <Produtos />
        <Sobre />
        <Numeros />
        <Beneficios />
        <Depoimentos />
        <FAQ />
      </main>
      <Footer />
      <WhatsAppFloat />
    </div>
  );
}