export interface SearchResponse {
    pk_id?: number,
    e_type?: string,
    org?: string,
    sport_id?: number,
    s_text?: string,
    g_year?: number,
    city?: string,
    state?: string,
    ph?: {
        M?: number,
        H?: number,
        C?: number,
        W?: number
    },
    email?: string,
    email_2?: string,
    twit?: string,
    u_id?: string,
    ncaa_e_num?: string
}