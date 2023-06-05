import "../styles/Search.css";

export default function SearchBar(props) {
  return (
    <div className="search_style">
      <input autoComplete="off" type="search" id="id" name="q" />
      <button onClick={props.onSearch} className="search_button">
        Buscar
      </button>
    </div>
  );
}
