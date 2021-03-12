import React from 'react';
import ContextMenuItem from './ContextMenuItem';
import { useHistory } from 'react-router-dom';
import { dom } from '@fortawesome/fontawesome-svg-core';
import { library } from '@fortawesome/fontawesome-svg-core'
import { fab  } from '@fortawesome/free-brands-svg-icons'
import { far  } from '@fortawesome/free-regular-svg-icons'
import { fas  } from '@fortawesome/free-solid-svg-icons'
import Fundo from './Fundo';

library.add(
  fab,
  fas,
  far,
)
dom.watch();

const MenuZ = (props) => {
  const [active, setActive] = React.useState(false),
    [position, setPosition] = React.useState({ x: 0, y: 0 });
  const [menuRadius, setMenuRadius] = React.useState(100),
    [itemRadius, setItemRadius] = React.useState(25);
  const [contextMenuItems, setContextMenuItems] = React.useState([]);

  React.useEffect(() => {
    setTimeout(() => {
      const centerX = window.innerWidth / 2 - menuRadius / 4,
        centerY = window.innerHeight / 3 - menuRadius / 4;
      setPosition({ x: centerX, y: centerY });
      setActive(true);
    }, 500);
  }, []);
  React.useEffect(() => {
    setContextMenuItems([
      { name: 'Timeline', icon: 'far fa-clock fa-3x' },
      { name: 'Sobre', icon: 'fas fa-user-circle fa-3x' },
      { name: 'Contato', icon: 'fab fa-whatsapp fa-3x' },
      { name: 'Projetos', icon: 'fab fa-fort-awesome-alt fa-3x' },
      { name: 'Linkedin', icon: 'fab fa-linkedin-in fa-2x' },
      { name: 'Github', icon: 'fab fa-github-alt fa-3x' },
    ]);
  }, []);
  const history = useHistory();

  const rotasClick = [
    '/timeline',
    '/sobre',
    '/contato',
    '/projetos',
    'Linkedin',
    'Github',
  ];

  React.useEffect(() => {
    const vaiparala = (caminho) => {
      switch (caminho) {
        case 'Linkedin':
          return (window.location.href = 'https://www.linkedin.com/feed/');
        case 'Github':
          return (window.location.href = 'https://github.com/');
        default:
          break
          //history.push(`${caminho}`);
      }
    };
    const handleClick = (e) => {
      const items = document.getElementsByClassName('context-menu-item');

      if (items && items.length > 0) {
        let count = 0;
        for (let i = 0; i < items.length; i++) {
          if (items[i].contains(e.target)) {
            vaiparala(rotasClick[i]);
            count++;
          }
        }
        if (count === 0) {
          setActive(false);
        }
      } else {
        setActive(false);
      }
    };
    document.addEventListener('click', handleClick);
    return () => {
      document.removeEventListener('click', handleClick);
    };
  }, []);
  const handleOnContextMenu = (e) => {
    e.preventDefault();
    setActive(true);
    // Added some barriers for the menu position so it doesnt extend off the screen
    const x = Math.min(
        Math.max(menuRadius + 10, e.clientX - itemRadius),
        window.innerWidth - menuRadius * 1.5 - 10
      ),
      y = Math.min(
        Math.max(menuRadius + 10, e.clientY - itemRadius),
        window.innerHeight - menuRadius * 1.5 - 10
      );
    setPosition({ x, y });
  };
  const getContextMenuItems = () => {
    const getOffset = (index) => {
      const step = (2 * Math.PI) / contextMenuItems.length,
        angle = index * step;
      const x = Math.round(
          menuRadius +
            menuRadius * Math.cos(angle) -
            itemRadius -
            (menuRadius - itemRadius)
        ),
        y = Math.round(
          menuRadius +
            menuRadius * Math.sin(angle) -
            itemRadius -
            (menuRadius - itemRadius)
        );
      return { x, y };
    };
    return contextMenuItems.map((item, index) => {
      return React.createElement(ContextMenuItem, {
        key: item.name,
        index: index,
        name: item.name,
        icon: item.icon,
        active: active,
        position: position,
        offset: getOffset(index),
      });
    });
  };

  return React.createElement(
    'div',
    { id: 'app', onContextMenu: handleOnContextMenu },
    <Fundo/>,
    getContextMenuItems(),
      React.createElement(
        'div',
        { id: 'instructions' },
        React.createElement(
          'h1',
          null,
          'Aperte o botão direito para abrir a navegação, e o esquerdo para fechar'
        )
      )
    
  );
};

export default MenuZ;
