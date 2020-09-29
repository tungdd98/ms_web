import moment from "moment";
moment.locale("vi");

const formatDate = (value, format = "DD/MM/YYYY") => {
    return typeof value !== "string" ? value : moment(value).format(format);
};

const formatTime = (value, format = "LT", type = "HH:mm") => {
    return typeof value !== "string"
        ? value
        : moment(value, type).format(format);
};

const formatMoney = value => {
    return typeof value !== "number"
        ? value
        : new Intl.NumberFormat("vi-VN", {
              style: "currency",
              currency: "VND"
          }).format(value);
};

export { formatDate, formatTime, formatMoney };
