export interface Project {
  title: string
  description: string
  tags: string[]
  status: string
  link?: string
  giteeLink?: string
}

export const site = {
  name: '两千响豪华鞭炮',
  initials: '两',
  role: '独立开发者 / 创作者',
  headline: '把好奇心，做成真正可用的网页。',
  intro:
    '你好，我是「两千响豪华鞭炮」。这里是我的数字客厅，用来展示做过的事情、正在探索的方向，也记录那些值得分享的片段。',
  emails: ['13560620383@163.com', 'cakt310783137@qq.com'],
  location: '中国 · 可远程协作',
  availability: '欢迎交流新想法和合作机会',
  currentFocus: ['用 Vue 3 打磨个人网站', '整理一套长期可用的作品档案', '把一个想法做成小产品'],
  projects: [
    {
      title: '校园快递点导航与空闲度查询平台',
      description:
        '基于 Spring Boot 3、Vue 3 和百度地图 GL API 的毕业设计，面向校园快递场景打通包裹到站、学生查件、地图导航、到场取件、拥挤度反馈和统计分析的完整业务闭环。',
      tags: ['Spring Boot 3', 'Vue 3', 'MySQL', '百度地图 GL'],
      status: '毕业设计',
      link: 'https://github.com/lqxhhbp/bi-ye-she-ji',
      giteeLink: 'https://gitee.com/cakt310783137/my-personal-website',
    },
    {
      title: '一个正在生长的想法',
      description:
        '这里可以放你的真实项目。写清问题、你做了什么、结果如何，比只放技术名词更有说服力。',
      tags: ['Side project', 'Build in public'],
      status: '进行中',
    },
    {
      title: '写作与观察',
      description: '记录学习过程、设计取舍和生活中的小发现，让零散经验逐渐连成自己的知识地图。',
      tags: ['Writing', 'Notes'],
      status: '长期更新',
    },
  ] satisfies Project[],
  principles: [
    {
      title: '先做真实有用的东西',
      description: '从具体问题出发，让每一次修改都能改善真实体验，而不是只增加功能数量。',
    },
    {
      title: '保持简单与清晰',
      description: '删掉不必要的复杂度，让结构、文案和维护方式都能被自己和未来的访客理解。',
    },
    {
      title: '持续发布，持续学习',
      description: '不等待完美版本，先让作品来到真实世界，再根据反馈一点点把它做得更好。',
    },
  ],
}
