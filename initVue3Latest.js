console.log(__dirname);
console.log(process.cwd());
const DIRNAME = __dirname; // 当前执行文件的绝对路径
const CMDDIRNAME = process.cwd(); // 当前执行node命令所在地址

const fs = require("fs");
const path = require("path");
/**
 *
 * @param {Function} callback
 * @param {[]} args
 * @param {string} errorMessage
 * @param {string} succcessMessage
 */
function tryCatch(
  callback,
  args,
  errorMessage = `${callback.name}执行出错`,
  succcessMessage = `${callback.name}执行成功`
) {
  try {
    callback(...args);
    console.log(succcessMessage);
  } catch (error) {
    console.log(errorMessage, error.message);
  }
}

function deleteFolderRecursive(dirPath) {
  if (fs.existsSync(dirPath)) {
    // 是否存在文件或文件夹
    const status = fs.statSync(dirPath);
    if (status.isFile()) {
      // 是文件
      tryCatch(
        fs.unlinkSync,
        [dirPath],
        `删除文件出错，文件地址：${dirPath}`,
        `${dirPath}文件删除成功`
      ); // 删除文件
    } else {
      // 是文件夹
      fs.readdirSync(dirPath).forEach((file) => {
        const curPath = path.join(dirPath, file);
        deleteFolderRecursive(curPath);
      });
      tryCatch(
        fs.rmdirSync,
        [dirPath],
        `删除文件夹出错，文件夹地址：${dirPath}`,
        `${dirPath}文件夹删除成功`
      ); // 删除文件夹
    }
  } else throw new Error(`${dirPath}文件或文件夹不存在`);
}
function deleteAllPathFile(pathes) {
  console.log(
    "|------------------------开始删除指定文件------------------------|"
  );
  pathes.forEach((dir) => {
    tryCatch(deleteFolderRecursive, [dir]);
  });
  console.log(
    "|------------------------成功删除指定文件------------------------|"
  );
}
function copyFile(dirPath) {
  if (fs.existsSync(dirPath)) {
    const status = fs.statSync(dirPath);
    if (!status.isFile()) {
      tryCatch(
        fs.cpSync,
        [dirPath + "\\", CMDDIRNAME + "\\", { recursive: true }],
        `复制文件夹出错，文件夹地址：${dirPath}`,
        `${dirPath}文件夹复制成功`
      );
    } else {
      tryCatch(
        fs.copyFileSync,
        [dirPath, CMDDIRNAME],
        `复制文件夹出错，文件地址：${dirPath}`,
        `${dirPath}文件复制成功`
      );
    }
  } else throw new Error(`${dirPath}文件或文件夹不存在`);
}
function copyAllFile(pathes) {
  console.log(
    `|------------------------开始复制文件到${CMDDIRNAME}------------------------|`
  );
  pathes.forEach((dir) => {
    tryCatch(copyFile, [dir]);
  });
  console.log(
    `|------------------------开始复制文件到${CMDDIRNAME}------------------------|`
  );
}
/**
 * @description 主函数
 * @param {string[]} allPath 要删除复制的文件
 * @param {string} copyPath 副本路径
 */
function main(
  allPath = [
    "\\src",
    "\\.eslintrc.cjs",
    "\\.gitignore",
    "\\.prettierrc.json",
    "\\index.html",
    "\\vite.config.js",
  ],
  copyPath = "\\Basic-Copy"
) {
  deleteAllPathFile(allPath.map((v) => CMDDIRNAME + v));
  console.log(
    "------------------------------------------------------------------------"
  );
  copyAllFile([DIRNAME + copyPath]);
}
main();
