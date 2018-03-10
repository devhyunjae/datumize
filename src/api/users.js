import { users } from './fixtures'

const fetchUsers = () => Promise.resolve(users)

const updateUser = () => Promise.resolve({ result: 'ok' })

export { fetchUsers, updateUser }
