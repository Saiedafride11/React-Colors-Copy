// import './App.css';
// import { BrowserRouter as Router, Switch, Route} from "react-router-dom";
// import Home from './components/Home/Home/Home';
// import Header from './components/Shared/Header/Header';
// import Footer from './components/Shared/Footer/Footer';
// import NotFound from './components/NotFound/NotFound';
// import Developer from './components/Developer/Developer';
// import { useState } from 'react';
// import Loader from 'react-loader-spinner';

// function App() {
//   const [startLoader, setStartLoader] = useState({})
//   const [content, setContent] = useState({})
  
//   setTimeout(() => {
//       setStartLoader({
//           display: 'none',
//       })
//       setContent({
//           display: 'contents',
//       })
//   }, 2000);
//   return (
//     <div className="App">
//         <Router>
//           <span style={startLoader} className="startLoader">
//             <Loader
//                 type="Puff"
//                 color="#18bc9c"
//                 height={100}
//                 width={100}
//                 timeout={3000} //3 secs
//             />
//           </span>
//           <span style={content} className="content">
//             <Header></Header>
//               <Switch>
//                   <Route exact path="/">
//                     <Home></Home>
//                   </Route>
//                   <Route path="/home">
//                     <Home></Home>
//                   </Route>
//                   <Route path="/developer">
//                     <Developer></Developer>
//                   </Route>
//                   <Route path="*">
//                     <NotFound></NotFound>
//                   </Route>
//               </Switch>
//             <Footer></Footer>
//           </span>
//         </Router>
      
//     </div>
//   );
// }

// export default App;


// .startLoader{
//   width: 100%;
//   height: 100vh;
//   display: flex;
//   align-items: center;
//   justify-content: center;
// }
// .content{
//   display: none;
// }



