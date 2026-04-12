import { motion } from "framer-motion";

interface PageHeroProps {
  headline: string;
  subline?: string;
  breadcrumb?: string;
  compact?: boolean;
  backgroundImage?: string;
}

const PageHero = ({ headline, subline, breadcrumb, compact, backgroundImage }: PageHeroProps) => (
  <section className={`relative overflow-hidden ${compact ? "pt-32 pb-16" : "pt-36 pb-20"}`}>
    {/* Background image */}
    {backgroundImage && (
      <div className="absolute inset-0 z-0">
        <img
          src={backgroundImage}
          alt=""
          className="w-full h-full object-cover"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-background/80" />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/60 to-transparent" />
      </div>
    )}
    {!backgroundImage && <div className="absolute inset-0 grid-bg" />}

    <div className="container relative z-10">
      {breadcrumb && (
        <p className="font-mono text-[10px] tracking-widest text-muted-foreground mb-4 uppercase">
          {breadcrumb}
        </p>
      )}
      <motion.h1
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="font-display text-4xl md:text-6xl lg:text-7xl text-foreground"
      >
        {headline}
      </motion.h1>
      {subline && (
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="mt-4 font-body text-lg text-muted-foreground max-w-2xl"
        >
          {subline}
        </motion.p>
      )}
    </div>
  </section>
);

export default PageHero;
