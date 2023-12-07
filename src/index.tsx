import ReactDOM from 'react-dom/client';
import {
  createBrowserRouter,
  RouterProvider,
  useParams
} from "react-router-dom";
import './index.css';
import App from './App';
import Country from './Country'
import reportWebVitals from './reportWebVitals';
import ErrorPage from './error-page';

const CountryWrapper = () => {
  const { country } = useParams()

  return <Country country={String(country)} />;
};


const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />
  },
  {
    path: "/error",
    element: <ErrorPage />
  },
  {
    path: "/:country",
    element: <CountryWrapper />,
    errorElement: <ErrorPage />
  }
]);

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
    <RouterProvider router={router} />
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
