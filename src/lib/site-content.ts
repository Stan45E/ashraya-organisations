export type HeroContent = {
  eyebrowKannada: string;
  eyebrowEnglish: string;
  titleKannada: string;
  titleEnglish: string;
  descriptionKannada: string;
  descriptionEnglish: string;
  primaryButtonKannada: string;
  primaryButtonEnglish: string;
  secondaryButtonKannada: string;
  secondaryButtonEnglish: string;
  imageUrl: string;
};

export type OrganisationCard = {
  slug: string;
  titleKannada: string;
  titleEnglish: string;
  descriptionKannada: string;
  descriptionEnglish: string;
};

export type OrganisationPageContent = {
  titleKannada: string;
  titleEnglish: string;
  subtitleKannada: string;
  subtitleEnglish: string;
  bodyKannada: string;
  bodyEnglish: string;
  highlightKannada: string;
  highlightEnglish: string;
  imageUrl: string;
};

export type NewsItem = {
  titleKannada: string;
  titleEnglish: string;
  descriptionKannada: string;
  descriptionEnglish: string;
};

export type GalleryItem = {
  imageUrl: string;
  titleKannada: string;
  titleEnglish: string;
};

export type VideoItem = {
  titleKannada: string;
  titleEnglish: string;
  youtubeUrl: string;
};

export type ContactContent = {
  titleKannada: string;
  titleEnglish: string;
  email: string;
  phone: string;
  locationKannada: string;
  locationEnglish: string;
  mapEmbedUrl: string;
};

export type FooterContent = {
  titleKannada: string;
  titleEnglish: string;
  lineKannada: string;
  lineEnglish: string;
};

export type SiteContent = {
  hero: HeroContent;
  organisations: Record<string, OrganisationCard>;
  organisationPages: Record<string, OrganisationPageContent>;
  news: NewsItem[];
  gallery: GalleryItem[];
  videos: VideoItem[];
  contact: ContactContent;
  footer: FooterContent;
};

const STORAGE_KEY = "ashraya-site-content-v1";

