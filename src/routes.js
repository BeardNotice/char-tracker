import App from "./App";
import Home from "./pages/Home";
import About from "./pages/About";
import CharacterCreation from "./pages/CharacterCreation";
import ErrorPage from "./pages/ErrorPage";

const routes = [
    {
        path: "/",
        element: <App />,
        errorElement: <ErrorPage />,
        children: [
            {
                path: "/",
                element: <Home />
            },
            {
                path: "/about",
                element: <About />
            },
            {
                path: "/character-creation",
                element: <CharacterCreation />
            }
        ]
    }
]

export default routes;