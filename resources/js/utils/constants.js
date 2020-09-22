const API_URL = "http://127.0.0.1:8000/api";

const NATIONS = ["Việt Nam", "Anh", "Pháp", "Hoa Kỳ", "Thái Lan"];

const PERMISSIONS = [
    {
        value: 0,
        label: "Member"
    },
    {
        value: 1,
        label: "Admin"
    }
];

const IS_NATION = [
    {
        value: 0,
        label: "Trong nước"
    },
    {
        value: 1,
        label: "Ngoài nước"
    }
];

export { API_URL, NATIONS, PERMISSIONS, IS_NATION };
