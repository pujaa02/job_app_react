export interface City {
    id: number | string;
    city: string;
    state_id: number | string;
}
export interface State {
    id: number | string;
    name: string;
    country_id: number | string;
}
export interface Edu {
    edu_id: number | string;
    emp_id: number | string;
    type_of_result: string;
    Name_of_board_or_course: string;
    Passing_year: number | string;
    Percentage: number | string;
}
export interface Language {
    emp_id: number | string;
    lan_id: number | string;
    language_know: string;
    rws: string;
}
export interface PreferedLocation {
    emp_id: number | string;
    pre_id: string;
    prefered_location: string;
    notice_period: string;
    expected_ctc: string;
    current_ctc: string;
    department: string;
}
export interface Reference {
    emp_id: number | string;
    name: string;
    ref_id: number | string;
    contact_number: number | string;
    relation: string;
}
export interface Technology {
    emp_id: number | string;
    id: number | string;
    tech_know: string;
    level_of_technology: string;
}
export interface Workexp {
    id: number | string;
    emp_id: number | string;
    from_date: Date | string;
    to_date: Date | string;
    work_id: number | string;
    tech_id: number | string;
    company_name: string;
    designation: string;
}
export interface Queryjson {
    query: string;
    fname: string;
    lname: string;
    email: string;
    city: string;
    bg: string;
    opa: string;
}
export interface FormData {
    fname: string;
    lname: string;
    designa: string;
    dob: string;
    email: string;
    number: string;
    zipcode: string;
    add1: string;
    add2: string;
    city: string;
    state: string;
    gender: string;
    relstatus: string;
    lan1: string;
    able1?: boolean;
    lan2: string;
    able2?: boolean;
    lan3: string;
    able3?: boolean;
    tech1: string;
    level1: string;
    tech2: string;
    level2: string;
    tech3: string;
    level3: string;
    tech4: string;
    level4: string;
    name1: string;
    mobileno1: string;
    rel1: string;
    name2: string;
    mobileno2: string;
    rel2: string;
    name3: string;
    mobileno3: string;
    rel3: string;
    preloc: string;
    notice: string;
    exctc: string;
    curctc: string;
    depa: string;
    board_name: string[];
    py: string[];
    percentage: string[];
    companyname: string[];
    designation: string[];
    from: string[];
    to: string[];
    name: string[];
    mobileno: string[];
    rel: string[];
    address1: string;
    address2: string;
}
export interface Ids {
    id: number | string;
    ref_id: number | string;
    edu_id: number | string;
    work_id: number | string;
    tech_id: number | string;
}
export interface Emp {
    emp_id: number;
    fname: string;
    lname: string;
    designation: string;
    email: string;
    phone: string | number;
    gender: string;
    rel_status: string;
    address1: string;
    address2: string;
    city: string;
    state: string;
    zipcode: string;
    bd: string | Date;
}
export interface UserAttributes {
    id: string;
    user_id: string;
    fname: string;
    lname: string;
    email: string;
    phone: string;
    gender: string;
    bd: string;
    password: string
    access_key: string;
    isdeleted: string;
}
export interface PasswordData {
    pass: string;
    repass: string;
}
export interface PayloadData {
    id: string;
    email: string
}
export interface RegisterData {
    user_id: number
    fname: string;
    lname: string;
    email: string;
    phone: string;
    gender: string;
    bd: string;
}
export interface arrival {
    book_img: string;
    prime_book_id: number;
    created_at: Date | string
}
export interface recommendeddata {
    prime_book_id: number;
    rating: number;
    book_title: string;
    author_name: string;
    book_img: string;
    book_publication_year: number;
    genre_id: number;
    genre_name: string;
}

export interface recent {
    prime_book_id: number
    book_id: number;
    borrow_date: Date | string;
    author_name: string;
    book_img: string;
    book_publication_year: number;
    book_title: string;
    genre_id: number;
    genre_name: string;
    rating: number;
}
export interface genre {
    genre_id: number;
    genre_name: string
    Fiction: string
}
export interface allbook {
    prime_book_id: number;
    author_name: string
    book_img: string;
    book_publication_year: number;
    book_title: string;
    genre_id: number
    genre_name: string;
    rating: number;
}
export interface rate {
    prime_book_id: number;
    rating: number;
}
export interface recommend {
    prime_book_id: number;
    author_name?: string | undefined;
    book_img?: string | undefined;
    book_publication_year?: number | undefined;
    book_title?: string | undefined;
    genre_id?: number | undefined;
    genre_name?: string | undefined;
    rating: number;
}
export interface maprecentdata {
    prime_book_id: number;
    author_name: string;
    book_img: string;
    book_publication_year: number;
    book_title: string;
    genre_id: number;
    genre_name: string;
    rating: number;
    book_id: number;
    borrow_date: string | Date;
}
export interface finalresultdata {
    prime_book_id: number;
    rating: number;
    author_name: string;
    book_img: string;
    book_publication_year: number;
    book_title: string;
    genre_id: number;
    genre_name: string;
}
export interface issueuser {
    reader_id: number
    book_id: number
    borrow_date: Date | string
    status: string
    prime_book_id: number
}
export interface list {
    reader_id: number;
    prime_book_id: number;
}
export interface data {
    prime_book_id: number;
    author_name?: string | undefined;
    book_img?: string | undefined;
    book_publication_year?: number | undefined;
    book_title?: string | undefined;
    genre_id?: number | undefined;
    genre_name?: string | undefined;
    rating?: number | undefined;
    reader_id: number;
}
export interface finallist {
    prime_book_id: number;
    rating?: number | undefined;
    author_name?: string | undefined;
    book_img?: string | undefined;
    book_publication_year?: number | undefined;
    book_title?: string | undefined;
    genre_id?: number | undefined;
    genre_name?: string | undefined;
    reader_id: number;
}

export interface userissue {
    prime_book_id: number;
    rating?: number | undefined;
    reader_id: number;
    book_id: number;
    borrow_date: string | Date;
    status: string;
}
export interface finalissuebook {
    prime_book_id: number;
    author_name?: string | undefined;
    book_img?: string | undefined;
    book_publication_year?: number | undefined;
    book_title?: string | undefined;
    genre_id?: number | undefined;
    status: string;
}