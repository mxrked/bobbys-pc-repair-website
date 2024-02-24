// React/Next Imports
import { useEffect } from "react";
import { useRouter } from "next/router";
import fs from "fs";
import path from "path";

// Library Imports

// Data/Functions/Images Imports

// Component Imports
import { PageHead } from "@/assets/components/global/All/PageHead";

// Style Imports
import "../assets/styles/modules/Index/Index.module.css";

export async function getServerSideProps() {
  const PAGE_HEAD_DATA_DIRECTORY = "public/data/Page_Head_Data/";
  const PORTFOLIO_DATA_DIRECTORY = "public/data/Portfolio_Data/";

  const UTF8 = "utf-8";

  const PH_ICONS_DATA_FP = path.join(
    process.cwd(),
    PAGE_HEAD_DATA_DIRECTORY,
    "PH_Icons.json"
  );
  const PH_INDEX_DATA_FP = path.join(
    process.cwd(),
    PAGE_HEAD_DATA_DIRECTORY,
    "PH_Index.json"
  );
  const PORTFOLIO_DATA_FP = path.join(
    process.cwd(),
    PORTFOLIO_DATA_DIRECTORY,
    "Portfolio.json"
  );

  const PH_ICONS_DATA_FC = fs.readFileSync(PH_ICONS_DATA_FP, UTF8);
  const PH_INDEX_DATA_FC = fs.readFileSync(PH_INDEX_DATA_FP, UTF8);
  const PORTFOLIO_DATA_FC = fs.readFileSync(PORTFOLIO_DATA_FP, UTF8);

  let PH_ICONS_DATA = undefined;
  let PH_INDEX_DATA = undefined;
  let PORTFOLIO_DATA = undefined;

  try {
    PH_ICONS_DATA = JSON.parse(PH_ICONS_DATA_FC);
    PH_INDEX_DATA = JSON.parse(PH_INDEX_DATA_FC);
    PORTFOLIO_DATA = JSON.parse(PORTFOLIO_DATA_FC);

    return {
      props: {
        PH_ICONS_DATA,
        PH_INDEX_DATA,
        PORTFOLIO_DATA,
      },
    };
  } catch (error) {
    console.error("Error while fetching data: " + error);

    return {
      props: {
        PH_ICONS_DATA: null,
        PH_INDEX_DATA: null,
        PORTFOLIO_DATA: null,
      },
    };
  }
}

export default function Home({ PH_ICONS_DATA, PH_INDEX_DATA, PORTFOLIO_DATA }) {
  const router = useRouter();

  return (
    <div id="PAGE">
      <PageHead page_head_data={PH_INDEX_DATA} icons_data={PH_ICONS_DATA} />

      <div id="PAGE_CNT">Home</div>
    </div>
  );
}
