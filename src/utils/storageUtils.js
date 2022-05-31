//  localStorage 本地存储
const ADMIN_USER_KEY = 'admin_user_key'

export default {
  // 保存用户信息
  saveUser(user) {
    localStorage.setItem(ADMIN_USER_KEY, JSON.stringify(user))
  },

  // 获取用户信息
  getUser() {
    return JSON.parse(localStorage.getItem(ADMIN_USER_KEY) || '{}')
  },

  // 删除用户信息
  deleteUser() {
    localStorage.removeItem(ADMIN_USER_KEY)
  }
}