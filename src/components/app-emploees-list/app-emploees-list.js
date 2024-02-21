import EmploeeItem from "../app-emploees-item/app-emploees-item";
import './app-emploees-list.css'

const EmploeesList = ({data}) => {
   
   const elements = data.map(item => {
      return <EmploeeItem {...item}/>
   })
   
   return (
   <ul className="app-list list-group">
      {elements}
   </ul>
   )
}

export default EmploeesList;