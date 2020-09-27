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

export default notify;
