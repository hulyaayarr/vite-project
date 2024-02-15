import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import {
  HomePage,
  AboutPage,
  ContactPage,
  Root,
  BlogPage,
  ErrorPage,
  BlogPostPage,
  ArchivedBlogPostsPage,
  BlogPostLoader,
} from "./routes";
import "bootstrap/dist/css/bootstrap.min.css";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <ErrorPage />,
    children: [
      {
        errorElement: <ErrorPage />,
        children: [
          {
            index: true,
            element: <HomePage />,
          },
          {
            path: "/about",
            element: <AboutPage />,
          },
          {
            path: "/contact",
            element: <ContactPage />,
          },
          {
            path: "/blog",

            children: [
              {
                index: true,
                element: <BlogPage />,
              },
              {
                path: "archived",
                element: <ArchivedBlogPostsPage />,
              },
              {
                path: ":blogId",
                // eslint-disable-next-line @typescript-eslint/no-explicit-any
                loader: BlogPostLoader as any,
                element: <BlogPostPage />,
              },
            ],
          },
        ],
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
