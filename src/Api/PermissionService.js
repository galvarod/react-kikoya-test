export const getRoleGrants = (role)=>{
    
    const role_group = [
        {
          role: "user",
          modules: [
            {
              id: 1,
              option: "Tienda"
            },
            {
              id: 2,
              option: "Productos"
            },
            {
              id: 3,
              option: "Ventas"
            }
          ]
        },
        {
          role: "admin",
          modules: [
            {
              id: 1,
              option: "Usuarios"
            },
            {
              id: 2,
              option: "Productos"
            },
            {
              id: 3,
              option: "Administración"
            }
          ]
        }
      ]

      let currentGrants = role_group.find(i => i.role == role);
      return currentGrants;
}
