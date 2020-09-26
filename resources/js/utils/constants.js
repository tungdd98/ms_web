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

const NATIONS_STATUS = [
    {
        value: 0,
        label: "Trong nước"
    },
    {
        value: 1,
        label: "Ngoài nước"
    }
];

const STARTS_STATUS = [
    {
        value: 0,
        label: "Không"
    },
    {
        value: 1,
        label: "Có"
    }
];

export { API_URL, NATIONS, PERMISSIONS, NATIONS_STATUS, STARTS_STATUS };
