import blog from '@/api/blog'

export default {
  data () {
    return {
      title: '',
      description: '',
      content: '',
      atIndex: false
    }
  },
  methods: {
    onCreate () {
      blog.createBlog({ title: this.title, content: this.content, description: this.description, atIndex: this.atIndex})
        .then(res => {
          this.$message.success(res.msg)
          this.$router.push({path: `/detail/${res.data.id}`})
        })
    },
    onInput1 (e) {
      this.description = e.target.value
    }
  },
  computed: {
    inputLength1 () {
      return this.description.length
    },
    overLength () {
      return {
        overlength: this.description.length > 200
      }
    }
  }
}
