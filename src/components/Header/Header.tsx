import React from 'react';
import { Header } from './HeaderStyle'

interface HeaderProps{
  name:String
}

function HeaderTab(props:HeaderProps) {
  return (
   	<Header>
				<h3>{props.name}</h3>
			</Header>
  )
}

export default HeaderTab
