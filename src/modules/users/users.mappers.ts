import type { User } from '@/modules/users/models/User'

type WithId<T> = T & { _id: string }

export type UserMapper = WithId<User>
