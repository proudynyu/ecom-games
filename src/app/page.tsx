import { Banner } from "./components/Banner";
import { HeroSlider } from "./components/HeroSlider";

export default function Home() {
    return (
        <div className="px-4 py-6 flex flex-col gap-4">
            <HeroSlider />
            <Banner bannerType="half" href={"#"} />
        </div>
    );
}
