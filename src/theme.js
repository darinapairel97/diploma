import {createMuiTheme} from '@material-ui/core/styles';
const theme = createMuiTheme({
    grid:{
        flexGrow:1
    },
    gridContent:{
        minHeight:"100vh"
    },
    gridAvatar:{
        flexBasis: "auto",
    },
    flex:{
        display: "flex",
    },
    flexCol:{
        flexDirection: "column",
    },
    flexRow:{
        flexDirection: "row",
    },
    flexSpaceBetween:{
        justifyContent:"space-between"
    },
    body:{
        padding:100,
    },
    palette: {
        primary: {
            main: '#fff',
            dark: 'dodgerblue'
        },
        type:"dark",
        background:{
            paper: 'dodgerblue',
            default:"dodgerblue"
        }
    },
    link: {
        listStyleType: "none",
        textDecoration: "none",
        margin: "0 10px",
    },
    text:{
        color:"#303030"
    },
    buttonCloseRight:{
        float:"right",
        marginBottom:50,
    },
    portfolio_home: {
        whiteSpace: 'pre-line',
    },
    bigAvatar: {
        margin: 10,
        width: 300,
        height: 300,
    },
    avatar:{
        borderRadius: "100%"
    },
    inputSel:{
        position: "absolute"
    },
    input:{
        height:100
    },
    rootSel:{
        background: "#0483ff"
    },
    selCol:{
        background: "#0483ff"
    },
    tagsContainer:{
        display: 'flex',
        justifyContent: 'center',
        flexWrap: 'wrap',
        padding:"20px",
        height: "40px",
        alignItems: "center",
        boxSizing: "content-box",
        backgroundColor: "#0483ff"
    },
    tag:{
        margin:"20px"
    },
    card:{
        width: 320,
        marginTop: 25,
        background: "dodgerblue"
    },
    cardContent:{flex: '1 0 auto',},
    typography: { useNextVariants: true, htmlFontSize: 10 }

});
export default theme;