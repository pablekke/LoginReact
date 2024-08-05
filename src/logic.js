export const UsuarioALocalStorage = ({ id, apiKey }) => {
    window.localStorage.setItem('id', id);
    window.localStorage.setItem('apiKey', apiKey);
}
export const UsuarioEnLocalStorage = () =>{
    const id = window.localStorage.getItem('id');
    const apiKey = window.localStorage.getItem('apiKey');
    return { id: id, apiKey: apiKey };
}
export const RemoverUsuarioDeLocalStorage = () => {
    const ls = window.localStorage;
    ls.removeItem('apiKey');
    ls.removeItem('id');
    ls.clear()
}