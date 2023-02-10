import { Logo } from '../Logo/Logo';
import { Search } from '../Search/Search';
import './Header.css';

export const Header =({setSarch})=> {
    return (
    <div className = 'header'>
        <div className='contain'>
            <div className='header__wrap'>
                <div className='header__left'>
                <Logo/>
                <Search setSarch={setSarch}/>
                </div>
                <div>Войти</div>
            </div>
            </div> 
    </div>);
}