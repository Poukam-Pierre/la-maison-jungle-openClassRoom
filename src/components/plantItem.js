
import CareScale from './CareScale';
import './styles/PlantItem.css'

function PlantItem ({ name, cover, light, water, price }){
    return (
        <li className='lmj-plant-item' onClick={()=>handleClick(name)}>
            <span className='lmj-plant-item-price'>{price}€</span>
            <img src={cover} alt={`${name} cover`} className='lmj-plant-item-cover'/>
            {name}
            <div>
                <CareScale careType='water' scaleValue={water} />
				<CareScale careType='light' scaleValue={light} />
            </div>
        </li>
    )

}

function handleClick(plantName){
    alert(`La plante choisie est ${plantName}! Tres bon choix`)
}
export default PlantItem