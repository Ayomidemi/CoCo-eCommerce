import React from 'react'
import PropTypes from 'prop-types'

const Element = props => {

    document.title = 'CoCo - ' + props.title

    React.useEffect(() => {
        window.scrollTo(0,0)
    }, [])

    return (
        console.log(props.children),
        <div className='element'>
            {props.children}
        </div>
    )
}

Element.propTypes = {
    title: PropTypes.string.isRequired
}

export default Element