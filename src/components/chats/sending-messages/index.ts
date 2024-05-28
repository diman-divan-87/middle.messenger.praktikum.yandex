import Handlebars from 'handlebars';
import './sending-messages.css';
export { default as SendingMessage } from './sending-messages.hbs?raw';

import addFile from '../../../../src/assets/icons/add-file.svg'
import sendMessage from '../../../../src/assets/icons/send-message.svg'

Handlebars.registerHelper("add_file", function () {
    return addFile;
});

Handlebars.registerHelper("send_message", function () {
    return sendMessage;
});

