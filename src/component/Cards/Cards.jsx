
import {Card} from "../Card/Card"
import './Cards.css'

export const Cards =({cards})=>{
    return (
<div className="cards">
    {cards.map((item)=> (
        <Card {...item} key= {item.name} />
    ))}
</div>
    );
}