import React, { lazy, Suspense } from "react"
import { Route, Switch } from "react-router-dom"
import { PATH } from "src/constants/path"
import Loading from "src/components/Loading/Loading"
const Login = lazy(() => import("src/pages/Login/Login"))

export default function HomeRoutes() {
  return (
    <Switch>
      <Route
        path={PATH.LOGIN}
        component={() => (
          <Suspense fallback={<Loading />}>
            <Login />
          </Suspense>
        )}
      />
    </Switch>
  )
}
