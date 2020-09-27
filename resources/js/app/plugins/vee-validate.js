import { configure } from "vee-validate";
import { extend } from "vee-validate";
import * as rules from "vee-validate/dist/rules";
import { messages } from "vee-validate/dist/locale/en.json";

Object.keys(rules).forEach(rule => {
    extend(rule, {
        ...rules[rule],
        message: messages[rule]
    });
});

export default {
    install(Vue) {
        configure({
            classes: {
                valid: "is-valid",
                invalid: "is-invalid",
                dirty: ["is-dirty", "is-dirty"]
            }
        });
    }
};
