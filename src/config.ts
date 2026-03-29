export const SITE = {
  website: "https://devosfera.vercel.app/",
  author: "Geienr Lara",
  profile: "https://github.com/0xdres",
  desc: "Un blog para compartir mis pensamientos y proyectos mientras aprendo cosas nuevas.",
  title: "Devosfera",
  ogImage: "devosfera-og.webp", // ubicado en la carpeta public
  lightAndDarkMode: true,
  postPerIndex: 6,
  postPerPage: 8,
  scheduledPostMargin: 15 * 60 * 1000, // 15 minutes
  showArchives: true,
  showGalleries: true,
  showGalleriesInIndex: true, // Show galleries in the general paginated list
  showBackButton: true, // show back button in post detail
  backdropEffects: {
    cursorGlow: true, // seguimiento de cursor con halo suave
    grain: true, // capa de ruido visual de fondo
  },
  editPost: {
    enabled: true,
    text: "Editar este post",
    url: "https://github.com/0xdres/astro-devosfera/edit/main/",
  },
  dynamicOgImage: true,
  dir: "ltr", // "rtl" | "auto"
  lang: "es", // html lang code. Set this empty and default will be "en"
  timezone: "America/Bogota", // Default global timezone (IANA format) https://en.wikipedia.org/wiki/List_of_tz_database_time_zones
  introAudio: {
    enabled: false, // desactivar intro audio (sin reproducción)
    src: "/audio/intro-web.mp3",
    label: "INTRO.MP3",
    duration: 30,
  },
} as const;
