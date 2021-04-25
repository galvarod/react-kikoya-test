export const login = (user, password)=>{
    
    const users = [
        {
          id: 1,
          username: 'GUEST',
          role: 'user',
          password: '123456'
        },
        {
          id: 2,
          username: 'GUEST ADMIN',
          role: 'admin',
          password: '123456'
        }
      ];

      let currentUser = users.find(i => i.username == user && i.password == password);
      return currentUser;
}
