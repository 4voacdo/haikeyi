// Import stylesheets
import './style.css';

// Write Javascript code!
const appDiv = document.getElementById('app');

Array.from(document.getElementsByClassName('menu-item')).forEach(
  (item, index) => {
    item.onmouseover = () => {
      menu.dataset.activeIndex = index;
    };
  }
);

