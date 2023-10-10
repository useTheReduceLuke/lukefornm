
import './App.css';
import {createHashRouter, NavLink, RouterProvider} from "react-router-dom";
import {Home} from "./pages/Home";
import {Root} from "./pages/Root";
import {About} from "./pages/About";
import {District} from "./pages/District";
import {Issues} from "./pages/Issues";

const router = createHashRouter([
	{
		path: "/",
		element: <Root />,
		errorElement: <div className={"flex flex-col w-full h-full items-center justify-center gap-3"}>Page Not Found<NavLink className={"text-blue-600"} to={"/"}>Go Back Home</NavLink></div>,
			children: [
				{
					path: "",
					element: <Home />,
				},
				{
					path: "about",
					element: <About />,
				},
				{
					path: "issues",
					element: <Issues />,
				},
				{
					path: "district",
					element: <District />,
				},
			],
		},
	]
);

function App() {
  return (
	  <RouterProvider router={router} />
  );
}

export default App;
