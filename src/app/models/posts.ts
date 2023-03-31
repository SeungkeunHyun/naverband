export interface Root {
    result_code: number
    result_data: ResultData
}

export interface ResultData {
    items: Item[]
    paging: Paging
}

export interface Item {
    author: Author
    post_key: string
    content: string
    comment_count: number
    created_at: number
    photos: Photo[]
    emotion_count: number
    latest_comments: LatestComment[]
    band_key: string
}

export interface Author {
    name: string
    profile_image_url: string
    description: string
    role: string
    member_type: string
    member_certified: boolean
    me: boolean
    is_muted: boolean
    created_at: number
    user_key: string
}

export interface Photo {
    height: number
    width: number
    created_at: number
    comment_count: number
    url: string
    emotion_count: number
    photo_key: string
    author: Author2
    photo_album_key: any
    is_video_thumbnail: boolean
}

export interface Author2 {
    name: string
    profile_image_url: string
    description: string
    role: string
    member_type: string
    member_certified: boolean
    me: boolean
    is_muted: boolean
    created_at: number
    user_key: string
}

export interface LatestComment {
    body: string
    created_at: number
    author: Author3
}

export interface Author3 {
    name: string
    profile_image_url: string
    description: string
    user_key: string
}

export interface Paging {
    previous_params: any
    next_params: NextParams
}

export interface NextParams {
    access_token: string
    band_key: string
    limit: string
    after: string
}