const defaultSiteContent: SiteContent = {
  hero: {
    eyebrowKannada: "ಧರ್ಮ • ಶಿಕ್ಷಣ • ಸಮಾಜ ಸೇವೆ",
    eyebrowEnglish: "Religion • Education • Social Service",
    titleKannada: "ಆಶ್ರಯ ಸಂಸ್ಥೆಗಳು",
    titleEnglish: "Ashraya Organisations",
    descriptionKannada:
      "ತತ್ವಶಾಸ್ತ್ರ, ಮಕ್ಕಳ ಶಿಕ್ಷಣ, ಅನ್ನದಾನ, ದೇವಸ್ಥಾನ ಸೇವೆ ಮತ್ತು ಸಮಾಜ ಸುಧಾರಣೆಗೆ ನಾವು ನಿರಂತರವಾಗಿ ಕಾರ್ಯನಿರ್ವಹಿಸುತ್ತಿದ್ದೇವೆ.",
    descriptionEnglish:
      "We serve society through spiritual guidance, education, annadana, temple service, and compassionate care for the needy.",
    primaryButtonKannada: "ದಾನ ಮಾಡಿ",
    primaryButtonEnglish: "Donate Now",
    secondaryButtonKannada: "ನಮ್ಮ ಕೆಲಸದ ಬಗ್ಗೆ",
    secondaryButtonEnglish: "Our Work",
    imageUrl: "/images/hero.jpg",
  },
  organisations: {
    "ashraya-ashrama": {
      slug: "ashraya-ashrama",
      titleKannada: "ಆಶ್ರಯ ಆಶ್ರಮ",
      titleEnglish: "Ashraya Ashrama",
      descriptionKannada: "ಅನ್ನದಾನ, ಸಂಸ್ಕೃತ ಶಿಕ್ಷಣ ಮತ್ತು ಸಮಾಜ ಸೇವೆಗೆ ಸಮರ್ಪಿತವಾಗಿರುವ ಕೇಂದ್ರ.",
      descriptionEnglish: "A centre devoted to annadana, Sanskrit education, and social service.",
    },
    "srimata-tv": {
      slug: "srimata-tv",
      titleKannada: "ಶ್ರೀಮಾತಾ ಟಿವಿ",
      titleEnglish: "Srimata TV",
      descriptionKannada: "ಭಕ್ತಿಪ್ರವಚನಗಳು, ಧಾರ್ಮಿಕ ವೀಡಿಯೊಗಳು ಮತ್ತು ಸಮುದಾಯ ಸಂಪರ್ಕ.",
      descriptionEnglish: "Devotional broadcasts, spiritual content, and community connection.",
    },
    "ashraya-tv": {
      slug: "ashraya-tv",
      titleKannada: "ಆಶ್ರಯ ಟಿವಿ",
      titleEnglish: "Ashraya TV",
      descriptionKannada: "ಮಠದ ಕಾರ್ಯಕ್ರಮಗಳು, ಸಂದರ್ಶನಗಳು ಮತ್ತು ಸಾಂಸ್ಕೃತಿಕ ಆಚರಣೆಗಳು.",
      descriptionEnglish: "Temple programs, interviews, and cultural events.",
    },
    "virupaksha-mata": {
      slug: "virupaksha-mata",
      titleKannada: "ಶ್ರೀ ವಿರೂಪಾಕ್ಷ ದೇವರ ಮಠ",
      titleEnglish: "Shri Virupaksha Devara Mata",
      descriptionKannada: "ದೇವಾಲಯ ಸೇವೆ, ಪೂಜೆ ಮತ್ತು ಆತ್ಮಿಕ ಮಾರ್ಗದರ್ಶನ.",
      descriptionEnglish: "Temple service, pooja, and spiritual guidance.",
    },
  },
  organisationPages: {
    "ashraya-ashrama": {
      titleKannada: "ಆಶ್ರಯ ಆಶ್ರಮ",
      titleEnglish: "Ashraya Ashrama",
      subtitleKannada: "ಅನ್ನದಾನ, ಸಂಸ್ಕೃತ ಶಿಕ್ಷಣ, ವಚನವೇದ ಮತ್ತು ಸಮುದಾಯ ಸೇವೆಗೆ ಸಮರ್ಪಿತವಾದ ಕೇಂದ್ರ.",
      subtitleEnglish: "Ashraya Ashrama is dedicated to annadana, Sanskrit education, Vachana Veda, and community welfare.",
      bodyKannada:
        "ಆಶ್ರಯ ಆಶ್ರಮವು ಅನ್ನದಾನ, ಸಂಸ್ಕೃತ ಶಿಕ್ಷಣ, ಆತ್ಮಿಕ ಅಭಿವೃದ್ಧಿ ಮತ್ತು ಸಮಾಜದ ಪರವಾಗಿರುವ ಸೇವೆಗಾಗಿ ಕಾರ್ಯನಿರ್ವಹಿಸುತ್ತದೆ. ನಿಮ್ಮ ದಾನವು ಈ ಮಹತ್ಕಾರ್ಯಕ್ಕೆ ನೇರ ಬೆಂಬಲ ನೀಡುತ್ತದೆ.",
      bodyEnglish:
        "Ashraya Ashrama serves through annadana, Sanskrit education, spiritual development, and community welfare. Your donation directly supports this mission.",
      highlightKannada: "ನಿಮ್ಮ ದಾನವು ಅನ್ನದಾನ, ವಿದ್ಯಾರ್ಥಿಗಳಿಗೆ ಸಹಾಯ ಮತ್ತು ಚಟುವಟಿಕೆಗಳಿಗೆ ನೇರ ಬೆಂಬಲ ನೀಡುತ್ತದೆ.",
      highlightEnglish: "Your donation provides direct support for food distribution, education, and service activities.",
      imageUrl: "/images/annadana.jpg",
    },
    "srimata-tv": {
      titleKannada: "ಶ್ರೀಮಾತಾ ಟಿವಿ",
      titleEnglish: "Srimata TV",
      subtitleKannada: "ಆತ್ಮಿಕ ವೀಡಿಯೊಗಳು, ಪ್ರವಚನಗಳು, ಲೈವ್ ಪ್ರಸಾರ ಮತ್ತು ಧಾರ್ಮಿಕ ಕಾರ್ಯಕ್ರಮಗಳು.",
      subtitleEnglish: "Spiritual videos, pravachanas, live broadcasts, and religious programs.",
      bodyKannada:
        "ಶ್ರೀಮಾತಾ ಟಿವಿಯು ಧರ್ಮೋಪದೇಶ, ಭಕ್ತಿಪ್ರವಚನಗಳು ಮತ್ತು ಲೈವ್ ಪ್ರಸಾರಗಳ ಮೂಲಕ ಸಮಾಜದ ಆತ್ಮಿಕ ಜೀವನವನ್ನು ಬೆಳೆಸುತ್ತದೆ.",
      bodyEnglish:
        "Srimata TV nurtures spiritual life through discourses, devotional broadcasts, and live programs.",
      highlightKannada: "ದಾನವು ಈ ಮಾಧ್ಯಮ ಸೇವೆಯನ್ನು ಬೆಳೆಸಲು ಮತ್ತು ಹೆಚ್ಚಿನ ಜನರಿಗೆ ತಲುಪಿಸಲು ಸಹಾಯ ಮಾಡುತ್ತದೆ.",
      highlightEnglish: "Your support helps expand this media service and reach more people.",
      imageUrl: "/images/tv.jpg",
    },
    "ashraya-tv": {
      titleKannada: "ಆಶ್ರಯ ಟಿವಿ",
      titleEnglish: "Ashraya TV",
      subtitleKannada: "ಧಾರ್ಮಿಕ ಕಾರ್ಯಕ್ರಮಗಳು, ಮಂದಿರ ವಾಚನಗಳು, ಸಂದರ್ಶನಗಳು ಮತ್ತು ಸಂಸ್ಕೃತಿಕ ಕಾರ್ಯಕ್ರಮಗಳು.",
      subtitleEnglish: "Devotional programs, temple coverage, interviews, and cultural events.",
      bodyKannada:
        "ಆಶ್ರಯ ಟಿವಿಯು ಧಾರ್ಮಿಕ ಕಾರ್ಯಕ್ರಮಗಳನ್ನು大众ರಿಗೆ ತಲುಪಿಸುವುದರ ಮೂಲಕ ಸಮಾಜದಲ್ಲಿ ಆತ್ಮೀಯತೆಯನ್ನು ಬೆಳೆಸುತ್ತದೆ.",
      bodyEnglish:
        "Ashraya TV brings devotional programs and cultural content to a wider audience.",
      highlightKannada: "ನಿಮ್ಮ ಸಹಕಾರದಿಂದ ಧಾರ್ಮಿಕ ಮಾತುಕತೆಗಳು ಮತ್ತು ಸೇವಾ ಕಾರ್ಯಕ್ರಮಗಳ ವ್ಯಾಪ್ತಿ ಹೆಚ್ಚಾಗುತ್ತದೆ.",
      highlightEnglish: "Your support helps grow these spiritual and service-oriented programs.",
      imageUrl: "/images/tv.jpg",
    },
    "virupaksha-mata": {
      titleKannada: "ಶ್ರೀ ವಿರೂಪಾಕ್ಷ ದೇವರ ಮಠ",
      titleEnglish: "Shri Virupaksha Devara Mata",
      subtitleKannada: "ಪೂಜೆ, ಹೋಮ, ಧಾರ್ಮಿಕ ಮಾರ್ಗದರ್ಶನ ಮತ್ತು ದೇವಾಲಯ ಸೇವೆ.",
      subtitleEnglish: "Pooja, homa, spiritual guidance, and temple service.",
      bodyKannada:
        "ಈ ಮಠವು ಪೂಜೆ, ಹೋಮ, ವೇದೋಚ್ಚಾರಣೆ ಮತ್ತು ಧಾರ್ಮಿಕ ಮಾರ್ಗದರ್ಶನದ ಮೂಲಕ ಭಕ್ತರ ಆತ್ಮೀಕರಣೆಗೆ ಸಹಾಯ ಮಾಡುತ್ತದೆ.",
      bodyEnglish:
        "This shrine offers pooja, homa, rituals, and spiritual guidance for devotees and the wider community.",
      highlightKannada: "ದಾನದ ಮೂಲಕ ಈ ಧಾರ್ಮಿಕ ಆಚರಣೆಗಳು ಹಾಗೂ ಸೇವಾ ಕಾರ್ಯಕ್ರಮಗಳು ಸುಸ್ಥಿರವಾಗುತ್ತವೆ.",
      highlightEnglish: "Your donation helps sustain these spiritual rituals and service activities.",
      imageUrl: "/images/temple.jpg",
    },
  },
  news: [
    {
      titleKannada: "ಸಮುದಾಯ ಅನ್ನದಾನ ಕಾರ್ಯಕ್ರಮವು ಮುಂದುವರಿಯುತ್ತಿದೆ",
      titleEnglish: "Community annadana service continues to grow",
      descriptionKannada: "ಸ್ವಯಂಸೇವಕರು ಮತ್ತು ದಾನಿಗಳ ಸಹಕಾರದಿಂದ ಅನ್ನದಾನದ ಕಾರ್ಯಕ್ಕೆ ಹೆಚ್ಚಿನ ಬೆಂಬಲ ಸಿಗುತ್ತಿದೆ.",
      descriptionEnglish: "Support for the annadana initiative is growing through volunteers and generous donors.",
    },
    {
      titleKannada: "ಶಿಕ್ಷಣ ಮತ್ತು ಧರ್ಮೋಪದೇಶ ಕಾರ್ಯಕ್ರಮಗಳನ್ನು ತಯಾರಿಸಲಾಗುತ್ತಿದೆ",
      titleEnglish: "Education and spiritual outreach programs are being planned",
      descriptionKannada: "ಮೌಲ್ಯಾಧಾರಿತ ಶಿಕ್ಷಣ ಮತ್ತು ಧರ್ಮೋಪದೇಶದ ಕಾರ್ಯಕಲಾಪಗಳು ಮುಂದಿನ ತಿಂಗಳಿನಿಂದ ಆರಂಭವಾಗಲಿವೆ.",
      descriptionEnglish: "Value-based learning and spiritual guidance sessions will begin next month.",
    },
    {
      titleKannada: "ದಾನದ ಕೊಡುಗೆಗಳು ಆಧ್ಯಾತ್ಮಿಕ ಸೇವೆಗೆ ಸಹಾಯ ಮಾಡುತ್ತವೆ",
      titleEnglish: "Generous donations strengthen spiritual service",
      descriptionKannada: "ನಿಮ್ಮ ದಾನವು ಮಠದ ಸೇವೆ, ಅಡುಗೆ, ಶಿಕ್ಷಣ ಮತ್ತು ಸಮಾಜೋಪಕಾರ ಕಾರ್ಯಗಳಿಗೆ ನೇರಬೆಳಕನ್ನು ನೀಡುತ್ತಿದೆ.",
      descriptionEnglish: "Your donation directly supports temple service, food distribution, education, and welfare programs.",
    },
  ],
  gallery: [
    { imageUrl: "/images/annadana.jpg", titleKannada: "ಅನ್ನದಾನ ಸೇವೆ", titleEnglish: "Annadana Service" },
    { imageUrl: "/images/temple.jpg", titleKannada: "ದೇವಾಲಯ ಸೇವೆ", titleEnglish: "Temple Service" },
    { imageUrl: "/images/tv.jpg", titleKannada: "ಮಾಧ್ಯಮ ಸೇವೆ", titleEnglish: "Media Service" },
  ],
  videos: [
    {
      titleKannada: "ಆಶ್ರಯ ಕಾರ್ಯಗಳ ಕುರಿತು",
      titleEnglish: "About Ashraya work",
      youtubeUrl: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
    },
  ],
  contact: {
    titleKannada: "ಸಂಪರ್ಕಿಸಿ",
    titleEnglish: "Contact Us",
    email: "contact@ashrayaorganisations.org",
    phone: "+91 98765 43210",
    locationKannada: "ಕರ್ನಾಟಕ, ಭಾರತ",
    locationEnglish: "Karnataka, India",
    mapEmbedUrl: "https://www.google.com/maps?q=Karnataka,India&output=embed",
  },
  footer: {
    titleKannada: "ಆಶ್ರಯ ಸಂಸ್ಥೆಗಳು",
    titleEnglish: "Ashraya Organisations",
    lineKannada: "ಧರ್ಮ, ಶಿಕ್ಷಣ ಮತ್ತು ಸಮಾಜ ಸೇವೆಯನ್ನು ಮುಂದುವರೆಸುವ ನಮ್ಮ ಪ್ರಯತ್ನಗಳಿಗೆ ದಾನದ ಸಹಕಾರ ಅಗತ್ಯವಾಗಿದೆ.",
    lineEnglish: "Our work in dharma, education, and social service continues with the support of generous donors.",
  },
};

