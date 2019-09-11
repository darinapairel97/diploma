import React, { Component } from 'react'

class Login extends Component {
    render(){
        return(
            !this.props.vk.read?
                <DialogWindow childElm={<VkAuth VKOnAuth={this.props.VKOnAuth}/>} btnText={"Создать портфолио"}/>
        )
    }
}
export default Login