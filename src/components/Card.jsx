
export default function Card(props) {
   const {onClose} = props;
   return (
      <div>
          {
         <button onClick={onClose}>X</button>}
         <h2>{props.name}</h2>
         <h2>{props.status}</h2>
         <h2>{props.species}</h2>
         <h2>{props.gender}</h2>
         <h2>{props.origin.name}</h2>
         <img src={props.image} alt={"Imagen de " + props.name}/> 
      </div>
   );
}
