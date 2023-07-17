import { useRoutes } from "react-router-dom";
import Home from "../pages/home";


const Router = () => { 
  const mainRouters = [ 
    {
      path: "/",
      element:  <Home/>,
    }, 
    
  ];
  const route = useRoutes(mainRouters);

  return (
    <>{route}</>
  );
};
export default Router;