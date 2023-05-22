import { Banner } from "../components/Banner";
import { HeroSlider } from "../components/HeroSlider";
import { Ruler } from "../components/Ruler";

const ITEMS = [
    {
        name: 'testing',
        description: 'this is a description'
    },
    {
        name: 'testing',
        description: 'this is a description'
    },
    {
        name: 'testing',
        description: 'this is a description'
    }
]
export default function Home() {
    return (
        <div className="px-4 py-6 flex flex-col gap-4">
            <HeroSlider />
            <Banner href="#"/>
            <Ruler title="Testing" items={ITEMS}/>
        </div>
    );
}
