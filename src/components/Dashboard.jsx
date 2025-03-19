import React from 'react'
import Admin from './Admin';
import User from './User';

function Dashboard(props) {
  return (
    <div>
        <header>
            {
                props.role === 'admin' ? <Admin/>:null
            }
        </header>
    </div>
  )
}

export default Dashboard