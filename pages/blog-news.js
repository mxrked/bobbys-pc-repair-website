// React/Next Imports
import { useEffect } from "react";
import { useRouter } from "next/router";
import fs from "fs";
import path from "path";

// Library Imports

// Data/Functions/Images Imports

// Component Imports

// Style Imports
import "../assets/styles/modules/BlogNews/BlogNews.module.css";

export async function getServerSideProps() {
  const PAGE_HEAD_DATA_DIRECTORY = "public/data/Page_Head_Data/";

  const UTF8 = "utf-8";

  const PH_ICONS_DATA_FP = path.join(
    process.cwd(),
    PAGE_HEAD_DATA_DIRECTORY,
    "PH_Icons.json"
  );
  const PH_BLOG_NEWS_DATA_FP = path.join(
    process.cwd(),
    PAGE_HEAD_DATA_DIRECTORY,
    "PH_BlogNews.json"
  );

  const PH_ICONS_DATA_FC = fs.readFileSync(PH_ICONS_DATA_FP, UTF8);
  const PH_BLOG_NEWS_DATA_FC = fs.readFileSync(PH_BLOG_NEWS_DATA_FP, UTF8);

  let PH_ICONS_DATA = undefined;
  let PH_BLOG_NEWS_DATA = undefined;

  try {
    PH_ICONS_DATA = JSON.parse(PH_ICONS_DATA_FC);
    PH_BLOG_NEWS_DATA = JSON.parse(PH_BLOG_NEWS_DATA_FC);

    return {
      props: {
        PH_ICONS_DATA,
        PH_BLOG_NEWS_DATA,
      },
    };
  } catch (error) {
    console.error("Error while fetching data: " + error);

    return {
      props: {
        PH_ICONS_DATA: null,
        PH_BLOG_NEWS_DATA: null,
      },
    };
  }
}

export default function BlogNews({ PH_ICONS_DATA, PH_BLOG_NEWS_DATA }) {
  const router = useRouter();

  return (
    <div id="PAGE">
      <div id="PAGE_CNT">Blog/News</div>
    </div>
  );
}
