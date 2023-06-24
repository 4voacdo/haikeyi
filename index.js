// Import stylesheets
import './style.css';

// Write Javascript code!
const appDiv = document.getElementById('app');

Array.from(document.getElementsByClassName('nav-link-section-item')).forEach(
  (item, index) => {
    item.onmouseover = () => {
      nav.dataset.activeIndex = index;
    };
  }
);
