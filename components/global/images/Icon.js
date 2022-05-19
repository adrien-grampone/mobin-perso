const Icon = ({ src, maxWidth }) => {
    return (
        <img style={{ maxWidth: maxWidth ? maxWidth : '150px' }} src={src} />
    )
}

export default Icon