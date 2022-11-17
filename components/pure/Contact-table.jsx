import React from 'react'
import PropTypes from 'prop-types'
import { Contact } from '../../models/Contact'
import '../../styles/task.scss'

function ContactTable ({ Contact , completed, deleted }) {

    function ContactStatusIcon(){
        if(Contact.online) {
            return ( <i onClick={() => completed(Contact)} className='bi-toggle-on task-action' style={{color: 'green'}}></i>)
          } else {
            return (<i onClick={() => completed(Contact)} className='bi-toggle-off task-action' style={{color: 'red'}}></i>)
          }
    }


  return (
    <tr>
        <td className='aling-middle'>
            <span>{Contact.name}</span>
        </td>
        <td className='aling-middle'>
            <span>{Contact.phone}</span>
        </td>
        <td className='aling-middle'>
            <span>{Contact.online ? 'Online' : 'Offline'}</span>
        </td>
        <td className='aling-middle'>
            {ContactStatusIcon()}
            <i onClick={()=> deleted(Contact)} className='bi-trash task-action' style={{color: 'tomato'}}></i>
        </td>
    </tr>
  )
}

ContactTable.propTypes = {
    Contact: PropTypes.instanceOf(Contact).isRequired,
    completed: PropTypes.func.isRequired,
    deleted: PropTypes.func.isRequired
}

export default ContactTable

