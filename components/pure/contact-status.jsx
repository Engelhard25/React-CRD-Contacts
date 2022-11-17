import React, {useState} from 'react'
import PropTypes from 'prop-types'

function Status (estado) {
  
    const [Online, setOnline] = useState(true)
    const ChangeStatus = () => {
        if (Online === true) {
            setOnline(false);
        } else {
            setOnline(true);
        }
    }
  
  
    return (
    <div>
        <p>
            Online: { Online ? 'Contacto En Línea':'Contacto No Disponible' }
        </p>
        <button onClick={ChangeStatus}>
            Change State
        </button>
    </div>
  )
}

Status.propTypes = {
    estado: PropTypes.bool,
}

export default Status

