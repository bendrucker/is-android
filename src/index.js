'use strict'

const regex = /android/i
const {userAgent} = (window.navigator || {})

export default regex.test(userAgent)
