// import * as React from 'react';
// import AppBar from '@mui/material/AppBar';
// import Button from '@mui/material/Button';
// import CameraIcon from '@mui/icons-material/PhotoCamera';
// import Card from '@mui/material/Card';
// import CardActions from '@mui/material/CardActions';
// import CardContent from '@mui/material/CardContent';
// import CardMedia from '@mui/material/CardMedia';
// import CssBaseline from '@mui/material/CssBaseline';
// import Grid from '@mui/material/Grid';
// import Stack from '@mui/material/Stack';
// import Box from '@mui/material/Box';
// import Toolbar from '@mui/material/Toolbar';
// import Typography from '@mui/material/Typography';
// import Container from '@mui/material/Container';
// import Link from '@mui/material/Link';
// import { createTheme, ThemeProvider } from '@mui/material/styles';
// // function Copyright() {
// //   return (
// //     <Typography variant="body2" color="text.secondary" align="center">
// //       {'Copyright © '}
// //       <Link color="inherit" href="https://mui.com/">
// //         Your Website
// //       </Link>{' '}
// //       {new Date().getFullYear()}
// //       {'.'}
// //     </Typography>
// //   );
// // }

// const cards = [1, 2, 3, 4, 5, 6, 7, 8];

// // TODO remove, this demo shouldn't need to reset the theme.
// const defaultTheme = createTheme();

// export default function Album() {
  
//   return (
//     <ThemeProvider theme={defaultTheme}>
//       <CssBaseline />
     
//       <main>
//         {/* Hero unit */}
//         {/* <Box
//           sx={{
//             bgcolor: 'red',
//             pt: 8,
//             pb: 6,
//           }}
//         >
          
//         </Box>
//         */}
//           {/* End hero unit */}
//           <Grid container spacing={1}>
//             {cards.map((card) => (
//               <Grid item key={card} xs={12} sm={6} md={4} lg={3}>
//                 <Card
//                   sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}
//                 >
//                   <CardMedia
//                     component="div"
//                     sx={{
                      
//                       pt: '56.25%',
//                       width:150,
//                       mx:'auto'
//                     }}
//                     image="https://static1.industrybuying.com/products/agriculture-garden-landscaping/tillers-and-cultivator/cultivator/AGR.CUL.42018780_1682509652621.webp"
//                   />
//                   <CardContent sx={{ flexGrow: 1 }}>
                    
//                     <Typography variant="subtitle1" sx={{fontSize:13}} component="p">
//                     Agripro Power Cultivator 7 HP Gear Transmission APC100FQ
//                     </Typography>
//                     <Typography gutterBottom  component="span">
//                     by AgriPro
//                     </Typography>
//                   </CardContent>
//                   <Box sx={{display:"flex", justifyContent:"space-between",alignItems:"center"}} component="div">
//                   <Typography gutterBottom  component="h3" sx={{textDecoration:"line-through"}}>
//                     RS.55,000
//                     </Typography>
//                     <Typography gutterBottom  component="h3" color="#f54702">
//                     RS.39,900
//                     </Typography>
//                     </Box> 
//                   <CardActions sx={{display:"flex", justifyContent:"space-between",alignItems:"center",}}>
//                   <Typography gutterBottom  component="p" sx={{fontSize:13}} color="#f54706">
//                     27% OFF
//                     </Typography>
//                     <Typography gutterBottom  component="p" sx={{fontSize:13}} color="#f54706">
//                     YOU save Rs.15,100
//                     </Typography>
//                   </CardActions>
//                 </Card>
//               </Grid>
//             ))}
//           </Grid>
       
//       </main>
//       {/* Footer */}
//       {/* <Box sx={{ bgcolor: 'background.paper', p: 6 }} component="footer">
//         <Typography variant="h6" align="center" gutterBottom>
//           Footer
//         </Typography>
//         <Typography
//           variant="subtitle1"
//           align="center"
//           color="text.secondary"
//           component="p"
//         >
//           Something here to give the footer a purpose!
//         </Typography>
//         <Copyright />
//       </Box> */}
//       {/* End footer */}
//       <div className='img-hide'>
        
//       <img width={200}  height={200}   src="https://media.istockphoto.com/id/1461608537/photo/the-arrow-hit-the-highlighted-target.webp?s=1024x1024&w=is&k=20&c=58VZIU8-x1BGwIun_PZe2jJx9Oz1gPKDK9jYTZNZtDI=" alt="" />
//       </div>
//     </ThemeProvider>
//   );
// }