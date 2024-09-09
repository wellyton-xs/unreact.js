#!/usr/bin/env node

import {setupUnreactDirectory, copyUserCodeToUnreact, folderPath} from "./build.js"
import {startUnreactServer} from "./unreact-server.js"

const args = process.argv.slice(2)

function help(){
    console.log(` usage:
    unreact <command>

    commands:
       build (build project to run)
       start (run project)
`)
}

if (args[0] === ""){
    help()
}

if (args[0] === "build"){
    setupUnreactDirectory()
    copyUserCodeToUnreact(folderPath)
}

if (args[0] === "start") {
    startUnreactServer()    
}

if (args[0] === "debug"){
    console.log(args)
}

