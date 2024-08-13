import PrivateRouter from "../components/PrivateRoutes";
import LayoutDefault from "../layout/LayoutDefault";

import Home from "../Pages/Home";
import Login from "../Pages/Login";
import Register from "../Pages/Register";
import Answers from "../Pages/Answers";
import Quiz from "../Pages/Quiz";
import Result from "../Pages/Result";
import Topic from "../Pages/Topic";

export const routes = [
  {
    path: "/",
    element: <LayoutDefault />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/register",
        element: <Register />,
      },
      {
        element: <PrivateRouter />,
        children: [
          {
            path: "answers",
            element: <Answers />,
          },
          {
            path: "quiz",
            element: <Quiz />,
          },
          {
            path: "result",
            element: <Result />,
          },
          {
            path: "topic",
            element: <Topic />,
          },
        ],
      },
    ],
  },
];
