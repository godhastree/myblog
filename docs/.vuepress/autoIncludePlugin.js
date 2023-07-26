// .vuepress/autoIncludePlugin.js

import { log } from 'console';
import fs from 'fs'
import path from 'path'

function convertToSidebarData(paths) {
    const sidebarData = [];
  
    paths.forEach((filePath) => {
      const parts = filePath.split(path.sep);
      const blogIndex = parts.findIndex((part) => part.toLowerCase() === 'blog');
  
      if (blogIndex !== -1 && blogIndex < parts.length - 1) {
        const category = parts[blogIndex + 1];
        const subCategory = parts.slice(blogIndex).join('/');
        const text = category.charAt(0).toUpperCase() + category.slice(1);
  
        const existingCategory = sidebarData.find((item) => item.text === text);
  
        if (existingCategory) {
          existingCategory.children.push(`/${subCategory}`);
        } else {
          sidebarData.push({
            text,
            collapsable: true,
            children: [`/${subCategory}`],
          });
        }
      }
    });
  
    return sidebarData;
  }


function breadthFirstTraversal(rootDir) {
    const queue = [rootDir];
    const file_list = []
  
    while (queue.length > 0) {
      const currentDir = queue.shift();
  
      try {
        const files = fs.readdirSync(currentDir);
        files.forEach((file) => {
          const filePath = path.join(currentDir, file);
          const stats = fs.statSync(filePath);
  
          if (stats.isDirectory()) {
            queue.push(filePath); // Add subdirectories to the queue
          } else {
            if (path.extname(file).toLowerCase() === '.md' && file.toLowerCase() !== 'readme.md') {
                file_list.push(filePath)
              }
            
          }
        });
      } catch (err) {
        console.error(`Error reading directory: ${currentDir}`);
      }
    }
    return file_list
  }

function main(){
    const targetFolderPath = path.resolve(__dirname, '../blog');
    
   
    const pas = breadthFirstTraversal(targetFolderPath)
    const blogs = convertToSidebarData(pas)
    console.log(blogs);
    return blogs
    

}

export default main
// module.exports = {
//     extendPageData($page) {
//         if ($page._filePath) {
//             const filePath = $page._filePath;

//             // 定义要识别的文件夹路径
//             const targetFolderPath = path.resolve(__dirname, '../your/target/folder'); // 替换为实际的文件夹路径

//             // 获取文件夹中所有的 Markdown 文件
//             const markdownFiles = getMarkdownFiles(targetFolderPath);

//             // 遍历 Markdown 文件，并将它们添加到 VuePress 中
//             markdownFiles.forEach((file) => {
//                 const fileContent = fs.readFileSync(file, 'utf-8');
//                 const { name, dir } = path.parse(file);
//                 const relativePath = path.relative(targetFolderPath, dir);

//                 this.addPage({
//                     path: path.join(relativePath, name), // 根据文件相对路径设置生成的页面路径
//                     frontmatter: {
//                         // 在这里可以设置其他的 Frontmatter 信息
//                     },
//                     content: fileContent
//                 });

//                 // 将文件路径添加到侧边栏组中
//                 this.addSidebar(`/blog/${relativePath}/`, [name]);
//             });
//         }
//     }
// };

// // 获取指定文件夹下所有的 Markdown 文件
