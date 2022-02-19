
export interface UserState {
    users: any[];
    loading: boolean;
    error: null | string;
}

export enum UserActionTypes {
    FETCH_USERS = 'FETCH_USERS',
    FETCH_USERS_SUCCES = 'FETCH_USERS_SUCCES',
    FETCH_USERS_ERROR = 'FETCH_USERS_ERROR',
}

interface FetchUsersAction {
    type: UserActionTypes.FETCH_USERS;
}

interface FetchUsersActionSucces {
    type: UserActionTypes.FETCH_USERS_SUCCES;
    payload: any[]
}

interface FetchUsersActionError {
    type: UserActionTypes.FETCH_USERS_ERROR;
    payload: string
}


export type UserAction = FetchUsersAction | FetchUsersActionError | FetchUsersActionSucces