//  localStorage 本地存储
const LOGING_USER_KEY = 'longin_user_key'

export default {
  // 保存用户信息
  saveUser(user) {
    localStorage.setItem(LOGING_USER_KEY, JSON.stringify(user))
  },

  // 获取用户信息
  getUser() {
    return JSON.parse(localStorage.getItem(LOGING_USER_KEY) || '{}')
  },

  // 删除用户信息
  deleteUser() {
    localStorage.removeItem(LOGING_USER_KEY)
  }
}