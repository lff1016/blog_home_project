import ajax from './ajax';
import jsonp from 'jsonp';

// 获取管理员用户
export const reqAdminUser = () => ajax('/api/home/adminUser')

// 获取所有已发布的文章列表 
export const reqArticles = () => ajax('/api/home/articles')

// 获取所有分类
export const reqCategories = () => ajax('/api/home/category/list')

// 获取qq头像
export const reqQQ = num => {
  return new Promise((resolve, reject) => {
    const url = `https://q1.qlogo.cn/g?b=qq&nk=${num}&s=100`
    jsonp(url, {}, async (err, data) => {
      console.log(data);
      resolve(data)
    })
  })
}