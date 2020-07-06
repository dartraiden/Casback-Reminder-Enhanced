// ==UserScript==
// @name        Cashback Reminder Enhanced
// @description A reminder to check for cashback before completing a purchase online.
// @namespace   Cashback_Reminder_Enhanced
// @version     2018.11.21
// @author      Phreeker, dartraiden
// @require     https://ajax.googleapis.com/ajax/libs/jquery/1.12.4/jquery.min.js
// @match       https://www.amazon.co.uk/gp/buy/*
// @match       https://orders.ebuyer.com/customer/shopping/*
// @include     http*://*/*basket*
// @include     http*://*/*cart*
// @include     http*://*/*checkout*
// @include     http*://*/*order*
// @include     http*://*/*trolley*
// @grant       GM_addStyle
// ==/UserScript==

$("body").append ( '                \
    <div id="alert">             \
        <a class ="alert href="#cashback_alert" title="Click to dismiss">Remember to check for cashback offers!</a>   \
    </div>                          \
' );

GM_addStyle ( "                                     \
    .alert {                                        \
        background-color: #a82a4c;                  \
        color: #f6f6f6 !important;                  \
        display: block;                             \
        font: 16px/40px sans-serif;                 \
        height: 40px;                               \
        position: absolute;                         \
        text-align: center;                         \
        text-decoration: none;                      \
        top: -45px;                                 \
        width: 100%;                                \
        animation: alert 1s ease forwards;          \
        -webkit-box-shadow: 0px 5px 10px -1px rgba(0,0,0,0.6);  \
        -moz-box-shadow: 0px 5px 10px -1px rgba(0,0,0,0.6);     \
        box-shadow: 0px 5px 10px -1px rgba(0,0,0,0.6);          \
        z-index: 99999;                             \
    }                                               \
    @keyframes alert {                              \
        0% { opacity: 0; }                          \
        50% { opacity: 1; }                         \
        100% { top: 0; }                            \
    }                                               \
    .alert:hover {                                  \
        color: #f6f6f6;                             \
        text-decoration:none;                       \
    }                                               \
    #alert {                                        \
         height: 25px !important;                   \
    }                                               \
" );

 $('#alert').click(function(e) {
     $('#alert').toggle();
 });