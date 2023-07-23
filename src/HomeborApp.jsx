import { Provider } from "react-redux"
import { BrowserRouter } from "react-router-dom"
import { store } from "./store"
import { AppRouter } from "./router/AppRouter"
import { AppTheme } from "./theme"

export const HomeborApp = () => {
    return (
        <Provider store={ store }>
            <BrowserRouter>
                <AppTheme>
                    <AppRouter />
                </AppTheme>
            </BrowserRouter>
        </Provider>
    )
}