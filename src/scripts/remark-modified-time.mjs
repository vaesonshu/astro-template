import { execSync } from 'child_process'
// import { statSync } from 'fs'

// 运行一个 Git 命令获取最后一次提交的 ISO 8601 时间戳（推荐）
export function remarkModifiedTime() {
	return function (tree, file) {
		const filepath = file.history[0]
		const result = execSync(`git log -1 --pretty="format:%cI" ${filepath}`)
		file.data.astro.frontmatter.lastModified = result.toString()
	}
}

// 也可以使用文件系统的修改时间
// export function remarkModifiedTime() {
// 	return function (tree, file) {
// 		const filepath = file.history[0]
// 		const result = statSync(filepath)
// 		file.data.astro.frontmatter.lastModified = result.mtime.toISOString()
// 	}
// }
