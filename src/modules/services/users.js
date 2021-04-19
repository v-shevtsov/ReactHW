import api from '../components/users/usersAPI';

export function getCurrentUser(userId) {
       return api.get('', {params: {id: userId}})
           .then(({data}) => data);
}