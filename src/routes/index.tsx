import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useState, type ReactNode } from "react";
import {
  ArrowUp,
  Armchair,
  CalendarCheck,
  MapPin,
  Menu,
  MessageCircle,
  Scissors,
  Sparkles,
  UserRound,
  X,
} from "lucide-react";

import { Button } from "@/components/ui/button";
import { WHATSAPP_DISPLAY, WHATSAPP_URL } from "@/lib/whatsapp";
import foto01 from "@/assets/foto_01.jpg.asset.json";
import foto02 from "@/assets/foto_02.jpg.asset.json";
import foto04 from "@/assets/foto_04.jpg.asset.json";
import foto05 from "@/assets/foto_05.jpg.asset.json";
import foto06 from "@/assets/foto_06.jpg.asset.json";
import foto07 from "@/assets/foto_07.jpg.asset.json";
import foto10 from "@/assets/foto_10.jpg.asset.json";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Barbearia Los Cordeiros Lins | Cambuci, São Paulo" },
      {
        name: "description",
        content:
          "Corte, barba e cuidados masculinos na Av. Lins de Vasconcelos, Cambuci. Agende pelo WhatsApp.",
      },
      { property: "og:title", content: "Barbearia Los Cordeiros Lins" },
      {
        property: "og:description",
        content: "Corte, barba e cuidados masculinos no Cambuci, São Paulo. Agende pelo WhatsApp.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

const NAV = [
  { id: "inicio", label: "Início" },
  { id: "sobre", label: "Sobre" },
  { id: "servicos", label: "Serviços" },
  { id: "diferenciais", label: "Diferenciais" },
  { id: "galeria", label: "Galeria" },
  { id: "contato", label: "Contato" },
];

const SERVICES = [
  { name: "Corte", desc: "Do clássico ao degradê, alinhado ao seu estilo." },
  { name: "Barba", desc: "Desenho, acabamento e toalha quente." },
  { name: "Corte + Barba", desc: "O combo completo para sair renovado." },
  { name: "Sobrancelha", desc: "Limpeza e alinhamento discretos." },
  { name: "Depilação Nasal", desc: "Rápida, prática e higiênica." },
  { name: "Hidratação", desc: "Fios mais macios, nutridos e com brilho." },
  { name: "Selagem", desc: "Reduz o volume e controla o frizz." },
  { name: "Relaxamento", desc: "Cabelo mais solto e fácil de pentear." },
  { name: "Tintura de Barba", desc: "Cor uniforme e aspecto natural." },
  { name: "Coloração Capilar", desc: "Cobertura ou mudança de tom." },
];

const DIFFERENTIALS = [
  {
    icon: UserRound,
    title: "Atendimento personalizado",
    desc: "Cada corte começa ouvindo o que você quer.",
  },
  {
    icon: Armchair,
    title: "Ambiente confortável",
    desc: "Espaço moderno, limpo e pensado para você relaxar.",
  },
  {
    icon: Sparkles,
    title: "Cuidado completo",
    desc: "Do corte aos tratamentos capilares, tudo em um só lugar.",
  },
  {
    icon: CalendarCheck,
    title: "Agendamento fácil",
    desc: "Uma mensagem no WhatsApp e seu horário está garantido.",
  },
];

const GALLERY = [
  { src: foto10.url, alt: "Barbeiro fazendo a barba de um cliente", className: "sm:row-span-2" },
  { src: foto02.url, alt: "Corte degradê baixo finalizado", className: "" },
  { src: foto06.url, alt: "Corte com degradê e barba alinhada", className: "" },
  { src: foto04.url, alt: "Cliente com toalha quente durante a barba", className: "sm:col-span-2" },
  { src: foto05.url, alt: "Corte afro com acabamento na nuca", className: "" },
  { src: foto07.url, alt: "Corte infantil com degradê", className: "" },
  { src: foto01.url, alt: "Ambiente interno da barbearia com cadeiras", className: "sm:col-span-2 lg:col-span-1" },
];

function WhatsAppButton({
  children = "Agendar pelo WhatsApp",
  variant = "gold",
  className,
}: {
  children?: ReactNode;
  variant?: "gold" | "ghostGold";
  className?: string;
}) {
  return (
    <Button asChild variant={variant} size="xl" className={className}>
      <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer">
        <MessageCircle />
        {children}
      </a>
    </Button>
  );
}

function SectionHeading({ eyebrow, title, align = "left" }: { eyebrow: string; title: string; align?: "left" | "center" }) {
  return (
    <div className={align === "center" ? "mx-auto max-w-2xl text-center" : "max-w-2xl"}>
      <p className="eyebrow">{eyebrow}</p>
      <h2 className="mt-4 text-4xl leading-tight sm:text-5xl">{title}</h2>
      <span className={`gold-rule mt-6 ${align === "center" ? "mx-auto" : ""}`} />
    </div>
  );
}

function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
        scrolled || open ? "border-b border-border/60 bg-background/90 backdrop-blur-md" : "bg-transparent"
      }`}
    >
      <div className="mx-auto grid h-20 max-w-7xl grid-cols-[minmax(0,1fr)_auto] items-center gap-4 px-5 sm:px-8 lg:flex lg:justify-between">
        <a href="#inicio" className="flex min-w-0 flex-col leading-none" onClick={() => setOpen(false)}>
          <span className="truncate font-display text-2xl text-foreground">Los Cordeiros</span>
          <span className="mt-1 text-[0.62rem] font-semibold uppercase tracking-[0.38em] text-primary">
            Barbearia · Lins
          </span>
        </a>

        <nav className="hidden items-center gap-8 lg:flex" aria-label="Menu principal">
          {NAV.map((item) => (
            <a
              key={item.id}
              href={`#${item.id}`}
              className="text-xs font-semibold uppercase tracking-[0.2em] text-muted-foreground transition-colors hover:text-primary"
            >
              {item.label}
            </a>
          ))}
        </nav>

        <div className="flex shrink-0 items-center gap-3">
          <Button asChild variant="gold" size="sm" className="hidden h-10 rounded-sm px-5 sm:inline-flex">
            <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer">
              <MessageCircle />
              Agendar
            </a>
          </Button>
          <button
            type="button"
            className="grid h-11 w-11 place-items-center rounded-sm border border-border text-foreground lg:hidden"
            aria-label={open ? "Fechar menu" : "Abrir menu"}
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
          >
            {open ? <X className="size-5" /> : <Menu className="size-5" />}
          </button>
        </div>
      </div>

      <div
        className={`overflow-hidden transition-[max-height,opacity] duration-500 lg:hidden ${
          open ? "max-h-[32rem] opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <nav className="flex flex-col gap-1 px-5 pb-8 sm:px-8" aria-label="Menu mobile">
          {NAV.map((item) => (
            <a
              key={item.id}
              href={`#${item.id}`}
              onClick={() => setOpen(false)}
              className="border-b border-border/50 py-4 font-display text-2xl text-foreground transition-colors hover:text-primary"
            >
              {item.label}
            </a>
          ))}
          <WhatsAppButton className="mt-6 w-full" />
        </nav>
      </div>
    </header>
  );
}

