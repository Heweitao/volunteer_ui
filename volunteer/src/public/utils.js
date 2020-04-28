const utils = {
    getStorage: key => {
        key = key ? key : "default";
        return localStorage.getItem(key)
          ? JSON.parse(localStorage.getItem(key))
          : {};
      },
    
      // 存入本地存储
      saveStorage: (key, data) => {
        key = key ? key : "default";
        return localStorage.setItem(key, JSON.stringify(data));
      },
    
      //移除本地存储
      removeStorage: key => {
        key = key ? key : "default";
        return localStorage.removeItem(key);
      },
      // 取出本地存储
      getSession: key => {
        key = key ? key : "default";
        return sessionStorage.getItem(key)
          ? JSON.parse(sessionStorage.getItem(key))
          : {};
      },
    
      // 存入本地存储
      saveSession: (key, data) => {
        key = key ? key : "default";
        return sessionStorage.setItem(key, JSON.stringify(data));
      },
    
      //移除本地存储
      removeSession: key => {
        key = key ? key : "default";
        return sessionStorage.removeItem(key);
      },
}

export default utils