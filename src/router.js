
import Root from "./components/Root";
import Main from "./components/Main/Main";
import About from "./pages/About";
import BlogPostPage from "./pages/BlogPostPage";

import { createBrowserRouter } from "react-router-dom";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Root />,
            children: [
            { path: "", element: <Main /> },
            { path: "/aboutMe", element: <About /> },
            { path: "/:id", element: <BlogPostPage /> }
            ],
    },
]);

export default router;