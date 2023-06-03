import Card from './Card';

export default function Cards(props) {
   return (
   <div>
      {props.characters.map((element) => 
         <Card {...element} key={element.id} />
      )}
   </div>
   );
}
