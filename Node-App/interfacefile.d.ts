
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
    bd: string;
    email: string;
    phone: string;
    zipcode: string;
    address1: string;
    address2: string;
    city: string;
    state: string;
    gender: string;
    rel_status: string;

    board_name1: string;
    board_name2: string;
    board_name3: string;
    board_name4: string;
    py1: string;
    py2: string;
    py3: string;
    py4: string;
    percentage1: string;
    percentage2: string;
    percentage3: string;
    percentage4: string;

    companyname1: string;
    designation1: string
    date11: Date;
    date12: Date;
    companyname2: string;
    designation2: string
    date21: Date;
    date22: Date;
    companyname3: string;
    designation3: string
    date31: Date;
    date32: Date;

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
