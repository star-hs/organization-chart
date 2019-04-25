export interface Data {
  name: string
  title: string
  children: any
}

export function generateOrgChartData() {
  let data: Data
  data = {
    name: '北京工程院',
    title: 'a',
    children: [
      {
        name: '医疗',
        title: 'a',
        children: [{
            name: '叶奇意',
            title: 'a'
          },{
            name: '马春萌',
            title: 'a'
          },{
            name: '贾志杰',
            title: 'a'
          },{
            name: '冯亮',
            title: 'a',
            children: [{
              name: '曾宥葳',
              title: 'a'
            }, {
              name: '黄山',
              title: 'a'
            }]
          }
        ]
      },
      {
        name: '机器人',
        title: 'a'

      },
      {
        name: 'HR',
        title: 'a'

      },
      {
        name: 'IT',
        title: 'a'
      }
    ]
  }
  // data = {
  //   name: 'Lao Lao',
  //   title: 'general manager',
  //   children: [
  //     { name: 'Bo Miao', title: 'department manager' },
  //     {
  //       name: 'Su Miao',
  //       title: 'department manager',
  //       children: [
  //         { name: 'Tie Hua', title: 'senior engineer' },
  //         {
  //           name: 'Hei Hei',
  //           title: 'senior engineer',
  //           children: [
  //             { name: 'Pang Pang', title: 'engineer' },
  //             { name: 'Xiang Xiang', title: 'UE engineer' }
  //           ]
  //         }
  //       ]
  //     },
  //     { name: 'Hong Miao', title: 'department manager' }
  //   ]
  // }

  // for (let i = 0; i < 3; i++) {
  //   data['children'].push({
  //     name: 'Lao Lao',
  //     title: 'general manager',
  //     children: [
  //       { name: 'Bo Miao', title: 'department manager' },
  //       {
  //         name: 'Su Miao',
  //         title: 'department manager',
  //         children: [{ name: 'Tie Hua', title: 'senior engineer' }]
  //       }
  //     ]
  //   })
  // }

  // let temp = data
  // for (let i = 0; i < depth; i++) {
  //   if (!temp.children) {
  //     temp.children = []
  //   }
  //   temp.children.push({
  //     name: 'Lao Lao',
  //     title: 'general manager',
  //     children: [
  //       { name: 'Bo Miao', title: 'department manager' },
  //       {
  //         name: 'Su Miao',
  //         title: 'department manager',
  //         children: [
  //           { name: 'Tie Hua', title: 'senior engineer' },
  //           {
  //             name: 'Hei Hei',
  //             title: 'senior engineer',
  //             children: [{ name: 'Xiang Xiang', title: 'UE engineer' }]
  //           }
  //         ]
  //       }
  //     ]
  //   })
  //   temp = temp.children[0]
  // }

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
