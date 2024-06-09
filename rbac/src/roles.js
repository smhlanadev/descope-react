export const roles = { 
    USER: 'User', 
    CHEF: 'Chef' 
}; 

export const permissions = { 
    [roles.USER]: ['list',], 
    [roles.CHEF]: ['view', 'list'], 
};
