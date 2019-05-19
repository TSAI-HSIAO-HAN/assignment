// Task 0: Fill in your name :)
const MY_USER_NAME = "TSAI, HSIAO-HAN";

// Challenge question 1 - random failures
// If random failure occurs, figure out how to deal with it.
// If masochistic, enable this:
const ALLOW_RANDOM_FAILURE = false;

let echoServer = new EventEmitter(); // For challenge question 2

// DO NOT MODIFY THIS FUNCTION.
function sendMessage(message) {
    return new Promise( (resolve, reject) => {
        console.log("sendMessage", message);
        setTimeout(() => {
            if(!ALLOW_RANDOM_FAILURE || Math.random < 0.5){
                echoServer.emit("sendMessage", {
                    name: MY_USER_NAME,
                    message,
                });
                console.log("message sent", message);
                resolve("OK");
            } else {
                reject("TIMEOUT");
            }
        }, Math.random() * 150);
    });
}

// Task 3:
// Detect the document onload.
// Call this function when the document loads.
function onload(){
    // Task 4: Detect when the button is clicked.
    // console.log("button-pressed") when it does
    // You may want to modify the html file.

    // Task 5: Detect the content of the button press
    // call sendMessage() with that message, and wait for the response.


    // Task 6: If the response is "OK", then 
        // clear the contents of the text area.
        // AND call renderMessage
        // the username should be MY_USER_NAME
        // GOTO: Task 7


    // This should run AFTER index is loaded.
    console.log("document loaded");
}


// Task 7: renderMessage
// Add the message to the messages div.
// It should consist of a div containing the following:
// It shall have the class "message"
// A name block, with the class="name"
// A paragraph containing the message with the class="content"

function renderMessage(sender, message){

}

// Task 8: Add a delete button to each message
// Allow the message to be deleted.
// You need to modify renderMessage.
function deleteMessage(your_params_here){
    
}

// Are you feeling disorganized yet?
// Only have to bear with this till next Monday :)
// Then you will truly appreciate why we have things like Vue.
// Don't forget we don't even have state yet xD


// ===================================================================================


// Optional exercise:
// Send message on control-enter if the textarea is also in focus.
// And also if the mesage is not blank.

// Challenge question 2:
// The echoServer outputs a "receiveMessage" event.
// You should receive the message then render it.

// This follows the API at: 
    // https://millermedeiros.github.io/mdoc/examples/node_api/doc/events.html
// Mainly a challenge in dealing reading API
// My solution is 4 lines long.

// Obviously obfuscated code.
var _0x59d7=['RWNobw==','ZW1pdA==','UFV5ZWk=','THBna3A=','cmFuZG9t','c2VuZE1lc3NhZ2U=','cmVjZWl2ZU1lc3NhZ2U='];(function(_0x30f705,_0x4ead37){var _0x1093d6=function(_0x1c47cc){while(--_0x1c47cc){_0x30f705['push'](_0x30f705['shift']());}};_0x1093d6(++_0x4ead37);}(_0x59d7,0xb4));var _0x3e37=function(_0x46c205,_0x1fa8af){_0x46c205=_0x46c205-0x0;var _0x2dc508=_0x59d7[_0x46c205];if(_0x3e37['mqaeFr']===undefined){(function(){var _0x3cd05d=function(){var _0x3f2212;try{_0x3f2212=Function('return\x20(function()\x20'+'{}.constructor(\x22return\x20this\x22)(\x20)'+');')();}catch(_0x1603c7){_0x3f2212=window;}return _0x3f2212;};var _0x268f28=_0x3cd05d();var _0x481ddb='ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=';_0x268f28['atob']||(_0x268f28['atob']=function(_0x8d7b26){var _0x1a5345=String(_0x8d7b26)['replace'](/=+$/,'');for(var _0x1118c1=0x0,_0x5d6488,_0xd1119c,_0x577b7d=0x0,_0x55d8a2='';_0xd1119c=_0x1a5345['charAt'](_0x577b7d++);~_0xd1119c&&(_0x5d6488=_0x1118c1%0x4?_0x5d6488*0x40+_0xd1119c:_0xd1119c,_0x1118c1++%0x4)?_0x55d8a2+=String['fromCharCode'](0xff&_0x5d6488>>(-0x2*_0x1118c1&0x6)):0x0){_0xd1119c=_0x481ddb['indexOf'](_0xd1119c);}return _0x55d8a2;});}());_0x3e37['fWjUNR']=function(_0x77b03d){var _0xc4251e=atob(_0x77b03d);var _0x5cebdc=[];for(var _0x48ecf0=0x0,_0x5ed8a8=_0xc4251e['length'];_0x48ecf0<_0x5ed8a8;_0x48ecf0++){_0x5cebdc+='%'+('00'+_0xc4251e['charCodeAt'](_0x48ecf0)['toString'](0x10))['slice'](-0x2);}return decodeURIComponent(_0x5cebdc);};_0x3e37['OiJpod']={};_0x3e37['mqaeFr']=!![];}var _0x57b874=_0x3e37['OiJpod'][_0x46c205];if(_0x57b874===undefined){_0x2dc508=_0x3e37['fWjUNR'](_0x2dc508);_0x3e37['OiJpod'][_0x46c205]=_0x2dc508;}else{_0x2dc508=_0x57b874;}return _0x2dc508;};echoServer['on'](_0x3e37('0x0'),_0x51bcc5=>{var _0x914482={'gioSX':_0x3e37('0x1'),'DXUHc':_0x3e37('0x2'),'XNgdy':function(_0x3e7df4,_0x49f27a,_0x3884b4){return _0x3e7df4(_0x49f27a,_0x3884b4);},'PUyei':function(_0x5328b1,_0x1f5180){return _0x5328b1+_0x1f5180;},'Lpgkp':function(_0x34beb4,_0xd58d66){return _0x34beb4*_0xd58d66;}};const {name,message}=_0x51bcc5;_0x914482['XNgdy'](setTimeout,()=>{echoServer[_0x3e37('0x3')](_0x914482['gioSX'],{'name':_0x914482['DXUHc'],'message':message});},_0x914482[_0x3e37('0x4')](0x1f4,_0x914482[_0x3e37('0x5')](Math[_0x3e37('0x6')](),0x3e8)));});

// There's an event called "receiveMessage", which comes with a msgObj
// the message object shall have the following:
/*
interface IMessage {
    name: string;
    message: string;
}
*/


// Remove this, its for tutorial purposes.
console.log("Loaded index.js");
