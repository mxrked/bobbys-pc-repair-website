/**
 *
 *  This is the CDN for the bgs
 *
 */

import { CDNBGReturn } from "./CDNReturns";

const INDEX_TOP_BG = CDNBGReturn("index", "index-top-bg", "webp");
const INDEX_ABOUT_BG = CDNBGReturn("index", "index-about-bg", "webp");
const INDEX_CONTACT_BG = CDNBGReturn("index", "index-contact-bg", "webp");
const CLEANING = CDNBGReturn("index", "cleaning", "webp");
const UPGRADES = CDNBGReturn("index", "upgrades", "webp");
const HAPPY_MAN = CDNBGReturn("index", "happy-man", "webp");

const ABOUT_SERVICES_TOP_BG = CDNBGReturn(
  "about-services",
  "about-services-top-bg",
  "webp"
);
const ABOUT_BG_TOP_BG = CDNBGReturn("about-services", "about-bg", "webp");
const BUILD_YOUR_DREAM_PC = CDNBGReturn(
  "about-services",
  "build-your-dream-pc",
  "webp"
);
const CLEANING_AND_REPAIRS = CDNBGReturn(
  "about-services",
  "cleaning-and-repairs",
  "webp"
);
const UPGRADE_YOUR_SPECS = CDNBGReturn(
  "about-services",
  "upgrade-your-specs",
  "webp"
);

const PORTFOLIO_TOP_BG = CDNBGReturn("portfolio", "portfolio-top-bg", "webp");

const BLOG_NEWS_TOP_BG = CDNBGReturn("blog-news", "blog-news-top-bg", "webp");

const CONTACT_TOP_BG = CDNBGReturn("contact", "contact-top-bg", "webp");

export {
  INDEX_ABOUT_BG,
  INDEX_CONTACT_BG,
  INDEX_TOP_BG,
  CLEANING,
  HAPPY_MAN,
  UPGRADES,
};
export {
  ABOUT_BG_TOP_BG,
  ABOUT_SERVICES_TOP_BG,
  BUILD_YOUR_DREAM_PC,
  CLEANING_AND_REPAIRS,
  UPGRADE_YOUR_SPECS,
};
export { PORTFOLIO_TOP_BG };
export { BLOG_NEWS_TOP_BG };
export { CONTACT_TOP_BG };
