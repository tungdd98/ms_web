const confirm = function(
    title = "Are you sure?",
    confirmButtonText = "Yes, delete it!",
    type = "warning"
) {
    return this.$fire({
        title,
        confirmButtonText,
        type,
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33"
    });
};
const notify = function(title = "", type = "success", timer = 3000) {
    return this.$fire({
        title,
        type,
        toast: true,
        position: "top-end",
        showConfirmButton: false,
        timer
    });
};

export { confirm, notify };
