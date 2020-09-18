<template>
    <footer class="footer px-4">
        <div class="justify-content-center justify-content-lg-between">
            <div class="col-12">
                <div class="copyright text-center text-lg-left text-muted">
                    © {{ year }}
                    <a
                        href="https://www.creative-tim.com"
                        class="font-weight-bold ml-1"
                        target="_blank"
                        >Made by MS</a
                    >
                </div>
            </div>
        </div>
    </footer>
</template>
<script>
export default {
    data() {
        return {
            year: new Date().getFullYear()
        };
    }
};
</script>
