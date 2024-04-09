export {default as ChatsList} from './chats-list.hbs?raw';
import './chats-list.css';

import Handlebars from 'handlebars';
import cat1 from './../../../assets/01.jpg'
import cat2 from '../../../assets/02.jpg'

Handlebars.registerHelper('itemPeople', () => {
    return [
        {
            name: 'Вася',
            date: '11:11:12',
            lastMessage: 'Хорошо',
            img: cat1,
            notifications: '4'
        },{
            name: 'Петя',
            date: '13:21:04',
            lastMessage: 'Пока',
            img: cat2,
            notifications: '2'
        }
    ]
})
