import HeaderInfo from './components/app-info/app-info';
import SearchInput from './components/app-search/app-search';
import FilterItems from './components/app-filters/app-filters';
import EmploeesList from './components/app-emploees-list/app-emploees-list';
import AddNewEmploeeForm from './components/app-new-emploee-add-form/app-new-emploee-add-form';

import './App.css';

function App() {

   const data = [
      {
         name: 'John S.',
         salary: 1000,
         increase: false,
      },
      {
         name: 'Nick L.',
         salary: 800,
         increase: true,
      },
      {
         name: 'Jack K.',
         salary: 5000,
         increase: false,
      }
   ]

   return (
      <div className="App">
         <HeaderInfo/>
         <div className="filter-panel">
            <SearchInput/>
            <FilterItems/>
         </div>
         <EmploeesList data={data}/>
         <AddNewEmploeeForm/>
      </div>
   );
}

export default App;
