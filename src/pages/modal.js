import React from "react"
import { Link } from 'gatsby-plugin-modal-routing'

const modalPage = () => (
    <div>
        <Link
            to="/"
            style={{position: 'absolute', right: '1em', top: '1em'}}
            state={{
                noScroll: true
            }}
        >
            <svg viewBox="0 0 24 24" width="40" height="40" stroke="black" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round">
                <rect x="3" y="3" width="18" height="18" rx="2" ry="2"/>
                <line x1="9" y1="9" x2="15" y2="15"/>
                <line x1="15" y1="9" x2="9" y2="15"/>
            </svg>
        </Link>
        <h1 className="text-grey top-medium">Hello, something is coming.</h1>

    </div>
)

export default modalPage