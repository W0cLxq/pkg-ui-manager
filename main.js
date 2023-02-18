var GET_JS_PATH = document.getElementById("js-path")
var nodeversion = document.getElementById("node-version")
var ostype = document.getElementById("os-type")
var filetype = document.getElementById("file-type")
var outputcode = document.getElementById("output_code")
var exec_command = ""

function create() {
    if (filetype.value == "small-file") {
        exec_command = "pkg --compress GZip --targets " + nodeversion.value + ostype.value + " " + GET_JS_PATH.value
        outputcode.value = exec_command
    } else if (filetype.value == "normal-file") {
        exec_command = "pkg --targets " + nodeversion.value + ostype.value + " " + GET_JS_PATH.value
        outputcode.value = exec_command
    }
}

function copy_command() {
    outputcode.select()
    outputcode.setSelectionRange(0, 99999)
    navigator.clipboard.writeText(exec_command)
    outputcode.style.color = "White"
    outputcode.value = "You copied the code!"
    setTimeout(() => {
        outputcode.value = exec_command
        outputcode.style.color = "#624F82"
    }, 1000)
}
