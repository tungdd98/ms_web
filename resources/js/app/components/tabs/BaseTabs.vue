<template>
    <div>
        <div
            :class="[
                'flex-center flex-column flex-sm-row justify-content-between py-2',
                classHeader
            ]"
        >
            <div :class="['mb-3 mb-sm-0', typeTitle]" v-if="title">
                {{ title }}
            </div>
            <ul>
                <li
                    v-for="(tab, index) in tabs"
                    :key="tab.title"
                    @click="selectTab(index)"
                    :class="[
                        `btn btn-${type} btn-${size}`,
                        { active: index == selectedIndex }
                    ]"
                >
                    {{ tab.title }}
                </li>
            </ul>
        </div>
        <div :class="[classContent]">
            <slot></slot>
        </div>
    </div>
</template>

<script>
export default {
    name: "base-tabs",
    props: {
        type: {
            type: String,
            default: "default"
        },
        size: {
            type: String,
            default: "md"
        },
        classContent: {
            type: [String, Object],
            default: ""
        },
        classHeader: {
            type: [String, Object],
            default: ""
        },
        title: {
            type: String,
            default: ""
        },
        typeTitle: {
            type: String,
            default: "ms-title font-20"
        }
    },
    data() {
        return {
            selectedIndex: 0,
            tabs: []
        };
    },
    created() {
        this.tabs = this.$children;
    },
    mounted() {
        this.selectTab(0);
    },
    methods: {
        selectTab(i) {
            this.selectedIndex = i;
            this.tabs.forEach((tab, index) => {
                tab.isActive = index === i;
            });
        }
    }
};
</script>
