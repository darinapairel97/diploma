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
        },
        secondary: {
            main: '#311b92',
        },
        type:"dark",
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
    tagsContainer:{
        display: 'flex',
        justifyContent: 'center',
        flexWrap: 'wrap',
        padding:"20px",
        height: "40px",
        alignItems: "center",
        boxSizing: "content-box"
    },
    tag:{
        margin:"20px"
    },
    card:{
        width: 320,
        marginTop: 25
    },
    cardContent:{flex: '1 0 auto',},
    typography: { useNextVariants: true, htmlFontSize: 10 }

});
export default theme;