
import './App.css';
import {createHashRouter, NavLink, RouterProvider} from "react-router-dom";
import {Home} from "./pages/Home";
import {Root} from "./pages/Root";
import {About} from "./pages/About";
import {District} from "./pages/District";
import {Issues} from "./pages/Issues";
import {Contact} from "./pages/Contact";
import {TestApp} from "./pages/TestApp";

const router = createHashRouter([
	{
		path: "/",
		element: <Root />,
		errorElement: <div className={""}>Page Not Found<NavLink className={"text-blue-600"} to={"/"}>Go Back Home</NavLink></div>,
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
				{
					path: "contact",
					element: <Contact />,
				},
				{
					path: "test",
					element: <TestApp />,
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
