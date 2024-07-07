<script>
import MarkdownIt from 'markdown-it'

export default {
    name: 'MarkdownRender', // 设置组件名称
    props: {
        content: {
            type: String,
            required: true
        }
    },
    data() {
        return {
            renderedMarkdown: ''
        }
    },
    watch: {
        content: {
            immediate: true,
            handler(newValue) {
                const md = new MarkdownIt({
                    html: true,
                })
                this.renderedMarkdown = md.render(newValue)
            }
        }
    }
}
</script>

<template>
    <div v-html="renderedMarkdown"></div>
</template>