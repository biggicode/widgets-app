import React from "react"
import { render } from "render-dom"
import { App } from "./app"

const app = <App />
const root = document.querySelector("#root")

render(app, root)
