/*
 * @Author: mangwu                                                             *
 * @File: build.js                                                             *
 * @Date: 2023-06-14 09:37:12                                                  *
 * @LastModifiedDate: 2023-06-14 17:42:00                                      *
 * @ModifiedBy: mangwu                                                         *
 * -----------------------                                                     *
 * Copyright (c) 2023 mangwu                                                   *
 * -----------------------                                                     *
 * @HISTORY:                                                                   *
 * Date   	            By 	    Comments                                       *
 * ---------------------	--------	----------------------------------------------- *
 */

const fs = require("fs");
// const path =

// 忽略的文件夹
const ignore = new Set([
  ".vscode",
  "node_modules",
  "dist",
  "mochawesome-report",
  "coverage.lcov",
  ".nyc_output",
  "coverage",
  ".idea",
  "snippet.js",
  "./.git",
  "./images",
]);
const hash = new Map();

class FileTree {
  constructor(path, name, type) {
    this.path = path;
    this.name = name;
    this.type = type;
    this.next = [];
  }
  initial() {
    if (this.type === "folder") {
      const files = fs.readdirSync(this.path, "utf-8");
      // 排序成创建日期
      files.sort((a, b) => {
        const statsA = fs.statSync(this.path + "/" + a);
        const statsB = fs.statSync(this.path + "/" + b);
        return statsA.birthtimeMs - statsB.birthtimeMs;
      });
      for (const file of files) {
        if (ignore.has(file)) continue;
        const curPath = this.path + "/" + file;
        const stats = fs.statSync(curPath);
        let type = stats.isFile() ? "file" : "folder";
        const curFileTree = new FileTree(curPath, file, type);
        hash.set(curPath, [file, type, curFileTree]);
        this.next.push(curFileTree);
        curFileTree.initial();
      }
    }
  }
}
const FileDirs = getPathFileDirs();

function getPathFileDirs(path = "./") {
  const res = [];
  const files = fs.readdirSync(path, "utf-8");
  // 排序成创建日期
  files.sort((a, b) => {
    const statsA = fs.statSync(path + a);
    const statsB = fs.statSync(path + b);
    return statsA.birthtimeMs - statsB.birthtimeMs;
  });
  for (const file of files) {
    const curPath = path + file;
    if (ignore.has(curPath)) continue;
    const stats = fs.statSync(curPath);
    let type = stats.isFile() ? "file" : "folder";
    if (type === "folder") res.push(curPath);
  }
  console.log("预期遍历的顶层文件夹:", res);
  return res;
}

let origin = "";
if (this.location) {
  origin = location.origin;
}

const dfs = (fileTree) => {
  const { name, path, type, next } = fileTree;
  if (type === "file") {
    return `\t\t<div class="file"><a href="${
      origin + path.substring(2)
    }" target="_blank">${name}</a></div>\n`;
  } else {
    let cur = `\t\t<div class="dir"><div class="dir-name">${name}</div>\n`;
    for (const nextTree of next) {
      cur += dfs(nextTree);
    }
    cur += "\t\t</div>\n";
    return cur;
  }
};

function tryCatch(callback, ...args) {
  try {
    callback(...args);
    console.log("写入构造好的HTML字符串到index.html文件完成!");
  } catch (error) {
    console.log(`${callback.toString()}执行错误`, error.message);
  }
}

function writeIndexHtml(str) {
  fs.writeFileSync("./index.html", str, "utf-8");
}

function initialAll() {
  let res = "";
  FileDirs.forEach((v) => {
    const fileTree = new FileTree(v, v.substring(2), "folder");
    fileTree.initial();
    res += dfs(fileTree);
    console.log(`${v} 文件夹遍历构造完成...`);
  });
  return res;
}

function main() {
  let HTML = `<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Vue3 学习笔记源码文档结构</title>
    <link rel="stylesheet" href="./style.css">
		<link rel="shortcut icon" href="./images/结构.svg" type="image/x-icon">
    <link >
  </head>
  <body>
  <h2>Vue3 学习笔记源码文档结构</h2>\n`;
  HTML += initialAll();
  HTML += `
  </body>
</html>`;
  console.log("预期遍历的文件夹构造全部完成！");
  tryCatch(writeIndexHtml, HTML);
}
main();
