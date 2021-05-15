"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express = require("express");
let httpApp = express();


// when a client accesses to files in /static : send the file
httpApp.use(express.static(__dirname + '/static'));
// opening port
httpApp.listen(80, function () {
    console.log('Listening on port 80.');
});
