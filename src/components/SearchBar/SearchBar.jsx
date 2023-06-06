import "../SearchBar/Search.css";

export default function SearchBar(props) {
  return (
    <div className="search_style">
      <input autoComplete="off" type="search" id="id" name="q" />
      <button onClick={props.onSearch} className="mybutton">
        Buscar
      </button>
    </div>
  );
}
