export interface Data {
  name: string
  title: string
  img: string
  children: any
}

export function generateOrgChartData() {
  let data: Data
  data = {
    name: '北京工程院',
    title: 'a',
    img: 'https://avatars3.githubusercontent.com/u/10973821?s=460&v=4',
    children: [
      {
        name: '医疗',
        title: 'a',
        img: 'https://p.ssl.qhimg.com/dmfd/400_300_/t01f7fd2a2fec1eacde.jpg',
        children: [{
            name: '叶奇意',
            title: 'a',
            img: 'https://ps.ssl.qhimg.com/dmfd/420_627_/t017dd6c89c1d818a2d.jpg'
          },{
            name: '马春萌',
            title: 'a',
            img: ''
          },{
            name: '贾志杰',
            title: 'a',
            img: 'https://ps.ssl.qhimg.com/dmfd/210_259_/t01a556f4f4eaf1b669.jpg'
          },{
            name: '冯亮',
            title: 'a',
            img: 'https://ps.ssl.qhimg.com/dmfd/364_259_/t01a4ad20545ed7aabe.jpg',
            // children: [{
            //   name: '曾宥葳',
            //   title: 'a',
            //   img: ''
            // }, {
            //   name: '黄山',
            //   title: 'a',
            //   img: ''
            // }]
          }
        ]
      },
      // {
      //   name: '机器人',
      //   title: 'a',
      //   img: ''

      // },
      // {
      //   name: 'HR',
      //   title: 'a',
      //   img: ''

      // },
      // {
      //   name: 'IT',
      //   title: 'a',
      //   img: ''
      // }
    ]
  }
  return data;
}

export function generateOrgChartDataFolded(foldDepth) {
  let data = this.generateOrgChartData()
  let tempNode = data
  for (let i = 0; i < foldDepth && tempNode.children; i++) {
    tempNode = tempNode.children[0]
  }
  tempNode._children = tempNode.children
  tempNode.children = null
  return data
}
