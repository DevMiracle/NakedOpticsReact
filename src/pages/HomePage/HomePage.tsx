import './HomePage.scss'
import './components/SubMenu/SubMenu'
import './components/HeroPart/HeroPart'
import { HeroPart } from './components/HeroPart/HeroPart';
import { SubMenu } from './components/SubMenu/SubMenu'
import { CardPart } from './components/CardPart/CardPart';
import { DoubleProductHero } from './components/DoubleProductHero/DoubleProductHero';
import { StoriesPart } from './components/StoriesPart/StoriesPart';
import { SolutionPart } from './components/SolutionPart/SolutionPart';

export const HomePage = () => {
    return (
        <>
        <SubMenu />
        <HeroPart />
        <CardPart />
        <DoubleProductHero />
        <StoriesPart />
        <SolutionPart />
        </>
    );
}

export default HomePage