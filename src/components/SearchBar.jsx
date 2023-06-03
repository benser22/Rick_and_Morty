export default function SearchBar(props) {
   return (
      <div>
         <input type="search" id="id" name="q" />
         <button onClick={props.onSearch}>Agregar</button>
      </div>
   );
}