function Hero() {
  return (
    <section id="inicio" className="relative flex min-h-[100svh] items-end overflow-hidden lg:items-center">
      <img
        src={foto10.url}
        alt="Barbeiro da Los Cordeiros fazendo a barba de um cliente"
        className="absolute inset-0 h-full w-full object-cover object-[70%_center]"
        fetchPriority="high"
      />
      <div className="bg-hero-overlay absolute inset-0" />

      <div className="relative mx-auto w-full max-w-7xl px-5 pb-20 pt-32 sm:px-8 lg:py-0">
        <div className="max-w-xl animate-fade-up">
          <p className="eyebrow">Barbearia · Cambuci, São Paulo</p>
          <h1 className="mt-6 text-5xl leading-[1.02] sm:text-6xl lg:text-7xl">
            Estilo afiado, <em className="text-primary">do seu jeito.</em>
          </h1>
          <p className="mt-6 max-w-md text-base leading-relaxed text-muted-foreground sm:text-lg">
            Corte, barba e cuidados masculinos com atenção a cada detalhe, em um ambiente moderno e
            acolhedor na Av. Lins de Vasconcelos.
          </p>
          <div className="mt-10 flex flex-col gap-3 sm:flex-row">
            <WhatsAppButton />
            <Button asChild variant="ghostGold" size="xl">
              <a href="#servicos">Ver serviços</a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}

function About() {
  return (
    <section id="sobre" className="py-24 sm:py-32">
      <div className="mx-auto grid max-w-7xl items-center gap-14 px-5 sm:px-8 lg:grid-cols-2 lg:gap-20">
        <div className="relative order-2 lg:order-1">
          <img
            src={foto01.url}
            alt="Interior da Barbearia Los Cordeiros com cadeiras de barbeiro"
            loading="lazy"
            className="aspect-[4/5] w-full rounded-sm object-cover shadow-photo"
          />
          <div className="absolute -bottom-6 -right-2 hidden border border-primary/40 bg-background px-6 py-5 sm:block lg:-right-8">
            <p className="font-display text-3xl text-primary">Desde 2022</p>
            <p className="mt-1 text-xs uppercase tracking-[0.25em] text-muted-foreground">Cambuci · SP</p>
          </div>
        </div>
        <div className="order-1 lg:order-2">
          <SectionHeading eyebrow="Sobre nós" title="Mais que um corte, um momento seu." />
          <div className="mt-8 space-y-5 text-base leading-relaxed text-muted-foreground sm:text-lg">
            <p>
              A Barbearia Los Cordeiros Lins nasceu para oferecer um atendimento de qualidade, em um
              espaço confortável onde você pode relaxar enquanto cuida do visual.
            </p>
            <p>
              Trabalhamos com cortes clássicos e modernos, barba e tratamentos capilares — sempre
              respeitando o estilo de cada cliente.
            </p>
          </div>
          <WhatsAppButton variant="ghostGold" className="mt-10">
            Fale com a gente
          </WhatsAppButton>
        </div>
      </div>
    </section>
  );
}

function Services() {
  return (
    <section id="servicos" className="border-y border-border/60 bg-card py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <div className="grid gap-8 lg:grid-cols-[minmax(0,1fr)_auto] lg:items-end">
          <SectionHeading eyebrow="Serviços" title="Tudo o que você precisa, em um só lugar." />
          <p className="max-w-sm text-muted-foreground">
            Consulte valores e horários disponíveis diretamente pelo WhatsApp.
          </p>
        </div>

        <ul className="mt-16 grid gap-px overflow-hidden border border-border/60 bg-border/60 sm:grid-cols-2 lg:grid-cols-5">
          {SERVICES.map((s, i) => (
            <li key={s.name} className="group flex flex-col bg-card p-7 transition-colors duration-300 hover:bg-muted">
              <span className="text-xs font-semibold tracking-[0.2em] text-primary/70">
                {String(i + 1).padStart(2, "0")}
              </span>
              <h3 className="mt-5 text-2xl leading-tight text-foreground transition-colors group-hover:text-primary">
                {s.name}
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{s.desc}</p>
            </li>
          ))}
        </ul>

        <div className="mt-14 flex justify-center">
          <WhatsAppButton>Consultar valores</WhatsAppButton>
        </div>
      </div>
    </section>
  );
}

function Differentials() {
  return (
    <section id="diferenciais" className="bg-olive-gradient py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <SectionHeading eyebrow="Diferenciais" title="Por que escolher a Los Cordeiros" align="center" />
        <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {DIFFERENTIALS.map(({ icon: Icon, title, desc }) => (
            <div key={title} className="border border-foreground/10 bg-background/30 p-8 backdrop-blur-sm">
              <div className="grid h-12 w-12 place-items-center rounded-full border border-primary/50 text-primary">
                <Icon className="size-5" />
              </div>
              <h3 className="mt-6 text-2xl leading-tight">{title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Gallery() {
  return (
    <section id="galeria" className="py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <div className="grid gap-8 lg:grid-cols-[minmax(0,1fr)_auto] lg:items-end">
          <SectionHeading eyebrow="Galeria" title="Nosso trabalho fala por si." />
          <p className="max-w-sm text-muted-foreground">Cortes reais, feitos na nossa cadeira.</p>
        </div>
        <div className="mt-16 grid auto-rows-[18rem] grid-cols-1 gap-3 sm:grid-cols-2 sm:auto-rows-[16rem] lg:grid-cols-4 lg:auto-rows-[18rem]">
          {GALLERY.map((g) => (
            <figure key={g.src} className={`group relative overflow-hidden bg-muted ${g.className}`}>
              <img
                src={g.src}
                alt={g.alt}
                loading="lazy"
                className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
              />
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}

function Contact() {
  return (
    <section id="contato" className="relative overflow-hidden border-t border-border/60 bg-card py-24 sm:py-32">
      <div className="mx-auto max-w-4xl px-5 text-center sm:px-8">
        <Scissors className="mx-auto size-8 text-primary" />
        <h2 className="mt-8 text-4xl leading-tight sm:text-6xl">
          Pronto para renovar o <em className="text-primary">visual?</em>
        </h2>
        <p className="mx-auto mt-6 max-w-xl text-base leading-relaxed text-muted-foreground sm:text-lg">
          Mande uma mensagem e agende seu horário. Respondemos pelo WhatsApp.
        </p>
        <div className="mt-10 flex justify-center">
          <WhatsAppButton>Chamar no WhatsApp</WhatsAppButton>
        </div>

        <div className="mt-20 grid gap-px border border-border/60 bg-border/60 text-left sm:grid-cols-3">
          <div className="bg-card p-7">
            <p className="eyebrow">Endereço</p>
            <a
              href="https://www.google.com/maps/search/?api=1&query=Av.+Lins+de+Vasconcelos,+864+-+Cambuci,+S%C3%A3o+Paulo+-+SP,+01538-000"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-4 flex gap-3 text-sm leading-relaxed text-foreground transition-colors hover:text-primary"
            >
              <MapPin className="mt-0.5 size-4 shrink-0 text-primary" />
              <span>
                Av. Lins de Vasconcelos, 864
                <br />
                Cambuci, São Paulo – SP
                <br />
                01538-000
              </span>
            </a>
          </div>
          <div className="bg-card p-7">
            <p className="eyebrow">Região atendida</p>
            <p className="mt-4 text-sm leading-relaxed text-foreground">
              Cambuci e região — São Paulo, SP.
            </p>
          </div>
          <div className="bg-card p-7">
            <p className="eyebrow">WhatsApp</p>
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-4 block text-sm text-foreground transition-colors hover:text-primary"
            >
              {WHATSAPP_DISPLAY}
            </a>
            <p className="mt-3 text-xs text-muted-foreground">
              [HORÁRIO DE FUNCIONAMENTO — A CONFIRMAR]
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="border-t border-border/60 py-10">
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 px-5 text-center sm:flex-row sm:px-8 sm:text-left">
        <div>
          <p className="font-display text-xl">Los Cordeiros</p>
          <p className="text-[0.62rem] font-semibold uppercase tracking-[0.38em] text-primary">Barbearia · Lins</p>
        </div>
        <p className="text-xs text-muted-foreground">
          © {new Date().getFullYear()} Barbearia Los Cordeiros Lins. Todos os direitos reservados.
        </p>
      </div>
    </footer>
  );
}

function FloatingActions() {
  const [showTop, setShowTop] = useState(false);

  useEffect(() => {
    const onScroll = () => setShowTop(window.scrollY > 600);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div className="fixed bottom-5 right-5 z-40 flex flex-col items-center gap-3 sm:bottom-8 sm:right-8">
      <button
        type="button"
        aria-label="Voltar ao topo"
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        className={`grid h-11 w-11 place-items-center rounded-full border border-border bg-background/90 text-foreground backdrop-blur transition-all duration-300 hover:border-primary hover:text-primary ${
          showTop ? "translate-y-0 opacity-100" : "pointer-events-none translate-y-3 opacity-0"
        }`}
      >
        <ArrowUp className="size-4" />
      </button>
      <a
        href={WHATSAPP_URL}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Conversar no WhatsApp"
        className="animate-wa-pulse grid h-14 w-14 place-items-center rounded-full bg-whatsapp text-whatsapp-foreground transition-transform duration-300 hover:scale-110"
      >
        <svg viewBox="0 0 24 24" className="size-7" fill="currentColor" aria-hidden="true">
          <path d="M17.47 14.38c-.3-.15-1.75-.86-2.02-.96-.27-.1-.47-.15-.67.15-.2.3-.77.96-.94 1.16-.17.2-.35.22-.64.07-.3-.15-1.25-.46-2.38-1.47-.88-.79-1.47-1.76-1.65-2.06-.17-.3-.02-.46.13-.6.13-.14.3-.35.45-.52.15-.17.2-.3.3-.5.1-.2.05-.37-.03-.52-.07-.15-.67-1.6-.92-2.2-.24-.58-.49-.5-.67-.5h-.57c-.2 0-.52.07-.8.37-.27.3-1.04 1.02-1.04 2.48s1.07 2.88 1.21 3.07c.15.2 2.1 3.2 5.08 4.49.71.31 1.26.49 1.7.63.71.22 1.36.19 1.87.12.57-.09 1.75-.72 2-1.41.25-.69.25-1.29.17-1.41-.07-.13-.27-.2-.57-.35zM12.05 21.5h-.01a9.4 9.4 0 0 1-4.8-1.32l-.34-.2-3.57.94.95-3.48-.22-.36a9.38 9.38 0 0 1-1.44-5c0-5.19 4.23-9.42 9.43-9.42 2.52 0 4.88.98 6.66 2.76a9.36 9.36 0 0 1 2.76 6.67c0 5.2-4.23 9.42-9.42 9.42zm8.02-17.44A11.27 11.27 0 0 0 12.05.75C5.8.75.72 5.83.72 12.08c0 2 .52 3.95 1.52 5.66L.62 23.25l5.65-1.48a11.3 11.3 0 0 0 5.78 1.5c6.25 0 11.33-5.08 11.33-11.33 0-3.03-1.18-5.87-3.32-8.01z" />
        </svg>
      </a>
    </div>
  );
}

function Index() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Header />
      <main>
        <Hero />
        <About />
        <Services />
        <Differentials />
        <Gallery />
        <Contact />
      </main>
      <Footer />
      <FloatingActions />
    </div>
  );
}
