import '../styles/Search.css'

export default function SearchBar(props) {
   return (
      <div className="search_style">
         <input autocomplete="off" type="search" id="id" name="q" />
         <button onClick={props.onSearch} className='search_button'>Agregar</button>
      </div>
   );
}
