import ajax from './ajax';
import jsonp from 'jsonp';

// 获取管理员用户
export const reqAdminUser = () => ajax('/api/home/adminUser')

// 获取所有已发布的文章列表 
export const reqArticles = () => ajax('/api/home/articles')

// 获取所有分类
export const reqCategories = () => ajax('/api/home/category/list')

// 添加用户
export const reqAddUser = user => ajax('/api/home/user/add', user, 'POST')

// 获取评论列表
export const reqCommentList = aid => ajax(`/api/home/comment/list?aid=${aid}`)

// 添加评论/回复
export const reqCommentAdd = comment => ajax('/api/home/comment/add', comment, 'POST')


// 获取说说列表
export const reqSaysList = () => ajax('/api/home/says/list')
