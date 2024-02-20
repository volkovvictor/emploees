import HeaderInfo from './components/app-info/app-info';
import SearchInput from './components/app-search/app-search';
import FilterItems from './components/app-filters/app-filters';
import EmploeesList from './components/app-emploees-list/app-emploees-list';
import AddNewEmploeeForm from './components/app-new-emploee-add-form/app-new-emploee-add-form';

import './App.css';

function App() {
   return (
      <div className="App">
         <HeaderInfo/>
         <div className="filter-panel">
            <SearchInput/>
            <FilterItems/>
         </div>
         <EmploeesList/>
         <AddNewEmploeeForm/>
      </div>
   );
}

export default App;
