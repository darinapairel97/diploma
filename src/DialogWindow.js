import React from 'react'

// material-ui imports
import Button from '@material-ui/core/Button'
import Close from '@material-ui/icons/Close'
import { withStyles } from '@material-ui/core/styles';
import theme from './theme.js'

class DialogWindow extends React.Component{
    btnOpen(){
        document.getElementsByClassName("dialog__animation")[0].showModal()
    }
    btnClose(){
        document.getElementsByClassName("dialog__animation")[0].close()
    }
    render(){
        const {childElm, btnText, styleForButton} = this.props
        return(
            <div>
                <Button ref={'dialog__open'}  onClick={this.btnOpen} className={`dialog__open ${styleForButton}`}>{btnText}</Button>
                <dialog ref={'dialog'} className={`dialog__animation`}>
                    <Button ref={'dialog__close'} onClick={this.btnClose} className={`dialog__close`}><Close/></Button>
                    {childElm}
                </dialog>
            </div>
        )
    }
}
export default withStyles(theme)(DialogWindow)