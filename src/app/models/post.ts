export interface Post {
    result_code: number
    result_data: ResultData
}

export interface ResultData {
    post: Post
}

export interface Post {
    is_multilingual: boolean
    created_at: number
    comment_count: number
    emotion_count: number
    sticker: any
    post_key: string
    shared_count: number
    author: Author
    post_read_count: number
    band_key: string
    video: any
    content: string
}