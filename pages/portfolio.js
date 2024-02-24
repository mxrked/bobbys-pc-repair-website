// React/Next Imports
import { useEffect } from "react";
import { useRouter } from "next/router";
import fs from "fs";
import path from "path";

// Library Imports

// Data/Functions/Images Imports

// Component Imports

// Style Imports
import "../assets/styles/modules/Portfolio/Portfolio.module.css";

export async function getServerSideProps() {
  const PAGE_HEAD_DATA_DIRECTORY = "public/data/Page_Head_Data/";

  const UTF8 = "utf-8";

  const PH_ICONS_DATA_FP = path.join(
    process.cwd(),
    PAGE_HEAD_DATA_DIRECTORY,
    "PH_Icons.json"
  );
  const PH_PORTFOLIO_DATA_FP = path.join(
    process.cwd(),
    PAGE_HEAD_DATA_DIRECTORY,
    "PH_Portfolio.json"
  );

  const PH_ICONS_DATA_FC = fs.readFileSync(PH_ICONS_DATA_FP, UTF8);
  const PH_PORTFOLIO_DATA_FC = fs.readFileSync(PH_PORTFOLIO_DATA_FP, UTF8);

  let PH_ICONS_DATA = undefined;
  let PH_PORTFOLIO_DATA = undefined;

  try {
    PH_ICONS_DATA = JSON.parse(PH_ICONS_DATA_FC);
    PH_PORTFOLIO_DATA = JSON.parse(PH_PORTFOLIO_DATA_FC);

    return {
      props: {
        PH_ICONS_DATA,
        PH_PORTFOLIO_DATA,
      },
    };
  } catch (error) {
    console.error("Error while fetching data: " + error);

    return {
      props: {
        PH_ICONS_DATA: null,
        PH_PORTFOLIO_DATA: null,
      },
    };
  }
}

export default function Portfolio({ PH_ICONS_DATA, PH_PORTFOLIO_DATA }) {
  const router = useRouter();

  return (
    <div id="PAGE">
      <div id="PAGE_CNT">Portfolio</div>
    </div>
  );
}