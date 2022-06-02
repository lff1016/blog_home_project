import ajax from './ajax';
import jsonp from 'jsonp';

// 获取管理员用户
export const reqAdminUser = () => ajax('/api/home/adminUser')

// 获取所有已发布的文章列表 
export const reqArticles = () => ajax('/api/home/articles')

// 获取所有分类
export const reqCategories = () => ajax('/api/home/category/list')
