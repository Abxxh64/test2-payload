const isAdminOrView = ( { req: {user} }) => {

    if (user && user.role === 'admin') {
        return true
    }

    return false
}

export default isAdminOrView