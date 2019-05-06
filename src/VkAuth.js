import React from 'react'
import VK, { Auth } from "react-vk";


export default (props)=>{
        return (
            <VK apiId={6772116}>
                <Auth options={{
                    onAuth: (data)=>props.VKOnAuth(data)
                }}/>
            </VK>
        )
}
