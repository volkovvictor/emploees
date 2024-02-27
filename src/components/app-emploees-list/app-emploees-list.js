import EmploeeItem from "../app-emploees-item/app-emploees-item";
import './app-emploees-list.css'

const EmploeesList = ({data, onDelete}) => {
   
   const elements = data.map(item => {
      const {id, ...itemProps} = item;
      return <EmploeeItem 
               key={id} 
               {...itemProps}
               onDelete={() => onDelete(id)}/>
   })
   
   return (
   <ul className="app-list list-group">
      {elements}
   </ul>
   )
}

export default EmploeesList;