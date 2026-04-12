import { Link } from "react-router-dom";
import { motion } from "framer-motion";

interface CTABannerProps {
  headline: string;
  buttonText: string;
  buttonLink?: string;
  subline?: string;
}

const CTABanner = ({ headline, buttonText, buttonLink = "/waitlist", subline }: CTABannerProps) => (
  <motion.section
    initial={{ opacity: 0 }}
    whileInView={{ opacity: 1 }}
    viewport={{ once: true }}
    className="py-20 md:py-28 bg-gradient-to-b from-primary/5 to-transparent"
  >
    <div className="container text-center">
      <h2 className="font-display text-3xl md:text-5xl text-foreground mb-6">{headline}</h2>
      <Link
        to={buttonLink}
        className="btn-shimmer inline-block font-mono text-xs tracking-widest uppercase text-primary-foreground px-8 py-4 font-medium"
      >
        {buttonText}
      </Link>
      {subline && (
        <p className="mt-4 font-mono text-[10px] text-muted-foreground">{subline}</p>
      )}
    </div>
  </motion.section>
);

export default CTABanner;
