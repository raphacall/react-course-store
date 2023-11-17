import PropTypes from "prop-types"

const Layout = ({children}) => {
    Layout.propTypes = {
        children: PropTypes.node.isRequired
    }
    return (
        <div className='flex flex-col items-center font-bold pt-16 h-screen w-full'>
            {children}
        </div>
    )
}

export default Layout
