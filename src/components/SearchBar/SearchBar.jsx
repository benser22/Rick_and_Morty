import "../SearchBar/Search.css";
import ramtitle from '../../assets/images/title.webp'

console.log(ramtitle);
export default function SearchBar(props) {
  return (
    <div className="search_style">
       <img
          className="imageBar"
          src={ramtitle}
          alt={"Title Rick and Morty"}
        />
      <input autoComplete="off" type="search" id="id" name="q" />
      <button onClick={props.onSearch} className="mybutton">
        Buscar
      </button>
    </div>
  );
}
