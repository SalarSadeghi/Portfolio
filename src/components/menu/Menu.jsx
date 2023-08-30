import ListMenuItem from "../listMenoItem/ListMenuItem"
import "./menu.scss";

const LIST_ITEMS = ["Home", "Portfolio", "Works", "Testimonials", "Contact"];

function Menu({ menuOpen, setMenuOpen }) {
  return (
    <div className={menuOpen ? "menu active" : "menu"}>
      <ul>
        {LIST_ITEMS.map((item, index) => (
          <ListMenuItem item={item} key={index} setMenuOpen={setMenuOpen} />
        ))}
      </ul>
    </div>
  );
}

export default Menu;
