import React from "react";
import { Switch, Route } from "react-router";
import { EmployeeData } from "./pages";
import ScreenUrls from "./utils/screenUtils";
import { NoRoute } from "./components";

const AppRouter = () => (
    <>
        <Switch>
            <Route path={ScreenUrls.EMPLOYEEDATA} component={EmployeeData} />
            <Route component={NoRoute} />
        </Switch>
    </>
);

export default AppRouter;