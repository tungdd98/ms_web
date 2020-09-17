const notify = function(title = "", type = "success") {
    this.$fire({
        title,
        type,
        toast: true,
        position: "top-end",
        showConfirmButton: false,
        timer: 3000
    });
};

export default notify;
