export interface Bands {
    result_code: number;
    result_data: ResultData;
}

export interface ResultData {
    bands: Band[];
}

export interface Band {
    name:         string;
    cover:        string;
    member_count: number;
    band_key:     string;
}
