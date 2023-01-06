// import next script
import Script from "next/script";
import Seo from "~/components/Seo";

type SeoDataManager = {
  title: string,
}

const seoData: SeoDataManager = {
  title: "Home"
}
export default function Head() {
  return (
    <>
      <Seo seoData={seoData}  />
    </>
  );
}
