import { Box, createTheme, Stack, ThemeProvider } from '@mui/material';
import Sidebar from './components/Sidebar'
import Feed from './components/Feed'
import Rightbar from './components/Rightbar'
import Navbar from './components/Navbar'
import Add from './components/Add';
import { useState } from 'react';

// function App() {


//   //styled() take any material ui component or html tag
//   const MyButton=styled(Button)({
//     backgroundColor:"#e74c3c",
//         color:"#f8f8f8",
//         margin:4,
//         "&:hover":{
//           backgroundColor:"#c0392b"
//         }
//   })


//   return (
//     <div>
//       <Button variant="text">Text</Button>
//       <Button variant="contained">Contained</Button>
//       <Button variant="outlined" href="https://google.com" target="_blank">Outlined</Button>
//       {/* Button With LINK  */}
//       {/* <Typography variant="h1" component="p">
//         It uses h1 style but it is a p tag
//       </Typography> */}

//       {/* sx is used to wite css  */}

//       {/* <Button variant='contained' sx={{
//         backgroundColor:"#e74c3c",
//         color:"#f8f8f8",
//         margin:4,
//         "&:hover":{
//           backgroundColor:"#c0392b"
//         }
//       }}>My Unique Button</Button> */}

//       {/* To create multiple button of same style--styled component */}
//       <MyButton>First Button</MyButton>
//       <MyButton>Second Button</MyButton>

//     </div>
//   );
// }



function App(){

  const [mode,setMode]=useState("light");
  const darkTheme = createTheme({
    palette:{
      mode:mode
    }
  })
  
  return(
    <ThemeProvider theme={darkTheme}>
    <Box bgcolor={"background.default"} color={"text.primary"}>
      <Navbar />
      <Stack direction="row" spacing={2} justifyContent="space-between">
        <Sidebar mode={mode} setMode={setMode} />
        <Feed />
        <Rightbar />
      </Stack>
      <Add />
    </Box>
    </ThemeProvider>
  )
}

export default App;
