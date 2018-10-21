import marked from 'marked'
import blog from '@/api/blog'

export default {
  data () {
    return {
      title: '',
      rawContent: '',
      user: {},
      createdAt: ''
    }
  },
  created () {
    this.blogId = this.$route.params.blogId
    blog.getDetail({blogId: this.blogId}).then(res =>{
      console.log(res)
      this.title = res.data.title
      this.rawContent = res.data.content
      this.user = res.data.user
      this.createdAt = res.data.createdAt
    })
  },
  computed: {
    markdown () {
      return marked(this.rawContent)
    }
  }
}
