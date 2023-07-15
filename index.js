#!/usr/bin/env node

import chokidar from "chokidar";
import fs from 'fs/promises';
import {globSync} from 'glob';
import ejs from 'ejs';
import * as sass from "sass";
import {exec} from "child_process";
import livereload from "livereload";
import express from "express";
import connectLivereload from "connect-livereload";
import * as build from 'tailwindcss/lib/cli/build/index.js';
import * as path from "path";

await build.build({
    '_': [],
    '--watch': true,
    '--output': 'dest/tailwind.css'
})

const changedFiles = new Set()

for(const file of globSync('src/**/*')){
    changedFiles.add(file)
}

chokidar.watch('src', {
    persistent: true
})
    .on('raw', async (event, source, details) => {
        if(source.endsWith('~')) return;

        if (details.watchedPath.includes(source)) {
            source = details.watchedPath;
        } else {
            source = `${details.watchedPath}/${source}`;
        }

        changedFiles.add(source)

    });

setInterval(async () => {
    const sources = Array.from(changedFiles)
    changedFiles.clear()
    for (const source of sources) {
        console.log(source, 'changed')
        try {
            let dest = source.replace('src/', 'dest/');
            try {
                await fs.mkdir(path.dirname(dest), {recursive: true})
            } catch (error) {};

            if (source.endsWith('.ejs')) {
                const res = ejs.compile((await fs.readFile(source)).toString())({dirname: process.cwd()})
                await fs.writeFile(dest.replace('.ejs', '.html'), res)
            }
            if (source.endsWith('.scss')) {
                const res = await sass.compile(source)
                await fs.writeFile(dest.replace('.scss', '.css'), res.css)
            }
            if (source.endsWith('.png') || source.endsWith('.jpg') || source.endsWith('.html')) {
                await fs.writeFile(dest, (await fs.readFile(source)).toString())
            }
        } catch (e) {
            console.error(e)
        }
    }
}, 500)

console.log('starting server')
const liveReloadServer = livereload.createServer();
liveReloadServer.watch('dest');
var server = express();
server.use(connectLivereload());
server.use(express.static('dest'));
server.listen(8080);
console.log('listening on http://localhost:8080')


