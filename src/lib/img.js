// Hero images ship as two WebP files: <name>-sm.webp (phones) and <name>-lg.webp (desktop).
// Pass the path WITHOUT an extension, e.g. heroVariants('/images/aboutus').
export const heroVariants = (base) => ({ sm: `${base}-sm.webp`, lg: `${base}-lg.webp` });
