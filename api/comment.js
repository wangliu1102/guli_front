import request from '@/utils/request'

export default {
  //根据课程id查询评论列表
  getCommentPageByCourseId(page, limit, courseId) {
    return request({
      url: `/eduservice/comment/${page}/${limit}`,
      method: 'get',
      params: {
        courseId : courseId
      }
    })
  },

  //添加评论
  saveComment(comment) {
    return request({
      url: `/eduservice/comment/auth/saveComment`,
      method: 'post',
      data: comment
    })
  }
}
