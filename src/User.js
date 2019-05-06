import React from 'react'
import './styleUser.css'
import Select from 'react-select/lib/Creatable'

// components import
import {VkAuth} from './VkAuth'

// material-ui imports
import Button from '@material-ui/core/Button'
import Avatar from '@material-ui/core/Avatar'
import FilledInput from '@material-ui/core/FilledInput'
import Typography from '@material-ui/core/Typography'
import TextField from '@material-ui/core/TextField'


class User extends React.Component{
    constructor(props) {
        super(props)
        this.state = {
            langs: [],
            inputValue: ''
        }

        this.handleSave = this.handleSave.bind(this)
        this.handleInputChange = this.handleInputChange.bind(this)
        this.handleChange = this.handleChange.bind(this)

    }

    handleSave(){
        this.props.onSubmitUser({
            VKname: document.getElementsByClassName("user_inp__name")[0].firstElementChild.value,
            gitLogin: document.getElementsByClassName("user_inp__gitLogin")[0].firstElementChild.value,
            age: Number(document.getElementsByClassName("user_inp__age")[0].firstElementChild.value),
            address: document.getElementsByClassName("user_inp__address")[0].firstElementChild.value,
            qual: document.getElementsByClassName("user_inp__qual")[0].firstElementChild.value,
            phone: document.getElementsByClassName("user_inp__phone")[0].firstElementChild.value,
            mail: document.getElementsByClassName("user_inp__mail")[0].firstElementChild.value,
            langs: this.state.langs
        })
    }

    deleteUserInfo(){
        localStorage.removeItem("name");
        localStorage.removeItem("read");
        localStorage.removeItem("photo");
        localStorage.removeItem("age");
        localStorage.removeItem("address");
        localStorage.removeItem("qual");
        localStorage.removeItem("gitBio");
        localStorage.removeItem("gitRepos");
        localStorage.removeItem("gitLogin");


        document.getElementsByClassName("saveBtn")[0].disabled = true;
    }
    handleChange = (value, actionMeta) => {
        let val = value.map(arr=>arr['value'])
        this.setState({ langs: value });
    };
    handleInputChange = (inputValue) => {
        this.setState({ inputValue });
    };

    render() {
        let option = [];
        this.props.data.pLangs.forEach(lang=>{
            let obj = {};
            obj.value = lang.toLowerCase();
            obj.label = lang;
            option.push(obj);
            return option
        })

        if (this.props.vk !== undefined)
            return (
                // (this.props.vk.photo !== "" && this.props.vk.name !== "" ) ?
                    <div className={"container"}>
                        <div className={"container container-column"}>
                            <Avatar src={this.props.vk.photo} id={"avatar_big"} alt="user photo"/>
                            <div className={"container container-buttons"}>
                                <Button variant="contained" className={`saveBtn`} onClick={this.handleSave}>Сохранить</Button>
                                <Button variant="contained" onClick={this.deleteUserInfo}>Удалить портфолио</Button>
                            </div>
                        </div>
                        <div className={"item-7"}>

                            <form className={`container container-column`}>
                                <Typography variant="h6">О себе</Typography>  
                                <FilledInput type="text" className={`text user_inp__name`}  placeholder="имя" defaultValue={ this.props.vk.name }/>
                                <FilledInput className={`user_inp__gitLogin text`} type="text" placeholder="логин github" defaultValue={this.props.github.gitLogin}/>
                                    {/* <ButtonBase  onClick={this.props.gitFetchUser}>{(!this.props.github.read)?"Добавить":"Изменить"}</ButtonBase> */}
                                <FilledInput type="number" placeholder="возраст" className={`user_inp__age text`} defaultValue={this.props.data.age}/>
                                <FilledInput type="text" placeholder="адрес" className={`user_inp__address text`} defaultValue={this.props.data.address}/>
                                <FilledInput type="text" placeholder="квалификация" className={`user_inp__qual  text`} defaultValue={  this.props.data.qual }/>
                                
                                <Typography variant="h6">Профессиональная информация</Typography>
                                <Select isMulti onChange={this.handleChange} onInputChange={this.handleInputChange} value={this.state.langs} inputValue={this.state.inputValue} options={option}/>
                                <Typography variant="h6">Контакты</Typography>
                                <FilledInput type="phone" placeholder="телефон" className={`user_inp__phone text`} defaultValue={this.props.data.phone}/>
                                <FilledInput type="mail" placeholder="почта" className={`user_inp__mail text`} defaultValue={this.props.data.mail}/>
                            </form>
                        </div>
                       
                    </div>
                    // :
                    // <div>Зарегистрироваться</div>
            )
        else
            return null;
    }
}

export default User

