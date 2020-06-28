import React from 'react'
import { UserContext, ChannelContext } from '../App'

const ComponentC = () => {
    return (
        <div>
            <UserContext.Consumer>
            {
                    user => {
                        return (
                            <ChannelContext.Consumer>
                                {
                                    channel => {
                                    return <div>Older Steps to use Context :
                                        User Context value : {user}, Channel Context Value : {channel}</div>
                                    }
                                }
                            </ChannelContext.Consumer>
                        )
                    }
                }
            </UserContext.Consumer>
        </div>
    )
}

export default ComponentC