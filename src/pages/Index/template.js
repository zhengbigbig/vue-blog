import blog from '@/api/blog.js'

export default {
  data () {
    return {
      blogs: [],
      user: [],
      total: 0,
      page: 1
    }
  },
  created () {
    this.page = parseInt(this.$route.query.page) || 1
    blog.getIndexBlogs({page: this.page}).then(res => {
      this.blogs = res.data
      this.total = res.total
      this.page = res.page
      // if (res.data.length > 0) {
      //   res.data.map((item) => {
      //     if (item.user !== null) {
      //       this.user.push(item.user)
      //     }
      //   })
      // }
      // console.log(this.user)
    })
  },
  mounted () {
  },
  methods: {
    handlePageChange (newPage) {
      blog.getIndexBlogs({page: newPage}).then(res => {
        this.blogs = res.data
        this.total = res.total
        this.page = res.page
        this.$router.push({ path: '/', query: {page: newPage} })
      })
    }
  }
}
