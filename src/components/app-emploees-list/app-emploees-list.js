import EmploeeItem from "../app-emploees-item/app-emploees-item";
import './app-emploees-list.css'

const EmploeesList = ({data, onDelete, onToggleProp}) => {
   
   const elements = data.map(item => {
      const {id, ...itemProps} = item;
      return <EmploeeItem 
               key={id} 
               {...itemProps}
               onDelete={() => onDelete(id)}
               onToggleProp={(e) => onToggleProp(id, e.currentTarget.getAttribute('data-prop'))}/>
   })
   
   return (
   <ul className="app-list list-group">
      {elements}
   </ul>
   )
}

export default EmploeesList;