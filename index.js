"use strict";
const { app, BrowserWindow, ipcMain } = require("electron");
const path = require("path");
const url = require("url");
const fs = require("fs");

let win;

function createWindow () {
    win = new BrowserWindow({
        width: 1200, 
        height: 960,
        icon: __dirname + '/src/image/logo.png',
        background: "#ffffff",
        show: false,
        resizable: true,
    });

    win.on("ready-to-show", () => {
        win.show();
        win.focus();
    });
    win.loadURL(
        url.format({
            pathname: path.join(__dirname, "/src/index.html"),
            protocol: "file:",
            slashes: true
        })
    );
    win.on("closed", () => {
        win = null;
    });
}
app.on("ready", createWindow);
app.on("window-all-closed", () => {
    if (process.platform !== "darwin") {
        app.quit();
    }
});
app.on("activate", () => {
    if (win === null) {
        createWindow();
    }
});

process.on("uncaughtException", (err) => console.error(err));
