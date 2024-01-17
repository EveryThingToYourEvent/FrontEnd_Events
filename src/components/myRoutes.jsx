import { Route } from "react-router-dom"
import { Routes } from "react-router-dom"
import { HomePage } from "./client/homePage"
import { Login } from "./client/login"
import { ManagerNav } from "./manager/managerNav"
import { Nav } from "./client/nav"
import { ProvidersCategories } from "./database/providersCategoriesComponent"
import { SignUp } from "./client/signUp"
import { EventType } from "./database/eventTypeComponenet"
import { Providers } from "./database/providersComponent"
import { ProviderNav } from "./provider/providerNav"
import EventToProvider from "./database/eventToProvider"
import { OpenBusines } from "./provider/openBusiness"
import { ManagementProvider } from "./manager/managementProvider"
import {ProvDetails} from "./database/provDetailsComponent"
import {Contact} from "./client/contact"
import {CategoriesList} from "./manager/categoriesList"
import {EventTypeList} from "./manager/eventTypeList"
import {ProvidersList} from "./manager/providersList"
import {UsersList} from "./manager/usersList"

export const MyRoutes = () => {
    return (<Routes>
        <Route path="/" element={<Nav></Nav>}>
            <Route path="signUp" element={<SignUp></SignUp>}></Route>
            <Route path="login" element={<Login></Login>}></Route>
            <Route path="homePage" element={<HomePage></HomePage>}></Route>
            <Route path="providersCategories" element={<ProvidersCategories></ProvidersCategories>}></Route>
            <Route path="eventType" element={<EventType></EventType>}></Route>
            <Route path="providers" element={<Providers></Providers>}></Route>
            <Route path="provDetails" element={<ProvDetails></ProvDetails>}></Route>
            <Route path="contactUs" element={<Contact></Contact>}></Route>
        </Route>
        <Route path="/manager" element={<ManagerNav></ManagerNav>}>
            <Route path="managementProvider" element={<ManagementProvider></ManagementProvider>}></Route>
            <Route path="usersList" element={<UsersList></UsersList>}></Route>
            <Route path="categoiriesList" element={<CategoriesList></CategoriesList>}></Route>
            <Route path="eventTypeList" element={<EventTypeList></EventTypeList>}></Route>
            <Route path="providersList" element={<ProvidersList></ProvidersList>}></Route>
        </Route>
        <Route path="/everyThingProvider/:provCode" element={<ProviderNav></ProviderNav>}>
            <Route path="personalCalender" element={<EventToProvider></EventToProvider>}></Route>
            <Route path="openBusiness" element={<OpenBusines></OpenBusines>}></Route>
        </Route>
    </Routes>
    )
}

