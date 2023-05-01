import './HomePage.scss'
import './components/SubMenu/SubMenu'
import './components/HeroPart/HeroPart'
import { HeroPart } from './components/HeroPart/HeroPart';
import { SubMenu } from './components/SubMenu/SubMenu'
import { CardPart } from './components/CardPart/CardPart';
import { DoubleProductHero } from './components/DoubleProductHero/DoubleProductHero';

export const HomePage = () => {
    return (
        <>
        <SubMenu />
        <HeroPart />
        <CardPart />
        <DoubleProductHero />
        </>
    );
}

export default HomePage