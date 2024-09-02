
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import Header from "./component/header";
import Footer from "./component/footer";
import Sidebar from "./component/sidebar";
import Creatpost from "./component/creatpost";
import Postlist from "./component/postlist";
import { useState } from "react";
import Contextprovider from "./source/post-context.";






function App() {
  const [sidetab,setsidebar]=useState("Home")

  return (
      <Contextprovider>
      <div className="a">
        <Sidebar handle={sidetab} handletab={setsidebar}></Sidebar>
        <div className="b">
          <Header></Header>
           {sidetab === "Home" ? (
            <Postlist></Postlist>)
            :( 
              <Creatpost></Creatpost>
               )} 
          <Footer></Footer>
        </div>
      </div>
      </Contextprovider>  
  );
}

export default App;
