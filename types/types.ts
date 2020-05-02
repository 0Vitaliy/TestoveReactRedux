

export type PostsType = {
    title: string
    id: number
    body: string
}

export type PostItemType = {
    title: string
    id: number
    body: string
}

export type CommentType = {
    postId: number
    body: string
}

export type ActionType = {
    type: string
    payload: any
}