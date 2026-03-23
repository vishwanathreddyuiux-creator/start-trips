import { createBrowserRouter } from "react-router";
import { Home } from "./pages/Home";
import { Destinations } from "./pages/Destinations";
import { Packages } from "./pages/Packages";
import { PackageDetail } from "./pages/PackageDetail";
import { Login } from "./pages/Login";
import { Signup } from "./pages/Signup";
import { ForgotPassword } from "./pages/ForgotPassword";
import { Onboarding } from "./pages/Onboarding";
import { Dashboard } from "./pages/Dashboard";
import { Search } from "./pages/Search";
import { Wishlist } from "./pages/Wishlist";
import { Support } from "./pages/Support";
import { Admin } from "./pages/Admin";
import { Booking } from "./pages/Booking";
import { RootLayout } from "./layouts/RootLayout";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: RootLayout,
    children: [
      { index: true, Component: Home },
      { path: "destinations", Component: Destinations },
      { path: "packages", Component: Packages },
      { path: "packages/:id", Component: PackageDetail },
      { path: "packages/:id/book", Component: Booking },
      { path: "search", Component: Search },
      { path: "wishlist", Component: Wishlist },
      { path: "support", Component: Support },
      { path: "dashboard", Component: Dashboard },
    ],
  },
  { path: "/login", Component: Login },
  { path: "/signup", Component: Signup },
  { path: "/forgot-password", Component: ForgotPassword },
  { path: "/onboarding", Component: Onboarding },
  { path: "/admin", Component: Admin },
]);