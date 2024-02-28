import { Component } from 'react';

import HeaderInfo from './components/app-info/app-info';
import SearchInput from './components/app-search/app-search';
import FilterItems from './components/app-filters/app-filters';
import EmploeesList from './components/app-emploees-list/app-emploees-list';
import AddNewEmploeeForm from './components/app-new-emploee-add-form/app-new-emploee-add-form';

import './App.css';

class App extends Component{
   constructor(props) {
      super(props)
      this.state = {
         data: [
            {
               id: 1,
               name: 'John S.',
               salary: 1000,
               increase: false,
               rise: true
            },
            {
               id: 2,
               name: 'Nick L.',
               salary: 800,
               increase: true,
               rise: false
            },
            {
               id: 3,
               name: 'Jack K.',
               salary: 5000,
               increase: false,
               rise: false
            }
         ],
         term: '',
         filter: 'all'
      };

      this.maxId = 4;
   }

   deleteItem = (id) => {
      this.setState(({data}) => {
         return {
            data: data.filter(item => item.id !== id)
         }
      })
   }

   addItem = (item) => {
      this.setState(({data}) => {
         const newItem = {
            id: this.state.maxId,
            name: item.name,
            salary: item.salary,
            increase: false
         }
         return {
            data: [...data, newItem],
            maxId: this.maxId++,
         }
      })
   }

   onToggleProp = (id, prop) => {
      this.setState(({data}) => ({
         data: data.map(item => {
            if (item.id === id) {
               return {...item, [prop]: !item[prop]}
            }

            return item;
         })
      }))
   }

   searchEmp = (items, term) => {
      if (term.length === 0) {
         return items;
      }

      return items.filter(item => {
         return item.name.indexOf(term) > -1
      })
   }

   filterEmp = (items, filter) => {
      switch(filter) {
         case 'rise':
            return items.filter(item => item.rise)
         case 'moreThen1000':
            return items.filter(item => item.salary > 1000)
         default :
            return items
      }
   }

   onSearchUpdate = (term) => {
      this.setState({term})
   }

   onFilterUpdate = (filter) => {
      this.setState({filter})
   }

   render() {
      const {data, term, filter} = this.state;
      const employees = data.length;
      const increased = data.filter(item => item.increase).length;
      const visibleData = this.filterEmp(this.searchEmp(data, term), filter)
      return (
         <div className="App">
            <HeaderInfo employees={employees} increased={increased}/>
            <div className="filter-panel">
               <SearchInput onSearchUpdate={this.onSearchUpdate}/>
               <FilterItems filter={this.state.filter} onFilterUpdate={this.onFilterUpdate}/>
            </div>
            <EmploeesList 
            data={visibleData} 
            onDelete={this.deleteItem}
            onToggleProp={this.onToggleProp}/>
            <AddNewEmploeeForm id={this.maxId} onAddItem={this.addItem}/>
         </div>
      );
   }
}

export default App;
