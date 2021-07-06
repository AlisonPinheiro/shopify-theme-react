import ReactDOM from "react-dom"
import React from "react"
import './style.scss'
import { CartToolTip } from "./components/CartToolTip"

const rootEl = document.getElementById("react-cart-tool-tip")
const cartUrl = rootEl.dataset.cartUrl

rootEl && ReactDOM.render(<CartToolTip cartUrl={cartUrl} />, rootEl)
