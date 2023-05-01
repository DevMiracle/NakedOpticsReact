import './HomePage.scss'
import './components/SubMenu/SubMenu'
import './components/HeroPart/HeroPart'
import { HeroPart } from './components/HeroPart/HeroPart';
import { SubMenu } from './components/SubMenu/SubMenu'

export const HomePage = () => {
    return (
        <>
        <SubMenu />
        <HeroPart />
        </>
    );
}

export default HomePage