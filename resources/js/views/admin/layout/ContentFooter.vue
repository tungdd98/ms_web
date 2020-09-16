<template>
    <footer class="footer px-4">
        <b-row align-v="center" class="justify-content-lg-between">
            <b-col lg="12">
                <div class="copyright text-center text-lg-left text-muted">
                    © {{ year }}
                    <a
                        href="https://www.creative-tim.com"
                        class="font-weight-bold ml-1"
                        target="_blank"
                        >Made by MS</a
                    >
                </div>
            </b-col>
        </b-row>
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
