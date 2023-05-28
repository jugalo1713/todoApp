import { memo } from "react"

const Small = memo(({ value }) => {
    console.log('me dibuje')

    return (
        <small>{value}</small>
    )
})

export default Small