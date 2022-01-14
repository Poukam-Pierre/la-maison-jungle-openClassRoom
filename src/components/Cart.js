
import './styles/Cart.css'
import {useState, useEffect} from 'react'
import {FaTimes} from "react-icons/fa"

function Cart ({cart, updateCart}) {

    const [isOpen, setIsOpen]=useState(true)
    const items = Object.keys(cart)
    const total = items.reduce(
            (acc, items) => acc + cart[items].amount * cart[items].price,
            0
    )

useEffect(()=>{
        document.title = `LMJ: ${total} d'achat`
}, [total])

function changeIsHide(name, price){
    const currentPlantIsHide = cart.find((plant) => plant.name === name)
    if(currentPlantIsHide){
        const cartFilterPlantIsHide = cart.filter(
            (plant) => plant.name !== name
        ) 
        updateCart([
            ...cartFilterPlantIsHide,
            {name, price, amount: 0 , isHide: true}
        ])
    }
    
}

    return isOpen ? (

        <div className="lmj-cart">
            <button 
                onClick={()=>setIsOpen(false)} 
                className='lmj-cart-toggle-button'
            >
                Fermer
            </button>
            {cart.length > 0 ? (
                <div>
                    <h2>Panier</h2>
                    <ul>
                        {cart.map(({name, price, amount, isHide}, index) =>(
                         isHide === false ? (
                            <div 
                                key={`${name}-${index}`} 
                                className='lmj-cart-list-article'
                            >
                                {name} {price}€ x {amount}
                                <button 
                                className='lmj-cart-cancel-article'
                                onClick={()=>changeIsHide(name, price)}
                                >
                                    <FaTimes />
                                </button>
                            </div>) : null
                        ))} 
                        
                    </ul>
                    
                    <h3>Total : {total}€</h3>
                    <button onClick={()=>updateCart([])}>Vider le panier</button>
                </div>
            ) : (
                <div> Votre panier est vide</div>
            )}
        </div>
    ):(
        <div className='lmj-cart-closed'>
            <button 
                onClick={()=>setIsOpen(true)} 
                className='lmj-cart-toggle-button'
            >
                Ouvrir le panier
            </button>
        </div>
    )
}

export default Cart