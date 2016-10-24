module.exports = {
    template: `<nav>
        <ul class="pagination" v-show="pagination.total_pages > 0" v-bind:class="sizeClass">
            <li v-show="showPrevious()" :class="{ 'disabled' : pagination.current_page <= 1 }">
                <span v-show="pagination.current_page <= 1">
                    <span aria-hidden="true">{{ config.previousText }}</span>
                </span>

                <a href="#" v-show="pagination.current_page > 1 " :aria-label="config.ariaPrevioius" v-on:click.prevent="changePage(pagination.current_page - 1)">
                    <span aria-hidden="true">{{ config.previousText }}</span>
                </a>
            </li>

            <li v-for="page in pages" :class="{ 'active': page.text === pagination.current_page }">
                <a v-show="page.type === 'pagi'" v-on:click.prevent="changePage(page.text)">{{ page.text }}</a>
                <a v-show="page.type === 'ellipsis'">{{ page.text }}</a>
            </li>

            <li v-show="showNext()" :class="{ 'disabled' : pagination.current_page === pagination.total_pages || pagination.total_pages === 0 }">
                <span v-show="pagination.current_page === pagination.total_pages || pagination.total_pages === 0">
                    <span aria-hidden="true">{{ config.nextText }}</span>
                </span>

                <a href="#" v-show="pagination.current_page < pagination.total_pages" :aria-label="config.ariaNext" v-on:click.prevent="changePage(pagination.current_page + 1)">
                    <span aria-hidden="true">{{ config.nextText }}</span>
                </a>
            </li>
        </ul>
    </nav>`,
    props: {
        pagination: {
            type: Object,
            required: true
        },
        callback: {
            type: Function,
            required: true
        },
        options: {
            type: Object
        },
        size: {
            type: String
        }
    },
    data: function() {
        return {

        }
    },
    computed: {
        config: function () {
            return Object.assign({
                offset: 3,
                ariaPrevious: 'Previous',
                ariaNext: 'Next',
                previousText: '«',
                nextText: '»',
                showPrevNext: true,
                showBeginning: true,
                showEnd: true,
                beginNum: 2,
                endNum: 1,
                ellipsis: '...',
                noEllipsisNum: 8
            }, this.options);
        },
        sizeClass: function () {
            if (this.size === 'large') {
                return 'pagination-lg';
            } else if(this.size === 'small') {
                return 'pagination-sm';
            } else {
                return '';
            }
        },
        pages: function() {
            //  beginning   offset  current
            // |`````|     |``````|  |
            // 1, 2, 3 ... 8, 9, 10, 11, 12, 13, 14 ... 98, 99, 100
            if (this.pagination.total_pages <= 0) {
                return [];
            }

            let pages = [];
            let cursor = 1;

            if (this.config.showBeginning) {
                for (let i = 1; i <= Math.min(this.pagination.current_page, this.config.beginNum); i ++) {
                    pages.push({
                        text: i,
                        type: 'pagi'
                    });

                    cursor = i;
                }

                if (this.pagination.current_page <= this.config.noEllipsisNum) {
                    for (let i = cursor + 1; i <= Math.min(this.pagination.total_pages, this.config.noEllipsisNum); i ++) {
                        pages.push({
                            text: i,
                            type: 'pagi'
                        });

                        cursor = i;
                    }
                }

                if (cursor < this.pagination.current_page - this.config.offset - 1) {
                    pages.push({
                        text: this.config.ellipsis,
                        type: 'ellipsis'
                    });
                }
            }

            for (let i = Math.max(cursor + 1, this.pagination.current_page - this.config.offset); i <= Math.min(this.pagination.total_pages, this.pagination.current_page + this.config.offset); i ++) {
                pages.push({
                    text: i,
                    type: 'pagi'
                });

                cursor = i;
            }

            if (this.config.showEnd) {
                if (cursor < this.pagination.total_pages - this.config.endNum) {
                    pages.push({
                        text: this.config.ellipsis,
                        type: 'ellipsis'
                    });
                }

                for (let i = Math.max(cursor + 1, this.pagination.total_pages - this.config.endNum + 1); i <= this.pagination.total_pages; i ++) {
                    pages.push({
                        text: i,
                        type: 'pagi'
                    });

                    cursor = i;
                }
            }

            return pages;
        }
    },
    watch: {
        'pagination.per_page': function (newValue, oldValue) {
            if (newValue !== oldValue) {
                this.callback();
            }
        }
    },
    methods: {
        showPrevious: function () {
            return this.config.showPrevNext || this.pagination.current_page > 1;
        },
        showNext: function() {
            return this.config.showPrevNext || this.pagination.current_page < this.pagination.total_pages;
        },
        changePage: function (page) {
            if (this.pagination.current_page === page) {
                return;
            }

            this.pagination.current_page = page;
            this.callback();
        }
    }
};
