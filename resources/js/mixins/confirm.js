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

export default confirm;
