export const GoodMixin = {
    data() {
        return {
            loading: false
        };
    },
    methods: {
        goodBtn() {
            this.loading = true;
            // 模拟发请求
            setTimeout(() => {
                this.loading = false;
            }, 2000);
        }
    }
}