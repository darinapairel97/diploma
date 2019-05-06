import React from "react"

// component imports
import DialogWindow from "./DialogWindow"
import User from "./User"
import VkAuth from './VkAuth'

// material-ui imports
import { withStyles } from '@material-ui/core/styles';
import Avatar from '@material-ui/core/Avatar';
import Typography from '@material-ui/core/Typography';
import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
import Chip from '@material-ui/core/Chip';
import Paper from '@material-ui/core/Paper';
import theme from './theme.js'


class Portfolio extends React.Component{
    constructor(props){
        super(props)
        /*
        this.state = {
            data:{fetching: false, selVal: "1", name: "Дарина Яковлевна Паирель", age: 21, address: "Спб, Россия", qual: "студент", bio: "Интересуюсь веб разработкой"},
            vk: {name: '', photo: '', read:false},
            github: {
                gitLogin: '',
                gitBio: '',
                read: false,
                gitRepos: []
            }
        }

        const localData = JSON.parse(localStorage.getItem(this.props.current_uid))
        if (localData !== null) {
            this.name = localData.name
            this.photo = localData.photo
            this.vkread = localData.read
            this.age = localData.age
            this.address = localData.address
            this.qual = localData.qual
            this.gitLogin = localData.gitLogin
            this.gitBio = localData.gitBio
            this.gitRepos = localData.gitRepos
            console.log("localData ia not null", localData)
        }else {
            console.log(localData)
        }*/

        this.renderPortfolio = this.renderPortfolio.bind(this)
    }

    githubOnChange = (e) => {
        const newLogin = e.target.value
        this.setState((state)=>{
            let newGithub = state.github
            newGithub.gitLogin = newLogin
            return {...state, gitLogin: newGithub.gitLogin}
        })

    }

    renderRepos(repos){
        if (Array.isArray(repos)){
            return (
                <Typography className="repos" variant={"body2"}>
                    {repos.map((repo, i) => {
                        return <Link className={`${this.props.classes.flexCol} ${this.props.classes.flex}`} key={i} href={repo.html_url}>{repo.name}</Link>
                    })}
                </Typography>
            )}
    }


    renderPortfolio(){

        const Lend = () => {
            return(
            <div className={`${this.props.classes.grid}`}>
              <Grid className={this.props.classes.gridContent} container spacing={16}  direction="column" justify="space-between">
                  <Grid className={"home"} id="home" container spacing={16}  direction="row" justify="space-between">
                      <Grid item xs={6}>
                            <Typography component={'span'} className={this.props.classes.portfolio_home} variant="h6">Hello</Typography>
                                <Typography component={'span'} className={`${this.props.classes.portfolio_home} home__info`} variant="body2">
                                    {`Я ${this.props.vk.name || ''},
                                    Мой возраст ${this.props.data.age} ;
                                    Место проживания: ${ this.props.data.address || ''};
                                    Моя квалификация: ${ this.props.data.qual || ''}`}
                                </Typography>
                      </Grid>
                      <Grid item xs={6} className={this.props.classes.gridAvatar}>
                          {this.props.vk.read?
                                  <Avatar src={this.props.vk.photo} alt="your photo" className={this.props.classes.bigAvatar}/>
                                  :
                                  <img src="" alt="Ваше фото"/>
                          }
                      </Grid>
                  </Grid>
                  <Grid item xs={12}>
                    {/*<section className={"about"} id="about">*/}
                        <Typography component={'span'} className={this.props.classes.portfolio_home} variant="h6">Профессиональная информация</Typography>
                        <div className={`about__info ${this.props.classes.flexRow} ${this.props.classes.flex} ${this.props.classes.flexSpaceBetween}`}>
                            {
                                <Paper className={this.props.classes.tagsContainer} style={this.props.data.langs.length === 0 ?{display:"none"}:{display:"flex"}}>
                                    {this.props.data.langs.map((el, i) =>
                                        <Chip key={i} label={el.label}/>)}
                                    </Paper>
                            }
                            <Typography component={'span'} className={`${this.props.classes.portfolio_home} repos`} variant="body2">
                                Список репозиториев на GitHub:
                                {this.renderRepos(this.props.github.gitRepos)}
                            </Typography>
                            <Typography component={'span'} className={`${this.props.classes.portfolio_home} bio`} variant="body2">
                                {this.props.github.gitBio}
                            </Typography>
                        </div>
                    {/*</section>*/}
                  </Grid>
                  <Grid item xs={12}>
                    {/*<section id="contact">*/}
                        <Typography component={'span'} className={this.props.classes.portfolio_home} variant="h6">Contact</Typography>
                        <Typography component={'span'} variant="body2">Номер телефона: {this.props.data.phone}</Typography>
                        <Typography component={'span'} variant="body2"><a href={`mailto:${this.props.data.mail}`}>{this.props.data.mail}</a></Typography>
                    {/*</section>*/}
                  </Grid>
              </Grid>
            </div>

        )}
        const editUser = <DialogWindow
            styleForButton={this.props.classes.buttonCloseRight}
            childElm={<User
                            data = {this.props.data}
                            vk = {this.props.vk}
                            current_uid = {this.props.current_uid}
                            github={this.props.github}
                            onSubmitUser={this.props.onSubmitUser}
                            gitFetchUser = {this.gitFetchUser}
                            githubOnChange = {this.githubOnChange}
            />}
            btnText="Редактировать"/>
        return(
            <div>
                 {this.props.current_uid === this.props.view_id ? editUser : null}
                <Lend/>
            </div>
        )
        
    }

    render(){
        return (
            <div>

                { !this.props.vk.read?
                    <DialogWindow childElm={<VkAuth VKOnAuth={this.props.VKOnAuth}/>} btnText={"Войти"}/>
                    :
                     this.renderPortfolio()
                }
            </div>
        )
    }
}

export default withStyles(theme)(Portfolio)