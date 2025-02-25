import React from "react"
import ContentLoader from "react-content-loader"

const MyLoader = (props) => (
    <ContentLoader
        speed={2}
        width={270}
        height={270}
        viewBox="0 0 270 270"
        backgroundColor="#f3f3f3"
        foregroundColor="#ecebeb"
        {...props}
    >
        <rect x="147" y="193" rx="0" ry="0" width="6" height="0" />
        <rect x="6" y="10" rx="0" ry="0" width="242" height="161" />
        <rect x="44" y="178" rx="0" ry="0" width="167" height="24" />
        <rect x="79" y="207" rx="0" ry="0" width="91" height="18" />
        <rect x="33" y="238" rx="0" ry="0" width="190" height="24" />
    </ContentLoader>
)

export default MyLoader