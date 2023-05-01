import './HomePage.scss'
import './components/SubMenu/SubMenu'
import './components/HeroPart/HeroPart'
import { HeroPart } from './components/HeroPart/HeroPart';
import { SubMenu } from './components/SubMenu/SubMenu'
import { CardPart } from './components/CardPart/CardPart';
import { DoubleProductHero } from './components/DoubleProductHero/DoubleProductHero';
import { StoriesPart } from './components/StoriesPart/StoriesPart';
import { SolutionPart } from './components/SolutionPart/SolutionPart';
import { CategoryPart } from './components/CategoryPart/CategoryPart';
import { FeaturedOn } from './components/FeaturedOn/FeaturedOn';

export const HomePage = () => {
    return (
        <>
        <SubMenu />
        <HeroPart />
        <CardPart />
        <DoubleProductHero />
        <StoriesPart />
        <SolutionPart />
        <CategoryPart />
        <FeaturedOn />
        </>
    );
}

export default HomePage