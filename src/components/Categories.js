import './styles/Categories.css'
import Select from 'react-select'

function Categories({setActiveCategory, categories}){

    return (
        <div className='lmj-categories'>
            <Select
            className='lmj-categories-select'
                placeholder="Choisissez la catégorie"
                isMulti 
                options = {categories.map(
                    (cat) => ({value : cat, label : cat})
                )}
                onChange={(e)=>setActiveCategory(e)}
            />
        </div>
    )
}

export default Categories