export function getDefaultSiteContent(): SiteContent {
  return JSON.parse(JSON.stringify(defaultSiteContent));
}

export function loadSiteContent(): SiteContent {
  if (typeof window === "undefined") {
    return getDefaultSiteContent();
  }

  try {
    const raw = window.localStorage.getItem(STORAGE_KEY);
    if (!raw) {
      return getDefaultSiteContent();
    }

    const parsed = JSON.parse(raw) as Partial<SiteContent>;
    return {
      hero: { ...defaultSiteContent.hero, ...parsed.hero },
      organisations: { ...defaultSiteContent.organisations, ...parsed.organisations },
      organisationPages: { ...defaultSiteContent.organisationPages, ...parsed.organisationPages },
      news: parsed.news?.length ? parsed.news : defaultSiteContent.news,
      gallery: parsed.gallery?.length ? parsed.gallery : defaultSiteContent.gallery,
      videos: parsed.videos?.length ? parsed.videos : defaultSiteContent.videos,
      contact: { ...defaultSiteContent.contact, ...parsed.contact },
      footer: { ...defaultSiteContent.footer, ...parsed.footer },
    };
  } catch {
    return getDefaultSiteContent();
  }
}

export function saveSiteContent(content: SiteContent) {
  if (typeof window === "undefined") {
    return;
  }

  window.localStorage.setItem(STORAGE_KEY, JSON.stringify(content));
}
