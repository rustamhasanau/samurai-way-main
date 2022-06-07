import React from "react";
import s from './Dialogs.module.css'
import {NavLink} from "react-router-dom";

const DialogItem = (props: any) => {
    let path = '/dialogs/' + props.id
    return (
        <div className={s.dialog + ' ' + s.active}>
            <NavLink to={path}>{props.name}</NavLink>
        </div>
    )
}
const Message = (props: any) => {
    return (
        <div className='message'>{props.mess}</div>
    )
}

export const Dialogs = () => {
   let dialogsData = [
       {id: 1, name: 'Rustam'},
       {id: 2, name: 'Rustamm'},
       {id: 3, name: 'Rustammm'},
       {id: 4, name: 'Rustammmm'},
   ]

    let messagesData = [
        {id: 1, mess: 'Hi'},
        {id: 2, mess: 'Hi'},
        {id: 3, mess: 'Hi'},
    ]
    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                <DialogItem name='Rustam' id='1'/>
                <DialogItem name='Rustamm' id='2'/>
                <DialogItem name='Rustammm' id='3'/>
                <DialogItem name='Rustammmm' id='4'/>

            </div>
            <div className='messages'>
                <Message mess='Hi'/>
                <Message mess='How are you'/>
                <Message mess='It is so good'/>


            </div>
        </div>


    )
}