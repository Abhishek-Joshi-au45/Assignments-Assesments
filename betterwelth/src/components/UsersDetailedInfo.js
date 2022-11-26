import React from 'react'

function UsersDetailedInfo(props) {
  const { userInfo } = props
  return (
    <div>
      <h4>{userInfo.login}</h4>
      <div>id: {userInfo.id}</div>
      <div>url: {userInfo.url}</div>
      <div>node_id: {userInfo.node_id}</div>
      <div>avatar_url: {userInfo.avatar_url}</div>
    </div>
  )
}

export default UsersDetailedInfo

