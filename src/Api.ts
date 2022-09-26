import {UserType} from './type'

const Url = 'http://give-me-users-forever.herokuapp.com'

export const getUser=async(num:string)=>{
    let First10:UserType[] = []
    await fetch(`${Url}/api/users/${num}/next`)
    .then((response) => response.json())
    .then((data) =>{
      /**adding only first 10 data */
      First10 = data.users.slice(0, 10);
    } );
    return await First10
}