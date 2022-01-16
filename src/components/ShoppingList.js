// List of plants 

import {plantList} from '../datas/plantList'
import './styles/ShoppingList.css'
import PlantItem from './plantItem'
import Categories from './Categories';
import {useState} from 'react'

function ShoppingList ({cart, updateCart}) {
    const categories = plantList.reduce((acc, plant) => acc.includes(plant.category) ? acc : acc.concat(plant.category), [])

    const [activeCategory, setActiveCategory] = useState([])

    function addToCart(name, price){
        const currentPlantSaved = cart.find((plant) => plant.name === name)
        if(currentPlantSaved) {
            if(currentPlantSaved.isHide === false){
                const cartFilteredCurrentPlant = cart.filter(
                    (plant) => plant.name !== name
                )
                updateCart([
                    ...cartFilteredCurrentPlant,
                    {name, price, amount: currentPlantSaved.amount + 1, isHide: false}
                ])
            }else{
                const cartFilterIsHideCurrentPlant = cart.filter(
                    (plant) => plant.isHide !== true
                )
                updateCart([
                    ...cartFilterIsHideCurrentPlant,
                    {name, price, amount: 1, isHide: false}                ])
            }
        }else{
            updateCart([...cart, {name, price, amount: 1, isHide: false}])
        }
    }

    return (
        <div className='lmj-shopping-list'>
            <Categories setActiveCategory={setActiveCategory} categories={categories}/>
            <ul className='lmj-plant-list'>
                {plantList.map(({id, cover, name, water, light, price,category}) => (
                    activeCategory.length === 0 || activeCategory.find((cat) => cat.value === category) ? (
                    <div key={id}>
                        <PlantItem name={name} cover={cover} water={water} light={light} price={price}/>
                        <button onClick={()=> addToCart(name, price)}>Ajouter</button>
                    </div>
                    ):null
                ))}
            </ul>
        </div>
    )
}

export default ShoppingList