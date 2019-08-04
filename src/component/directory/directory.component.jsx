import React from 'react'
import  sections  from './directory.data.js'
import MenuItem from '../menu-item/menu-item.component'
import './directory.style.scss'
class Directory extends React.Component {
    constructor() {
        super()
        this.state = {sections:sections}
    }
    render() {
        return (
            <div className = 'directory-menu'>
                {this.state.sections.map(
                    ({ id, imageUrl, title, size }) => {
                        return (<MenuItem key={id} imageUrl={imageUrl} title={title} size = {size}/>)
                    })
                }
            </div>

        )
    }
}
export default Directory