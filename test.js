'use strict'

var test = require('tape')
var proxyquire = require('proxyquire')
var window = require('global/window')

test(function (t) {
  proxyquire.noPreserveCache()
  t.notOk(proxyquire('./', {}))
  setAgent('Mozilla/5.0')
  t.notOk(proxyquire('./', {}))
  setAgent('Mozilla/5.0 (Linux; Android 4.0.4; Galaxy Nexus Build/IMM76B)')
  t.ok(proxyquire('./', {}))
  setAgent('Mozilla/5.0 (Linux; android 4.0.4; Galaxy Nexus Build/IMM76B)')
  t.ok(proxyquire('./', {}))
  t.end()
})

function setAgent (userAgent) {
  window.navigator = {userAgent: userAgent}
}
