import React from 'react';
import Button from "../components/Button";
import {useTelegram} from "../../hooks/useTelegram";

const Header = () => {
    const {tg, user, onClose} = useTelegram()



    return (
        <div className={'header'}>
            <Button onClik={onClose} >Закрити</Button>
            <span className={'username'}>
                { tg.initDataUnsafe?.user?.username }
            </span>
            
        </div>
    );
};

export default Header;