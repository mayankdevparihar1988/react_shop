import { map } from "lodash-es"
import CategotyItem from "../category-item/category-item.component"
import './directory.style.scss'

const Directory = ({categories}) => {


    return (
        <div className='directory-container'>
        {
          map(categories, (category)=> (
            <CategotyItem key = {category.id} category = {category}></CategotyItem>
          ))
         }

    </div >
    )
}

export default Directory;