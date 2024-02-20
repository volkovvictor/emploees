import './app-new-emploee-add-form.css'

const AddNewEmploeeForm = () => {
   return (
      <div className="add-emlpoee">
         <h3>Добавьте нового сотрудника</h3>
         <form action="#" className="add-form d-flex">
            <input 
               type="text"
               className="form-control new-post-label"
               placeholder="Как его зовут?" />
            <input 
            type="text"
            className="form-control new-post-label"
            placeholder="З/П в $" />
            <button 
               type="submit" 
               className="btn btn-outline-light">Добавить</button>
         </form>
      </div>
   )
}

export default AddNewEmploeeForm;