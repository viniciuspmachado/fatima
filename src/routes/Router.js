import { lazy } from "react";
import { Navigate } from "react-router-dom";

/****Layouts*****/
const FullLayout = lazy(() => import("../layouts/FullLayout.js"));

/***** Pages ****/

const Starter = lazy(() => import("../views/Starter.js"));
const About = lazy(() => import("../views/About.js"));
const Alerts = lazy(() => import("../views/ui/Alerts"));
const Badges = lazy(() => import("../views/ui/Badges"));
const Buttons = lazy(() => import("../views/ui/Buttons"));
const Cards = lazy(() => import("../views/ui/Cards"));
const Grid = lazy(() => import("../views/ui/Grid"));
const InscBatismo = lazy(() => import("../views/ui/m_batismo/InscBatismo.js"));
const FichaBatismo = lazy(() => import("../views/ui/m_batismo/Ficha_Batismo.js"));
const CadastroDatas = lazy(() => import("../views/ui/m_batismo/CadastroDatas.js"));
const Breadcrumbs = lazy(() => import("../views/ui/Breadcrumbs"));
const MostraPDF = lazy(() => import("../views/ui/m_batismo/MostraPDF.js"));

/*****Routes******/

const ThemeRoutes = [
  {
    path: "/",
    element: <FullLayout />,
    children: [
      { path: "/", element: <Navigate to="/starter" /> },
      { path: "/starter", exact: true, element: <Starter /> },
      { path: "/about", exact: true, element: <About /> },
      { path: "/alerts", exact: true, element: <Alerts /> },
      { path: "/badges", exact: true, element: <Badges /> },
      { path: "/buttons", exact: true, element: <Buttons /> },
      { path: "/cards", exact: true, element: <Cards /> },
      { path: "/grid", exact: true, element: <Grid /> },
      { path: "/InscBatismo/:data?", exact: true, element: <InscBatismo /> },
      { path: "/FichaBatismo", exact: true, element: <FichaBatismo /> },
      { path: "/CadastroDatas", exact: true, element: <CadastroDatas /> },
      { path: "/breadcrumbs", exact: true, element: <Breadcrumbs /> },
      { path: "/mostrapdf", exact: true, element: <MostraPDF /> },
    ],
  },
];

export default ThemeRoutes;
