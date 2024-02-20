import EmploeeItem from "../app-emploees-item/app-emploees-item";
import './app-emploees-list.css'

const EmploeesList = () => {
   return (
   <ul className="app-list list-group">
      <EmploeeItem/>
      <EmploeeItem/>
      <EmploeeItem/>
   </ul>
   )
}

export default EmploeesList;