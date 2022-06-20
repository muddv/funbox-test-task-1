function disableResolver() {
    let disableDecider = Math.floor(Math.random() * 10)
    if (disableDecider % 2 === 0) {
        return 1
    }
    return 0
}

export default disableResolver