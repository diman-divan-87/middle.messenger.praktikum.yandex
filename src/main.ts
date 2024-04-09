import Handlebars from 'handlebars';
import * as Components from './components';
import * as Modules from './modules';
import * as Pages from './pages';
import './style.css'

const pages = {
  'login': [ Pages.LoginPage],
  'signing': [ Pages.SigningPage],
  'nav': [ Pages.NavigatePage ],
  'chats': [ Pages.ChatsPage ],
  'profileView': [ Pages.ProfileView ],
  'profileChange': [ Pages.ProfileChange ],
  'profileResetPass': [ Pages.ProfileResetPass ],
  'notPage404': [ Pages.NotPage404 ],
  'notPage500': [ Pages.NotPage500 ],
};

Object.entries(Components).forEach(([ name, component ]) => {
  Handlebars.registerPartial(name, component);
});

Object.entries(Modules).forEach(([ name, component ]) => {
  Handlebars.registerPartial(name, component);
});

function navigate(page: string) {
  //@ts-ignore
  const [ source, context ] = pages[page];
  const container = document.getElementById('app')!;
  container.innerHTML = Handlebars.compile(source)(context);
}

document.addEventListener('DOMContentLoaded', () => navigate('nav'));

document.addEventListener('click', e => {
  //@ts-ignore
  const page = e.target.getAttribute('page');
  if (page) {
    navigate(page);

    e.preventDefault();
    e.stopImmediatePropagation();
  }
});



