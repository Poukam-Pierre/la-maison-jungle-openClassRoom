// Utilisation des props qui est un aspet phare en React
// Ici il est question de construire la fonction portant des paramètres qui sont
// déjà déclarés en props dans le composant fils du composant parent où on souhaite
// l'importé
import sun from '../assets/sun.svg'
import water from '../assets/water.svg'

const quantityValue = {
    1: 'peu',
    2: 'moderement',
    3: 'beaucoup'
}

function CareScale({careType, scaleValue}){

    const range = [1, 2, 3]
    const scaleType = careType === 'light' ? (
                            <img src={sun} alt='sun-icon'/> 
                        ):(
                            <img src={water} alt='water-icon'/>
                        )

   
    return (
        <div onClick={() => alert(
            ` Cette plante requiert ${quantityValue[scaleValue]} ${careType === 'light' ? 'de lumiere' : "d'arrosage"}`
        )}>
            {range.map((rangeElem) =>
                scaleValue >= rangeElem ? <span key={rangeElem.toString()}>{scaleType} </span> : null
            )}
        </div>
    )
}

export default CareScale