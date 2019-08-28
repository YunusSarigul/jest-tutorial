// helper.js

'use strict'
const frisby = require('frisby');

exports.getPostByPostId = function(getPostByPostIdURL) { 
    return frisby.get(getPostByPostIdURL)
}